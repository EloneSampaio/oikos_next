"use client";

import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Doação" }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (

    <>
      {/* Header */}
      <header className="bg-[#517D36] p-4 flex items-center fixed top-0 w-full z-50">
        <Link href="/christian/home">
          <button className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </button>
        </Link>

        <Link href="/" className="text-white text-2xl font-bold mx-auto pr-6">
          {title}
        </Link>
        <button className="text-white" onClick={toggleModal}>
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-4/5 max-w-md rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Modal Content */}
            <nav className="space-y-4">
              <Link
                href="/elone/agendamento"
                className="block text-lg text-[#517D36] font-semibold"
              >
                Agendamento
              </Link>
              <Link
                href="/christian/profile/view"
                className="block text-lg text-[#517D36] font-semibold"
              >
                Perfil
              </Link>
              <Link
                href="/elone/minhas-coletas"
                className="block text-lg text-[#517D36] font-semibold"
              >
                Minhas Coletas
              </Link>
              <Link
                href="/elone/meus-agendamentos"
                className="block text-lg text-[#517D36] font-semibold"
              >
                Meus Agendamentos
              </Link>
              <Link
                href="/elone/cadastro"
                className="block text-lg text-[#517D36] font-semibold"
              >
                Cadastrar material reciclado
              </Link>
              <Link
                href="/sebastiao/collection-schedule"
                className="block text-lg text-[#517D36] font-semibold"
              >
                Cadastro de Cronograma de Coleta
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>

  );
}
