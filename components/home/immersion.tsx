import React from 'react'

function immersion() {
  return (
    <section className="relative py-16 bg-white immersion">

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal */}
        <div className="text-center mb-12 relative -top-20">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-[#0ba0da] mb-8 leading-tight font-gotham">
            UNE IMMERSION TOTALE
            <br />
            <span className="text-4xl md:text-4xl lg:text-4xl text-black">EN RÉALITÉ VIRTUELLE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-normal">
            Imaginez un terrain de jeu grandeur nature de 500 m², où chaque pas vous plonge dans un monde parallèle. En solo ou en équipe, relevez le défi et vivez des sensations intenses.
          </p>
        </div>
      </div>
    </section>
  )
}

export default immersion
