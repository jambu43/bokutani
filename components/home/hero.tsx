"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

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
          <source src="https://cdn.eva.gg/videos/eva-bg-video.mp4" type="video/mp4" />
          <source src="https://cdn.eva.gg/videos/eva-bg-video.webm" type="video/webm" />
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
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white mb-8 leading-tight font-gotham">
          REPOUSSEZ VOS LIMITES
          <br />
          <span className="text-white">ENTREZ DANS L'ARÈNE</span>
        </h1>
        <Link href="/reservation" className="px-8 py-4 bg-white text-purple-500 text-lg hover:bg-gray-100 transition-colors rounded-xl">
          RÉSERVER MAINTENANT
        </Link>
      </div>
    </section>
  );
}

export default Hero;
