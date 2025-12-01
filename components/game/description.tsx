import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

function description() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40">
              <Image
                src="/games/vR-super-agent.jpg"
                alt="Battle Arena"
                className="w-full h-full object-cover rounded-3xl"
                fill
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center py-20 px-8">
              <h2 className="text-white text-5xl md:text-6xl font-black mb-4">VR SUPER AGENT</h2>
              {/* <p className="text-[#0ba0da] text-2xl font-bold mb-8 tracking-wide">FPS ORIGINAL FREE ROAMING</p> */}
              <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                Un jeu d'action et d'espionnage où les joueurs incarnent des agents spéciaux accomplissant des missions secrètes, avec tir, infiltration et défis tactiques.
              </p>
              <div className="max-w-3xl mx-auto mb-12">
                <h3 className="text-[#0ba0da] text-2xl md:text-3xl font-bold mb-6 text-left">Fonctionnalités</h3>
                <ul className="text-white text-lg leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#0ba0da] mr-3 mt-1.5">▸</span>
                    <span>Missions d'espionnage interactives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ba0da] mr-3 mt-1.5">▸</span>
                    <span>Tir de précision en VR</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ba0da] mr-3 mt-1.5">▸</span>
                    <span>Déplacements rapides et scènes d'infiltration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ba0da] mr-3 mt-1.5">▸</span>
                    <span>Mode coopératif ou duel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ba0da] mr-3 mt-1.5">▸</span>
                    <span>Interactions avec gadgets (scanner, pistolet, accessoires d'agent secret)</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-[#0ba0da] hover:bg-[#4B2FEF] text-white font-bold px-8 py-6 rounded-lg">
                  RÉSERVER LE COMBAT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default description
