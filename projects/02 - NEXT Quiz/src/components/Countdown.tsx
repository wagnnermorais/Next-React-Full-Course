import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CountdownProps } from "../types/CountdownProps";
import styles from "../styles/Countdown.module.css";

export default function Countdown(props: CountdownProps) {
  return (
    <div className={styles.countdownContainer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying={true}
        onComplete={props.timeout}
        colors={["#27288A", "#3DA860", "#401B04"]}
        colorsTime={[0.33, 0.33, 0.33]}
      >
        {({ remainingTime }) => (
          <p className={styles.remainingTime}>{remainingTime}</p>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
