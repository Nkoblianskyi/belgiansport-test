import { Shield, Users, TrendingUp, Trophy } from "lucide-react"

export function InfoSecties() {
  return (
    <div className="mt-12 space-y-8 max-w-6xl mx-auto">
      {/* About Us Section */}
      <section className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          
          <h2 className="text-2xl font-bold text-gray-900">Over BelgianSport.com</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          BelgianSport.com is uw vertrouwde partner voor het vinden van de beste online goksites in België. Sinds onze
          oprichting in 2020 hebben we duizenden Belgische spelers geholpen bij het vinden van veilige, betrouwbare en
          legale goksites. Onze experts testen elke site grondig op betrouwbaarheid, bonussen, gebruiksvriendelijkheid
          en klantenservice.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Wij beoordelen en vergelijken alleen legale en gereguleerde operators die een vergunning hebben van de
          Belgische Kansspelcommissie. Onze onafhankelijke reviews en rankings worden regelmatig bijgewerkt om u de
          meest actuele informatie te bieden.
        </p>
      </section>

      {/* Safe Gaming Section */}
      <section className="bg-red-50 rounded-lg shadow-md p-6 border-2 border-red-200">
        <div className="flex items-center gap-3 mb-4">
          
          <h2 className="text-2xl font-bold text-gray-900">Veilig en Verantwoord Gokken</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gokken moet leuk en spannend zijn, maar het is belangrijk om verantwoord te spelen. In België wordt online
          gokken streng gereguleerd door de Kansspelcommissie. Alle goksites die wij aanbevelen voldoen aan de Belgische
          wetgeving en hebben een geldige vergunning.
        </p>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="font-bold text-gray-900 mb-2">Belgische Veiligheidsregels:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Minimale leeftijd: 21 jaar (wettelijk vereist in België)</li>
            <li>Verplichte identiteitsverificatie voor alle accounts</li>
            <li>Bescherming tegen gokverslaving en zelfuitsluitingsmogelijkheden</li>
            <li>Veilige en gereguleerde betalingsmethoden</li>
            <li>Transparante bonusvoorwaarden en uitbetalingen</li>
          </ul>
        </div>

        <div className="bg-red-100 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-2">Hulp Nodig? Neem Contact Op:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>VAD (Vereniging voor Alcohol- en andere Drugproblemen):</strong>{" "}
              <a href="https://www.vad.be" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">
                www.vad.be
              </a>
            </li>
            <li>
              <strong>Tele-Onthaal:</strong> 106 (gratis en anoniem)
            </li>
            <li>
              <strong>Belgische Kansspelcommissie:</strong>{" "}
              <a
                href="https://www.gamingcommission.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline"
              >
                www.gamingcommission.be
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Top Sports Section */}
      <section className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          
          <h2 className="text-2xl font-bold text-gray-900">Populaire Sporten in België</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Belgische gokkers hebben een passie voor verschillende sporten. Hier zijn de meest populaire
          sportweddenschappen in België:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Football */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
               Voetbal
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              De absolute nummer één in België. Wedden op de Jupiler Pro League, Champions League, Europa League en
              internationale toernooien zoals het WK en EK zijn extreem populair. Belgische clubs zoals Club Brugge,
              Anderlecht en KRC Genk trekken veel wedders.
            </p>
          </div>

          {/* Tennis */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
               Tennis
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Met sterren zoals David Goffin en Elise Mertens is tennis enorm populair. Grand Slams (Australian Open,
              Roland Garros, Wimbledon, US Open) en ATP/WTA toernooien trekken veel Belgische wedders.
            </p>
          </div>

          {/* Cycling */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
               Wielrennen
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              België heeft een rijke wielertraditie. De Ronde van Vlaanderen, Luik-Bastenaken-Luik, Tour de France en
              andere klassiekers zijn hoogtepunten voor Belgische gokkers. Renners zoals Remco Evenepoel en Wout van
              Aert zorgen voor extra interesse.
            </p>
          </div>

          {/* Basketball */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
               Basketball
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              De NBA is enorm populair in België, evenals de Belgische competitie (BNXT League). EuroLeague wedstrijden
              en internationale toernooien trekken ook veel wedders aan.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="flex items-start gap-3">
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Andere Populaire Sporten:</h3>
              <p className="text-gray-700 text-sm">
                Formule 1, darts, snooker, volleybal en hockey hebben ook een toegewijde groep volgers in België. Alle
                goksites die wij aanbevelen bieden uitgebreide markten voor deze sporten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
