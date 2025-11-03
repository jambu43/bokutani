import React from 'react'

function modes() {
  return (
    <section className="relative py-20 px-4 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-[#fc9937]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#fc9937]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#fc9937]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#fc9937] text-sm font-bold tracking-wide mb-2">AFTER-H BATTLE ARENA</p>
          <h3 className="text-white text-5xl font-black">MODES DE JEU</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skirmish Mode */}
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            
            <img src="https://app.eva.gg/assets/mode-SKIRMISH-visual-C9-JQQDM.webp" alt="Skirmish" className="w-full h-[60%] object-cover" />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">SKIRMISH</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mode tactique par équipe. Éliminez tous les adversaires pour remporter la manche. Communication et
                stratégie sont essentielles.
              </p>
            </div>
          </div>

          {/* Domination Mode */}
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <img src="https://app.eva.gg/assets/mode-DOM-visual-B1mr7rBo.webp" alt="Domination" className="w-full h-[60%] object-cover" />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">DOMINATION</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capturez et maintenez les points stratégiques. Plus vous contrôlez de zones, plus vite vous gagnez
                des points.
              </p>
            </div>
          </div>

          {/* Free For All Mode */}
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <img src="https://app.eva.gg/assets/mode-FFA-visual-9f1MHAF1.webp" alt="Free For All" className="w-full h-[60%] object-cover" />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">FREE FOR ALL</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Chacun pour soi ! Éliminez un maximum d'adversaires avant la fin du temps imparti. Le meilleur
                gagne.
              </p>
            </div>
          </div>

          {/* Team Deathmatch Mode */}
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <img src="https://app.eva.gg/assets/mode-TDM-visual-BZ7t2zez.webp" alt="Team Deathmatch" className="w-full h-[60%] object-cover" />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">TEAM DEATHMATCH</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Combat d'équipe classique. La première équipe à atteindre le score cible remporte la victoire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default modes