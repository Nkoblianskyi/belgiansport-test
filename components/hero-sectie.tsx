"use client"
import { Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSectie() {
  // Automatische datumupdate elke maand
  const getHuidigeMaandJaar = () => {
    const nu = new Date()
    const maandNamen = [
      "JANUARI",
      "FEBRUARI",
      "MAART",
      "APRIL",
      "MEI",
      "JUNI",
      "JULI",
      "AUGUSTUS",
      "SEPTEMBER",
      "OKTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    const huidigeMaand = maandNamen[nu.getMonth()]
    const huidigJaar = nu.getFullYear()
    return `${huidigeMaand} ${huidigJaar}`
  }

  return (
    <>
      {/* Hero Sectie - Desktop */}
      <div className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
          {/* Bovenkant */}
          <div className="space-y-1">
            {/* 1. Titel */}
            <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
              BESTE <span className="text-yellow-400">BELGISCHE</span> GOKSITES
            </h1>

            {/* 2. Ondertitel met datum */}
            <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
              BIJGEWERKT VOOR {getHuidigeMaandJaar()}
            </h2>
          </div>

          {/* Middendeel */}
          <div className="space-y-2 lg:space-y-2 mx-auto">
            {/* 3. Beschrijving */}
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight max-w-[850px] mx-auto">
              Het vinden van kwalitatieve gokplatforms kan een uitdaging zijn zonder de juiste begeleiding. Gelukkig
              bent u op de perfecte plek, want wij begrijpen de moeilijkheden waarmee gokkers te maken hebben en weten
              precies hoe we hen kunnen helpen.
            </p>

            <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
              Beginnend met de meest geschikte welkomstpromoties, zorgvuldig geselecteerd door onze experts.
            </p>

            {/* 4. Kleine tekst over voorwaarden */}
            <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
              *Elke welkomstaanbieding kan aparte voorwaarden hebben. Alleen nieuwe klanten. Leeftijd 21+
            </p>
          </div>

          {/* Onderaan */}
          <div className="space-y-2 lg:space-y-4 mt-1">
            {/* 5. Badges */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">100% Legaal</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="flex gap-0.5">
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-black"></div>
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-yellow-400"></div>
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-red-600"></div>
                </div>
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">BE Gereguleerd</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Snelle Opnames</span>
              </div>
            </div>

            {/* 6. Onderste tekst */}
            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
              Speel verantwoord. Wedden en Voorwaarden zijn van toepassing.
            </div>
          </div>
        </div>
      </div>

      {/* Hero Sectie - Tablet */}
      <div className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          {/* Bovenkant */}
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">
              BESTE <span className="text-yellow-400">BELGISCHE</span> GOKSITES
            </h1>
            <h2 className="text-base md:text-lg font-bold">BIJGEWERKT VOOR {getHuidigeMaandJaar()}</h2>
          </div>

          {/* Middendeel */}
          <div className="flex justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">100% Legaal</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="flex gap-0.5 md:gap-1">
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-black"></div>
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-yellow-400"></div>
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-red-600"></div>
              </div>
              <span className="text-xs md:text-sm font-bold">BE Gereguleerd</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">Snelle Opnames</span>
            </div>
          </div>

          {/* Onderaan */}
          <div className="text-[10px] md:text-xs">Speel verantwoord. Wedden en Voorwaarden van toepassing.</div>
        </div>
      </div>

      {/* Hero Sectie - Mobiel */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-2 w-full h-[140px]"
        style={{
          backgroundImage: "url(/belgian-stadium.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Donkere overlay voor betere tekstleesbaarheid */}
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

        {/* Gecombineerde koptekst + hero-inhoud */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Koptekst sectie */}
          <div className="h-[35px] flex items-center justify-center px-2">
            <Link href="/" className="flex items-center gap-1">
              <div className="w-6 h-6 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
                <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6" />
              </div>
              <h1 className="text-[10px] font-bold whitespace-nowrap">
                <span className="text-black">BESTE </span>
                <span className="text-yellow-400">BELGISCHE </span>
                <span className="text-red-600">GOK</span>
                <span className="text-yellow-400">SITES</span>
              </h1>
            </Link>
          </div>

          {/* Hero-inhoud */}
          <div className="flex-1 px-2 text-center flex flex-col justify-center">
            {/* Hoofdtitels */}
            <div className="mb-2">
              <h1 className="text-lg font-bold mb-1 drop-shadow-lg leading-tight">
                BESTE <span className="text-yellow-400">BELGISCHE</span> GOKSITES
              </h1>
              <h2 className="text-[12px] font-bold drop-shadow-lg leading-tight">
                BIJGEWERKT VOOR {getHuidigeMaandJaar()}
              </h2>
            </div>

            {/* Functie badges */}
            <div className="flex justify-center gap-3 mb-2">
              <div className="flex flex-col items-center">
                <Shield className="w-4 h-4 mb-0.5" />
                <span className="text-[8px] font-bold leading-tight">100% Legaal</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-0.5">
                  <div className="w-1 h-3 bg-black"></div>
                  <div className="w-1 h-3 bg-yellow-400"></div>
                  <div className="w-1 h-3 bg-red-600"></div>
                </div>
                <span className="text-[8px] font-bold leading-tight">BE Gereguleerd</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-4 h-4 mb-0.5" />
                <span className="text-[8px] font-bold leading-tight">Snelle Opnames</span>
              </div>
            </div>

            {/* Onderste tekst */}
            <div className="text-[7px] leading-tight">
              <div>Speel verantwoord. Wedden en Voorwaarden van toepassing.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
