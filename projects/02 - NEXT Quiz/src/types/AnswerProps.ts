import AnswerModel from "../../models/answer";

export default interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  letterColor: string;
}