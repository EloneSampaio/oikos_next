"use client";

import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Mail } from "lucide-react";
import Link from "next/link";

export default function TwoFactorPage() {
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

        <h2 className="text-white text-xl font-medium mb-4">
          Canais habilitados para 2FA:
        </h2>

        <div className="space-y-3">
          {/* WhatsApp */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-white" />
                <div>
                  <h3 className="text-white font-medium">Whatsapp</h3>
                  <p className="text-white/70 text-sm">
                    Número: (66) 6 6666-6666
                  </p>
                </div>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Remover / Alterar
              </Button>
            </div>
          </div>

          {/* Telegram */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Send className="text-white" />
                <div>
                  <h3 className="text-white font-medium">Telegram</h3>
                  <p className="text-white/70 text-sm">
                    Número: (66) 6 6666-6666
                    <br />
                    Nome de usuário: @OikosUmaPampa
                  </p>
                </div>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Remover / Alterar
              </Button>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#166534] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="text-white" />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-white/70 text-sm">
                    Endereço: christian.cesar@aluno.ufr.edu.br
                  </p>
                </div>
              </div>
              <Button variant="link" className="text-white hover:text-white/90">
                Remover / Alterar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
