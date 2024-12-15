"use client";

import { Header } from "@/components/header";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmCollection() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Confirmar coleta" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 text-black mt-18">
        <div className="space-y-6 mt-18">
          <div>
            <label className="block text-lg mb-2 py-14">Tipo de material</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="Papelão"
                className="w-full border rounded-lg p-3 pr-10"
                readOnly
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
              readOnly
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Data de coleta</label>
            <input
              type="text"
              defaultValue="11/08/2024 17:30"
              className="w-full border rounded-lg p-3"
              readOnly
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Coletor</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collector"
                  value="empresa"
                  className="w-5 h-5"
                />
                <span>Empresa</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collector"
                  value="catador"
                  defaultChecked
                  className="w-5 h-5"
                />
                <span>Catador</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2">Endereço</label>
            <p className="text-gray-700">
              Rua Afonso Pena 123, - Centro - Rondonópolis
            </p>
          </div>

          <div>
            <label className="block text-lg mb-2">Observações</label>
            <textarea
              className="w-full border rounded-lg p-3 min-h-[120px]"
              defaultValue="Tenho aproximadamente 10 kg de papelão que precisam ser coletados. O material já está separado e embalado."
              readOnly
            />
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?text=Recycling+Symbols"
              alt="Símbolos de reciclagem"
              width={400}
              height={150}
              className="rounded-lg w-full object-cover"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <Link
            href="/elone/coleta-confirmada"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold"
          >
            Confirmar coleta
          </Link>
        </div>
      </div>
    </main>
  );
}
