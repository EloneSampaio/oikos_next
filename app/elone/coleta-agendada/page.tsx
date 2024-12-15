import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Oikos" />
      <div className="p-4 pt-28">
        <div className="bg-white rounded-lg p-6 text-center">
          <h2 className="text-[#2E7D32] text-3xl font-bold mb-4">Oba!</h2>

          <h3 className="text-[#2E7D32] text-2xl font-bold mb-6">
            Sua coleta foi agendada
          </h3>

          <p className="text-gray-800 text-lg mb-8">
            Vamos te avisar assim que alguém se interessar!
          </p>

          <Link
            href="/elone/meus-agendamentos"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold mb-8"
          >
            OK
          </Link>

          <Image
            src="/assets/undraw_winners.png"
            alt="Ilustração de pessoas celebrando"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
