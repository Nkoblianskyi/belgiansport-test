import Link from "next/link"
import { ArrowLeft, Cookie, Shield, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookieBeleidPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar Home
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gray-900 text-white p-8 border-b-4 border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              
              <h1 className="text-4xl font-bold">Cookie Beleid</h1>
            </div>
            <p className="text-gray-300 text-lg">
              Laatst bijgewerkt:{" "}
              {new Date().toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Intro */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r">
              <p className="text-gray-800 leading-relaxed">
                Bij BelgianSport.com gebruiken we cookies om uw ervaring te verbeteren en onze website goed te laten
                functioneren. Dit beleid legt uit welke cookies we gebruiken en waarom.
              </p>
            </div>

            {/* Wat zijn cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-yellow-400 rounded"></div>
                Wat zijn cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies zijn kleine tekstbestanden die op uw computer of mobiel apparaat worden geplaatst wanneer u onze
                website bezoekt. Ze helpen ons om uw voorkeuren te onthouden en de website beter te laten werken.
              </p>
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Opmerking:</strong> Cookies bevatten geen persoonlijke informatie die u direct kan
                  identificeren. Ze worden gebruikt om uw browsersessie te herkennen en uw voorkeuren op te slaan.
                </p>
              </div>
            </section>

            {/* Types van cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-black rounded"></div>
                Types cookies die we gebruiken
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Essential Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Essentiële cookies</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Deze cookies zijn noodzakelijk voor het functioneren van de website. Ze worden gebruikt voor
                        veilige login, winkelmandjes en basisnavigatie.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Analytische cookies</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken, zodat we de site
                        kunnen verbeteren en optimaliseren.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Functionele cookies</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Deze cookies onthouden uw voorkeuren zoals taalinstelling, logingegevens en andere
                        gepersonaliseerde instellingen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Advertising Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Advertentiecookies</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Deze cookies worden gebruikt om relevante advertenties te tonen op basis van uw interesses en
                        surfgedrag.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie beheer */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-red-600 rounded"></div>
                Cookies beheren
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                U kunt cookies op verschillende manieren beheren en verwijderen via uw browserinstellingen:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Bekijk welke cookies op uw apparaat zijn opgeslagen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Verwijder cookies individueel of allemaal tegelijk</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Blokkeer cookies van specifieke websites</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Blokkeer alle cookies (kan functionaliteit beïnvloeden)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Verwijder automatisch alle cookies wanneer u uw browser sluit</p>
                </div>
              </div>
            </section>

            {/* Third-party cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-yellow-400 rounded"></div>
                Cookies van derde partijen
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We gebruiken ook cookies van derde partijen van onze partners en serviceproviders, waaronder:
              </p>
              <div className="space-y-2 ml-4">
                <p className="text-gray-700">• Google Analytics voor website-analyse</p>
                <p className="text-gray-700">• Social media platforms voor het delen van content</p>
                <p className="text-gray-700">• Advertentienetwerken voor gerichte advertenties</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
