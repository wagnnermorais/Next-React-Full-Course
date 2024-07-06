import { Poppins } from "next/font/google";
import Layout from "../components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${poppins.className} bg-gradient-to-r from-blue-300 to-purple-300`}
    >
      <Layout title="test">
        <p>conteudo</p>
      </Layout>
    </main>
  );
}
