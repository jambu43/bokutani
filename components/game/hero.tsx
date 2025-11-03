import React from 'react'
import { Button } from "@/components/ui/button"

function GameHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img src="https://app.eva.gg/assets/after-h-battle-arena-fhd-min-BXpFo7Is.webp" alt="Space Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a3e] via-[#2d1654]/80 to-black/90" />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 text-center px-4">
      <div className="mb-8">
        <img src="/after-h-battle-arena-futuristic-game-logo-white-te.jpg" alt="After-H Battle Arena Logo" className="mx-auto h-48 w-auto" />
      </div>
      <p className="text-white text-sm tracking-[0.3em] mb-8">Bokutani ORIGINAL GAME</p>
      <Button className="bg-white text-[#fc9937] hover:bg-white/90 font-bold text-xs px-3 py-2 rounded-full">
        RÉSERVER
      </Button>
    </div>
  </section>
  )
}

export default GameHero
