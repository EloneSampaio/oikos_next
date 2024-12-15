"use client";

import { Header } from "@/components/header";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Cadastro de material" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 pt-28 text-black">
        <div className="space-y-6">
          <div>
            <label className="block text-lg mb-2">Tipo de material</label>
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
              defaultValue="5"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Data de coleta</label>
            <input
              type="text"
              defaultValue="11/08/2024 17:30"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Notas adicionais</label>
            <textarea
              className="w-full border rounded-lg p-3 min-h-[120px]"
              defaultValue="Os materiais coletados incluem papelão, garrafas plásticas e latas de alumínio. Todos estão limpos e prontos para reciclagem."
            />
          </div>

          <div className="relative">
            <Image
              src="/assets/recycled.png"
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
            href="/elone/material-cadastrado"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold"
          >
            Registrar Material
          </Link>
        </div>
      </div>
    </main>
  );
}
