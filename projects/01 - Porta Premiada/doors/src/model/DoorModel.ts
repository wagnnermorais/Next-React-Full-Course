export default class DoorModel {
  #doorNumber: number
  #hasGift: boolean
  #isSelected: boolean
  #isOpened: boolean

  constructor(doorNumber: number, hasGift = false, isSelected = false, isOpened = false) {
    this.#doorNumber = doorNumber;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpened = isOpened;
  }

  get doorNumber() {
    return this.#doorNumber;
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
    return new DoorModel(this.doorNumber, this.hasGift, selected, this.isOpened);
  }

  openDoor() {
    const opened = true;
    return new DoorModel(this.doorNumber, this.hasGift, this.isSelected, opened);
  }

  unselectDoor() {
    const selected = false;
    return new DoorModel(this.doorNumber, this.hasGift, selected, this.isOpened);
  }
}
