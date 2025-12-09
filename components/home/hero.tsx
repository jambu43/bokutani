"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force la lecture sur mobile
      videoRef.current.play().catch(() => {
        // Ignore les erreurs d'autoplay
      });
    }
  }, []);

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/bokutani-video.mp4" type="video/mp4" />
          <source src="/bokutani-video.mp4" type="video/webm" />
        </video>
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg,#0ba0da,rgba(75,17,226,.02))'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white mb-8 leading-tight font-gotham"
        >
          REPOUSSEZ VOS LIMITES
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white"
          >
            ENTREZ DANS L'ARÈNE
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/reserver" className="px-8 py-4 bg-white text-purple-500 text-lg hover:bg-gray-100 transition-colors rounded-xl inline-block">
            RÉSERVER MAINTENANT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
