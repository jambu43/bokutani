import React from "react";

function events() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-black">CÉLÉBREZ </span>
            <span className="text-[#fc9937]">L'OCCASION</span>
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Une arène rien que pour vous. Privatisez Bokutani et transformez votre
            événement en moment inoubliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Anniversaire Card */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
            <img
              src="https://www.eva.gg/_next/static/media/birthday.5160919d.webp"
              alt="Anniversaire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h5 className="text-3xl font-black mb-3 text-center">
                ANNIVERSAIRE
              </h5>
              <p className="text-gray-200 text-sm mb-6 text-center">
                Soufflez vos bougies chez EVA pour fêter votre level up !
              </p>
              <button className="w-full py-3 bg-[#fc9937] hover:bg-[#fc9937] text-white font-bold rounded-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>

          {/* EVG / EVJF Card */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
            <img
              src="https://www.eva.gg/_next/static/media/bachelorParty.35e6dec8.webp"
              alt="EVG / EVJF"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h5 className="text-3xl font-black mb-3 text-center">
                EVG / EVJF
              </h5>
              <p className="text-gray-200 text-sm mb-6 text-center">
                Sessions de jeu et tournées de shots : ce qui se passe chez EVA
                reste chez EVA...
              </p>
              <button className="w-full py-3 bg-[#fc9937] hover:bg-[#fc9937] text-white font-bold rounded-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>

          {/* Entreprises Card */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
            <img
              src="https://www.eva.gg/_next/static/media/teamBuilding.6542582c.webp"
              alt="Entreprises"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h5 className="text-3xl font-black mb-3 text-center">
                ENTREPRISES
              </h5>
              <p className="text-gray-200 text-sm mb-6 text-center">
                Un temps pour les PowerPoints, un temps pour se défouler en
                équipe.
              </p>
              <button className="w-full py-3 bg-[#fc9937] hover:bg-[#fc9937] text-white font-bold rounded-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default events;
