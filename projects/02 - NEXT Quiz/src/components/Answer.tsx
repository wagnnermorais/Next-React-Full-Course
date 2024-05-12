import AnswerProps from "../types/AnswerProps";
import styles from "../styles/Answer.module.css";

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  return (
    <div className={styles.answerContainer}>
      <div className={styles.answerContent}>
        <div className={styles.front}>
          <div className={styles.letter}>{props.letter}</div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
}
