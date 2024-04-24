import styles from "../styles/Door.module.css";

export default function Door(props) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.structure} ${
          props.isDoorSelected ? styles.doorSelected : ""
        }`}
      >
        <div className={styles.door}>
          <div className={styles.doorNumber}>3</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
