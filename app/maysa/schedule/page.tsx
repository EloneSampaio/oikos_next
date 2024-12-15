import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header title="Doação" />
      <div className="flex-grow p-4 pt-28 text-black">
        <div className="flex justify-center space-x-4 mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="delivery-type"
              value="entrega"
            />
            <span className="ml-2">Entrega</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="delivery-type"
              value="coleta"
              checked
            />
            <span className="ml-2">Coleta</span>
          </label>
        </div>
        <div className="mb-4 bg-gray-200 h-48 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Mapa placeholder</span>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="date1"
              className="block text-sm font-medium text-gray-700"
            >
              Data e hora 1
            </label>
            <input
              type="text"
              id="date1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              defaultValue="10/06/2024 17:30"
            />
          </div>
          <div>
            <label
              htmlFor="date2"
              className="block text-sm font-medium text-gray-700"
            >
              Data e hora 2
            </label>
            <input
              type="text"
              id="date2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              defaultValue="11/06/2024 17:30"
            />
          </div>
          <div>
            <label
              htmlFor="date3"
              className="block text-sm font-medium text-gray-700"
            >
              Data e hora 3
            </label>
            <input
              type="text"
              id="date3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              defaultValue="12/06/2024 17:30"
            />
          </div>
          <Link href="/maysa/success">
            <button
              type="submit"
              className="w-full bg-[#E5C846] text-center py-3 rounded-md text-gray-800 font-medium"
            >
              Postar Doação
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}
