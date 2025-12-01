"use client";
import React from 'react';
import Image from 'next/image';
import Pricing from '@/components/tarif/pricing';

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
          <div className="absolute inset-0 bg-[#0ba0da]/60" />
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
            Rejoignez les rangs des Battle Pass Bokutani et profitez de tarifs préférentiels, de contenu régulier et de réductions exclusives!
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
    {/* <Pricing /> */}

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

