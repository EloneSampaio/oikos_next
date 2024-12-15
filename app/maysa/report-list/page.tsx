import { Header } from "@/components/header";
import { Search } from "lucide-react";
import Image from "next/image";

export default function ReportsList() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Lista de Denúncias" />

      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Pesquisar denúncia"
            className="w-full bg-[#1B4B1D] text-white placeholder-gray-300 rounded-lg py-3 pl-12 pr-4"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-3 flex gap-3">
            <Image
              src="/placeholder.svg?text=Waste+Site"
              alt="Local com descarte irregular"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="font-bold text-lg">1215458467</p>
              <p className="text-gray-600 text-sm">Denunciado em 10/06/2024</p>
              <p className="text-gray-600 text-sm">Enviado para Fiscalização</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
