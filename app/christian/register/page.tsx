"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getToken } from "../../helpers/token";

export default function CreateCompanyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    identity: "",
    identityType: "CNPJ",
    companyType: "COMPANY",
    stateRegistration: "",
    status: true,
    isHeadquarters: true,
    businessName: "",
    corporateName: "",
    acceptAppointments: false,
    email: "",
    phones: "",
    address: null as any, // Será preenchido pela localização
    startedActivityIn: "",
    businessHours: [] as any[], // Mantido vazio por padrão
    wasteItems: [] as any[], // Mantido vazio por padrão
  });
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [loading, setLoading] = useState(false);

  // Obter localização do navegador
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.identity || !formData.businessName || !formData.corporateName || !formData.email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const token = getToken();
    const companyData = {
      ...formData,
      address: location
        ? {
            latitude: location.latitude,
            longitude: location.longitude,
          }
        : null, // Se localização não for obtida, mantém nulo
    };

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3333/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(companyData),
      });

      if (response.ok) {
        alert("Empresa criada com sucesso!");
        router.push("/christian/home");
      } else {
        const errorData = await response.json();
        alert(`Erro ao criar empresa: ${errorData.message || "Erro desconhecido"}`);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

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
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Cadastrar Empresa</h2>
            <p className="text-sm text-white/90">
              Por favor, preencha os dados abaixo para criar uma empresa.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="identity" className="text-white">
                CNPJ
              </Label>
              <Input
                id="identity"
                placeholder="00.000.000/0000-00"
                className="text-white placeholder:text-white/70 border-green-800"
                value={formData.identity}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="stateRegistration" className="text-white">
                Inscrição Estadual
              </Label>
              <Input
                id="stateRegistration"
                placeholder="00.000.000-0"
                className="text-white placeholder:text-white/70 border-green-800"
                value={formData.stateRegistration}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="businessName" className="text-white">
                Nome Fantasia
              </Label>
              <Input
                id="businessName"
                placeholder="Nome fantasia"
                className="text-white placeholder:text-white/70 border-green-800"
                value={formData.businessName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="corporateName" className="text-white">
                Razão Social
              </Label>
              <Input
                id="corporateName"
                placeholder="Razão social"
                className="text-white placeholder:text-white/70 border-green-800"
                value={formData.corporateName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="joao@example.com"
                className="text-white placeholder:text-white/70 border-green-800"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="phones" className="text-white">
                Telefone
              </Label>
              <Input
                id="phones"
                placeholder="(99) 9 9999-9999"
                className="text-white placeholder:text-white/70 border-green-800"
                value={formData.phones}
                onChange={handleInputChange}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptAppointments"
                checked={formData.acceptAppointments}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: { id: "acceptAppointments", type: "checkbox", checked },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#008000]"
              />
              <Label
                htmlFor="acceptAppointments"
                className="text-sm font-medium leading-none text-white"
              >
                Aceita agendamentos
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className={`w-full ${
              loading ? "bg-gray-500 text-gray-200 cursor-not-allowed" : "bg-[#346445] hover:bg-[#00FF00]/90"
            } text-white`}
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar Empresa"}
          </Button>
        </form>
      </div>
    </main>
  );
}
