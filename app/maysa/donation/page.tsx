import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const donations = [
  {
    id: 1,
    title: "Armário de Cozinha",
    condition: "Usado",
    method: "Para coletar",
    status: "DISPONÍVEL",
    image: "/assets/armario.png",
    link: "http://localhost:3000/maysa/available",
  },
  {
    id: 2,
    title: "Cama de Casal",
    condition: "Usado",
    method: "para coletar",
    status: "PROCESSANDO",
    image: "/assets/cama.png",
    link: "http://localhost:3000/maysa/available",
  },
  {
    id: 3,
    title: "Poltrona",
    condition: "Precisa de Reparos",
    method: "Para coletar",
    status: "DISPONÍVEL",
    image: "/assets/sofa.png",
    link: "http://localhost:3000/maysa/available",
  },
];

export default function DonationsPage() {
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
          />
        </div>
        <div className="space-y-3">
          {donations.map((donation) => (
            <Link key={donation.id} href={donation.link}>
              <div
                key={donation.id}
                className="bg-white rounded-xl p-3 flex items-center gap-4 mb-4"
              >
                <Image
                  src={donation.image}
                  alt={donation.title}
                  width={80}
                  height={80}
                  className="rounded-md object-cover w-20 h-20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-sm font-medium ${
                        donation.status === "DISPONÍVEL"
                          ? "text-[#517D36]"
                          : "text-orange-500"
                      }`}
                    >
                      {donation.status}
                    </span>
                  </div>
                  <h3 className="font-medium">{donation.title}</h3>
                  <p className="text-sm text-gray-600">{donation.condition}</p>
                  <p className="text-sm text-gray-600">{donation.method}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
