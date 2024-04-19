import { useRouter } from "next/router";

export default function Buscar() {
  const router = useRouter();
  const codigo = router.query.id;
  const nome = router.query.buscar;

  return (
    <div>
      <h1>
        Rotas / {codigo} / {nome}
      </h1>
    </div>
  );
}
