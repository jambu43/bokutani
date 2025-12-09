'use client';

import React from 'react'
import { motion } from 'framer-motion'

function immersion() {
  return (
    <section className="relative py-16 bg-white immersion">
      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 relative -top-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-[#0ba0da] mb-8 leading-tight font-gotham"
          >
            UNE IMMERSION TOTALE
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-4xl lg:text-4xl text-black"
            >
              EN RÉALITÉ VIRTUELLE
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            Imaginez un terrain de jeu grandeur nature de 500 m², où chaque pas vous plonge dans un monde parallèle. En solo ou en équipe, relevez le défi et vivez des sensations intenses.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default immersion
