import React from "react";
import Image from "next/image";
function Resume() {
  return (
    <section className="relative py-16 bg-white immersion">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Titre principal */}
        <div className="text-center mb-12 relative -top-20 ">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-[#fc9937] mb-8 leading-tight font-gotham">
            BOKUTANI <br />
            <span className="text-4xl md:text-4xl lg:text-4xl text-black">
              {" "}
              À KINSHASA
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-normal">
            Le premier parc d'attractions en réalité virtuelle qui révolutionne
            le divertissement.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-16 mt-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/eva-arena-interior-modern-design.jpg"
                alt="BOKUTANI Team Building"
                fill
                className="object-cover text-center"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-4xl font-black mb-2">BOKUTANI</h3>
                  <p className="text-2xl font-bold">LE TEAM BUILDING</p>
                  <p className="text-2xl font-bold">QUI MARQUE</p>
                  <p className="text-2xl font-bold text-[#5B3FFF]">
                    LES ESPRITS
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/game-vr.jpg"
                alt="Team celebrating"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Benefits */}
          <div className="space-y-12 mb-16">
            <div className="text-center border-2 border-gray-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-black">
                EMPLOYÉS ENGAGÉS
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Une expérience qui marque les esprits et renforce l'engagement
                de vos équipes grâce à une activité innovante et mémorable.
              </p>
            </div>

            <div className="text-center border-2 border-gray-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-black">
                COHÉSION & COMPÉTENCES
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Développez la communication et la collaboration de vos équipes
                dans un cadre ludique et stimulant.
              </p>
            </div>

            <div className="text-center border-2 border-gray-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-black">
                ZÉRO CONTRAINTE
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Nous nous occupons de tout : briefing, équipement, animation.
                Vous n'avez qu'à profiter du moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
