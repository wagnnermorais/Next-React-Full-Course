import { StatementProps } from "../types/StatementProps";
import styles from "../styles/Statement.module.css";

export default function Statement(props: StatementProps) {
  return (
    <div className={styles.statementContainer}>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
