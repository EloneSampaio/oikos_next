"use client";

import { ArrowLeft, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ViewProfilePage() {
  return (
    <main className="min-h-screen bg-[#008000]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/home">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>

          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <Button className="w-8 h-8 rounded-full p-0 overflow-hidden bg-gray-200">
            <Image
              src="/assets/avatar.png"
              alt="Perfil"
              width={32}
              height={32}
              className="object-cover"
            />
          </Button>
        </header>

        {/* Personal Profile Card */}
        <Card className="mb-6 bg-[#7CCD4E] border-none rounded-xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="flex flex-rows">
                <Image
                  src="/assets/avatar.png"
                  alt="Lucas Silva"
                  width={100}
                  height={100}
                  className="rounded-full mb-3"
                />
                <div className="space-y-1 text-sm text-[#006400] text-center">
                  <h2 className="text-xl font-extrabold text-[#008000] mb-2">
                    Lucas Silva
                  </h2>
                  <p>009.999.888-77</p>
                  <p>(065) 9 9999-9999</p>
                  <p>lucas.silva@example.com</p>
                  <p>Av. Daniel Rodrigues Veodato</p>
                </div>
              </div>
              <Link href="/sebastiao/show-profile">
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-[#274E2D] text-white rounded-xl border-[#008000] hover:bg-[#008000] hover:text-white"
                >
                  Editar perfil
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Companies Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Empresas</h3>
          <Card className="bg-[#7CCD4E] border-none rounded-xl">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="flex flex-rows">
                  <Image
                    src="/company-logo.svg"
                    alt="Reuse Logo"
                    width={100}
                    height={100}
                    className="rounded-full mb-3"
                  />
                  {/* <span className="text-xs text-[#006400] mt-1 block text-center">
                      Atualizar foto
                    </span> */}

                  <div className="space-y-1 text-sm text-[#006400] text-center">
                    <h3 className="text-xl font-bold text-[#008000] mb-2">
                      Reuse
                    </h3>
                    <p>(065) 9 9999-9999 · lucas.silva@example.com</p>
                    <p>Av. Daniel Rodrigues Veodato - Parque Sagrada</p>
                    <p>Família, Rondonópolis - MT, 78735-133</p>
                  </div>
                </div>
                <Link href="/christian/profile">
                  <Button
                    variant="outline"
                    className="mt-4 w-full bg-[#274E2D] text-white border-[#008000] rounded-xl hover:bg-[#008000] hover:text-white"
                  >
                    Editar perfil
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
