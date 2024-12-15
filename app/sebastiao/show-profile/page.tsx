"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ShowProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Christian",
    lastName: "Cesar",
    phone: "99 9 9999-9999",
    cpf: "00000000000",
    address: {
      street: "Rua Gregorio Clemente",
      number: "999",
      complement: "Casa",
      district: "Jardim Olavo Klen",
      city: "Rondonopolis",
      state: "Mato Grosso",
      stateAcronym: "MT",
      zipCode: "78735000",
      latitude: 0,
      longitude: 0,
    },
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  // Função para atualizar os valores do formulário
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);

    const token = localStorage.getItem("accessToken");
    console.log("Token:", token);
    if (!token) {
      setError("Token de autenticação não encontrado.");
      setIsSaving(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados. Verifique os campos.");
      }

      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error(error);
      setError("Erro ao salvar os dados. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2F5C2E] px-4 py-6 text-white">
      {/* Profile Header */}
      <Link href="/christian/home">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-6 w-6 text-white" />
        </Button>
      </Link>

      {/* Profile Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-[#1F3F1E] flex items-center justify-center mb-2">
          <div className="w-12 h-12 rounded-full border-2 border-white/20" />
        </div>
        <h1 className="text-2xl font-medium">Perfil</h1>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="dados" className="w-full">
        <TabsList className="w-full bg-transparent border-b border-white/20 mb-6">
          <TabsTrigger
            value="dados"
            className="flex-1 text-white data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400"
          >
            Dados
          </TabsTrigger>
          <TabsTrigger
            value="seguranca"
            className="flex-1 text-white data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400"
          >
            Segurança
          </TabsTrigger>
        </TabsList>

        {/* Dados Editáveis */}
        <TabsContent value="dados" className="space-y-4">
          <Card className="bg-[#1F3F1E] border-none p-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Primeiro Nome"
              className="w-full bg-transparent border-none text-white placeholder-white/60"
            />
          </Card>

          <Card className="bg-[#1F3F1E] border-none p-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Sobrenome"
              className="w-full bg-transparent border-none text-white placeholder-white/60"
            />
          </Card>

          <Card className="bg-[#1F3F1E] border-none p-4">
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              placeholder="CPF"
              className="w-full bg-transparent border-none text-white placeholder-white/60"
            />
          </Card>

          <Card className="bg-[#1F3F1E] border-none p-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Telefone"
              className="w-full bg-transparent border-none text-white placeholder-white/60"
            />
          </Card>

          <Card className="bg-[#1F3F1E] border-none p-4">
            <div className="flex items-center gap-2">
              <p>Redes sociais vinculadas:</p>
              <MessageSquare className="w-5 h-5 text-green-400" />
              <Send className="w-5 h-5 text-blue-400" />
            </div>
          </Card>
        </TabsContent>

        {/* Aba Segurança */}
        <TabsContent value="seguranca" className="space-y-4">
          <Link href="/sebastiao/2fa" className="bg-[#1F3F1E] border-none">
            <Card className="bg-[#1F3F1E] border-none">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Autenticação de 2 fatores (Habilitado)"
                className="w-full bg-transparent border-none text-white placeholder-white/60"
              />
            </Card>
          </Link>

          <Link
            href="/sebastiao/activity"
            className="bg-[#1F3F1E] border-none p-4"
          >
            <Card className="bg-[#1F3F1E] border-none p-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Histórico de atividades"
                className="w-full bg-transparent border-none text-white placeholder-white/60"
              />
            </Card>
          </Link>

          <Link
            href="/sebastiao/devices"
            className="bg-[#1F3F1E] border-none p-4"
          >
            <Card className="bg-[#1F3F1E] border-none p-4">
              <Button
                variant="outline"
                className="bg-[#1F3F1E] border-none p-4"
              >
                Dispositivos autorizados
              </Button>
            </Card>
          </Link>
        </TabsContent>
      </Tabs>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Button
          className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? "Salvando..." : "Salvar"}
        </Button>
      </div>

      {error && (
        <p className="mt-4 text-center text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
