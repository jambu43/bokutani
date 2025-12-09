'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { StaggerAnimation, StaggerItem } from '@/components/ui/scroll-animation'

function Games() {
  return (
    <section className="bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-l lg:text-l font-black text-center mb-16 text-black"
          >
            NOS JEUX VR EXCLUSIFS
          </motion.h4>

          <StaggerAnimation className="relative flex items-center justify-center gap-8">
            {/* Left Decorative Card */}
            <StaggerItem direction="left" className="hidden lg:block w-64 h-80">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="-rotate-12 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/gamesxx2.jpg"
                  alt="VR Player"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            </StaggerItem>

            {/* Center Cards Container */}
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl justify-center">
              {/* After-H Battle Arena Card */}
              <StaggerItem direction="scale" className="relative rounded-xl overflow-hidden shadow-2xl w-full md:w-64 lg:w-85 min-h-[500px]">
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-full"
                >
                {/* Vidéo de fond */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/gamexx2.mp4" type="video/mp4" />
                </video>
                
                {/* Dégradé noir par-dessus */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
                
                {/* Contenu avec texte et boutons */}
                <div className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-end">
                  <h5 className="text-white text-xl font-black">VR doomsday</h5>
                  <p className="text-gray-300 text-xs">
                  Doomsday, un jeu de tir et d'aventure en réalité virtuelle axé sur un scénario d'apocalypse zombie
                  </p>
                  <p className="text-gray-400 text-xs">Se joue de 2 à 10 joueurs</p>
                  <div className="space-y-3 pt-2">
                    <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-xs">
                      EN SAVOIR PLUS
                    </button>
                    <button className="w-full py-3 bg-[#0ba0da] hover:bg-[#0ba0da] text-white rounded-lg transition-colors text-xs">
                      RÉSERVER
                    </button>
                  </div>
                </div>
                </motion.div>
              </StaggerItem>

              {/* Moon of the Dead Card */}
              <StaggerItem direction="scale" className="relative rounded-xl overflow-hidden shadow-2xl w-full md:w-64 lg:w-85 min-h-[500px]">
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-full"
                >
                {/* Image de fond */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videogamexx2.mp4" type="video/mp4" />
                </video>
                
                {/* Dégradé noir par-dessus */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
                
                {/* Contenu avec texte et boutons */}
                <div className="relative z-10 p-6 space-y-4 h-full flex flex-col justify-end">
                  <h5 className="text-white text-xl font-black">VR Kids Racing User</h5>
                  <p className="text-gray-300 text-xs">
                    Le jeu d'enfant qui utilise un simulateur de course en réalité virtuelle
                  </p>
                  <p className="text-gray-400 text-xs">Se joue de 1 à 10 joueurs</p>
                  <div className="space-y-3 pt-2">
                    <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-xs">
                      EN SAVOIR PLUS
                    </button>
                    <button className="w-full py-2 bg-[#0ba0da] hover:bg-[#0ba0da] text-white rounded-lg transition-colors text-xs">
                      RÉSERVER
                    </button>
                  </div>
                </div>
                </motion.div>
              </StaggerItem>
            </div>

            {/* Right Decorative Card */}
            <StaggerItem direction="right" className="hidden lg:block w-64 h-80">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rotate-12 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/ZAVR_04_01_Screenshot_07_4k1-3-scaled.webp"
                  alt="VR Player Action"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            </StaggerItem>
          </StaggerAnimation>
        </div>
      </section>
  )
}

export default Games
