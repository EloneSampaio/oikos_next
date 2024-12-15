import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header title="Doação" />
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full">
          <h1 className="text-[#517D36] text-2xl font-bold text-center mb-4">
            Você sabe o que pode ser doado?
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Doe itens que ainda podem ser usados, descarte corretamente o que
            não serve mais, e recicle para ajudar o meio ambiente.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/doacao.png"
              alt="Pessoas trocando doações"
              width={200}
              height={200}
            />
          </div>
          <Link
            href="/maysa/donate"
            className="block w-full bg-[#E5C846] text-center py-3 rounded-md text-gray-800 font-medium"
          >
            OK
          </Link>
        </div>
      </div>
    </main>
  );
}
