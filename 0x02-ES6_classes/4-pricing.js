import Currency from './3-currency';

export default class Pricing {
  static convertPrice(amount, conversionRate) { return amount * conversionRate; }

  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('currency must be a currency');
    }
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  displayFullPrice() { return `${this.amount} ${this.currency.displayFullCurrency()}`; }
}
