import { Poppins } from "next/font/google";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
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

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${poppins.className} bg-gradient-to-r from-blue-300 to-purple-300`}
    >
      <Layout title="test">
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        />
      </Layout>
    </main>
  );
}
