import styles from "../styles/Gift.module.css";

export default function Gift() {
  return (
    <div className={styles.giftContainer}>
      <div className={styles.top}></div>
      <div className={styles.body}></div>
      <div className={styles.giftBow1}></div>
      <div className={styles.giftBow2}></div>
    </div>
  );
}
