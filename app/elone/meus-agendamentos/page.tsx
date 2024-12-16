"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Edit2, Trash2 } from "lucide-react";
import { getToken } from "../../helpers/token";

interface Collection {
  id: string;
  date: string;
  material: string;
  quantity: number;
  collector: string;
  status: "Confirmado" | "Realizado" | "Cancelado";
}

function getStatusColor(status: Collection["status"]) {
  switch (status) {
    case "Confirmado":
      return "text-blue-600";
    case "Realizado":
      return "text-green-600";
    case "Cancelado":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
}

export default function Collections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const generateMockData = (): Collection[] => [
    {
      id: "1",
      date: new Date().toISOString(),
      material: "Caixa de papelão",
      quantity: 5,
      collector: "João",
      status: "Confirmado",
    },
    {
      id: "2",
      date: new Date().toISOString(),
      material: "Papel reciclável",
      quantity: 10,
      collector: "Carlos",
      status: "Realizado",
    },
    {
      id: "3",
      date: new Date().toISOString(),
      material: "Latas de alumínio",
      quantity: 8,
      collector: "Ana",
      status: "Cancelado",
    },
  ];

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const token = getToken();
        const response = await fetch("http://localhost:3333/appointments", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          // Mostra dados fictícios caso a API retorne uma lista vazia
          if (data.length === 0) {
            setCollections(generateMockData());
          } else {
            setCollections(data);
          }
        } else {
          console.error("Erro ao carregar os dados.");
          setCollections(generateMockData()); // Exibe dados fictícios em caso de erro
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        setCollections(generateMockData()); // Exibe dados fictícios em caso de falha na conexão
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Tem certeza que deseja apagar este registro?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3333/agendamento-editar/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Registro apagado com sucesso!");
        setCollections((prev) => prev.filter((collection) => collection.id !== id));
      } else {
        alert("Erro ao apagar o registro.");
      }
    } catch (error) {
      console.error("Erro ao apagar o registro:", error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Meus agendamentos" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 pt-28">
        <div className="space-y-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="bg-white rounded-lg border p-4 flex gap-4"
            >
              <Image
                src="/assets/rb_825.png"
                alt={`Material: ${collection.material}`}
                width={80}
                height={80}
                className="rounded-lg object-contain"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">{new Date(collection.date).toLocaleString()}</span>
                  <span className={`text-sm ${getStatusColor(collection.status)}`}>
                    {collection.status}
                  </span>
                </div>
                <p className="font-medium">{collection.material}</p>
                <p className="text-sm text-gray-600">Quantidade: {collection.quantity}</p>
                <p className="text-sm text-gray-600">Coletor: {collection.collector}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => router.push(`http://localhost:3333/agendamento-editar/${collection.id}`)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  title="Editar"
                >
                  <Edit2 className="text-blue-600" size={20} />
                </button>
                <button
                  onClick={() => handleDelete(collection.id)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  title="Apagar"
                >
                  <Trash2 className="text-red-600" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
