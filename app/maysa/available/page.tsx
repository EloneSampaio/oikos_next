"use client";

import { useState } from "react";
import { Header } from "@/components/header";

import Image from "next/image";
import Link from "next/link";
import { ReportModal } from "@/components/ReportModal";

export default function Home() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleReport = () => {
    // Handle the report action here
    console.log("Donation reported");
    setIsReportModalOpen(false);
  };

  return (
    <main>
      <Header />
      <div className="p-4 h-max">
        <div className="flex items-center justify-between pt-[5rem] mb-4">
          <h2 className="text-[#7CB342] font-medium">Item Disponível</h2>
          <button
            className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() => setIsReportModalOpen(true)}
          >
            ↑
          </button>
        </div>

        <h3 className="text-2xl font-bold mb-4">Armário de Cozinha</h3>

        <div className="relative h-64 mb-4">
          <div className="flex overflow-x-auto gap-2 h-full">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`/assets/armario.png?text=Armário${i}`}
                alt={`Foto do armário ${i}`}
                width={280}
                height={256}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            →
          </button>
        </div>

        <section className="mb-6">
          <h4 className="text-lg font-bold mb-2">Informações da Doação</h4>
          <dl className="space-y-2">
            <div>
              <dt className="font-bold">Doador:</dt>
              <dd>José Duarte</dd>
            </div>
            <div>
              <dt className="font-bold">Qtde:</dt>
              <dd>1 unidade</dd>
            </div>
            <div>
              <dt className="font-bold">Estado do Material:</dt>
              <dd>Usado</dd>
            </div>
            <div>
              <dt className="font-bold">Observações:</dt>
              <dd>
                Estou doando o armário de cozinha, pois vou viajar e já comprei
                outro. O armário é usado, e não tem o vidro da cristaleira.
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-bold mb-2">
            O material precisa ser coletado
          </h4>
          <div className="border rounded-lg p-3 space-y-2">
            <p className="font-medium">Datas disponíveis para coleta</p>
            <div className="space-y-2">
              {["22/10/2024 17:30", "24/10/2024 17:30", "26/10/2024 17:30"].map(
                (date) => (
                  <div key={date} className="border rounded p-2">
                    {date}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <Link
          href="/maysa/location"
          className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold"
        >
          Tenho Interesse
        </Link>
      </div>

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onConfirm={handleReport}
      />
    </main>
  );
}
