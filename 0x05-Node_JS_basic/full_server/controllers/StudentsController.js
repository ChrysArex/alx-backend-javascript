const readDatabase = require('../utils');
class StudentsController {
  static getAllStudents(req, res) {
    res.status(200);
    readDatabase().then((stats) => {
      res.send('This is the list of our students');
      stats[subjects].sort();
      stats[subjects].forEach((elmt) => {
        res.send(`Number of students in ${elmt}: ${stats[elmt][1]}. List: 
          ${stats[elmt][2]}`)
      });
    }).catch((err) => {
      res.status(500).send('Cannot load the database');
    });
  }


  static getAllStudentsByMajor(req, res) {
    if (req.params.major !== 'CS' && req.params.major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }else {
      readDatabase().then((stats) => {
      res.send(`${stats[req.params.major][2]}`);
    }).catch((err) => {
      res.status(500).send('Cannot load the database');
    });
    }
  }
}

module.exports = StudentsController;
