import { QuestionProps } from "../types/QuestionProps";
import styles from "../styles/Question.module.css";
import Statement from "./Statement";
import Answer from "./Answer";

export default function Question(props: QuestionProps) {
  const question = props.value;
  return (
    <div className={styles.questionContainer}>
      {question.answer.map((answer, index) => (
        <Answer value={answer} index={index} letter="A" letterColor="#F2C866" />
      ))}
      <Statement text={question.statement} />
    </div>
  );
}
