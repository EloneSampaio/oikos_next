import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Oikos" />
      <div className="p-4 py-20">
        <div className="bg-white rounded-lg p-6 text-center ">
          <h2 className="text-[#2E7D32] text-3xl font-bold mt-18 mb-4">
            Incrível!
          </h2>

          <p className="text-gray-800 text-lg mb-8">
            Seu interesse foi enviado ao doador! Agora é só aguardar a data
            combinada para retirar o item.
          </p>
          <Link
            href="/christian/home"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold mb-8"
          >
            ok
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
