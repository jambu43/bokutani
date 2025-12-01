import React from 'react'

function Vide() {
  return (
    <section className="bg-white py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl lg:text-4xl font-black mb-6">
          <span className="text-black">DES SOIRÉES </span>
          <span className="text-[#0ba0da]">POUR VIBRER</span>
        </h3>
        <p className="text-gray-700 text-md leading-relaxed max-w-3xl mx-auto font-weight-light">
          Le Cyber Bar, c'est aussi le QG des soirées BOKUTANI ! Soirées à thème, viewing parties pour vivre les grands
          moments gaming, animations spéciales... Chaque salle BOKUTANI propose son propre programme.
        </p>
      </div>

      {/* Event Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="https://chacha-kinshasa.com/wp-content/uploads/2024/11/454400519_18046966747895497_4886546806974536868_n.jpg"
          alt="Evening Event"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
  )
}

export default Vide;
