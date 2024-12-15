"use client";

import { Header } from "@/components/header";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function ReportForm() {
  const router = useRouter();

  const handleConfirm = () => {
    router.push("/maysa/report-confirmation");
  };

  return (
    <main className="min-h-screen bg-[#2E7D32]">
      <Header title="Denuncia" />
      <div className="bg-white min-h-[calc(100vh-64px)] text-black pt-[5rem]">
        <div className="p-4 space-y-6">
          <div>
            <label className="block text-lg mb-2">
              O que deseja denunciar?
            </label>
            <Textarea
              className="min-h-[100px]"
              defaultValue="Os terrenos estão abandonados, com muito lixo e indícios de larva de dengue."
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Endereço</label>
            <Input defaultValue="R. Sol Ardente, Copacabana, Rondonópolis, Mato Grosso" />
          </div>

          <div className="h-64 bg-gray-100 rounded-lg mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-0.1276!3d51.5074!2z!5e0!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto gap-2 pb-4">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?text=Waste+Photo+${i}`}
                  alt={`Foto de resíduos ${i}`}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <button
            className="w-full bg-[#DC2626] text-white text-center py-4 rounded-lg font-bold mt-8"
            onClick={handleConfirm}
          >
            Finalizar Denúncia
          </button>
        </div>
      </div>
    </main>
  );
}
