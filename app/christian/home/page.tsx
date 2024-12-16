"use client";
import { Menu } from "@/components/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, CalendarDays, Truck, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();



  // Redireciona se o usuário não estiver autenticado
    if (!isAuthenticated) {
     router.push("/sebastiao/login"); // Redireciona para a página de login
     return null; // Retorna `null` para evitar renderização
   }
  return (
    <div className="min-h-screen bg-[#2B5B3C]">
      <div className="container max-w-md mx-auto p-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          
          <h1 className="text-white text-2xl font-bold">Oikos</h1>
          <Link href="/christian/profile">
            <Button className="w-8 h-8 rounded-full p-0 overflow-hidden bg-gray-200">
              <Image
                src="/assets/avatar.png"
                alt="Perfil"
                width={32}
                height={32}
                className="object-cover"
              />
            </Button>
          </Link>
        </header>

        {/* Search */}
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
              <div className="w-16 h-16 bg-[#4ADE80] rounded-xl flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <span className="text-white text-xs text-center">
                {category.label}
              </span>
            </div>
          ))}
        </div>

        {/* REDUZE Section */}
        <div className="mb-8 relative bg-[#274E2D] p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#4ADE80] text-2xl font-bold">RE</span>
            <span className="text-white text-2xl font-bold">DUZE</span>
            <Image
              src="/assets/Recycle.png"
              alt="Recycle"
              width={40}
              height={40}
              className="absolute ml-28"
            />
            <Image
              src="/assets/world.png"
              alt="Globe"
              width={90}
              height={90}
              className="absolute right-0 bottom-32 pb-7"
            />
          </div>

          <p className="text-white text-sm mb-4">
            Nulla vel facilisis velit. Fusce sit amet tellus egestas,
            ullamcorper elit quis, scelerisque nisi. Nunc quis ex sit amet nulla
            scelerisque facilisis. Sed sagittis feugiat varius. Nulla facilisi
            lobortis sapien in interdum.
          </p>
        </div>

        <Button className="w-full bg-[#1F432C] text-white hover:bg-[#1F432C]/90 mb-8 flex items-center justify-center gap-2">
          <Image
            src="/assets/google.png"
            alt="Google"
            width={20}
            height={20}
            className="object-contain"
          />
          Registrar-se com o Google
        </Button>

        {/* Favorites */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-semibold mb-4">
            ⭐ Favoritos
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                id: "activity",
                icon: (
                  <a href="/sebastiao/activity">
                    <Shield className="w-6 h-6" />
                  </a>
                ),
                label: <a href="/sebastiao/activity">Atividades da conta</a>,
              },
              {
                id: "donation",
                icon: <a href="/maysa/donation">🤝</a>,
                label: <a href="/maysa/donation">Doação</a>,
              },
              {
                icon: (
                  <a href="/elone/agendamento-inicial">
                    <CalendarDays className="w-6 h-6" />
                  </a>
                ),
                label: (
                  <a href="/elone/agendamento-inicial">Agende sua Coleta</a>
                ),
              },
              {
                icon: (
                  <a href="/elone/dias-coleta">
                    <Truck className="w-6 h-6" />
                  </a>
                ),
                label: <a href="/elone/dias-coleta">Saiba os dias de Coleta</a>,
              },
            ].map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-[#4ADE80] rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-white text-xs text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learn Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">📚 Aprender</h2>
          <div className="bg-[#4ADE80] rounded-xl p-4">
            <h3 className="text-[#2B5B3C] text-xl font-bold mb-2">
              Aprenda como colaborar com a reciclagem.
            </h3>
            <p className="text-[#2B5B3C] mb-4">
              A única forma de mudarmos o nosso futuro é aprendendo!
            </p>
            <Link href="/christian/news">
              <Button className="w-full bg-[#2B5B3C] text-white hover:bg-[#2B5B3C]/90">
                Aprender
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
