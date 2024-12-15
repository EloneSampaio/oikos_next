"use client";

import { ArrowLeft, User, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";

export default function AddressRegisterPage() {
  const [mapType, setMapType] = useState<"Map" | "Satellite">("Map");

  return (
    <main className="min-h-screen  bg-[#2B5B3C]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/register">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <Link href="/christian/home">
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
              2ª Etapa:{" "}
              <span className="font-normal">Confirme seu endereço</span>
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Falta pouco, agora confirme seu endereço e nos envie a localização
              exata do seu estabelecimento. Assim todos podem te achar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#00FF00] mb-4">
              Endereço
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cep" className="text-white">
                  CEP
                </Label>
                <Input
                  id="cep"
                  placeholder="00000-000"
                  className=" text-white placeholder:text-white/70 border-green-800"
                />
              </div>

              <div className="grid grid-cols-[2fr,1fr] gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rua" className="text-white">
                    Rua
                  </Label>
                  <Input
                    id="rua"
                    placeholder="Rua José Alencar"
                    className=" text-white placeholder:text-white/70 border-green-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numero" className="text-white">
                    Número
                  </Label>
                  <Input
                    id="numero"
                    placeholder="1000"
                    className=" text-white placeholder:text-white/70 border-green-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="complemento" className="text-white">
                  Complemento
                </Label>
                <Input
                  id="complemento"
                  placeholder="Casa"
                  className=" text-white placeholder:text-white/70 border-green-800"
                />
              </div>

              <div className="grid grid-cols-[2fr,1fr] gap-4">
                <div className="space-y-2">
                  <Label htmlFor="municipal" className="text-white">
                    Municipal
                  </Label>
                  <Input
                    id="municipal"
                    placeholder="Rondonópolis"
                    className=" text-white placeholder:text-white/70 border-green-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uf" className="text-white">
                    UF
                  </Label>
                  <Input
                    id="uf"
                    placeholder="MT"
                    className=" text-white placeholder:text-white/70 border-green-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Localização</Label>
                <div className="relative rounded-lg overflow-hidden">
                  <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-white/90"
                      onClick={() => {}}
                    >
                      <Plus className="h-4 w-4 text-[#008000]" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-white/90"
                    >
                      <Minus className="h-4 w-4 text-[#008000]" />
                    </Button>
                  </div>
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-white rounded p-1 text-xs">
                      <button
                        className={`px-2 py-1 rounded ${
                          mapType === "Map" ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setMapType("Map")}
                      >
                        Map
                      </button>
                      <button
                        className={`px-2 py-1 rounded ${
                          mapType === "Satellite" ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setMapType("Satellite")}
                      >
                        Satellite
                      </button>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-86.8104!3d33.5186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzA3LjAiTiA4NsKwNDgnMzcuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-[10px] text-gray-600 px-2 py-1">
                    Map data ©2019 Google · Terms of Use · Report a map error
                  </div>
                </div>
                <Link
                  href="/christian/register/step3"
                  className="block w-full text-center py-3 rounded-md text-gray-800 font-medium"
                >
                  <Button className="w-full bg-[#396b4b] hover:bg-[#2B5B3C]/90 p-4 text-white">
                    Próximo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
