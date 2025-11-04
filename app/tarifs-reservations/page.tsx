"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function TarifsReservations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Battle Pass Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Purple Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/discovery-background-desktop-CDHq9yvS.webp"
            alt="VR Arena"
            fill
            className="object-cover"
            priority
          />
          {/* Additional purple tint */}
          <div className="absolute inset-0 bg-[#fc9937]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Shield Logo with A */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
              >
                {/* Shield outer border */}
                <path
                  d="M60 10 L100 30 L100 70 Q100 90 80 100 L60 110 L40 100 Q20 90 20 70 L20 30 Z"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Inner chevron/V shape */}
                <path
                  d="M60 40 L80 60 L60 80 L40 60 Z"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Stylized A */}
                <text
                  x="60"
                  y="75"
                  fontSize="40"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  className="font-black"
                >
                  A
                </text>
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tight">
            BATTLE PASS
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 uppercase tracking-wide">
            ENTREZ DANS LE MONDE DE L'ESPORT VR
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les rangs des Battle Pass EVA et profitez de tarifs préférentiels, de contenu régulier et de réductions exclusives!
          </p>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            <span className="text-xs md:text-sm text-white uppercase tracking-wider font-semibold">
              SCROLLEZ POUR EN SAVOIR PLUS
            </span>
          </div>
        </div>

      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-black">
            CHOISISSEZ L'ABONNEMENT <br /> QUI VOUS CONVIENT
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
                  <a href="#" className="block text-[#fc9937] text-sm hover:text-[#6B2EE8] transition-colors underline">
                    Voir la FAQ
                  </a>
                  <Button className="w-full bg-[#fc9937] hover:bg-[#fc9937]/90 text-white font-bold py-3 uppercase">
                    RESERVER
                  </Button>
                  <a href="#" className="block text-[#fc9937] text-sm hover:text-[#6B2EE8] transition-colors underline text-center">
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
                  <a href="#" className="block text-[#fc9937] text-sm hover:text-[#6B2EE8] transition-colors underline">
                    Voir la FAQ
                  </a>
                  <Button className="w-full bg-[#fc9937] hover:bg-[#fc9937]/90 text-white font-bold py-3 uppercase">
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
                  <a href="#" className="block text-[#fc9937] text-sm hover:text-[#6B2EE8] transition-colors underline">
                    Voir la FAQ
                  </a>
                  <Button className="w-full bg-[#fc9937] hover:bg-[#fc9937]/90 text-white font-bold py-3 uppercase">
                    RESERVER
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/advantages-background-desktop-Be0lnyqj.webp"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              {/* Shield Logo */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-white"></div>
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  <div className="h-px w-16 bg-white"></div>
                </div>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 text-center lg:text-left uppercase tracking-tight">
                DEVENEZ LE CHAMPION DE L'ARÈNE
              </h2>

              {/* Three Feature Blocks */}
              <div className="space-y-8">
                {/* Feature 1 - Gamepad Icon */}
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                      <path d="M7 10h.01M17 10h.01M7 14h10"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">
                      JOUEZ OÙ VOUS VOULEZ
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Vérifiez les salles disponibles près de chez vous, et celles en cours d'ouverture !
                    </p>
                  </div>
                </div>

                {/* Feature 2 - Clock with Arrow Icon */}
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                      <line x1="12" y1="12" x2="18" y2="6"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">
                      PRÉVOYEZ VOS SESSIONS EN AVANCE
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Jusqu'à 4 sessions réservables en avance.
                    </p>
                  </div>
                </div>

                {/* Feature 3 - Percentage Icon */}
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="9" r="2"></circle>
                      <circle cx="15" cy="15" r="2"></circle>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">
                      DÉPENSEZ MOINS POUR JOUER PLUS
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Les sessions supplémentaires en heures creuses après épuisement de l'abonnement sont à 15,00 €.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Character Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/tarrif.png"
                  alt="Alien Character"
                  width={600}
                  height={800}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TarifsReservations;

