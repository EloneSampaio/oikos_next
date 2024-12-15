
"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page after 2 seconds
    const timer = setTimeout(() => {
      router.push("/christian/home")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#008000] p-4">
      <div className="text-center">
        <Image
          src="/oikos-logo.svg"
          alt="Oikos Logo"
          width={120}
          height={120}
          className="mx-auto mb-4"
          priority
        />
        <h1 className="text-3xl font-semibold text-white">Oikos</h1>
      </div>
    </main>
  )
}

