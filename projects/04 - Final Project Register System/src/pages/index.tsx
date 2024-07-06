import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${poppins.className} bg-zinc-950`}
    >
      <h1 className="text-4xl font-bold text-white">Hello, world!</h1>
    </main>
  );
}
