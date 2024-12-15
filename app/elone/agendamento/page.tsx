"use client";

import { Header } from "@/components/header";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ScheduleDetails() {
  return (
    <main className="min-h-screen bg-[#2B5B3C]">
      <Header title="Agendamento" />
      <div className="bg-white min-h-[calc(100vh-64px)] mt-8rem p-4 text-black">
        <div className="space-y-6">
          <div>
            <label className="block text-lg mb-2 pt-20 text-black">
              Tipo de material
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="Papelão"
                className="w-full border rounded-lg p-3 pr-10"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2">Quantidade</label>
            <input
              type="text"
              defaultValue="1"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Coletor</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="collector" value="empresa" />
                <span>Empresa</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collector"
                  value="catador"
                  defaultChecked
                />
                <span>Catador</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2">Observações</label>
            <textarea
              className="w-full border rounded-lg p-3 min-h-[120px]"
              defaultValue="Tenho aproximadamente 10 kg de papelão que precisam ser coletados. O material já está separado e embalado."
            />
          </div>

          <div className="relative">
            <Image
              src="/assets/recycled.png"
              alt="Símbolos de reciclagem"
              width={400}
              height={450}
              className="w-full"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <Link
            href="/elone/coleta-agendada"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold"
          >
            Agendar coleta
          </Link>
        </div>
      </div>
    </main>
  );
}
