import React from 'react'
import { Button } from "@/components/ui/button"

function GameHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img src="https://app.eva.gg/assets/after-h-battle-arena-fhd-min-BXpFo7Is.webp" alt="Space Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fc9937] via-[#2d1654]/80 to-black/90" />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 text-center px-4">
      {/* <div className="mb-8">
        <img src="https://app.eva.gg/assets/200518_Logo-After-H_BATTLE-ARENA@2x-BFpq5LN8.png" alt="After-H Battle Arena Logo" className="mx-auto h-48 w-auto" />
      </div> */}
      <div className="mb-8 -mt-4">
        <svg viewBox="0 0 800 150" className="w-full max-w-2xl mx-auto h-28 md:h-36" preserveAspectRatio="xMidYMid meet">
          <defs>
            <path id="arc-path" d="M 50 150 Q 400 30 750 150" fill="none" />
          </defs>
          <text 
            fill="white" 
            fontSize="40" 
            letterSpacing="0"
            fontFamily="inherit"
            className="text-white"
          >
            <textPath href="#arc-path" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              WELCOME TO YOUR METAVERSE
            </textPath>
          </text>
        </svg>
      </div>
      <h1 className="text-white text-3xl md:text-4xl font-black mb-8">BOKUTANI GAME</h1>
      <Button className="bg-white text-[#fc9937] hover:bg-white/90 font-bold text-xs px-3 py-2 rounded-full">
        RÉSERVER
      </Button>
    </div>
  </section>
  )
}

export default GameHero
