"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../../helpers/token";

export default function DonatePage() {
  const { isAuthenticated } = useAuth();
  const [donation, setDonation] = useState({
    description: "",
    quantity: 1,
    condition: "",
    additionalNotes: "",
    images: [],
  });
  const router = useRouter();
  const token = getToken();

 // Redireciona se o usuário não estiver autenticado
/*  if (!isAuthenticated) {
  router.push("/sebastiao/login"); // Redireciona para a página de login
  return null; // Retorna `null` para evitar renderização
} */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setDonation((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Token do usuário:", token);
    try {
      const response = await fetch("http://localhost:3333/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(donation),
      });
      if (response.ok) {
        alert("Doação cadastrada com sucesso!");
        router.push("/donations");
      } else {
        alert("Erro ao cadastrar doação.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header title="Doação" />
      <div className="flex-grow p-4 pt-28">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="material" className="block text-sm font-medium text-gray-700">
              Material Doado
            </label>
            <input
              type="text"
              id="material"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              id="quantity"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
              Estado de Conservação
            </label>
            <input
              type="text"
              id="condition"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.condition}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="observations" className="block text-sm font-medium text-gray-700">
              Observações
            </label>
            <textarea
              id="observations"
              rows={4}
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.additionalNotes}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex space-x-2 overflow-x-auto py-2">
            {donation.images.map((image, index) => (
              <Image key={index} src={image} alt={`Imagem ${index + 1}`} width={100} height={100} className="rounded-md" />
            ))}
          </div>
          <button type="submit" className="block w-full bg-[#E5C846] text-center py-3 rounded-md text-gray-800 font-medium">
            Salvar
          </button>
        </form>
      </div>
    </main>
  );
}
