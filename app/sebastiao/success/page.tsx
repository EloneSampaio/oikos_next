import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#2B5B3C] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <CheckCircle2 className="w-32 h-32 text-[#4ADE80]" />
        <h1 className="text-white text-3xl font-semibold text-center">
          Verificação efetuada com sucesso!
        </h1>
        <Link href="/" className="w-full">
          <Button className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#2B5B3C] font-semibold">
            Inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
