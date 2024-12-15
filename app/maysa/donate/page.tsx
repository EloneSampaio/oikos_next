import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header title="Doação " />
      <div className="flex-grow p-4 pt-28">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="material"
              className="block text-sm font-medium text-gray-700"
            >
              Material Doado
            </label>
            <input
              type="text"
              id="material"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black placeholder:text-white/70 border-none"
              defaultValue="Armário de Cozinha"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantidade
            </label>
            <input
              type="number"
              id="quantity"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black placeholder:text-white/70 border-none"
              defaultValue="1"
            />
          </div>
          <div>
            <label
              htmlFor="condition"
              className="block text-sm font-medium text-gray-700"
            >
              Estado de Conservação
            </label>
            <input
              type="text"
              id="condition"
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black placeholder:text-white/70 border-none"
              defaultValue="Usado"
            />
          </div>
          <div>
            <label
              htmlFor="observations"
              className="block text-sm font-medium text-gray-700"
            >
              Observações
            </label>
            <textarea
              id="observations"
              text-black
              rows={4}
              className="p-4 rounded-[8px] w-full bg-gray-100 text-black placeholder:text-white/70 border-none"
              defaultValue="Estou doando o armário de cozinha, pois vou viajar e já comprei outro. O armário é usado, e não tem o vidro da cristaleira."
            ></textarea>
          </div>
          <div className="flex space-x-2 overflow-x-auto py-2">
            <Image
              src="/assets/armario.png"
              alt="Armário 1"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/assets/armario.png"
              alt="Armário 2"
              width={100}
              height={100}
              className="rounded-md"
            />
            <Image
              src="/assets/armario.png"
              alt="Armário 3"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <Link
            href="/maysa/schedule"
            className="block w-full bg-[#E5C846] text-center py-3 rounded-md text-gray-800 font-medium"
          >
            Continuar
          </Link>
        </form>
      </div>
    </main>
  );
}
