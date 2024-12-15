"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CollectionSchedulePage() {
  return (
    <div className="min-h-screen bg-[#2B5B3C]">
      <Header title="Cronograma de Coleta" />
      <div className="max-w-md mx-auto p-4 pt-[5.5rem]">
        {/* Header */}

        {/* Form */}
        <form className="space-y-4">
          <Input
            placeholder="Setor"
            className="bg-[#166534] border-none text-white placeholder:text-white/70"
          />

          <Input
            placeholder="Bairro"
            className="bg-[#166534] border-none text-white placeholder:text-white/70"
          />

          <Textarea
            placeholder="Cronograma da Coleta"
            className="bg-[#166534] border-none text-white placeholder:text-white/70 min-h-[100px]"
          />

          <Input
            placeholder="Materiais Coletados"
            className="bg-[#166534] border-none text-white placeholder:text-white/70"
          />

          <Input
            placeholder="Localização"
            className="bg-[#166534] border-none text-white placeholder:text-white/70"
          />

          {/* Map */}
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

          {/* Submit Button */}
          <Link href="/sebastiao/schedule">
            <Button
              type="submit"
              className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#2B5B3C] font-semibold"
            >
              Cadastrar
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
