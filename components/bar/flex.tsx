import React from 'react'
import { Button } from '@/components/ui/button'

function flex() {
  return (
    <section className="bg-white py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl lg:text-4xl font-black mb-6">
          <span className="text-black">LA BOUFFE </span>
          <br />
          <span className="text-[#0ba0da]">EN RÉALITÉ AUGMENTÉE</span>
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Découvrez une toute nouvelle manière de jouer aux fléchettes ! Défis exclusifs, modes interactifs : visez
          juste, marquez des points, prenez l'avantage. En solo, entre amis ou en équipe, chaque partie est
          différente.
        </p>
        <Button className="bg-[#0ba0da] hover:bg-[#4B2FEF] text-white font-bold px-2 py-2 rounded-full text-sm">
          EN SAVOIR PLUS
        </Button>
      </div>

      {/* AR Darts Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://i.ytimg.com/vi/Yu4-3yqM7RE/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAOG1K9g1etnV9IpE1yxdT_lGPkaQ"
            alt="Playing AR Darts"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.babinidesign.co.za/lacuisine-congolaise/img/13b.jpg"
            alt="Throwing Darts"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.latendresseencuisine.com/wp-content/uploads/2023/08/Poisson-a-la-congolaise.jpg"
            alt="AR Darts Interface"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default flex
