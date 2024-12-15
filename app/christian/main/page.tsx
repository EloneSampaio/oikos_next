"use client"

import { Search, Menu, User, Droplet, Box, Cpu, Car, RecycleIcon, Heart, Calendar, Truck, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = [
  { icon: Droplet, label: "Óleo de Cozinha", color: "bg-[#00FF00]" },
  { icon: Box, label: "Papelão", color: "bg-[#00FF00]" },
  { icon: Cpu, label: "Eletrônicos", color: "bg-[#00FF00]" },
  { icon: Car, label: "Sucatas", color: "bg-[#00FF00]" },
]

const services = [
  { icon: RecycleIcon, label: "Reciclar" },
  { icon: Heart, label: "Doação" },
  { icon: Calendar, label: "Agende sua Coleta" },
  { icon: Truck, label: "Solicite dia de Coleta" },
]

export default function MainPage() {
  return (
    <main className="min-h-screen bg-[#008000]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Menu className="h-6 w-6 text-white" />
          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <Button size="icon" variant="ghost" className="rounded-full bg-[#006400]">
            <User className="h-5 w-5 text-white" />
          </Button>
        </header>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
          <Input
            placeholder="O que deseja reciclar?"
            className="bg-[#006400] pl-10 text-white placeholder:text-white/70 border-none"
          />
        </div>

        {/* Categories */}
        <div className="mb-8 grid grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, label, color }) => (
            <div key={label} className="text-center">
              <div className={`${color} mx-auto mb-2 rounded-lg p-3 w-14 h-14 flex items-center justify-center`}>
                <Icon className="h-6 w-6 text-[#008000]" />
              </div>
              <span className="text-xs text-white">{label}</span>
            </div>
          ))}
        </div>

        {/* REDUZE Section */}
        <div className="mb-8 rounded-lg bg-[#006400] p-6 relative overflow-hidden">
          <div className="absolute right-4 top-4">
            <Image
              src="/world-icon.svg"
              alt="World Icon"
              width={40}
              height={40}
              className="opacity-50"
            />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            RE<span className="text-[#00FF00]">DUZE</span>
          </h2>
          <p className="mb-4 text-sm text-white/80">
            Nulla vel facilisis velit. Fusce sit amet tellus egestas, ullamcorper elit quis, scelerisque nisl. Nunc quis ex sit amet nulla facilisis. Sed sagittis feugiat varius. Nulla iaculis lobortis sapien in interdum.
          </p>
          <Button className="w-full bg-[#008000] text-white hover:bg-[#006400]">
            <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
            Registrar-se com o Google
          </Button>
        </div>

        {/* Services Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-white">Serviços</h3>
          <div className="grid grid-cols-4 gap-4">
            {services.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-2 rounded-lg bg-[#00FF00] p-3 w-14 h-14 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-[#008000]" />
                </div>
                <span className="text-xs text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learn Section */}
        <div className="rounded-lg bg-[#00FF00] p-6">
          <div className="flex justify-between">
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-bold text-[#008000]">
                Aprenda como colaborar com a reciclagem.
              </h2>
              <p className="mb-4 text-sm text-[#006400]">
                A única forma de mudarmos o nosso futuro é aprendendo!
              </p>
              <Button className="bg-[#008000] text-white hover:bg-[#006400]">
                Aprender
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="w-1/3">
              <Image
                src="/learn-illustration.svg"
                alt="Learning Illustration"
                width={100}
                height={120}
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

