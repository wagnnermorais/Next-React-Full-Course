import AnswerModel from "./answer"
import useSorteQuestions from "../src/hooks/useSortQuestions"

export default class QuestionModel {
  #id: number
  #statement: string
  #answers: AnswerModel[]
  #isRight: boolean

  constructor(id: number, statement: string, answers: AnswerModel[], isRight = false) {
    this.#id = id
    this.#statement = statement
    this.#answers = answers
    this.#isRight = isRight
  }

  get id() {
    return this.#id
  }

  get statement() {
    return this.#statement
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

  sortAnswers(): QuestionModel {
    let sortedAnswers = useSorteQuestions(this.#answers)
    return new QuestionModel(this.#id, this.#statement, sortedAnswers, this.#isRight)
  }

  selectedAnswer(index: number): QuestionModel {
    const isRightAnswer = this.#answers[index]?.isRight
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i
      const shouldReveal = selectedAnswer || answer.isRight
      return shouldReveal ? answer.reveal() : answer
    })
    return new QuestionModel(this.#id, this.#statement, answers, isRightAnswer)
  }

  toObject() {
    return {
      id: this.#id,
      question: this.#statement,
      answers: this.#answers.map(answer => answer.toObject()),
      isRight: this.#isRight,
    }
  }
}