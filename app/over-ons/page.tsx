import Link from "next/link"
import { ArrowLeft, Target, Shield, Users, TrendingUp, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OverOnsPage() {
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
            <h1 className="text-5xl font-bold mb-4">Over BelgianSport.com</h1>
            <p className="text-xl text-gray-300">Uw vertrouwde gids voor de beste goksites in België</p>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-10">
            {/* Mission */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-4xl font-bold text-gray-900">Onze Missie</h2>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r">
                <p className="text-gray-800 text-lg leading-relaxed">
                  Bij BelgianSport.com is het onze missie om Belgische spelers te voorzien van de meest uitgebreide,
                  nauwkeurige en actuele informatie over online goksites. We begrijpen dat het kiezen van het juiste
                  gokplatform overweldigend kan zijn met zoveel beschikbare opties. Daarom hebben we ons toegewijd om
                  dit proces eenvoudiger voor u te maken.
                </p>
              </div>
            </section>

            {/* Why Trust Us */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-4xl font-bold text-gray-900">Waarom ons vertrouwen?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black text-white p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    
                    <h3 className="text-2xl font-bold">Expertise</h3>
                  </div>
                  <p className="text-gray-300">
                    Ons team bestaat uit ervaren professionals uit de Belgische gokindustrie met jaren expertise in het
                    beoordelen van goksites.
                  </p>
                </div>

                <div className="bg-yellow-400 text-black p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    
                    <h3 className="text-2xl font-bold">Onafhankelijkheid</h3>
                  </div>
                  <p className="text-gray-900">
                    We behouden volledige onafhankelijkheid in onze beoordelingen. Onze ratings worden uitsluitend
                    bepaald door kwaliteit en functies.
                  </p>
                </div>

                <div className="bg-red-600 text-white p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    
                    <h3 className="text-2xl font-bold">Actualiteit</h3>
                  </div>
                  <p className="text-white">
                    We monitoren de markt continu en updaten onze reviews zodra er significante veranderingen zijn bij
                    de goksites.
                  </p>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    
                    <h3 className="text-2xl font-bold">Community</h3>
                  </div>
                  <p className="text-gray-300">
                    We luisteren naar onze gebruikers en hun ervaringen om onze content steeds relevanter te maken voor
                    de Belgische markt.
                  </p>
                </div>
              </div>
            </section>

            {/* Rating Criteria */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe we goksites beoordelen</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Ons ratingsysteem is gebouwd op jarenlange ervaring en een diep begrip van wat het belangrijkst is voor
                Belgische gokkers. We evalueren elke goksite aan de hand van meerdere criteria:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Licentie & Regelgeving</h3>
                  <p className="text-gray-700">
                    We controleren of de site een geldige Belgische licentie heeft van de Kansspelcommissie
                  </p>
                </div>

                <div className="border-l-4 border-black pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Veiligheid & Beveiliging</h3>
                  <p className="text-gray-700">Geavanceerde encryptie en verantwoorde gokmaatregelen zijn essentieel</p>
                </div>

                <div className="border-l-4 border-red-600 pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Sportmarkten</h3>
                  <p className="text-gray-700">
                    Variëteit en diepte van sporten en wedopties, met focus op Belgische competities
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Odds & Quotering</h3>
                  <p className="text-gray-700">Competitieve odds voor alle belangrijke sporten en evenementen</p>
                </div>

                <div className="border-l-4 border-black pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Welkomstbonussen</h3>
                  <p className="text-gray-700">Waarde en eerlijkheid van promotionele aanbiedingen</p>
                </div>

                <div className="border-l-4 border-red-600 pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Betaalmethoden</h3>
                  <p className="text-gray-700">Variëteit aan storting- en opnamemogelijkheden populair in België</p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Mobiele Ervaring</h3>
                  <p className="text-gray-700">Kwaliteit van mobiele apps en mobiele websites</p>
                </div>

                <div className="border-l-4 border-black pl-6 py-3 bg-gray-50 rounded-r">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Klantenservice</h3>
                  <p className="text-gray-700">Reactiesnelheid en kwaliteit van hulpdiensten in het Nederlands</p>
                </div>
              </div>
            </section>

            {/* Responsible Gaming */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-4xl font-bold text-gray-900">Verantwoord Gokken</h2>
              </div>

              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <p className="text-gray-800 leading-relaxed mb-4">
                  We zijn toegewijd aan het promoten van verantwoord gokken. Wij geloven dat wedden vermakelijk moet
                  zijn en nooit financiële of persoonlijke problemen mag veroorzaken.
                </p>
                <div className="bg-white p-5 rounded border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-3">Alle aanbevolen sites moeten beschikken over:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Zelfuitsluitingstools en stortingslimieten</li>
                    <li>✓ Links naar hulporganisaties zoals VAD en Tele-Onthaal</li>
                    <li>✓ Leeftijdsverificatie (21+ in België)</li>
                    <li>✓ Duidelijke algemene voorwaarden</li>
                    <li>✓ Transparante bonusvoorwaarden</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Warning */}
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">Belangrijke Waarschuwing</h3>
                  <p className="text-lg leading-relaxed mb-3">
                    Gokken moet leuk en vermakelijk zijn. Wed nooit meer dan u zich kunt veroorloven te verliezen, en
                    gok altijd verantwoord.
                  </p>
                  <p className="text-lg">
                    Als u merkt dat gokken een probleem wordt, zoek dan hulp bij organisaties zoals VAD, Tele-Onthaal of
                    Gokkers Anoniem. U bent 21+ om te mogen gokken in België.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
