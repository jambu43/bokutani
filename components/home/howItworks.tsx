import React from 'react'
import Image from 'next/image'

function howItworks() {
  return (
    <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Steps */}
            <div className="space-y-8">
              {/* Title */}
              <div className="text-center">
                <h4 className="text-2xl md:text-4xl font-black mb-4">
                  <span className="text-[#fc9937]">COMMENT</span>
                  <br />
                  <span className="text-black">ÇA MARCHE ?</span>
                </h4>
                <p className="text-gray-700 text-md leading-relaxed">
                  Chez BOKUTANI, tout le monde peut entrer dans l'arène. Joueur occasionnel ou compétiteur, vivez une
                  expérience unique !
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                  <div className="text-[#fc9937] font-black text-sm mb-2">ÉTAPE 1</div>
                  <h5 className="text-2xl font-black text-black mb-3">FORMEZ VOTRE SQUAD</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Jusqu'à 10 joueurs par arène. Si vous êtes moins nombreux, d'autres joueurs de votre niveau pourront
                    vous rejoindre.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                  <div className="text-[#fc9937] font-black text-sm mb-2">ÉTAPE 2</div>
                  <h5 className="text-2xl font-black text-black mb-3">BRIEFING ET ÉQUIPEMENT</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Après un rapide briefing, enfilez votre casque et tenez-vous prêt.e.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                  <div className="text-[#fc9937] font-black text-sm mb-2">ÉTAPE 3</div>
                  <h5 className="text-2xl font-black text-black mb-3">GAME ON !</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Votre partie commence : stratégie, fun et adrénaline sont au rendez-vous !
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                  <div className="text-[#fc9937] font-black text-sm mb-2">ÉTAPE 4</div>
                  <h5 className="text-2xl font-black text-black mb-3">APRÈS L'EFFORT LE RÉCONFORT</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Reprenez votre souffle, partagez vos exploits et refaites le match autour d'un verre.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/game-vr.jpg"
                width={500}
                height={500}
                alt="Players in VR Arena"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default howItworks
