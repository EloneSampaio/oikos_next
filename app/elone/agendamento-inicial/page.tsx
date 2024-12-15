"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#1B8B4A]">
      <Header title="Oikos" />

      {/* Main Content Card */}
      <main className="px-4 pt-32">
        <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center ">
          <h2 className="text-[#1B8B4A] text-2xl font-medium mb-4 max-w-[280px]">
            Agende sua Coleta
          </h2>

          <p className="text-gray-800 mb-6 max-w-[280px]">
            Escolha o material e agende sua coleta com empresas ou catadores.
            Facilite o descarte correto de resíduos no dia e horário que
            preferir.
          </p>
          <Link href="/elone/localizacao">
            <Button className="bg-[#CDDC39] hover:bg-[#CDDC39]/90 text-gray-800 font-medium mb-8 w-full max-w-[280px]">
              Agendar agora
            </Button>
          </Link>

          <div className="w-full max-w-[280px]">
            <Image
              src="/assets/doacao.png"
              alt="Ilustração de pessoas trocando materiais recicláveis"
              width={280}
              height={200}
              className="w-full"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
