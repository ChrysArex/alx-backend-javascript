export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  set name(obj) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      return new Error('Name must be a string');
    }
  }
  set length(obj) {
    if (typeof length === 'Number') {
      this._lenght = lenght;
    } else {
      return new Error('Length must be a number');
    }
  }
  set students(obj) {
    if (students.isArray()) {
      this._students = students;
    } else {
      return new Error("Students must be an array of string");
    }
  }

  get name() { return this._name };
  get lenght() { return this._length };
  get students() { return this._students };
}
