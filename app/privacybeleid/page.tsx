import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacybeleidPage() {
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
              
              <h1 className="text-4xl font-bold">Privacybeleid</h1>
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
                BelgianSport.com respecteert uw privacy en neemt de bescherming van uw persoonlijke gegevens serieus.
                Dit privacybeleid legt uit welke gegevens we verzamelen, hoe we deze gebruiken en welke rechten u heeft.
              </p>
            </div>

            {/* Informatie die we verzamelen */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                
                Informatie die we verzamelen
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Persoonlijke informatie</h3>
                  <p className="text-gray-700 mb-3">
                    We verzamelen informatie die u direct aan ons verstrekt wanneer u:
                  </p>
                  <div className="bg-gray-50 p-4 rounded space-y-2">
                    <p className="text-gray-700 text-sm">• Een account aanmaakt</p>
                    <p className="text-gray-700 text-sm">• Zich inschrijft voor onze nieuwsbrief</p>
                    <p className="text-gray-700 text-sm">• Contact met ons opneemt</p>
                    <p className="text-gray-700 text-sm">• Onze website bezoekt</p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technische gegevens</h3>
                  <p className="text-gray-700 mb-3">We verzamelen automatisch bepaalde technische informatie:</p>
                  <div className="bg-gray-50 p-4 rounded space-y-2">
                    <p className="text-gray-700 text-sm">• IP-adres en locatiegegevens</p>
                    <p className="text-gray-700 text-sm">• Browser type en versie</p>
                    <p className="text-gray-700 text-sm">• Apparaat informatie</p>
                    <p className="text-gray-700 text-sm">• Gebruiksgegevens en voorkeuren</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hoe we uw gegevens gebruiken */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                
                Hoe we uw gegevens gebruiken
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-transparent hover:border-yellow-400 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2">Dienstverlening</h3>
                  <p className="text-gray-700 text-sm">Om onze diensten te leveren en te verbeteren</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-transparent hover:border-yellow-400 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2">Communicatie</h3>
                  <p className="text-gray-700 text-sm">Om updates en promotionele materialen te versturen</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-transparent hover:border-yellow-400 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2">Analyse</h3>
                  <p className="text-gray-700 text-sm">Om gebruikspatronen en trends te analyseren</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-transparent hover:border-yellow-400 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2">Wettelijke naleving</h3>
                  <p className="text-gray-700 text-sm">Om te voldoen aan wettelijke verplichtingen</p>
                </div>
              </div>
            </section>

            {/* Gegevensbeveiliging */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                
                Gegevensbeveiliging
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implementeren passende beveiligingsmaatregelen om uw persoonlijke informatie te beschermen tegen
                ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
              </p>
              <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">Onze beveiligingsmaatregelen omvatten:</h4>
                    <ul className="space-y-1 text-red-800 text-sm">
                      <li>• SSL/TLS encryptie voor alle gegevensoverdracht</li>
                      <li>• Veilige servers met beperkte toegang</li>
                      <li>• Regelmatige beveiligingsaudits</li>
                      <li>• Strikte toegangscontroles voor medewerkers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Uw rechten (AVG) */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                
                Uw rechten onder de AVG
              </h2>

              <p className="text-gray-700 mb-4">
                Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recht op toegang</h4>
                    <p className="text-gray-700 text-sm">
                      U heeft het recht om te weten welke gegevens we over u hebben
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recht op rectificatie</h4>
                    <p className="text-gray-700 text-sm">U kunt onjuiste of onvolledige gegevens laten corrigeren</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recht op verwijdering</h4>
                    <p className="text-gray-700 text-sm">U kunt verzoeken om uw gegevens te verwijderen</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recht op beperking</h4>
                    <p className="text-gray-700 text-sm">U kunt de verwerking van uw gegevens beperken</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recht op overdraagbaarheid</h4>
                    <p className="text-gray-700 text-sm">U kunt uw gegevens in een gestructureerd formaat ontvangen</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recht op bezwaar</h4>
                    <p className="text-gray-700 text-sm">U kunt bezwaar maken tegen de verwerking van uw gegevens</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Delen van informatie */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                
                Delen van informatie
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We verkopen, verhandelen of dragen uw persoonlijke informatie niet over aan derden zonder uw
                toestemming, behalve zoals beschreven in dit beleid of indien vereist door de wet.
              </p>
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-700 text-sm">
                  We kunnen uw informatie delen met vertrouwde partners die ons helpen onze website te beheren en
                  diensten te leveren, op voorwaarde dat deze partijen instemmen om deze informatie vertrouwelijk te
                  houden.
                </p>
              </div>
            </section>

            {/* Wijzigingen */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                
                Wijzigingen in dit beleid
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We kunnen dit privacybeleid van tijd tot tijd bijwerken. We zullen u op de hoogte brengen van eventuele
                wijzigingen door het nieuwe privacybeleid op deze pagina te plaatsen. Wijzigingen zijn van kracht zodra
                ze op de website worden geplaatst.
              </p>
            </section>

            {/* Waarschuwing */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Belangrijke opmerking</h3>
                  <p className="text-red-800 text-sm">
                    Door gebruik te maken van onze website stemt u in met de verzameling en het gebruik van informatie
                    in overeenstemming met dit beleid. Als u niet akkoord gaat met dit beleid, gebruik dan onze diensten
                    niet.
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
