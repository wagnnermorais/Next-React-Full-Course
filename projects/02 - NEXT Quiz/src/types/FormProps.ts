import QuestionModel from "../../models/question";

export interface FormProps {
  question: QuestionModel;
  isLastQuestion: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  nextStep: () => void;
}