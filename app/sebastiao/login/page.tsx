"use client";
import { useState } from "react";
import { BackButton } from "@/components/back-button";
import { OikosLogo } from "@/components/oikos-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "./../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // Função para enviar os dados para a API
  const handlerSubmit = async (e: any) =>{

      e.preventDefault();

      /// Dados que serão enviados para a API
      const payload = {
          email,
          password 
      }

      try{

        console.log("Dados armazenados nas váriáveis:", email, password);
        const response =  await fetch("http://localhost:3333/sessions",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload),
        });

        if(!response.ok){
          const errorData = await response.json();
          throw new Error(errorData.message || "Ocorreu um erro ao fazer login");
        }

        const data = await response.json();
        console.log("Login realizado com sucesso", data);
        console.log("Token:", data.token);
        login(data.token);
        router.push("/christian/home"); // Redireciona para a página home

      }catch(error: any){
          setErrorMessage(error.message || "Ocorreu um erro ao fazer login"); 
      }

  };

  return (
    <div className="min-h-screen bg-[#228B22] p-6 flex flex-col">
      <BackButton />
      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        <OikosLogo />
        <h2 className="text-white text-xl mb-8">Faça seu login</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={handlerSubmit}>
        <div className="w-full space-y-4">
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#005c2d] border-none text-white placeholder:text-gray-300"
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-[#005c2d] border-none text-white placeholder:text-gray-300"
          />
          <Button className="w-full bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-gray-800">
            Entrar
          </Button>
        </div>
        </form>
        <div className="w-full text-center text-white my-4">Ou</div>
        <button className="w-full bg-white text-gray-700 p-3 rounded-lg mb-4 flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Logar com Google
        </button>

        <Link href="/recover" className="text-white mt-4 hover:underline">
          Esqueci minha senha
        </Link>

        <Link href="/signup" className="text-white mt-6 hover:underline">
          Criar uma conta
        </Link>
      </div>
    </div>
  );
}
