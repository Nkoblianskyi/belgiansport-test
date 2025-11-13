export interface Goksite {
  id: number
  naam: string
  logo: string
  rating: number
  bonus: string
  beschrijving: string
  kenmerken: string[]
  welkomstaanbieding: string
  voorwaarden: string
  gebruikersScore: number
  stemmen: number
  link: string
  achtergrondAfbeelding?: string
}

export interface Banner {
  id: number
  titel: string
  ondertitel: string
  afbeelding: string
  link: string
}

export interface HorizontaleBanner {
  id: number
  naam: string
  logo: string
  bonus: string
  welkomstaanbieding: string
  link: string
  achtergrondAfbeelding: string
}
