import Image from 'next/image'
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
          <p className="text-[#fc9937] text-sm font-bold tracking-wide mb-2">BATTLE ARENA</p>
          <h3 className="text-white text-5xl font-black">MODES DE JEU</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skirmish Mode */}
          <div className="bg-black rounded-2xl overflow-hidden relative h-full border border-gray-800 hover:border-[#fc9937] transition-colors">
            
            <Image src="/games/vR-super-armor.jpg" alt="Skirmish" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Super Armor</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Combat futuriste en équipe, avec armures high-tech et batailles immersives. Parfait pour les compétitions multijoueurs.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Combat futuriste multijoueur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Choix d'armures et compétences spéciales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mode équipe vs équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Arènes sci-fi avec obstacles interactifs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Classement et scoring en temps réel</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Domination Mode */}
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-space-wheel.jpg" alt="Domination" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Space Wheel</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Simulation spatiale dans une roue rotative, offrant sensations fortes, rotations 360° et immersion dans un univers galactique.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Rotation 360° contrôlée par le mouvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Simulation spatiale immersive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Visuels galactiques réalistes </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Modes “exploration” ou “sensation forte”</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Effets sonores immersifs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Free For All Mode */}
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-super-engine.jpg" alt="Free For All" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Super Engine </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Course et pilotage à grande vitesse, avec simulation de moteur puissant et environnement futuriste.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Simulation de moteur haute vitesse
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Courses futuristes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Vibrations synchronisées au pilotage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Différents circuits et niveaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Tableau de score individuel</span>
                </li>
              </ul>
            </div>
          </div>


          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-super-ride.jpg" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Super Ride</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Attraction immersive type montagne russe, offrant sensations fortes, secousses et paysages virtuels dynamiques.</p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Simulation de montagnes russes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mouvements dynamiques synchronisés à la VR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Plusieurs parcours : jungle, futuriste, horreur…</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Effets de vitesse élevés </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mode duo synchronisé </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-doomsday-survival.jpg" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Doomsday Survival</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Jeu de survie coopératif dans un monde post-apocalyptique, avec stratégies d’équipe et combats contre des ennemis variés.</p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Survie en équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mouvements dynamiques synchronisés à la VR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Gestion des ressources et armes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mode coopératif obligatoire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Vagues d’ennemis dynamiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Système de progression et difficultés croissantes</span>
                </li>

              </ul>
            </div>
          </div>

          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-super-360-fligh.jpg" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Super 360 Fligh</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Simulation de vol acrobatique avec mouvements 360°, idéal pour sensations fortes aériennes.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Vol acrobatique 360°</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Pilotage simulé (avion futuriste) </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Missions aériennes : esquive, tir, course</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Siège rotatif synchronisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mode défi avec chronomètre</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-cAT-A.png" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR CAT-A</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Expérience immersive centrée sur un robot / véhicule futuriste (CAT-A), mêlant exploration et mini-missions interactives.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Pilotage d’un robot / véhicule animé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mini-missions interactives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Environnement futuriste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Effets vibrants et retour de force</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Gameplay simple pour tout public</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-kid.jpg" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR CAT-A</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Jeux éducatifs et légers, adaptés aux enfants : aventures simples, coloriage, mini-défis fun et sécurisés.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Jeux éducatifs et créatifs </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Interface adaptée aux enfants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Mini-aventures faciles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Défis simples et amusants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Environnements colorés sécurisants</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-kids-racing.jpg" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Kids Racing</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Course amusante destinée aux enfants, avec véhicules cartoon, vitesse modérée et circuits colorés.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Course automobile cartoon </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Véhicules pour enfants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Circuits amusants et colorés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Gameplay simple : accélérer / tourner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Classement et récompenses virtuelles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#fc9937] transition-colors">
            <Image src="/games/vR-battlefield.jpg" alt="Team Deathmatch" className="w-full object-cover" width={500} height={500} />
            <div className="p-6">
              <h4 className="text-white text-xl font-black mb-3">VR Battlefield</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Jeu de tir et de combat militaire, duel ou coopération dans un champ de bataille virtuel.
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2 mt-3">
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Tir tactique en duel ou coop</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Arsenal varié (simple, léger)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Environnements militaires immersifs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Déplacements rapides type arcade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fc9937] mr-2 mt-1">▸</span>
                  <span>Système de score et chronomètre</span>
                </li>
              </ul>
            </div>
          </div>
        


        </div>
      </div>
    </div>
  </section>
  )
}

export default modes