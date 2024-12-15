import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, CalendarDays, Truck, Globe } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#2B5B3C]">
      <div className="container max-w-md mx-auto p-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <button className="text-white">
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
          <h1 className="text-white text-2xl font-bold">Oikos</h1>
          <button className="w-8 h-8 rounded-full bg-yellow-500" />
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
            { icon: "🛢️", label: "Óleo de Cozinha" },
            { icon: "📦", label: "Papelão" },
            { icon: "🔌", label: "Eletrônicos" },
            { icon: "🚛", label: "Sucatas" },
          ].map((category) => (
            <div
              key={category.label}
              className="flex flex-col items-center gap-2"
            >
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
        <div className="mb-8 relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#4ADE80] text-2xl font-bold">RE</span>
            <span className="text-white text-2xl font-bold">DUZE</span>
            <span className="text-[#4ADE80] text-2xl">↑</span>
          </div>
          <p className="text-white text-sm mb-4">
            Nulla vel facilisis velit. Fusce sit amet tellus egestas,
            ullamcorper elit quis, scelerisque nisi. Nunc quis ex sit amet nulla
            scelerisque facilisis. Sed sagittis feugiat varius. Nulla facilisi
            lobortis sapien in interdum.
          </p>
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Globe"
            width={50}
            height={50}
            className="absolute right-0 bottom-0"
          />
        </div>

        {/* Google Sign In */}
        <Button className="w-full bg-[#1F432C] text-white hover:bg-[#1F432C]/90 mb-8">
          <Image
            src="/placeholder.svg?height=20&width=20"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
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
                icon: <Shield className="w-6 h-6" />,
                label: "Atividades da conta",
              },
              { icon: "🤝", label: "Doação" },
              {
                icon: <CalendarDays className="w-6 h-6" />,
                label: "Agende sua Coleta",
              },
              {
                icon: <Truck className="w-6 h-6" />,
                label: "Saiba os dias de Coleta",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
              >
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
            <Button className="w-full bg-[#2B5B3C] text-white hover:bg-[#2B5B3C]/90">
              Aprender
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
