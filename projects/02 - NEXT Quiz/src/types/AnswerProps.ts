import AnswerModel from "../../models/answer";

export default interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  letterBackground: string;
  onResponse: (index: number) => void;
}