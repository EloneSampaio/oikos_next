import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function ReportConfirmation() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <header className="bg-[#2E7D32] p-4 text-white flex items-center">
        <button className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold ml-4">Denúncia</h1>
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg p-6 text-center">
          <h2 className="text-[#2E7D32] text-3xl font-bold mb-6">
            Sua denúncia foi registrada
          </h2>

          <p className="text-gray-800 text-lg mb-8">
            Lamentamos por qualquer transtorno causado pela doação. Nossa equipe
            irá analisar sua denúncia, e você pode acompanhar o progresso
            utilizando o número de protocolo abaixo.
          </p>

          <p className="text-3xl font-bold mb-8">1215418465</p>

          <Link
            href="/maysa/report-list"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold mb-8"
          >
            Acompanhar
          </Link>

          <Image
            src="/assets/check.jpg"
            alt="Ilustração de emoji triste"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
