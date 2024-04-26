export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new Error('sqft must be a number');
    }
  }

  get sqft() { return this._sqft; }
}
