import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

interface Collection {
  date: string;
}

const collections: Collection[] = [
  {
    date: "Segunda-feira: 09:00 14:30 19:00",
  },
  {
    date: "Terça-feira: 09:00 14:30 19:00 ",
  },
  {
    date: "Quarta-feira: 09:00 14:30 19:00",
  },
  {
    date: "Quinta-feira: 09:00 14:30 19:00",
  },
  {
    date: "Sexta-feira: 09:00 14:30 19:00",
  },
];

export default function Collections() {
  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Dias das coletas" />
      <div className="bg-white min-h-[calc(100vh-64px)] p-4 text-black pt-28">
        <div className="space-y-4">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border p-4 flex gap-4"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">
                    {collection.date}
                  </span>
                </div>
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
