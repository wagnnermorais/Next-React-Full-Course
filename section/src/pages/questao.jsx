import { useEffect, useState } from "react";

export default function questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((response) => response.json())
      .then(setQuestao);
  }, []);

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <p>
          {questao?.id} - {questao?.enunciado}
        </p>
        <ul>
          {questao
            ? questao.respostas.map((resposta, index) => (
                <li key={index}>{resposta}</li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}
