"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
    setShowModal(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
    setShowModal(false)
  }

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t-4 border-yellow-400 p-4 z-50 shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div className="text-white">
                <p className="font-bold text-lg mb-1">Cookies op BelgianSport.com</p>
                <p className="text-sm text-gray-300">
                  We gebruiken cookies om uw ervaring te verbeteren. Door verder te gaan, accepteert u ons cookiebeleid.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <Button
                onClick={() => setShowModal(true)}
                variant="outline"
                className="flex-1 sm:flex-none bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
              >
                Meer info
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 sm:flex-none bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-700"
              >
                Weigeren
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 sm:flex-none bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
              >
                Accepteren
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Cookie className="w-6 h-6 text-yellow-400" />
              Cookie Instellingen
            </DialogTitle>
            <DialogDescription className="text-base">
              We gebruiken cookies om uw ervaring op onze site te verbeteren
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Essential Cookies */}
            <div className="border-l-4 border-yellow-400 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">Essentiële Cookies</h3>
                <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold">Verplicht</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld.
                Ze worden gebruikt voor veilige login, winkelmandjes en basisnavigatie.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border-l-4 border-black pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">Analytische Cookies</h3>
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  Aanbevolen
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat we de site kunnen
                verbeteren en optimaliseren voor een betere gebruikerservaring.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border-l-4 border-red-600 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">Marketing Cookies</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                  Optioneel
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Deze cookies worden gebruikt om relevante advertenties te tonen op basis van uw interesses en surfgedrag
                op verschillende websites.
              </p>
            </div>

            {/* Privacy Links */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                Voor meer informatie over hoe we cookies gebruiken en uw gegevens beschermen:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/cookie-beleid"
                  className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold underline"
                  onClick={() => setShowModal(false)}
                >
                  Cookie Beleid
                </Link>
                <Link
                  href="/privacybeleid"
                  className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold underline"
                  onClick={() => setShowModal(false)}
                >
                  Privacybeleid
                </Link>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-2 border-gray-300 hover:bg-gray-100 bg-transparent"
            >
              Alleen Essentieel
            </Button>
            <Button onClick={handleAccept} className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Alles Accepteren
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
