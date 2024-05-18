import StatsProps from "../types/StatsProps";
import styles from "../styles/Stats.module.css";

export default function Stats(props: StatsProps) {
  return (
    <div className={styles.statsContainer}>
      <div
        className={styles.value}
        style={{
          background: props.background ?? "#DBC537",
          color: props.color ?? "#fff",
        }}
      >
        <p>{props.value}</p>
      </div>
      <div className={styles.text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
