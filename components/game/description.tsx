import React from 'react'
import { Button } from "@/components/ui/button"

function description() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://app.eva.gg/assets/presentation-dPUHnZE5.png"
                alt="Battle Arena"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center py-20 px-8">
              <h2 className="text-white text-5xl md:text-6xl font-black mb-4">AFTER-H BATTLE ARENA</h2>
              <p className="text-[#fc9937] text-2xl font-bold mb-8 tracking-wide">FPS ORIGINAL FREE ROAMING</p>
              <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                Entrez dans un monde post-apocalyptique où seuls les plus stratégiques survivent. Affrontez vos
                adversaires dans des combats intenses en équipe, utilisez votre environnement à votre avantage et
                dominez l'arène. Chaque partie est unique, chaque décision compte. Êtes-vous prêt à relever le défi ?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-6 rounded-lg">
                  EN SAVOIR PLUS
                </Button>
                <Button className="bg-[#fc9937] hover:bg-[#4B2FEF] text-white font-bold px-8 py-6 rounded-lg">
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
