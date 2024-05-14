import QuestionModel from "../../models/question";

export interface QuestionProps {
  value: QuestionModel;
  onResponse: (index: number) => void;
  timeForAnswer?: number;
  timeout: () => void;
}