'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { StaggerAnimation, StaggerItem } from '@/components/ui/scroll-animation';

function events() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-black">CÉLÉBREZ </span>
            <span className="text-[#0ba0da]">L'OCCASION</span>
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Une arène rien que pour vous. Privatisez Bokutani et transformez votre
            événement en moment inoubliable.
          </p>
        </motion.div>

        <StaggerAnimation className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Anniversaire Card */}
          <StaggerItem direction="scale">
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
            <Image
              src="/events/anniversary.jpg"
              width={500}
              height={500}
              alt="Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h5 className="text-3xl font-black mb-3 text-center">
                BOKUTANI / EXPERIENCE
              </h5>
              <p className="text-gray-200 text-sm mb-6 text-center">
                Pour les rencontres immersives, événements en présentiel, networking, démonstrations technologiques et expériences VR.
                </p>
              <button className="w-full py-3 bg-[#0ba0da] hover:bg-[#0ba0da] text-white font-bold rounded-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
            </motion.div>
          </StaggerItem>

          {/* EVG / EVJF Card */}
          <StaggerItem direction="scale">
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
            <Image
              src="/events/competitions.jpg"
              width={500}
              height={500}
              alt="EVG / EVJF"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h5 className="text-3xl font-black mb-3 text-center">
                BOKUTANI / COMPETITIONS
              </h5>
              <p className="text-gray-200 text-sm mb-6 text-center">
                Sessions de jeu et tournées de shots : ce qui se passe chez BOKUTANI
                reste chez BOKUTANI...
              </p>
              <button className="w-full py-3 bg-[#0ba0da] hover:bg-[#0ba0da] text-white font-bold rounded-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
            </motion.div>
          </StaggerItem>

          {/* Entreprises Card */}
          <StaggerItem direction="scale">
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
            <Image
              src="/gamesxx3.jpeg"
              width={500}
              height={500}
              alt="Entreprises"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h5 className="text-3xl font-black mb-3 text-center">
                BOKUTANI / AFTER WORK
              </h5>
              <p className="text-gray-200 text-sm mb-6 text-center">
                Après le travail, place à la détente : partagez un moment convivial avec vos collègues dans une expérience VR inoubliable !
              </p>
              <button className="w-full py-3 bg-[#0ba0da] hover:bg-[#0ba0da] text-white font-bold rounded-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
            </motion.div>
          </StaggerItem>
        </StaggerAnimation>
      </div>
    </section>
  );
}

export default events;
