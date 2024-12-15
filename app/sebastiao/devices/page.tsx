"use client";

import { ArrowLeft, Search, Smartphone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-[#1B7A3E]">
       <Link href="/sebastiao/show-profile">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>
      <div className="max-w-3xl mx-auto p-4">
        {/* Search Bar */}
        <div className="relative mb-6 bg-[#166534] rounded-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          <Input
            className="pl-10 bg-transparent border-none text-white placeholder:text-white/70"
            placeholder="Consultar nomes dos dispositivos autorizados e/ou bloqueados para login"
          />
        </div>

        {/* Authorized Devices */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-medium mb-4">
            Dispositivos autorizados para acesso:
          </h2>
          <div className="space-y-3">
            {/* Device 1 */}
            <div className="bg-[#166534] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-white" />
                  <div>
                    <h3 className="text-white font-medium">
                      Xiaomi Redmi 11 C
                    </h3>
                    <p className="text-white/70 text-sm">
                      MAC: A:a:BBCC:DD:EE:F
                      <br />
                      Cidade: Rondonópolis - MT
                    </p>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-white hover:text-white/90"
                >
                  Revogar acesso
                </Button>
              </div>
            </div>

            {/* Device 2 */}
            <div className="bg-[#166534] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-white" />
                  <div>
                    <h3 className="text-white font-medium">
                      IPhone 22XR ULTRA PRO MAX COM CARREGADOR USB C
                    </h3>
                    <p className="text-white/70 text-sm">
                      MAC: A1:E2:C3:D4:E5
                      <br />
                      Cidade: Poxoréu - MT
                    </p>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-white hover:text-white/90"
                >
                  Revogar acesso
                </Button>
              </div>
            </div>

            {/* Device 3 */}
            <div className="bg-[#166534] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-white" />
                  <div>
                    <h3 className="text-white font-medium">X570 Aorus Elite</h3>
                    <p className="text-white/70 text-sm">
                      MAC: C1:D3:E5:D7:9
                      <br />
                      Cidade: Cuiabá - MT
                    </p>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-white hover:text-white/90"
                >
                  Revogar acesso
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blocked Devices */}
        <div>
          <h2 className="text-white text-xl font-medium mb-4">
            Dispositivos bloqueados para acesso:
          </h2>
          <div className="space-y-3">
            <div className="bg-[#166534] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-white" />
                  <div>
                    <h3 className="text-white font-medium">IphoneDoZézin</h3>
                    <p className="text-white/70 text-sm">
                      MAC: BB:DD:CC:FF:GG
                      <br />
                      Cidade: Cuiabá - MT
                    </p>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-white hover:text-white/90"
                >
                  Remover bloqueio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
