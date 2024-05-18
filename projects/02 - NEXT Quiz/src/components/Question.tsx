import { QuestionProps } from "../types/QuestionProps";
import { letters } from "../pages/api/db/colors";
import Answer from "./Answer";
import Countdown from "./Countdown";
import Statement from "./Statement";
import styles from "../styles/Question.module.css";

export default function Question(props: QuestionProps) {
  const question = props.value;
  return (
    <div className={styles.questionContainer}>
      <Statement text={question.statement} />
      <Countdown
        key={question.id}
        duration={props.timeForAnswer ?? 10}
        timeout={props.timeout}
      />
      {question.answers.map((answer, index) => (
        <Answer
          key={`${question.id} ${index}`}
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
