import React from "react";
import Image from "next/image";

interface Testimonial {
  text: string;
  reviewer: string;
  location: string;
  time: string;
  image: string;
}

function testimony() {
  const testimonials: Testimonial[] = [
    {
      text: "Superbe expérience",
      reviewer: "SÉBASTIEN",
      location: "EVA Dijon",
      time: "il y a 5 mois",
      image: "/person-with-vr-headset-holding-gun-in-tactical-gea.jpg",
    },
    {
      text: "100% immersif, EVA n'avait pas menti 🤩🤩 Explications claires, équipement et personnel ttes compétents. Le tout dans un cadre très agréable. Ça passe trop vite 🥺 à bientôt et merci !",
      reviewer: "JUSTINE M",
      location: "EVA Amiens",
      time: "il y a 1 mois",
      image: "/person-in-vr-gear-action-pose-with-yellow-accents-.jpg",
    },
    {
      text: "Une super immersion ! Dommage que ce soit si court, on en redemande !",
      reviewer: "THOMAS L",
      location: "EVA Paris",
      time: "il y a 2 semaines",
      image: "/two-people-wearing-vr-headsets-holding-vr-guns-in-.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            <span className="text-black">ILS ONT ESSAYÉ,</span>
            <br />
            <span className="text-[#5B3FFF]">ILS ONT VALIDÉ</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-gray-700">
              Note moyenne de nos salles : 4.9 / 5
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden mb-12">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {/* Testimonial 1 */}
          {testimonials.map((testimonial, index) => (
            <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-gray-50 rounded-2xl p-8 snap-start">
              <p className="text-gray-800 text-center mb-8 min-h-[100px] flex items-center justify-center">
                {testimonial.text}
              </p>
              <div className="text-center">
                <h5 className="text-[#5B3FFF] font-black text-xl mb-2">
                  {testimonial.reviewer}
                </h5>
                <p className="text-gray-600 text-sm mb-2">
                  {testimonial.location} · {testimonial.time}
                </p>
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
            <img
              src="/person-wearing-vr-headset-profile-photo.jpg"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <img
              src="/person-with-vr-gear-smiling-profile-photo.jpg"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <img
              src="/woman-wearing-vr-headset-profile-photo.jpg"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <img
              src="/man-in-vr-gaming-setup-profile-photo.jpg"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
    </section>
  );
}

export default testimony;
