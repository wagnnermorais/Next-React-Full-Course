import { DoorProps } from "../types/DoorProps";
import styles from "../styles/Door.module.css";

export default function Door(props: DoorProps) {
  const door = props.value;

  const handleChangeSelectedDoor = (e) => {
    props.onChange(door.changeSelected());
  };

  const openDoor = (e) => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  return (
    <div className={styles.container} onClick={handleChangeSelectedDoor}>
      <div
        className={`${styles.structure} ${
          door.isSelected && !door.isOpened ? styles.doorSelected : ""
        }`}
      >
        {door.isOpened ? (
          false
        ) : (
          <div className={styles.door}>
            <div className={styles.doorNumber}>{door.doorNumber}</div>
            <div className={styles.doorHandle} onClick={openDoor}></div>
          </div>
        )}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
