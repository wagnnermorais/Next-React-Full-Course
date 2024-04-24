export default class Porta {
  #numero;
  #hasGift;
  #isSelected;
  #isOpened;

  constructor(numero, hasGift = false, isSelected, isOpened) {
    this.#numero = numero;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get numero() {
    return this.#numero;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpened() {
    return this.#isOpened;
  }

  changeSelected() {
    const selected = !this.isSelected;
    return new Porta(this.numero, this.hasGift, selected, this.isOpened);
  }

  openDoor() {
    const opened = true;
    return new Porta(this.numero, this.hasGift, this.isSelected, opened);
  }

  unselectDoor() {
    const selected = false;
    return new Porta(this.numero, this.hasGift, selected, this.isOpened);
  }
}
