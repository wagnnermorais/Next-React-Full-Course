import { useRouter } from "next/router";
import Link from "next/link";

export default function Params() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Rota Params: {id} e {nome}
      </h1>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
