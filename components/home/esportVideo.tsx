'use client';

import React from "react";
import { motion } from "framer-motion";

function esportVideo() {
  return (
    <section className="bg-[#2A2A2E] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-[#0ba0da]">LE FUTUR DU</span> {" "}
            <span className="text-white">VR EN RDC</span>
          </h4>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Facile à prendre en main, difficile à maîtriser. Bokutani réinvente l'esport en mêlant performance physique et gaming. Suivez nos compétitions !
          </p>

          {/* Action Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
              CHAÎNE TWITCH
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
              CALENDRIER
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
              LANCER SON ÉQUIPE
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}
        </motion.div>

        {/* Video Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            className="w-full aspect-video bg-black"
            controls
            poster="/welcome.jpg"
          >
        <source src="/bokutani-video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default esportVideo;
