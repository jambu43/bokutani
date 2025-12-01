import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function pricing() {
  return (
    <section className="py-24 px-6 bg-white">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black">
        CHOISISSEZ LE TICKET <br /> QUI VOUS CONVIENT
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* ESSENTIEL Card */}
        <div className="bg-white shadow-lg overflow-hidden ">
          {/* Header with background image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/dark-corridor-tactical-shooter-game-environment.jpg"
              alt="VR Gaming"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Info icon - positioned absolutely */}
              <button className="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold hover:bg-white/20 transition-colors">
                i
              </button>
              {/* Centered content */}
              <div className="flex flex-col items-center justify-center flex-1">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M60 10 L100 30 L100 70 Q100 90 80 100 L60 110 L40 100 Q20 90 20 70 L20 30 Z"
                    stroke="white"
                    strokeWidth="6"
                    fill="none"
                  />
                  <text
                    x="60"
                    y="75"
                    fontSize="40"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    A
                  </text>
                </svg>
                <h3 className="text-sm font-bold text-white/90 mb-1 uppercase tracking-wide">BATTLE PASS</h3>
                <h4 className="text-4xl font-black text-white mb-4 uppercase">ESSENTIEL</h4>
              </div>
              {/* Black banner - at bottom */}
              <div className="bg-black px-4 py-3 rounded-lg w-full">
                <p className="text-white font-bold text-xs uppercase">4 SESSIONS DE JEU PAR MOIS</p>
                <p className="text-white/80 text-xs mt-1">Dont 1 session en heures pleines</p>
              </div>
            </div>
          </div>

          {/* Content Section - White background */}
          <div className="p-6 bg-white">
            {/* Pricing */}
            <div className="mb-6 text-center">
              <div className="flex items-baseline gap-2 mb-2 justify-center">
                <span className="text-5xl font-black text-black">49</span>
                <span className="text-xl text-black">€</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">49 € / Mois pour les mois suivants</p>
              <p className="text-sm text-gray-600">Abonnement sans engagement</p>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mb-6 text-sm text-gray-700 leading-relaxed">
              <li>SESSIONS HEURES CREUSES SUPPLÉMENTAIRES À 15,00 €</li>
              <li>SEASON PASS INCLUS DANS L'ABONNEMENT</li>
              <li>ACCÈS À L'OFFRE DE PARRAINAGE</li>
              <li>ACCÈS AUX LIGUES (EL1, EL2, LIGUES LOCALES)</li>
              <li>JOUER DANS TOUTES LES ARÈNES EN FRANCE ET BELGIQUE</li>
            </ul>

            {/* Links */}
            <div className="space-y-4">
              <a href="#" className="block text-[#0ba0da] text-sm hover:text-[#6B2EE8] transition-colors underline">
                Voir la FAQ
              </a>
              <Button className="w-full bg-[#0ba0da] hover:bg-[#0ba0da]/90 text-white font-bold py-3 uppercase">
                RESERVER
              </Button>
              <a href="#" className="block text-[#0ba0da] text-sm hover:text-[#6B2EE8] transition-colors underline text-center">
                Consulter les conditions générales
              </a>
            </div>
          </div>
        </div>

        {/* PLUS Card */}
        <div className="bg-white shadow-lg overflow-hidden ">
          {/* Header with background image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/vr-arena-wide-angle-with-players.jpg"
              alt="VR Arena"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Info icon - positioned absolutely */}
              <button className="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold hover:bg-white/20 transition-colors">
                i
              </button>
              {/* Centered content */}
              <div className="flex flex-col items-center justify-center flex-1">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M60 10 L100 30 L100 70 Q100 90 80 100 L60 110 L40 100 Q20 90 20 70 L20 30 Z"
                    stroke="white"
                    strokeWidth="6"
                    fill="none"
                  />
                  <text
                    x="60"
                    y="75"
                    fontSize="40"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    A
                  </text>
                </svg>
                <h3 className="text-sm font-bold text-white/90 mb-1 uppercase tracking-wide">BATTLE PASS</h3>
                <h4 className="text-4xl font-black text-white mb-4 uppercase">PLUS</h4>
              </div>
              {/* Black banner - at bottom */}
              <div className="bg-black px-4 py-3 rounded-lg w-full">
                <p className="text-white font-bold text-xs uppercase">8 SESSIONS DE JEU PAR MOIS</p>
                <p className="text-white/80 text-xs mt-1">Dont 2 sessions en heures pleines</p>
              </div>
            </div>
          </div>

          {/* Content Section - Beige/off-white background */}
          <div className="p-6 bg-[#F5F5F0]">
            {/* Pricing */}
            <div className="mb-6 text-center">
              <div className="flex items-baseline gap-2 mb-2 justify-center">
                <span className="text-5xl font-black text-black">89</span>
                <span className="text-xl text-black">€</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">89 € / Mois pour les mois suivants</p>
              <p className="text-sm text-gray-600">Abonnement sans engagement</p>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mb-6 text-sm text-gray-700 leading-relaxed">
              <li>SESSIONS HEURES CREUSES SUPPLÉMENTAIRES À 15,00 €</li>
              <li>SEASON PASS INCLUS DANS L'ABONNEMENT</li>
              <li>ACCÈS À L'OFFRE DE PARRAINAGE</li>
              <li>ACCÈS AUX LIGUES (EL1, EL2, LIGUES LOCALES)</li>
              <li>JOUER DANS TOUTES LES ARÈNES EN FRANCE ET BELGIQUE</li>
              <li>CRÉNEAUX ESPORT POUR LES TEAMS CERTIFIÉES</li>
              <li>RÉDUCTION DE 10% AU CYBER BAR</li>
              <li>DÉCOUVERTE DE NOUVEAUX CONTENUS EN AVANT PREMIÈRE (Skins, maps exclusives, playtests)</li>
            </ul>

            {/* Links */}
            <div className="space-y-4">
              <a href="#" className="block text-[#0ba0da] text-sm hover:text-[#6B2EE8] transition-colors underline">
                Voir la FAQ
              </a>
              <Button className="w-full bg-[#0ba0da] hover:bg-[#0ba0da]/90 text-white font-bold py-3 uppercase">
                RESERVER
              </Button>
            </div>
          </div>
        </div>

        {/* ULTRA Card */}
        <div className="bg-white shadow-lg overflow-hidden ">
          {/* Header with background image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/bright-futuristic-corridor-with-light-beam-sci-fi.jpg"
              alt="Futuristic VR"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-orange-400/50 to-orange-500/60 backdrop-blur-sm"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Info icon - positioned absolutely */}
              <button className="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold hover:bg-white/20 transition-colors">
                i
              </button>
              {/* Centered content */}
              <div className="flex flex-col items-center justify-center flex-1">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M60 10 L100 30 L100 70 Q100 90 80 100 L60 110 L40 100 Q20 90 20 70 L20 30 Z"
                    stroke="white"
                    strokeWidth="6"
                    fill="none"
                  />
                  <text
                    x="60"
                    y="75"
                    fontSize="40"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    A
                  </text>
                </svg>
                <h3 className="text-sm font-bold text-white/90 mb-1 uppercase tracking-wide">BATTLE PASS</h3>
                <h4 className="text-4xl font-black text-white mb-4 uppercase">ULTRA</h4>
              </div>
              {/* Black banner - at bottom */}
              <div className="bg-black px-4 py-3 rounded-lg w-full">
                <p className="text-white font-bold text-xs uppercase">16 SESSIONS DE JEU PAR MOIS</p>
                <p className="text-white/80 text-xs mt-1">Dont 4 sessions en heures pleines</p>
              </div>
            </div>
          </div>

          {/* Content Section - Beige/off-white background */}
          <div className="p-6 bg-[#F5F5F0]">
            {/* Pricing */}
            <div className="mb-6 text-center">
              <div className="flex items-baseline gap-2 mb-2 justify-center">
                <span className="text-5xl font-black text-black">169</span>
                <span className="text-xl text-black">€</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">169 € / Mois pour les mois suivants</p>
              <p className="text-sm text-gray-600">Abonnement sans engagement</p>
            </div>

            {/* Features List */}
            <ul className="space-y-2 mb-6 text-sm text-gray-700 leading-relaxed">
              <li>SESSIONS HEURES CREUSES SUPPLÉMENTAIRES À 15,00 €</li>
              <li>SEASON PASS INCLUS DANS L'ABONNEMENT</li>
              <li>ACCÈS À L'OFFRE DE PARRAINAGE</li>
              <li>ACCÈS AUX LIGUES (EL1, EL2, LIGUES LOCALES)</li>
              <li>JOUER DANS TOUTES LES ARÈNES EN FRANCE ET BELGIQUE</li>
              <li>CRÉNEAUX ESPORT POUR LES TEAMS CERTIFIÉES</li>
              <li>RÉDUCTION DE 10% AU CYBER BAR</li>
              <li>DÉCOUVERTE DE NOUVEAUX CONTENUS EN AVANT PREMIÈRE (Skins, maps exclusives, playtests)</li>
              <li>RÉDUCTIONS EXCLUSIVES (Merchandising sur fulllife, contenu dans le jeu, etc.)</li>
            </ul>

            {/* Links */}
            <div className="space-y-4">
              <a href="#" className="block text-[#0ba0da] text-sm hover:text-[#6B2EE8] transition-colors underline">
                Voir la FAQ
              </a>
              <Button className="w-full bg-[#0ba0da] hover:bg-[#0ba0da]/90 text-white font-bold py-3 uppercase">
                RESERVER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default pricing
