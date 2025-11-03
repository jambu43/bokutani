import React from 'react'
import Image from 'next/image'

function activity() {
  return (
    <section className="bg-gray-50 py-16 px-4 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-2xl md:text-4xl lg:text-4xl font-black mb-6">
              <span className="text-[#fc9937]">APPUYEZ</span> <span className="text-black">SUR LA DÉTENTE</span>
            </h4>
            <p className="text-gray-700 text-md leading-relaxed max-w-3xl mx-auto font-light">
              Partagez un verre ou un plat, puis défiez vos amis aux fléchettes en réalité augmentée. Afterworks, happy
              hours, DJ sets... l'expérience continue en dehors de l'arène !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fléchettes Augmentées Card */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
                <Image
                src="/people-playing-augmented-reality-darts-in-warm-bar.jpg"
                width={500}
                height={500}
                alt="Fléchettes Augmentées"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h5 className="text-2xl md:text-2xl lg:text-2xl font-black mb-3 text-center">FLÉCHETTES AUGMENTÉES</h5>
                <p className="text-gray-200 text-sm mb-6 text-center font-light">
                  Les fléchettes réinventées avec nos cibles interactives. Ambiance garantie !
                </p>
                <button className="w-full py-2 bg-[#fc9937] hover:bg-[#fc9937] text-white font-light rounded-lg transition-colors text-sm">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>

            {/* Cyber Bar Card */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
              <Image
                src="/neon-cyber-bar-sign-with-purple-pink-lighting-and-.jpg"
                width={500}
                height={500}
                alt="Cyber Bar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h5 className="text-2xl md:text-2xl lg:text-2xl font-black mb-3 text-center">CYBER BAR</h5>
                <p className="text-gray-200 text-sm mb-6 text-center font-light">L'endroit idéal pour trinquer et partager un bon moment.</p>
                <button className="w-full py-2 bg-[#fc9937] hover:bg-[#fc9937] text-white font-light rounded-lg transition-colors text-sm">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>

            {/* Explorez la Carte Card */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
              <Image
                src="/gourmet-food-dish-on-plate-in-restaurant-setting.jpg"
                width={500}
                height={500}
                alt="Explorez la Carte"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h5 className="text-2xl md:text-2xl lg:text-2xl font-black mb-3 text-center">EXPLOREZ LA CARTE</h5>
                <p className="text-gray-200 text-sm mb-6 text-center font-light">
                  Dans les salles EVA, on se régale aussi en dehors du terrain.
                </p>
                <button className="w-full py-2 bg-[#fc9937] hover:bg-[#fc9937] text-white font-light rounded-lg transition-colors text-sm">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default activity
