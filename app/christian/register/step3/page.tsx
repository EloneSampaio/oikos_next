"use client";

import { useState } from "react";
import { ArrowLeft, User, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface WasteItem {
  id: number;
  type: string;
  value: string;
  unit: string;
}

export default function WasteRegisterPage() {
  const [selectedWaste, setSelectedWaste] = useState<WasteItem[]>([
    { id: 1, type: "Papel", value: "1,00", unit: "Kg" },
    { id: 2, type: "Papelão", value: "1,00", unit: "Un" },
  ]);
  const [currentWaste, setCurrentWaste] = useState({
    type: "Papel",
    value: "1,00",
    unit: "Kg",
  });

  const handleAddWaste = () => {
    setSelectedWaste([
      ...selectedWaste,
      {
        id: Date.now(),
        type: currentWaste.type,
        value: currentWaste.value,
        unit: currentWaste.unit,
      },
    ]);
  };

  const handleRemoveWaste = (id: number) => {
    setSelectedWaste(selectedWaste.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#2B5B3C]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/register/step2">
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

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              3ª Etapa:{" "}
              <span className="font-normal">Quais resíduos você trabalha?</span>
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Esta etapa, você deve selecionar 1 ou mais resíduos no quais você
              recolhe.
            </p>
            <p className="mt-2 text-sm text-white/90">
              Você ainda pode informar valor ou não. Exemplo: Caso você recolha
              latinhas, alumínios, muitos compram pelo o quilo. Caso fazer
              sentido ao clicar em cima do resíduo você pode ou não informar
              valor e unidade de medida.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#00FF00] mb-4">
              Resíduos
            </h3>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
              <Input
                placeholder="O que deseja reciclar?"
                className=" bg-[#1f3f2a] text-white placeholder:text-white/70 border-green-800 p-4 rounded-xl"
              />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-white">Resíduo</Label>
                <Input
                  value={currentWaste.type}
                  onChange={(e) =>
                    setCurrentWaste({ ...currentWaste, type: e.target.value })
                  }
                  className=" text-white placeholder:text-white/70 border-green-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">Valor</Label>
                  <Input
                    value={currentWaste.value}
                    onChange={(e) =>
                      setCurrentWaste({
                        ...currentWaste,
                        value: e.target.value,
                      })
                    }
                    className=" text-white placeholder:text-white/70 border-green-800"
                  />
                </div>
                <div>
                  <Label className="text-white">Unidade</Label>
                  <Input
                    value={currentWaste.unit}
                    onChange={(e) =>
                      setCurrentWaste({ ...currentWaste, unit: e.target.value })
                    }
                    className=" text-white placeholder:text-white/70 border-green-800"
                  />
                </div>
              </div>

              <Button
                onClick={handleAddWaste}
                className="w-full bg-[#497249] text-white hover:bg-[#006400]/90"
              >
                Confirmar
              </Button>
            </div>
          </div>

          {selectedWaste.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-[#00FF00] mb-4">
                Resíduos selecionados
              </h3>
              <div className="space-y-3">
                {selectedWaste.map((waste) => (
                  <div
                    key={waste.id}
                    className="grid grid-cols-[2fr,1fr,1fr,auto] gap-2 items-center"
                  >
                    <div className=" text-white rounded px-3 py-2 border-green-700">
                      {waste.type}
                    </div>
                    <div className=" text-white rounded px-3 py-2 border-green-700">
                      {waste.value}
                    </div>
                    <div className=" text-white rounded px-3 py-2 border-green-700">
                      {waste.unit}
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleRemoveWaste(waste.id)}
                      className="text-[#FF0000] hover:text-[#FF0000]/90 hover:bg-transparent"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
              <Link href="/christian/home">
                <Button className="w-full mt-4 bg-[#497249] text-white hover:bg-[#006400]/90">
                  Finalizar
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
