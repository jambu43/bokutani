import Link from "next/link";
import React from "react";

function hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <img src="https://www.eva.gg/_next/static/media/bg.3ef46437.webp" alt="Cyber Bar Interior" className="w-full h-full object-cover" />
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
         A PROPOS DE 
          <br />
          <span className="text-white">NOUS</span>
        </h1>
        <Link href="/reserver" className="px-8 py-4 bg-white text-purple-500 text-lg hover:bg-gray-100 transition-colors rounded-xl">
          RÉSERVER MAINTENANT
        </Link>
      </div>
    </section>
  );
}

export default hero;
