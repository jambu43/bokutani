import React from 'react'

function Vide() {
  return (
    <section className="bg-white py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl lg:text-4xl font-black mb-6">
          <span className="text-black">DES SOIRÉES </span>
          <span className="text-[#fc9937]">POUR VIBRER</span>
        </h3>
        <p className="text-gray-700 text-md leading-relaxed max-w-3xl mx-auto font-weight-light">
          Le Cyber Bar, c'est aussi le QG des soirées EVA ! Soirées à thème, viewing parties pour vivre les grands
          moments gaming, animations spéciales... Chaque salle EVA propose son propre programme.
        </p>
      </div>

      {/* Event Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="https://www.eva.gg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnight.5f347def.webp&w=1920&q=75"
          alt="Evening Event"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
  )
}

export default Vide;
