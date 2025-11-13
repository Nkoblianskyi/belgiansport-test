import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"
import { Voettekst } from "../components/voettekst"

const nunitoSans = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BelgianSport.com - Beste Belgische Goksites 2025",
  description:
    "Vergelijk de beste Belgische online goksites. Vind topwelkomstbonussen, betrouwbare platforms en exclusieve aanbiedingen voor Belgische spelers. 21+ Speel verantwoord.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={nunitoSans.className}>
        <div className="min-h-screen relative bg-black md:bg-[url('/belgian-stadium.jpg')] md:bg-cover md:bg-center md:bg-fixed">
          <div className="relative z-10">
            <main>{children}</main>
            <Voettekst />
          </div>
        </div>
      </body>
    </html>
  )
}
