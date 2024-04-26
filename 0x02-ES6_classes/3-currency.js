export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  get code() { return this._code; }

  get name() { return this._name; }

  displayFullCurrency() { return `${this.name} (${this.code})`; }
}
