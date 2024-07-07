import { useState } from "react";
import { Poppins } from "next/font/google";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [isVisible, setIsVisible] = useState<"table" | "form">("table");
  const clients = [
    new Client("Ana", 24, "1"),
    new Client("Douglas", 15, "2"),
    new Client("Vitor", 45, "3"),
    new Client("Mauricio", 38, "4"),
  ];

  const selectedClient = (client: Client) => {
    console.log(client.name);
  };
  const deletedClient = (client: Client) => {
    console.log(client.name + " foi excluido");
  };

  const saveClient = (client: Client) => {
    console.log(client);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${poppins.className} bg-gradient-to-r from-blue-300 to-purple-300`}
    >
      <Layout title="test">
        {isVisible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button onClick={() => setIsVisible("form")}>Novo cliente</Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={clients[0]}
            isCanceled={() => setIsVisible("table")}
            isClientChanged={saveClient}
          />
        )}
      </Layout>
    </main>
  );
}
