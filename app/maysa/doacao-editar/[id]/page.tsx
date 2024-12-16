"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import Image from "next/image";
import { getToken } from "../../../helpers/token";

export default function EditDonationPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [donation, setDonation] = useState({
    description: "",
    quantity: 0,
    condition: "",
    additionalNotes: "",
    attachments: [],
    status: "OPEN",
  });
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const token = getToken();
        const response = await fetch(`http://localhost:3333/donations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDonation(data);
        } else {
          alert("Erro ao carregar a doação.");
        }
      } catch (error) {
        console.error("Erro ao buscar a doação:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonation();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDonation((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = getToken();
      const response = await fetch(`http://localhost:3333/donations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(donation),
      });

      if (response.ok) {
        alert("Doação atualizada com sucesso!");
        router.push("/donations");
      } else {
        alert("Erro ao atualizar a doação.");
      }
    } catch (error) {
      console.error("Erro ao atualizar a doação:", error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header title="Editar Doação" />
      <div className="flex-grow p-4 pt-28">
        <form className="space-y-4" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <input
              type="text"
              name="description"
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
              name="quantity"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
              Estado de Conservação
            </label>
            <select
              name="condition"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.condition}
              onChange={handleInputChange}
            >
              <option value="NEW">Novo</option>
              <option value="USED">Usado</option>
            </select>
          </div>
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
              Notas Adicionais
            </label>
            <textarea
              name="additionalNotes"
              rows={4}
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black"
              value={donation.additionalNotes}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex space-x-2 overflow-x-auto py-2">
            {donation.attachments.map((attachment, index) => (
              <Image
                key={index}
                src={attachment || "/assets/default.png"}
                alt={`Imagem ${index + 1}`}
                width={100}
                height={100}
                className="rounded-md"
              />
            ))}
          </div>
          <button
            type="submit"
            className="block w-full bg-[#E5C846] text-center py-3 rounded-md text-gray-800 font-medium"
          >
            Salvar
          </button>
        </form>
      </div>
    </main>
  );
}
