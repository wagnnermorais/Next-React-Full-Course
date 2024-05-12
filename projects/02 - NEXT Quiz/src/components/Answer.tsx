import AnswerProps from "../types/AnswerProps";
import styles from "../styles/Answer.module.css";

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  return (
    <div
      className={styles.answerContainer}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={styles.answerContent}>
        {!answer.revealed ? (
          <div className={styles.front}>
            <div
              className={styles.letter}
              style={{ background: props.letterBackground }}
            >
              {props.letter}
            </div>
            <div className={styles.value}>{answer.value}</div>
          </div>
        ) : (
          <div className={styles.back}>
            {answer.isRight ? (
              <div className={styles.rightAnswer}>
                <div>
                  <p>The right answer is...</p>
                </div>
                <div className={styles.value}>
                  <p>{answer.value}</p>
                </div>
              </div>
            ) : (
              <div className={styles.wrongAnswer}>
                <div>
                  <p>Selected answer is wrong...</p>
                </div>
                <div className={styles.value}>
                  <p>{answer.value}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
