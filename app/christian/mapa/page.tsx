"use client"

import { useEffect } from "react"
import { Loader } from 'lucide-react'

export default function MapaPage() {
  useEffect(() => {
    // Here you would initialize your map
    // Using Google Maps or another provider
  }, [])

  return (
    <main className="min-h-screen bg-[#008000]">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 flex items-center justify-center bg-white/10">
          <Loader className="h-8 w-8 animate-spin text-white" />
        </div>
        <div id="map" className="h-full w-full" />
      </div>
    </main>
  )
}

