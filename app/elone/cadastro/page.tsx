"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getToken } from "../../helpers/token";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    materialType: "",
    quantity: 0,
    collectionDate: "",
    additionalNotes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = getToken();
    try {
      const response = await fetch("http://localhost:3333/materials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Material cadastrado com sucesso!");
        router.push("/elone/material-cadastrado");
      } else {
        alert("Erro ao cadastrar o material.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Cadastro de material" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 pt-28 text-black">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg mb-2">Tipo de material</label>
            <div className="relative">
              <input
                type="text"
                name="materialType"
                value={formData.materialType}
                onChange={handleInputChange}
                placeholder="Ex.: Papelão, Plástico"
                className="w-full border rounded-lg p-3 pr-10"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2">Quantidade</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Ex.: 5"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Data de coleta</label>
            <input
              type="datetime-local"
              name="collectionDate"
              value={formData.collectionDate}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Notas adicionais</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Detalhes sobre o material"
              className="w-full border rounded-lg p-3 min-h-[120px]"
            />
          </div>

          <div className="relative">
            <Image
              src="/assets/recycled.png"
              alt="Símbolos de reciclagem"
              width={400}
              height={150}
              className="rounded-lg w-full object-cover"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registrando..." : "Registrar Material"}
          </button>
        </form>
      </div>
    </main>
  );
}
