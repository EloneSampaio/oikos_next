import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

interface Collection {
  date: string;
  material: string;
  quantity: number;
  collector: string;
  status: "Confirmado" | "Realizado" | "Cancelado";
}

const collections: Collection[] = [
  {
    date: "11/08/2024 17:30",
    material: "Caixa de papelão",
    quantity: 1,
    collector: "João",
    status: "Confirmado",
  },
  {
    date: "11/08/2024 17:30",
    material: "Caixa de papelão",
    quantity: 1,
    collector: "Luis",
    status: "Realizado",
  },
  {
    date: "11/08/2024 17:30",
    material: "Caixa de papelão",
    quantity: 1,
    collector: "Carlos",
    status: "Cancelado",
  },
  {
    date: "11/08/2024 17:30",
    material: "Caixa de papelão",
    quantity: 1,
    collector: "Bruno",
    status: "Realizado",
  },
  {
    date: "11/08/2024 17:30",
    material: "Caixa de papelão",
    quantity: 1,
    collector: "Sam",
    status: "Cancelado",
  },
  {
    date: "11/08/2024 17:30",
    material: "Caixa de papelão",
    quantity: 1,
    collector: "Sampaio",
    status: "Realizado",
  },
];

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
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Minhas coletas" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 text-black pt-28">
        <div className="space-y-4">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border p-4 flex gap-4"
            >
              <Image
                src="/assets/rb_825.png"
                alt="Ícone de caixa"
                width={80}
                height={80}
                className="rounded-lg object-contain"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">
                    {collection.date}
                  </span>
                  <span
                    className={`text-sm ${getStatusColor(collection.status)}`}
                  >
                    {collection.status}
                  </span>
                </div>
                <p className="font-medium">{collection.material}</p>
                <p className="text-sm text-gray-600">{collection.quantity}</p>
                <p className="text-sm text-gray-600">{collection.collector}</p>
              </div>
            </div>
          ))}
          <Link
            href="/christian/home"
            className="block w-full bg-[#C3D744] text-center py-4 rounded-lg font-bold"
          >
            voltar ao inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
