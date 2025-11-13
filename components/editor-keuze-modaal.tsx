"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Goksite } from "../types"

interface EditorKeuzeModaalProps {
  goksites: Goksite[]
}

export function EditorKeuzeModaal({ goksites }: EditorKeuzeModaalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const topSite = goksites[0]

  if (!topSite) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
      >
        <X className="w-6 h-6" />
      </Button>

      <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-yellow-400">
        <div className="bg-gray-900 text-center py-4 px-6 border-b-4 border-yellow-400">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded font-bold text-sm mb-2">
            #1 TOPKEUZE
          </div>
          <div className="flex justify-center">
            <img src={topSite.logo || "/placeholder.svg"} alt={topSite.naam} className="h-16 object-contain" />
          </div>
        </div>

        <div className="p-6 text-center">
          {/* Rating stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Rating score */}
          <div className="text-3xl font-bold text-gray-900 mb-6">
            {topSite.rating.toFixed(1)}
            <span className="text-lg text-gray-500">/10</span>
          </div>

          {/* Bonus offer */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-6">
            <div className="text-xs text-gray-600 font-semibold mb-2">WELKOMSTAANBIEDING</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{topSite.welkomstaanbieding}</div>
            <div className="text-sm text-gray-600">{topSite.bonus}</div>
          </div>

          {/* Features */}
          

          {/* CTA Button */}
          <Link href={topSite.link || "#"} target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              CLAIM BONUS NU
            </Button>
          </Link>

          {/* Terms */}
          
        </div>

        <div className="bg-gray-100 border-t-2 border-gray-200 py-3 px-6 text-center">
          <p className="text-xs text-gray-700 font-semibold">21+ | Speel Verantwoord</p>
          <p className="text-xs text-gray-600">gamingcommission.be</p>
        </div>
      </div>
    </div>
  )
}
