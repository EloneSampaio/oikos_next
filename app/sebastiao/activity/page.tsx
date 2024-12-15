"use client";

import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Lock, RotateCcw, AlertTriangle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-[#1B7A3E]">
       <Link href="/christian/home">
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
            placeholder="Pesquise eventos efetuados na conta, como publicações, logins, trocas de senha, etc..."
          />
        </div>

        {/* Activity List */}
        <div className="space-y-3">
          {/* Successful Login */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Lock className="text-white mt-1" />
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  Tentativa de login realizada com sucesso
                </h3>
                <p className="text-white/70 text-sm">
                  Dia 10/10/2024 às 18:50:32 pelo dispositivo Xiaomi(01)
                  <br />
                  IP: 127.0.0.1 - Cidade: Rondonópolis - MT
                </p>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Ver mais
              </Button>
            </div>
          </div>

          {/* Failed Login */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Lock className="text-white mt-1" />
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  Tentativa de login realizada sem sucesso
                </h3>
                <p className="text-white/70 text-sm">
                  Dia 10/10/2024 às 19:50:32 pelo dispositivo IphoneDoZézin
                  <br />
                  IP: 111.111.111.111 - Cidade: Cuiabá - MT
                </p>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Ver mais
              </Button>
            </div>
          </div>

          {/* Successful Password Change */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <RotateCcw className="text-white mt-1" />
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  Tentativa de troca de senha realizada com êxito
                </h3>
                <p className="text-white/70 text-sm">
                  Dia 10/10/2024 às 18:50:50 pelo dispositivo Xiaomi(01)
                  <br />
                  IP: 127.0.0.1 - Cidade: Rondonópolis - MT
                </p>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Ver mais
              </Button>
            </div>
          </div>

          {/* Failed Password Change */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-white mt-1" />
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  Tentativa de troca de senha realizada sem êxito
                </h3>
                <p className="text-white/70 text-sm">
                  Dia 10/10/2024 às 19:51:19 pelo dispositivo IphoneDoZézin
                  <br />
                  IP: 111.111.111.111 - Cidade: Cuiabá - MT
                </p>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Ver mais
              </Button>
            </div>
          </div>

          {/* Donation Publication */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="text-white mt-1" />
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  Publicação de doação realizada com êxito
                </h3>
                <p className="text-white/70 text-sm">
                  Dia 20/10/2024 às 8:11:20 pelo dispositivo Xiaomi(01)
                  <br />
                  IP: 127.0.0.1 - Cidade: Rondonópolis - MT
                </p>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Ver mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
