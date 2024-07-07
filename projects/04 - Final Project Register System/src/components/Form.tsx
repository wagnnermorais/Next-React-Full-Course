import { useState } from "react";
import { FormProps } from "../types/FormProps";
import Input from "./Input";
import Button from "./Button";

export default function Form({ client }: FormProps) {
  const id = client?.id;
  const [name, setName] = useState<string>(client?.name ?? "");
  const [age, setAge] = useState<number>(client?.age ?? 0);

  return (
    <div>
      {id ? <Input text="Código" value={id} readonly /> : false}
      <Input text="Nome" value={name} onChange={setName} />
      <Input type="number" text="Idade" value={age} onChange={setAge} />
      <div className="flex justify-center items-center gap-4">
        <Button>{id ? "Alterar" : "Salvar"}</Button>
        <Button>Cancelar</Button>
      </div>
    </div>
  );
}
