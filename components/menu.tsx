"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface HeaderProps {
  title?: string;
}

export function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        <button className="text-white" onClick={toggleModal}>
          <Menu />
        </button>
      </div>

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
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
