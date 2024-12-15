import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#2B5B3C] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <div className="w-32 h-32 rounded-full bg-red-500 flex items-center justify-center">
          <X className="w-20 h-20 text-white" />
        </div>
        <h1 className="text-white text-xl font-medium text-center">
          Código incorreto inserido muitas vezes, acesso bloqueado
          temporariamente.
        </h1>
        <Link href="/login" className="w-full">
          <Button className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#2B5B3C] font-semibold">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
