const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');
const app = express();

app.get('/', (req, res) => {
  if (req.route.path === '/') {
    res.send('Hello Holberton School!');
  }
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  fs.readFile(process.argv[2], { encoding: 'utf8', flag: 'r' }, (err, data) => {
    if (err) {
      res.write('Cannot load the database\n');
      res.end();
    } else {
      const students = data.split('\n');
      const stats = { total: 0, subjects: [] };

      for (let i = 1; i < students.length; i += 1) {
        if (students[i]) {
          stats.total += 1;
          const fields = students[i].split(',');
          if (!stats[fields[3]]) {
            stats.subjects.push(fields[3]);
            stats[fields[3]] = [fields[3], 0, []];
          }
          stats[fields[3]][1] += 1;
          stats[fields[3]][2].push(`${fields[0]}`);
        }
      }

      res.write(`Number of students: ${stats.total}\n`);
      stats.subjects.forEach((a) => {
        res.write(`Number of students in ${a}: ${stats[a][1]}. List: ${stats[a][2].join(', ')}\n`);
      });
      res.end();
    }
  });
});

app.listen(1245);
module.exports = app;
