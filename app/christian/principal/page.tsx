import Link from "next/link"
import { Search, UserPlus, Newspaper, Map } from 'lucide-react'

const menuItems = [
  { icon: Search, label: "Busca", href: "/busca" },
  { icon: UserPlus, label: "Cadastro", href: "/cadastro" },
  { icon: Map, label: "Mapa", href: "/mapa" },
  { icon: Newspaper, label: "Notícias", href: "/noticias" },
]

export default function PrincipalPage() {
  return (
    <main className="min-h-screen bg-[#008000] p-4">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-2xl font-bold text-white">Menu Principal</h1>
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-6 text-white transition hover:bg-white/20"
            >
              <item.icon className="mb-2 h-8 w-8" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

