import Link from "next/link"
import Image from "next/image"
import { Shield } from "lucide-react"

export function Voettekst() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-white">Belgian</span>
                  <span className="text-yellow-400">Sport</span>
                  <span className="text-white">.com</span>
                </h3>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uw vertrouwde gids voor de beste legale goksites in België. Onafhankelijke reviews, actuele bonussen en veilige speelomgevingen sinds 2025.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Snelle Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/over-ons"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/privacybeleid"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-beleid"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Cookie Beleid
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Responsible Gaming */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Verantwoord Gokken</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">
                    Gokken kan verslavend zijn. Speel verantwoord en zoek hulp indien nodig.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                <p className="text-xs text-gray-400 font-semibold">Hulplijnen:</p>
                <p className="text-xs text-white">
                  VAD:{" "}
                  <a
                    href="https://www.vad.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-400"
                  >
                    www.vad.be
                  </a>
                </p>
                <p className="text-xs text-white">Tele-Onthaal: 106</p>
                <p className="text-xs text-white">
                  Gaming Commission:{" "}
                  <a
                    href="https://www.gamingcommission.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-400"
                  >
                    gamingcommission.be
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Partners */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-center text-sm font-semibold mb-4 text-gray-400">Verantwoord Gokken Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="https://gamcare.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded p-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image src="/gamecare.svg" alt="GamCare" width={100} height={100} />
            </Link>
            <Link
              href="https://gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded p-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image src="/gamble.webp" alt="GambleAware" width={100} height={100} />
            </Link>
            <Link
              href="https://www.gamingcommission.be/"
              target="_blank"
              rel="noopener noreferrer"
            >

                <Image src="/gamingcommission.jpg" alt="Gaming Commission" width={100} height={100} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
            <p>© 2025 BelgianSport.com. Alle rechten voorbehouden.</p>
            <p className="text-red-400 font-bold">
              21+ | Alleen Belgische spelers | Gokken kan verslavend zijn — Speel veilig
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
