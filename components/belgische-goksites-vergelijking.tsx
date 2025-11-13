"use client"
import { SiteKaart } from "./site-kaart"
import { CookieBanner } from "./cookie-banner"
import { InfoSecties } from "./info-secties"
import { EditorKeuzeModaal } from "./editor-keuze-modaal"
import { HeroSectie } from "./hero-sectie"
import { goksites } from "../data/belgische-data"
import type { Goksite } from "../types"
import { Koptekst } from "./koptekst"

export default function BelgischeGoksitesVergelijking() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className=" relative">
          <div className="w-full min-w-0">

            <Koptekst />


            <HeroSectie />



            {/* Siteslijst */}
            <div className="space-y-2 w-full max-w-[1000px] mx-auto">
              {goksites.map((site: Goksite, index: number) => (
                <div key={site.id} className="w-full">
                  <SiteKaart site={site} rang={index + 1} />
                </div>
              ))}
              <InfoSecties />
            </div>


          </div>
        </div>
      </div>

      <CookieBanner />
      <EditorKeuzeModaal goksites={goksites} />
    </>
  )
}
