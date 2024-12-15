"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText, Package, Wine, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

export default function CollectionSchedulePage() {
  return (
    <div className="min-h-screen bg-[#2B5B3C]">
      <Header title="Oikos" />
      <div className="max-w-md mx-auto p-4 pt-28 text-white">
        {/* Header */}
        {/* <div className="flex items-center text-xl justify-center">
          <h2>Agenda de Coleta para a sua localização</h2>
        </div> */}

        {/* Info Box */}
        <div className="bg-[#166534] rounded-lg p-4 mb-6">
          <p className="text-white">
            A coleta seletiva é na próxima quinta-feira, no período matutino!
            Organize os seguintes materiais:
          </p>
        </div>

        {/* Material Icons */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#4ADE80] rounded-lg p-3 flex flex-col items-center">
            <FileText className="h-6 w-6 text-[#166534] mb-2" />
            <span className="text-[#166534] text-sm text-center">Papel</span>
          </div>
          <div className="bg-[#4ADE80] rounded-lg p-3 flex flex-col items-center">
            <Package className="h-6 w-6 text-[#166534] mb-2" />
            <span className="text-[#166534] text-sm text-center">Papelão</span>
          </div>
          <div className="bg-[#4ADE80] rounded-lg p-3 flex flex-col items-center">
            <Wine className="h-6 w-6 text-[#166534] mb-2" />
            <span className="text-[#166534] text-sm text-center">Vidro</span>
          </div>
          <div className="bg-[#4ADE80] rounded-lg p-3 flex flex-col items-center">
            <ShoppingBasket className="h-6 w-6 text-[#166534] mb-2" />
            <span className="text-[#166534] text-sm text-center">Plástico</span>
          </div>
        </div>

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

        {/* Ok Button */}
        <Link href="/christian/home">
          <Button className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#2B5B3C] font-semibold">
            Ok
          </Button>
        </Link>
      </div>
    </div>
  );
}
