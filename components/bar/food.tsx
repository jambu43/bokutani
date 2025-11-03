import React from 'react'

function Food() {
  return (
    <section className="bg-white py-5 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl lg:text-4xl font-black mb-6">
          <span className="text-black">LA FOOD </span>
          <span className="text-[#fc9937]">MULTIJOUEUR</span>
        </h3>
        <p className="text-gray-700 text-md leading-relaxed max-w-3xl mx-auto font-weight-light">
          Chez EVA, le jeu continue... même à table. Burgers, wraps, planches à partager : la carte change selon la
          salle, mais l'appétit reste le même.
        </p>
      </div>

      {/* Food Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.eva.gg/_next/static/media/food2.7ac1dd52.webp"
            alt="Gourmet Sandwich"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.eva.gg/_next/static/media/food3.78304eef.webp"
            alt="Mini Burgers"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.eva.gg/_next/static/media/food1.74276679.webp"
            alt="Pizza"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Food;