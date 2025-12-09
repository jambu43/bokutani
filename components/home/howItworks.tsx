'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { StaggerAnimation, StaggerItem } from '@/components/ui/scroll-animation'

function howItworks() {
  return (
    <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Steps */}
            <div className="space-y-8">
              {/* Title */}
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h4 className="text-2xl md:text-4xl font-black mb-4">
                  <span className="text-[#0ba0da]">COMMENT</span>
                  <br />
                  <span className="text-black">ÇA MARCHE ?</span>
                </h4>
                <p className="text-gray-700 text-md leading-relaxed">
                  Chez BOKUTANI, tout le monde peut entrer dans l'arène. Joueur occasionnel ou compétiteur, vivez une
                  expérience unique !
                </p>
              </motion.div>

              {/* Steps */}
              <StaggerAnimation className="space-y-6">
                {/* Step 1 */}
                <StaggerItem direction="left">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-100"
                  >
                    <div className="text-[#0ba0da] font-black text-sm mb-2">ÉTAPE 1</div>
                    <h5 className="text-2xl font-black text-black mb-3">FORMEZ VOTRE SQUAD</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Jusqu'à 10 joueurs par arène. Si vous êtes moins nombreux, d'autres joueurs de votre niveau pourront
                      vous rejoindre.
                    </p>
                  </motion.div>
                </StaggerItem>

                {/* Step 2 */}
                <StaggerItem direction="left">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-100"
                  >
                    <div className="text-[#0ba0da] font-black text-sm mb-2">ÉTAPE 2</div>
                    <h5 className="text-2xl font-black text-black mb-3">BRIEFING ET ÉQUIPEMENT</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Après un rapide briefing, enfilez votre casque et tenez-vous prêt.e.
                    </p>
                  </motion.div>
                </StaggerItem>

                {/* Step 3 */}
                <StaggerItem direction="left">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-100"
                  >
                    <div className="text-[#0ba0da] font-black text-sm mb-2">ÉTAPE 3</div>
                    <h5 className="text-2xl font-black text-black mb-3">GAME ON !</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Votre partie commence : stratégie, fun et adrénaline sont au rendez-vous !
                    </p>
                  </motion.div>
                </StaggerItem>

                {/* Step 4 */}
                <StaggerItem direction="left">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-100"
                  >
                    <div className="text-[#0ba0da] font-black text-sm mb-2">ÉTAPE 4</div>
                    <h5 className="text-2xl font-black text-black mb-3">APRÈS L'EFFORT LE RÉCONFORT</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Reprenez votre souffle, partagez vos exploits et refaites le match autour d'un verre.
                    </p>
                  </motion.div>
                </StaggerItem>
              </StaggerAnimation>
            </div>

            {/* Right Column - Image */}
            <StaggerAnimation className="relative">
              <StaggerItem direction="right">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/howitwork/howtowork1.jpg"
                    width={500}
                    height={300}
                    alt="Players in VR Arena"
                    className="w-full h-[320px] rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem direction="right">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-4"
                >
                  <Image
                    src="/howitwork/howtowork2.jpg"
                    width={500}
                    height={500}
                    alt="Players in VR Arena"
                    className="w-full h-[320px] rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem direction="right">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-4"
                >
                  <Image
                    src="/howitwork/howtowork3.jpg"
                    width={500}
                    height={300}
                    alt="Players in VR Arena"
                    className="w-full h-[320px] rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </StaggerItem>
            </StaggerAnimation>
          </div>
        </div>
      </section>
  )
}

export default howItworks
