import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #question: string
  #answers: AnswerModel[]
  #isRight: boolean

  constructor(id: number, question: string, answers: AnswerModel[], isRight = false) {
    this.#id = id
    this.#question = question
    this.#answers = answers
    this.#isRight = isRight
  }

  get id() {
    return this.#id
  }

  get question() {
    return this.#question
  }

  get answer() {
    return this.#answers
  }

  get isRight() {
    return this.#isRight
  }

  get isQuestionAnswered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true
    }
    return false
  }

  toObject() {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map(answer => answer.toObject()),
      isRight: this.#isRight,
    }
  }
}