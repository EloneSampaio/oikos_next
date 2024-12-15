"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ReportModalPage } from "../report-modal/page";
import { useState } from "react";

export default function ComplaintForm() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleReport = () => {
    // Handle the report action here
    console.log("Donation reported");
    setIsReportModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1B8B4A] p-4 flex items-center gap-4">
        <Menu className="h-6 w-6 text-white" />
        <h1 className="text-white text-xl font-normal">Denúncia</h1>
      </header>

      {/* Form */}
      <main className="p-4 flex flex-col gap-6">
        <div className="space-y-2 text-black">
          <label className="text-sm font-medium text-gray-900">
            Material Doado
          </label>
          <Input
            defaultValue="Armário de Cozinha"
            className="border-[#1B8B4A] rounded"
          />
        </div>

        <div className="space-y-2 text-black">
          <label className="text-sm font-medium text-gray-900">
            Tipo de Denuncia
          </label>
          <Input
            defaultValue="Material em condição inadequado"
            className="border-[#1B8B4A] rounded"
          />
          {/* <Select defaultValue="inadequate">
            <SelectTrigger className="border-[#1B8B4A] rounded">
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inadequate">
                Material em condição inadequada
              </SelectItem>
            </SelectContent>
          </Select> */}
        </div>

        <div className="space-y-2 text-black">
          <label className="text-sm font-medium text-gray-900">
            Justificativa
          </label>
          <Textarea
            defaultValue="O armário de cozinha deveria ir para o lixão! Sem condições de utilizar o armário."
            className="min-h-[200px] border-[#1B8B4A] rounded resize-none"
          />
        </div>

        <Link href="/maysa/report-confirmation">
          <Button className="w-full bg-[#DC0032] hover:bg-[#DC0032]/90 text-white rounded">
            Denunciar
          </Button>
        </Link>
      </main>
    </div>
  );
}
