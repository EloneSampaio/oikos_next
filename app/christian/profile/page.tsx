"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getToken } from "../../helpers/token";
import { useRouter } from "next/navigation";

interface ProfileData {
  firstName: string;
  lastName: string;
  cpf: string;
  phone: string;
  address: {
    street: string;
    number: string;
    city: string;
    stateAcronym: string;
  };
}

export default function ProfilePage() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Campos para o cadastro de empresas
  const [cnpj, setCnpj] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Função para buscar dados da API
  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = getToken();
        const response = await fetch("http://localhost:3333/profile/info", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do perfil");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleRegisterCompany = () => {
    if (!cnpj.trim() || !termsAccepted) {
      alert("Por favor, insira o CNPJ e aceite os termos para continuar.");
      return;
    }

    // Redirecionar para a página de cadastro da empresa
    router.push("/christian/register");
  };

  const renderProfileInfo = () => {
    if (loading) {
      return <p className="text-sm text-gray-500">Carregando...</p>;
    }

    if (error) {
      return (
        <p className="text-sm text-red-500">
          Erro ao carregar dados do perfil.
        </p>
      );
    }

    if (!profileData) {
      return null;
    }

    const {
      firstName,
      lastName,
      cpf,
      phone,
      address: { street, number, city, stateAcronym },
    } = profileData;

    return (
      <>
        <h2 className="text-xl font-bold text-[#008000] mb-2">
          {firstName} {lastName}
        </h2>
        <div className="space-y-1 text-sm text-[#006400]">
          <p>CPF: {cpf}</p>
          <p>Telefone: {phone}</p>
          <p>Endereço: {`${street}, ${number}, ${city}, ${stateAcronym}`}</p>
        </div>
      </>
    );
  };

  return (
    <main className="min-h-screen bg-[#2B5B3C]">
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
              , certifique-se de fornecer informações reais para sua empresa. Se
              não tiver um CNPJ, crie um MEI no portal do Governo Federal.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                CNPJ
              </label>
              <Input
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                placeholder="Informe o CNPJ"
                className="bg-[#006400] text-white placeholder:text-white/70 border-none"
              />
            </div>

            <div className="flex items-center space-x-2 pb-3">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#008000]"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-white"
              >
                Aceitar os termos
              </label>
            </div>

            <Button
              onClick={handleRegisterCompany}
              className="w-full bg-[#356646] text-white hover:bg-[#356646]/90 margin-bottom: 10px"
            >
              Cadastrar empresa
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
