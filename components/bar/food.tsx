import React from "react";

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
            Chez BOKUTANI, le jeu continue... même à table. Burgers, wraps,
            planches à partager : la carte change selon la salle, mais l'appétit
            reste le même.
          </p>
        </div>

        {/* Food Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://i.guim.co.uk/img/media/545e9effb5e717ea28f7d639571f081d9e3d9dc4/0_45_7952_4774/master/7952.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=95ea8f8e1d6dfb531a9827884dd4a016"
              alt="Gourmet Sandwich"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.urbania.ca/image/2024-05-08/72271-042351-filters(large).jpg"
              alt="Mini Burgers"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.urbania.ca/image/2024-05-08/72273-042352-filters(large).jpg"
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
