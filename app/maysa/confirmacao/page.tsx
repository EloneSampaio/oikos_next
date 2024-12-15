import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#517D36]">
      <Header />
      <div className="px-4 pt-16">
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto text-center">
          <h1 className="text-[#517D36] text-4xl font-bold mb-4">Oba!</h1>
          <h2 className="text-[#517D36] text-2xl font-bold mb-4">
            Sua doação já está disponível
          </h2>
          <p className="text-gray-700 mb-8">
            Vamos te avisar assim que alguém se interessar!
          </p>
          <Link
            href="/donations"
            className="inline-block w-full bg-[#E5C846] text-center py-3 rounded-md text-gray-800 font-medium mb-8"
          >
            OK
          </Link>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg"
              alt="Pessoas celebrando"
              width={200}
              height={200}
              className="max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

