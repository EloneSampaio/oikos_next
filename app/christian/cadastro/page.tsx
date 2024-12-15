"use client"

import * as Yup from 'yup';
import React,{useEffect, useState} from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/index";
import { LoginProps } from "../../types/index";
import Link from "next/link";


export default function CadastroPage() {

  const [user,setUser] = useState<LoginProps[]>([]);
  const { data, error, isLoading } = useSWR<any>(`/user`, fetcher);

  const [step, setStep] = useState(1)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string()
      .min(8, 'Senha deve ter pelo menos 8 caracteres')
      .required('Senha é obrigatória'),
    // ... outras validações
  });

  

  return (
    <main className="min-h-screen bg-[#008000] p-4">
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">Cadastro</h1>
        
        <form className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Digite seu nome"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Digite seu email"
                />
              </div>
              
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full rounded-lg bg-white p-3 font-medium text-[#008000] hover:bg-white/90"
              >
                Próximo
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Senha
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Digite sua senha"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg bg-white/10 p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Confirme sua senha"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full rounded-lg bg-white/10 p-3 font-medium text-white hover:bg-white/20"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white p-3 font-medium text-[#008000] hover:bg-white/90"
                >
                  Finalizar
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </main>
  )
}

