"use client";

import { ArrowLeft, Search, User, Droplet, Box, Cpu, Car } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const categories = [
  { icon: Droplet, label: "Óleo de Cozinha", color: "bg-[#00FF00]" },
  { icon: Box, label: "Papelão", color: "bg-[#00FF00]" },
  { icon: Cpu, label: "Eletrônicos", color: "bg-[#00FF00]" },
  { icon: Car, label: "Sucatas", color: "bg-[#00FF00]" },
];

const results = [
  {
    id: 1,
    name: "Reuse",
    address:
      "Av. Daniel Rodrigues Veodato - Parque Sagrada Família, Rondonópolis - MT, 78735-133",
    phone: "(065) 9 9999-9999",
    hours: "07h às 18h",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit tortor, semper in ipsum sed, varius sollicitudin dolor. Sed id felis libero.",
    tags: ["Papéis", "Papelões", "Cartolinas"],
  },
  {
    id: 2,
    name: "Reuse",
    address:
      "Av. Daniel Rodrigues Veodato - Parque Sagrada Família, Rondonópolis - MT, 78735-133",
    phone: "(065) 9 9999-9999",
    hours: "07h às 18h",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit tortor, semper in ipsum sed, varius sollicitudin dolor. Sed id felis libero.",
    tags: ["Papéis", "Papelões", "Cartolinas"],
  },
  {
    id: 3,
    name: "Reuse",
    address:
      "Av. Daniel Rodrigues Veodato - Parque Sagrada Família, Rondonópolis - MT, 78735-133",
    phone: "(065) 9 9999-9999",
    hours: "07h às 18h",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit tortor, semper in ipsum sed, varius sollicitudin dolor. Sed id felis libero.",
    tags: ["Papéis", "Papelões", "Cartolinas"],
  },
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#2B5B3C]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/home">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>

          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-[#006400]"
          >
            <User className="h-5 w-5 text-white" />
          </Button>
        </header>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            className="w-full bg-[#1F432C] text-white pl-10 border-none"
            placeholder="O que deseja reciclar?"
          />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            {
              id: 1,
              icon: <a href="/elone/agendamento">🛢️</a>,
              label: <a href="/elone/agendamento">Óleo de Cozinha</a>,
            },
            {
              id: 2,
              icon: <a href="/elone/agendamento">📦</a>,
              label: <a href="/elone/agendamento">Papelão</a>,
            },
            {
              id: 3,
              icon: <a href="/elone/agendamento">🔌</a>,
              label: <a href="/elone/agendamento">Eletrônicos</a>,
            },
            {
              id: 4,
              icon: <a href="/elone/agendamento">🚛</a>,
              label: <a href="/elone/agendamento">Sucatas</a>,
            },
          ].map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-[#7CCD4E] rounded-xl flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <span className="text-white text-xs text-center">
                {category.label}
              </span>
            </div>
          ))}
        </div>

        {/* Results */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Resultados</h2>
          <div className="space-y-4">
            {results.map((result) => (
              <div key={result.id} className="rounded-lg bg-[#7CCD4E] p-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#008000] flex items-center justify-center">
                    <span className="text-xs font-bold text-white">REUSE</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#008000]">
                      {result.name}
                    </h3>
                    <p className="text-xs text-[#006400]">{result.address}</p>
                    <div className="mt-1 flex items-center gap-4">
                      <span className="text-xs text-[#006400]">
                        {result.phone}
                      </span>
                      <span className="text-xs text-[#006400]">
                        {result.hours}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="mb-2 text-sm font-semibold text-[#008000]">
                    Detalhes
                  </h4>
                  <p className="text-xs text-[#006400]">{result.details}</p>
                </div>

                <div className="mt-4 flex gap-2">
                  {result.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#008000] px-4 py-1 text-xs text-[#008000]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
