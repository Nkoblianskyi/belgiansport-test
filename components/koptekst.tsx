import Link from "next/link"
import Image from "next/image"

export function Koptekst() {
  return (
    <header className="w-full bg-gradient-to-r from-black via-yellow-400 to-red-600 py-3">
      <div className="container mx-auto px-4">
        <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          </div>
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-black">BE BESTE </span>
            <span className="text-white">GOK</span>
            <span className="text-red-600">SITES</span>
          </h1>
        </Link>
      </div>
    </header>
  )
}
