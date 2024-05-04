import { NumberInputProps } from "../types/NumberInputProps";
import styles from "../styles/NumberInput.module.css";

export default function NumberInput(props: NumberInputProps) {
  const decrease = () => {
    if (props.value <= 0) return;
    return props.onChange(props.value - 1);
  };

  const increase = () => {
    return props.onChange(props.value + 1);
  };
  return (
    <div className={styles.numberInputContainer}>
      <p className={styles.text}>{props.text}</p>
      <p className={styles.value}>{props.value}</p>
      <div className={styles.numberInputButtonBox}>
        <button className={styles.button} onClick={decrease}>
          -
        </button>
        <button className={styles.button} onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
