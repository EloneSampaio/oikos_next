"use client";

import { ArrowLeft, User, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#2B5B3C]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/profile">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <Link href="/christian/profile/view">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-[#006400]"
            >
              <User className="h-5 w-5 text-white" />
            </Button>
          </Link>
        </header>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              1ª Etapa:{" "}
              <span className="font-normal">Confirme alguns dados!</span>
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Apesar de pegarmos os dados da Receita Federal, algumas
              informações podem estar incorreta, como telefone, email, endereço,
              pedimos que verifique, por favor.
            </p>
          </div>

          {/* Image Upload */}
          <div className="text-center">
            <span className="text-lg font-medium text-white">Imagem</span>
            <div className="mt-4 flex flex-col items-center">
              <div className="mb-2 h-24 w-24 rounded-full bg-[#00FF00] flex items-center justify-center">
                <Upload className="h-12 w-12 text-[#008000]" />
              </div>
              <span className="text-sm text-white/90">Anexar foto</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cnpj" className="text-white">
                  CNPJ
                </Label>
                <Input
                  id="cnpj"
                  placeholder="00.000.000-00"
                  className=" text-white placeholder:text-white/70 border-green-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inscricao" className="text-white">
                  Inscrição Estadual
                </Label>
                <Input
                  id="inscricao"
                  placeholder="00.000.000-0"
                  className=" text-white placeholder:text-white/70 border-green-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="razao" className="text-white">
                Razão Social
              </Label>
              <Input
                id="razao"
                placeholder="Nome da razão social"
                className=" text-white placeholder:text-white/70 border-green-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fantasia1" className="text-white">
                Fantasia
              </Label>
              <Input
                id="fantasia1"
                placeholder="Nome fantasia"
                className=" text-white placeholder:text-white/70 border-green-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fantasia2" className="text-white">
                Fantasia
              </Label>
              <Input
                id="fantasia2"
                placeholder="Nome fantasia"
                className=" text-white placeholder:text-white/70 border-green-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="joao@example.com"
                className=" text-white placeholder:text-white/70 border-green-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contato" className="text-white">
                Contato
              </Label>
              <Input
                id="contato"
                placeholder="(99) 9 9999-9999"
                className=" text-white placeholder:text-white/70 border-green-800"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="receita"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#008000]"
                />
                <Label
                  htmlFor="receita"
                  className="text-sm font-medium leading-none text-white"
                >
                  Situação Receita Federal
                </Label>
              </div>

              <div className="flex items-center space-x-2 pb-4">
                <Checkbox
                  id="ativo"
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#008000]"
                />
                <Label
                  htmlFor="ativo"
                  className="text-sm font-medium leading-none text-white"
                >
                  Ativo na plataforma
                </Label>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <Link href="/christian/register/step2">
            <Button className="w-full bg-[#346445]  hover:bg-[#00FF00]/90 text-white">
              Próximo
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
