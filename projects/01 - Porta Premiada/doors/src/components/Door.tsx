import { DoorProps } from "../types/DoorProps";
import styles from "../styles/Door.module.css";

export default function Door(props: DoorProps) {
  const { door } = props;
  return (
    <div className={styles.container}>
      <div
        className={`${styles.structure} ${
          door.isSelected ? styles.doorSelected : ""
        }}`}
      >
        <div className={styles.door}>
          <div className={styles.doorNumber}>{door.doorNumber}</div>
          <div className={styles.doorHandle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
