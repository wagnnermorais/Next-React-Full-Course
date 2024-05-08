import QuestionModel from "../../../../models/question";
import AnswerModel from "../../../../models/answer";

const questions: QuestionModel[] = [
  new QuestionModel(777, "Qual animal transmite a doença de Chagas?", [
    AnswerModel.wrongAnswer("Abelha"),
    AnswerModel.wrongAnswer("Barata"),
    AnswerModel.wrongAnswer("Pulga"),
    AnswerModel.rightAnswer("Barbeiro"),
  ]),
  new QuestionModel(666, "Qual fruto é conhecido no Norte e Nordeste como 'jerimum'?", [
    AnswerModel.wrongAnswer("Abelha"),
    AnswerModel.wrongAnswer("Barata"),
    AnswerModel.wrongAnswer("Pulga"),
    AnswerModel.rightAnswer("Barbeiro"),
  ]),
]

export default questions