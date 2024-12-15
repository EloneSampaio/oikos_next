import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Report() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header />
      <div className="p-4 pt-28">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-[#2E7D32] text-3xl font-bold text-center mb-6">
            Algo está fora do lugar?
          </h2>

          <p className="text-center mb-4 text-black">
            Se você viu materiais descartados em local indevido, faça uma
            denúncia anônima.
          </p>

          <p className="text-center mb-8 text-black">
            Sua denúncia será encaminhada para o órgão responsável, que tomará
            as providências necessárias. Juntos, podemos garantir o descarte
            correto e proteger o meio ambiente.
          </p>

          <Link
            href="/maysa/report-form"
            className="block w-full bg-[#DC2626] text-white text-center py-4 rounded-lg font-bold mb-8"
          >
            Denunciar
          </Link>

          <Image
            src="/assets/report.png"
            alt="Ilustração de denúncia de resíduos"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
