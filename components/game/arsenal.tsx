import React from 'react'

function Arsenal() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#0d1f2d]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-white text-5xl font-black mb-4">VOTRE ARSENAL VOUS ATTEND !</h3>
      </div>

      {/* Weapon Carousel */}
      {/* <div className="flex justify-center gap-2 mb-8">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
              i === 5 ? "border-[#0ba0da]" : "border-gray-700"
            } cursor-pointer hover:border-[#0ba0da] transition-colors`}
          >
            <img
              src={`https://cdn.eva.gg/games/after-h/weapons/9000-icon.webp`}
              alt={`Weapon ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Weapon Info */}
        <div className="text-white">
          <p className="text-[#0ba0da] text-sm font-bold tracking-wide mb-2">ARME</p>
          <h4 className="text-5xl font-black mb-6">SPECTRE</h4>
          <p className="text-gray-300 leading-relaxed mb-8">
            Fusil d'assaut de précision avec cadence de tir élevée. Parfait pour les engagements à moyenne portée.
            Sa stabilité exceptionnelle en fait l'arme favorite des joueurs tactiques qui privilégient la précision
            au volume de feu.
          </p>
        </div>

        {/* Right - Weapon Stats */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">DÉGÂTS</span>
              <span>85/100</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#0ba0da] rounded-full" style={{ width: "85%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">CADENCE DE TIR</span>
              <span>75/100</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#0ba0da] rounded-full" style={{ width: "75%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">PRÉCISION</span>
              <span>90/100</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#0ba0da] rounded-full" style={{ width: "90%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">PORTÉE</span>
              <span>80/100</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#0ba0da] rounded-full" style={{ width: "80%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-white mb-2">
              <span className="font-bold">MOBILITÉ</span>
              <span>70/100</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#0ba0da] rounded-full" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Weapon Display */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-3xl h-96">
          <img src="https://cdn.eva.gg/games/after-h/skins/15000-size_md.webp" alt="Spectre Weapon" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Arsenal
