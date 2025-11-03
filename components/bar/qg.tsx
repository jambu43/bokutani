import React from "react";

function Qg() {
  return (
    <section className="relative py-16 bg-white immersion">
      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal */}
        <div className="text-center mb-12 relative -top-20">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-[#fc9937] mb-8 leading-tight font-gotham">
            VOTRE NOUVEAU
            <span className="text-4xl md:text-4xl lg:text-4xl text-black">
             {" "} QG
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-normal">
            Bien plus qu’un bar : un vrai repaire. Victoire, retrouvailles ou
            pause bien méritée ? Le Cyber Bar vous tend les bras. Solo, en
            famille ou en équipe, ressentez l’esprit EVA, même sans entrer dans
            l’arène.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl w-150 mx-auto mt-10">
            <img
              src="https://www.eva.gg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.5e3998fc.webp&w=1920&q=75"
              alt="Cyber Bar with Neon Sign"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qg;
