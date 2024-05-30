export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateName(name);
    this._length = HolbertonCourse._validateLength(length);
    this._students = HolbertonCourse._validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = HolbertonCourse._validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse._validateLength(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse._validateStudents(value);
  }

  static _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  static _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  static _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
