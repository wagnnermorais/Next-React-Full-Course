import { QuestionProps } from "../types/QuestionProps";
import styles from "../styles/Question.module.css";
import Statement from "./Statement";

export default function Question(props: QuestionProps) {
  const question = props.value;
  return (
    <div className={styles.questionContainer}>
      <Statement text={question.statement} />
    </div>
  );
}
