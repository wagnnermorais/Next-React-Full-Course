import QuestionModel from "../../../../models/question";
import AnswerModel from "../../../../models/answer";

const questions: QuestionModel[] = [
  new QuestionModel(1, "Which animal transmits Chagas disease?", [
    AnswerModel.wrongAnswer("Bee"),
    AnswerModel.wrongAnswer("Cockroach"),
    AnswerModel.wrongAnswer("Flea"),
    AnswerModel.rightAnswer("Kissing bug"),
  ]),
  new QuestionModel(2, "Which fruit is known in the North and Northeast of Brazil as 'jerimum'?", [
    AnswerModel.wrongAnswer("Apple"),
    AnswerModel.wrongAnswer("Banana"),
    AnswerModel.wrongAnswer("Flea"),
    AnswerModel.rightAnswer("Pumpkin"),
  ]),
  new QuestionModel(3, "What is the collective noun for dogs?", [
    AnswerModel.wrongAnswer("Herd"),
    AnswerModel.wrongAnswer("Pack"),
    AnswerModel.wrongAnswer("Flock"),
    AnswerModel.rightAnswer("Murder"),
  ]),
  new QuestionModel(4, "Which triangle has all different angles?", [
    AnswerModel.wrongAnswer("Equilateral"),
    AnswerModel.wrongAnswer("Isosceles"),
    AnswerModel.wrongAnswer("Trapezoid"),
    AnswerModel.rightAnswer("Scalene"),
  ]),
  new QuestionModel(5, "What is the capital of France?", [
    AnswerModel.wrongAnswer("Berlin"),
    AnswerModel.wrongAnswer("Madrid"),
    AnswerModel.wrongAnswer("Rome"),
    AnswerModel.rightAnswer("Paris"),
  ]),
  new QuestionModel(6, "Which planet is known as the Red Planet?", [
    AnswerModel.wrongAnswer("Earth"),
    AnswerModel.wrongAnswer("Jupiter"),
    AnswerModel.wrongAnswer("Saturn"),
    AnswerModel.rightAnswer("Mars"),
  ]),
  new QuestionModel(7, "What is the largest ocean on Earth?", [
    AnswerModel.wrongAnswer("Atlantic Ocean"),
    AnswerModel.wrongAnswer("Indian Ocean"),
    AnswerModel.wrongAnswer("Arctic Ocean"),
    AnswerModel.rightAnswer("Pacific Ocean"),
  ]),
  new QuestionModel(8, "Who wrote 'Romeo and Juliet'?", [
    AnswerModel.wrongAnswer("Charles Dickens"),
    AnswerModel.wrongAnswer("Mark Twain"),
    AnswerModel.wrongAnswer("Jane Austen"),
    AnswerModel.rightAnswer("William Shakespeare"),
  ]),
  new QuestionModel(9, "What is the hardest natural substance on Earth?", [
    AnswerModel.wrongAnswer("Gold"),
    AnswerModel.wrongAnswer("Iron"),
    AnswerModel.wrongAnswer("Platinum"),
    AnswerModel.rightAnswer("Diamond"),
  ]),
  new QuestionModel(10, "Which element has the chemical symbol 'O'?", [
    AnswerModel.wrongAnswer("Gold"),
    AnswerModel.wrongAnswer("Osmium"),
    AnswerModel.wrongAnswer("Oganesson"),
    AnswerModel.rightAnswer("Oxygen"),
  ]),
];

export default questions;