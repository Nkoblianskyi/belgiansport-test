"use client"

import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Goksite } from "../types"
import Image from "next/image"

interface SiteKaartProps {
  site: Goksite
  rang: number
}

export function SiteKaart({ site, rang }: SiteKaartProps) {
  const renderSterren = (score: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(score) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-2 font-bold text-lg">{score}</span>
      </div>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Mobiele layout */}
      <div className="md:hidden">
        {/* Koptekst mobiel */}
        <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
          <div className="flex items-center gap-3">
            
            <div className="bg-black p-2 rounded">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.naam}
                width={160}
                height={60}
                className="h-14 object-contain"
              />
            </div>
          </div>
          <div className="text-right">
            {renderSterren(site.rating)}
            <div className="text-xs text-gray-500 mt-1">
              {site.gebruikersScore.toFixed(1)} ({site.stemmen.toLocaleString()} beoordelingen)
            </div>
          </div>
        </div>

        {/* Inhoud mobiel */}
        <div className="p-3 space-y-3">
          <div className="bg-gray-50 border-2 border-yellow-400 p-3 rounded-lg text-center">
            <div className="text-xs text-gray-600 font-semibold mb-1">WELKOMSTAANBIEDING</div>
            <div className="text-xl font-bold text-gray-900">{site.welkomstaanbieding}</div>
          </div>

          {/* Kenmerken */}

          {/* CTA knop */}
          <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 text-lg">
            <a href={site.link} target="_blank" rel="noopener noreferrer">
              BEZOEK SITE <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>

          {/* Voorwaarden */}
          <div className="text-[10px] text-gray-600 leading-tight">{site.voorwaarden}</div>
        </div>
      </div>

      {/* Desktop/Tablet layout */}
      <div className="hidden md:grid grid-cols-12 gap-4 p-4 items-center">
        {/* Logo met rang badge */}
        <div className="col-span-3 flex flex-col gap-2">
          
          <div className="bg-black p-3 rounded">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={site.naam}
              width={200}
              height={80}
              className="h-20 object-contain"
            />
          </div>
        </div>

        {/* Bonus */}
        <div className="col-span-5">
          <div className="bg-gray-50 border-2 border-yellow-400 p-3 rounded-lg text-center">
            <div className="text-xs text-gray-600 font-semibold">WELKOMSTAANBIEDING</div>
            <div className="text-lg font-bold text-gray-900">{site.welkomstaanbieding}</div>
          </div>
        </div>

        {/* Score & CTA */}
        <div className="col-span-4 flex flex-col gap-2">
          <div>
            {renderSterren(site.rating)}
            <div className="text-xs text-gray-500 mt-1">recensies ({site.stemmen.toLocaleString()})</div>
          </div>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <a href={site.link} target="_blank" rel="noopener noreferrer">
              BEZOEK SITE <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Voorwaarden */}
        <div className="col-span-12 text-[10px] text-gray-600 leading-tight pt-2 border-t">{site.voorwaarden}</div>
      </div>
    </Card>
  )
}
