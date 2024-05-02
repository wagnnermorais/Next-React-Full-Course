import { CardProps } from "../types/CardProps";
import styles from "../styles/Card.module.css";

export default function Card(props: CardProps) {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundColor: props.background ?? "#fff" }}
    >
      <h2>Card</h2>
    </div>
  );
}
