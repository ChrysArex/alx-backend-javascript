const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
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
    console.log(`Number of students: ${stats.total}`);
    stats.subjects.forEach((a) => {
      stats[a][2][stats[a][2].length - 1].split(' ');
      console.log(`Number of students in ${a}: ${stats[a][1]}. List: ${stats[a][2]}`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
