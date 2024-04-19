import Link from "next/link";
import styles from "../../styles/Routes.module.css";

export default function Routes() {
  return (
    <div className={styles.container}>
      <h1>Index</h1>
      <div>
        <Link href="/routes/params?id=12&nome=Wagner">Params</Link>
      </div>
      <div>
        <Link href="/routes/123/Pedro">Params</Link>
      </div>
      <div>
        <Link href="/routes/1/Bruna">Params</Link>
      </div>
    </div>
  );
}
