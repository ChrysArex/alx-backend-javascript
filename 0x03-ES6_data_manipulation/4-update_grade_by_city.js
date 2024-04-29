export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    let mark = newGrades.filter((grade) => grade.studentId === student.id);
    if (mark.length === 0) {
      mark = 'N/A';
    } else {
      mark = mark[0].grade;
    }
    return { ...student, grade: mark };
  }).filter((student) => student.location === city);
}
