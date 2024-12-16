"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Search, Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { getToken } from "../../helpers/token";

export default function DonationsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = getToken();
        const response = await fetch("http://localhost:3333/donations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.length === 0) {
            setDonations([]);
          } else {
            setDonations(data);
          }
        } else {
          console.error("Erro ao carregar as doações.");
          setDonations([]);
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        setDonations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, [isAuthenticated, router]);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Tem certeza que deseja apagar esta doação?");
    if (!confirmDelete) return;

    try {
      const token = getToken();
      const response = await fetch(`http://localhost:3333/donations/${id}/cancel`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("Doação apagada com sucesso!");
        setDonations((prev) => prev.filter((donation) => donation.id !== id));
      } else {
        alert("Erro ao apagar a doação.");
      }
    } catch (error) {
      console.error("Erro ao apagar a doação:", error);
    }
  };

  const filteredDonations = donations.filter((donation) =>
    donation.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="min-h-screen bg-[#517D36]">
      <Header title="Lista de Doações" />
      <div className="p-4 space-y-4 pt-[5rem]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            type="search"
            placeholder="Pesquisar doação"
            className="w-full rounded-xl pl-10 bg-[#3B5C27] text-white placeholder:text-gray-400 border-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          {filteredDonations.map((donation) => (
            <div
              key={donation.id}
              className="bg-white rounded-xl p-3 flex items-center gap-4 mb-4"
            >
             
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-green-600 items-center">{donation.description}</h3>
                  <span
                    className={`text-sm font-medium ${
                      donation.status === "OPEN" ? "text-green-600" : "text-gray-600"
                    }`}
                  >
                    {donation.status === "OPEN" ? "Disponível" : "Outro"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Quantidade: {donation.quantity}
                </p>
                <p className="text-sm text-gray-600">{donation.condition === "NEW" ? "Novo" : "Usado"}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => router.push(`/maysa/doacao-editar/${donation.id}`)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                  title="Editar"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(donation.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                  title="Apagar"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
