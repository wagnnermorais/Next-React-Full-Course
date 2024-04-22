import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Routes.module.css";

export default function Routes() {
  const router = useRouter();

  const navegacaoSimples = (url) => {
    router.push(url);
  };

  const navegacaoComParams = () => {
    router.push({
      pathname: "/routes/params",
      query: {
        id: 12,
        nome: "Wagner Morais",
      },
    });
  };
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
      <div className={styles.buttonBox}>
        <button onClick={() => router.push("/routes/123/Pedro")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/routes/1/Bruna")}>
          Bruna
        </button>
        <button onClick={() => navegacaoComParams()}>Params</button>
      </div>
    </div>
  );
}
