import Link from "next/link";
import React from "react";

function hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.eva.gg/videos/eva-bg-video.webm" type="video/webm" />
        </video>
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg,#4b11e2,rgba(75,17,226,.02))'
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

export default hero;
