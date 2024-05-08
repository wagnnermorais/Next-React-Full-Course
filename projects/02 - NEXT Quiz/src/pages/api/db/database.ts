import QuestionModel from "../../../../models/question";
import AnswerModel from "../../../../models/answer";

const questions: QuestionModel[] = [
  new QuestionModel(1, "Qual animal transmite a doença de Chagas?", [
    AnswerModel.wrongAnswer("Abelha"),
    AnswerModel.wrongAnswer("Barata"),
    AnswerModel.wrongAnswer("Pulga"),
    AnswerModel.rightAnswer("Barbeiro"),
  ]),
  new QuestionModel(2, "Qual fruto é conhecido no Norte e Nordeste como 'jerimum'?", [
    AnswerModel.wrongAnswer("Abelha"),
    AnswerModel.wrongAnswer("Barata"),
    AnswerModel.wrongAnswer("Pulga"),
    AnswerModel.rightAnswer("Barbeiro"),
  ]),
  new QuestionModel(3, "Qual é o coletivo de cães?", [
    AnswerModel.wrongAnswer("Manada"),
    AnswerModel.wrongAnswer("Alcateia"),
    AnswerModel.wrongAnswer("Rebanho"),
    AnswerModel.rightAnswer("Matilha"),
  ]),
  new QuestionModel(4, "Qual fruto é conhecido no Norte e Nordeste como 'jerimum'?", [
    AnswerModel.wrongAnswer("Equilátero"),
    AnswerModel.wrongAnswer("Isóceles"),
    AnswerModel.wrongAnswer("Trapézio"),
    AnswerModel.rightAnswer("Escaleno"),
  ]),
]

export default questions