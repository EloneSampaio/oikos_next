import { BackButton } from "@/components/back-button";
import { OikosLogo } from "@/components/oikos-logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-[#228B22] p-6 flex flex-col">
      <BackButton />
      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        <OikosLogo />
        <h2 className="text-white text-xl mb-2">
          Autenticação de 2 fatores habilitada
        </h2>
        <p className="text-white text-center text-sm mb-8">
          Para continuar o acesso ao sistema, informe o código de 6 dígitos que
          recebeu em seu dispositivo
        </p>

        <div className="flex gap-2 mb-8">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 bg-white rounded-lg text-center text-xl"
            />
          ))}
        </div>

        <div className="text-white text-sm mb-8">
          Não recebeu o código? Clique{" "}
          <Link href="#" className="underline">
            aqui
          </Link>{" "}
          para reenviar.
        </div>

        <div className="flex items-center gap-2 mb-8">
          <Checkbox
            id="remember"
            className="border-white data-[state=checked]:bg-[#CCFF00] data-[state=checked]:border-[#CCFF00]"
          />
          <label htmlFor="remember" className="text-white text-sm">
            Lembrar meu acesso neste dispositivo por 30 dias
          </label>
        </div>

        <Button className="w-full bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-gray-800">
          Verificar
        </Button>
      </div>
    </div>
  );
}
