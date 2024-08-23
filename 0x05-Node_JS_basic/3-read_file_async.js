const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (err) { 
        reject(Error('Cannot load the database'));
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
          stats[fields[3]][2].push(`${fields[0]} `);
        }
      }
      resolve(stats);
      console.log(`Number of students: ${stats.total}`);
      stats.subjects.forEach((a) => {
        stats[a][2][stats[a][2].length - 1].split(' ');
        console.log(`Number of students in ${a}: ${stats[a][1]}. List: ${stats[a][2]}`);
      });
    };
  })
      });
}
module.exports = countStudents;
