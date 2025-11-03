import React from 'react'
import { Button } from "@/components/ui/button"
import GameHero from '@/components/game/hero'
import Description from '@/components/game/description'
import Modes from '@/components/game/modes'
import Arsenal from '@/components/game/arsenal'
import Maps from '@/components/game/map'

// Icon components
const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
function JeuxVr() {
  return (
    <div className="min-h-screen bg-black">

    <GameHero />
    <Description />
    <Modes />
    <Arsenal />
    <Maps />

      {/* Footer CTA Section */}
      <section className="relative py-16 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <select className="bg-gray-900 text-white border border-gray-700 rounded-lg px-6 py-4 font-bold w-full md:w-auto">
              <option>CHOISIR UNE ARÈNE</option>
              <option>Bokutani Kinshasa</option>
              
            </select>
            <Button className="bg-[#fc9937] hover:bg-[#4B2FEF] text-white font-bold px-12 py-4 rounded-lg w-full md:w-auto">
              RÉSERVER
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JeuxVr
