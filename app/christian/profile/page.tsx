"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("accessToken"); // Obtém o token do localStorage

  // Função para buscar dados da API
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("http://localhost:3333/profile/info", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
          },
        }); // Altere para sua URL da API

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await response.json();
        console.log("Dados do perfil:", data);
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(true);
      }
    }

    fetchProfile();
  }, []);

  const renderProfileInfo = () => {
    if (error) {
      return (
        <p className="text-sm text-red-500">
          Erro ao carregar dados do perfil.
        </p>
      );
    }

    if (!profileData) {
      return <p className="text-sm text-gray-500">Carregando...</p>;
    }

    const {
      firstName,
      lastName,
      phone,
      cpf,
      address: { street, number, city, stateAcronym },
    } = profileData;

    return (
      <>
        <h2 className="text-xl font-bold text-[#008000] mb-2">
          {firstName} {lastName}
        </h2>
        <div className="space-y-1 text-sm text-[#006400]">
          <p>{cpf}</p>
          <p>{phone}</p>
          <p>{`${street}, ${number}, ${city}, ${stateAcronym}`}</p>
        </div>
      </>
    );
  };

  return (
    <main className="min-h-screen  bg-[#2B5B3C]">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link href="/christian/home">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6 text-white" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Oikos</h1>
          <div className="w-6" /> {/* Spacer for alignment */}
        </header>

        {/* Profile Card */}
        <Card className="mb-6 bg-[#7CCD4E] border-none rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/avatar.png"
                alt="Profile Picture"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              {renderProfileInfo()}
              <Link href="/sebastiao/show-profile">
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-[#274E2D] border-[#274E2D] text-white hover:bg-[#008000] hover:text-white rounded-xl"
                >
                  Editar perfil
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Companies Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Empresas</h3>
            <p className="text-sm text-white/90 mb-4">
              Caro{" "}
              <span className="font-semibold">
                {profileData?.firstName || "Usuário"}
              </span>
              , toda e qualquer informação deverá passar por um período de
              conferência de até 3 dias úteis. Solicitamos que você forneça os
              dados reais de sua empresa, garantindo que estejam em seu nome.
              Caso ainda não tenha um CNPJ, recomendamos que procure um contador
              ou crie um MEI no portal do Governo Federal.
            </p>
            <p className="text-sm text-white/90">
              Todo e qualquer dado é de nossa responsabilidade a proteção e sua
              persistência. Informamos segundo a LGPD que seus dados podem ser
              usados para estudo e divulgação de resultados, porém anonimizados.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                CNPJ
              </label>
              <Input
                placeholder="Informe o CNPJ"
                className="bg-[#006400] text-white placeholder:text-white/70 border-none"
              />
            </div>

            <div className="flex items-center space-x-2 pb-3">
              <Checkbox
                id="terms"
                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#008000]"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-white"
              >
                Aceitar os termos
              </label>
              <br />
            </div>

            <Link href="/christian/register">
              <Button className="w-full  bg-[#356646] text-white hover:bg-[#356646]/90 margin-bottom: 10px">
                Cadastrar empresa
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
