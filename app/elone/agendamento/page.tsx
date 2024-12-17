"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getToken } from "../../helpers/token";

interface WasteOption {
  id: string;
  name: string;
}

interface CompanyOption {
  id: string;
  corporateName: string;
  status: boolean;
}

export default function ScheduleDetails() {
  const router = useRouter();
  const [companies, setCompanies] = useState<CompanyOption[]>([]);
  const [wastes, setWastes] = useState<WasteOption[]>([]);
  const [formData, setFormData] = useState({
    companyId: "",
    wastes: [] as string[],
    scheduleFor: "",
    
  });
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      try {
        const [companiesResponse, wastesResponse] = await Promise.all([
          fetch("http://localhost:3333/companies", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch("http://localhost:3333/materials", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (companiesResponse.ok && wastesResponse.ok) {
          const companiesData = await companiesResponse.json();
          const wastesData = await wastesResponse.json();
          setCompanies(companiesData.filter((company) => company.status)); // Filtra apenas empresas ativas
          setWastes(wastesData);
        } else {
          console.error("Erro ao carregar empresas ou resíduos.");
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWasteChange = (id: string) => {
    setFormData((prev) => {
      const updatedWastes = prev.wastes.includes(id)
        ? prev.wastes.filter((wasteId) => wasteId !== id)
        : [...prev.wastes, id];
      return { ...prev, wastes: updatedWastes };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const transformedFormData = {
      ...formData,
      scheduleFor: formData.scheduleFor, // Transforma o valor para o formato ISO 8601
    };

    try {
      const token = getToken();

      console.log("dados para enviar", transformedFormData);
      const response = await fetch("http://localhost:3333/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(transformedFormData),
      });

      if (response.ok) {
        alert("Coleta agendada com sucesso!");
        router.push("/elone/coleta-agendada");
      } else {
        alert("Erro ao agendar a coleta.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
    } finally {
      setLoading(false);
    }
  };

  if (dataLoading) {
    return <p>Carregando dados...</p>;
  }

  return (
    <main className="min-h-screen bg-[#2B5B3C] space-y-6">
      <Header title="Agendamento" />
      <div className="bg-white min-h-[calc(100vh-64px)] mt-8rem p-4 text-black ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg mb-2 text-black">Empresa</label>
            <select
              name="companyId"
              className="w-full border rounded-lg p-3"
              value={formData.companyId}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Selecione a empresa
              </option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.corporateName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg mb-2 text-black">Tipos de Resíduos</label>
            <div className="flex flex-wrap gap-4">
              {wastes.map((waste) => (
                <label key={waste.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={waste.id}
                    checked={formData.wastes.includes(waste.id)}
                    onChange={() => handleWasteChange(waste.id)}
                  />
                  <span>{waste.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2">Data de Coleta</label>
            <input
              type="datetime-local"
              name="scheduleFor"
              className="w-full border rounded-lg p-3"
              value={formData.scheduleFor}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="relative">
            <Image
              src="/assets/recycled.png"
              alt="Símbolos de reciclagem"
              width={400}
              height={450}
              className="w-full"
            />
            <button
              type="submit"
              disabled={loading}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Agendando..." : "Agendar coleta"}
          </button>
        </form>
      </div>
    </main>
  );
}
