import React from 'react'
import Image from 'next/image'
function Games() {
  return (
    <section className="bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-2xl md:text-l lg:text-l font-black text-center mb-16 text-black">NOS JEUX VR EXCLUSIFS</h4>

          <div className="relative flex items-center justify-center gap-8">
            {/* Left Decorative Card */}
            <div className="hidden lg:block w-64 h-80 -rotate-12 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/person-with-vr-headset-holding-gun-in-tactical-gea.jpg"
                alt="VR Player"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Center Cards Container */}
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl justify-center">
              {/* After-H Battle Arena Card */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl w-full md:w-64 lg:w-85 min-h-[500px]">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/futuristic-soldier-with-glowing-helmet-in-post-apo.jpg')"
                  }}
                ></div>
                
                {/* Dégradé noir par-dessus */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
                
                {/* Contenu avec texte et boutons */}
                <div className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-end">
                  <h5 className="text-white text-xl font-black">AFTER-H BATTLE ARENA</h5>
                  <p className="text-gray-300 text-xs">
                    Jeu de tir compétitif par équipe dans un monde post-apocalyptique.
                  </p>
                  <p className="text-gray-400 text-xs">Se joue de 2 à 10 joueurs</p>
                  <div className="space-y-3 pt-2">
                    <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-xs">
                      EN SAVOIR PLUS
                    </button>
                    <button className="w-full py-3 bg-[#fc9937] hover:bg-[#fc9937] text-white rounded-lg transition-colors text-xs">
                      RÉSERVER
                    </button>
                  </div>
                </div>
              </div>

              {/* Moon of the Dead Card */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl w-full md:w-64 lg:w-85 min-h-[500px]">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/zombie-creature-in-teal-cyan-underwater-horror-atm.jpg')"
                  }}
                ></div>
                
                {/* Dégradé noir par-dessus */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
                
                {/* Contenu avec texte et boutons */}
                <div className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-end">
                  <h5 className="text-white text-xl font-black">MOON OF THE DEAD</h5>
                  <p className="text-gray-300 text-xs">
                    Le jeu de zombies en VR le plus intense et immersif jamais conçu.
                  </p>
                  <p className="text-gray-400 text-xs">Se joue de 1 à 10 joueurs</p>
                  <div className="space-y-3 pt-2">
                    <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-xs">
                      EN SAVOIR PLUS
                    </button>
                    <button className="w-full py-2 bg-[#fc9937] hover:bg-[#fc9937] text-white rounded-lg transition-colors text-xs">
                      RÉSERVER
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Decorative Card */}
            <div className="hidden lg:block w-64 h-80 rotate-12 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/person-in-vr-gear-action-pose-with-yellow-accents-.jpg"
                alt="VR Player Action"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Games
