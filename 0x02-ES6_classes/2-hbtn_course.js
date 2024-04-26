export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(obj) {
    if (typeof obj === 'string') {
      this._name = obj;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(obj) {
    if (typeof obj === 'number') {
      this._lenght = obj;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(obj) {
    if (Array.isArray(obj)) {
      this._students = obj;
    } else {
      throw new TypeError('Students must be an array of string');
    }
  }

  get name() { return this._name; }

  get lenght() { return this._length; }

  get students() { return this._students; }
}
