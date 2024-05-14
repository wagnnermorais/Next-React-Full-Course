import { ButtonProps } from "../types/ButtonProps";
import Link from "next/link";
import styles from "../styles/Button.module.css";

export default function Button(props: ButtonProps) {
  return props.href ? (
    <Link href={props.href}>
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  ) : (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
