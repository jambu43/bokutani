import React from 'react'
import { Button } from '@/components/ui/button'

function Maps() {
  return (
    <section className="relative py-20 px-4 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-white text-5xl font-black">LES CARTES DISPONIBLES</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Outlaw Map */}
        <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
          <img src="https://cdn.eva.gg/games/after-h/maps/240000/main.webp" alt="Outlaw" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h4 className="text-white text-2xl font-black mb-3">OUTLAW</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ville fantôme du Far West. Ruelles étroites et saloons abandonnés créent un terrain de jeu unique pour
              les duels rapprochés.
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded-lg text-xs">
                DÉCOUVRIR LA CARTE
              </Button>
              <Button className="w-full bg-[#fc9937] hover:bg-[#4B2FEF] text-white font-bold py-2 px-2 rounded-lg text-xs">
                RÉSERVER
              </Button>
            </div>
          </div>
        </div>

        {/* Ceres Map */}
        <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
          <img src="https://cdn.eva.gg/games/after-h/maps/220000/main.webp" alt="Ceres" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h4 className="text-white text-2xl font-black mb-3">CERES</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Station spatiale abandonnée. Couloirs sombres et zones industrielles offrent des opportunités
              tactiques infinies.
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded-lg text-xs">
                DÉCOUVRIR LA CARTE
              </Button>
              <Button className="w-full bg-[#fc9937] hover:bg-[#4B2FEF] text-white font-bold py-2 px-2 rounded-lg text-xs">
                RÉSERVER
              </Button>
            </div>
          </div>
        </div>

        {/* Artefact 1 Map */}
        <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
          <img src="https://cdn.eva.gg/games/after-h/maps/230000/main.webp" alt="Artefact 1" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h4 className="text-white text-2xl font-black mb-3">ARTEFACT 1</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Laboratoire secret. Architecture futuriste et artefacts mystérieux créent une ambiance unique pour vos
              combats.
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded-lg text-xs">
                DÉCOUVRIR LA CARTE
              </Button>
              <Button className="w-full bg-[#fc9937] hover:bg-[#4B2FEF] text-white font-bold py-2 px-2 rounded-lg text-xs">
                RÉSERVER
              </Button>
            </div>
          </div>
        </div>

        {/* The Cliff Map */}
        <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
          <img src="/cliff-side-town-with-buildings-and-sunset-sky.jpg" alt="The Cliff" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h4 className="text-white text-2xl font-black mb-3">THE CLIFF</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Village perché sur une falaise. Positions en hauteur et chemins étroits demandent stratégie et
              coordination.
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-lg text-xs">
                DÉCOUVRIR LA CARTE
              </Button>
              <Button className="w-full bg-[#fc9937] hover:bg-[#4B2FEF] text-white font-bold py-2 px-2 rounded-lg text-xs">
                RÉSERVER
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-[#fc9937]" />
        <div className="w-2 h-2 rounded-full bg-gray-600" />
        <div className="w-2 h-2 rounded-full bg-gray-600" />
      </div>
    </div>
  </section>
  )
}

export default Maps