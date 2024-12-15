import { BackButton } from "@/components/back-button";
import { OikosLogo } from "@/components/oikos-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RecoverPage() {
  return (
    <div className="min-h-screen bg-[#228B22] p-6 flex flex-col">
      <BackButton />
      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        <OikosLogo />
        <h2 className="text-white text-xl mb-8">Recuperar conta</h2>

        <div className="w-full space-y-4">
          <Input
            type="email"
            placeholder="E-mail"
            className="bg-[#005c2d] border-none text-white placeholder:text-gray-300"
          />

          <div className="text-center text-white my-4">Ou</div>

          <Input
            type="tel"
            placeholder="Numero celular"
            className="bg-[#005c2d] border-none text-white placeholder:text-gray-300"
          />

          <Button className="w-full bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-gray-800">
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
