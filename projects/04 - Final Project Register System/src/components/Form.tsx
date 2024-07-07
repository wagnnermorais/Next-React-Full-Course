import { useState } from "react";
import { FormProps } from "../types/FormProps";
import Input from "./Input";
import Button from "./Button";
import Client from "../core/Client";

export default function Form({
  client,
  isClientChanged,
  isCanceled,
}: FormProps) {
  const id = client?.id;
  const [name, setName] = useState<string>(client?.name ?? "");
  const [age, setAge] = useState<number>(client?.age ?? 0);

  return (
    <div>
      {id ? <Input text="Código" value={id} readonly /> : false}
      <Input text="Nome" value={name} onChange={setName} />
      <Input type="number" text="Idade" value={age} onChange={setAge} />
      <div className="flex justify-center items-center gap-4">
        <Button onClick={() => isClientChanged?.(new Client(name, +age, id))}>
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={isCanceled}>Cancelar</Button>
      </div>
    </div>
  );
}
