import Gift from "../components/Gift";
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
        {door.isClosed ? (
          <div className={styles.door}>
            <div className={styles.doorNumber}>{door.doorNumber}</div>
            <div className={styles.doorHandle} onClick={openDoor}></div>
          </div>
        ) : door.hasGift ? (
          <div>
            <Gift />
          </div>
        ) : (
          false
        )}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
