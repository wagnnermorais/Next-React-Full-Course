export default class AnswerModel {
  #value: string
  #isRight: boolean
  #revealed: boolean

  constructor(value: string, isRight: boolean, revealed = false) {
    this.#value = value
    this.#isRight = isRight
    this.#revealed = revealed
  }

  get value() {
    return this.#value
  }

  get isRight() {
    return this.#isRight
  }

  get revealed() {
    return this.#revealed
  }

  static rightAnswer(value: string) {
    return new AnswerModel(value, true)
  }

  static wrongAnswer(value: string) {
    return new AnswerModel(value, false)
  }

  toObject() {
    return {
      value: this.#value,
      isRight: this.#isRight,
      revealed: this.#revealed,
    }
  }
}
