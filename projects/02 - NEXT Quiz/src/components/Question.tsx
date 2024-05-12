import { QuestionProps } from "../types/QuestionProps";
import Answer from "./Answer";
import Statement from "./Statement";
import letters from "../pages/api/db/colors";
import styles from "../styles/Question.module.css";

export default function Question(props: QuestionProps) {
  const question = props.value;
  return (
    <div className={styles.questionContainer}>
      <Statement text={question.statement} />
      {question.answer.map((answer, index) => (
        <Answer
          key={index}
          value={answer}
          index={index}
          letter={letters[index].value}
          letterBackground={letters[index].background}
          onResponse={props.onResponse}
        />
      ))}
    </div>
  );
}
