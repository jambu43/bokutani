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
      reviewer: "DIVIN M",
      location: "Bokutani Kinshasa",
      time: "il y a 5 mois",
      image: "/person-with-vr-headset-holding-gun-in-tactical-gea.jpg",
    },
    {
      text: "100% immersif, Bokutani n'avait pas menti 🤩🤩 Explications claires, équipement et personnel ttes compétents. Le tout dans un cadre très agréable. Ça passe trop vite 🥺 à bientôt et merci !",
      reviewer: "JORNADAB B",
      location: "Bokutani Kinshasa",
      time: "il y a 1 mois",
      image: "/person-in-vr-gear-action-pose-with-yellow-accents-.jpg",
    },
    {
      text: "Une super immersion ! Dommage que ce soit si court, on en redemande !",
      reviewer: "THOMAS L",
      location: "Bokutani Kinshasa",
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
            <span className="text-[#0ba0da]">ILS ONT VALIDÉ</span>
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
                <h5 className="text-[#0ba0da] font-black text-xl mb-2">
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
              src="https://scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/558222727_1329894558919105_2137377229508313276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5I3shveasQF0aoIpw1gCcQ0_d4dknWZtDT93h2SdZmyBtfCaI6VRr5u-hNJoB0Pl8p3pt2DfvlzG5w5stPDF8&_nc_ohc=yCQM9TltNDAQ7kNvwFWebL7&_nc_oc=Adn_ci4l6TxTCx8WIBTo2nReBqi1RWtC3XdwGx36KkBRdB6NiWeRYV9tXuJD2cQzzsg&_nc_zt=23&_nc_ht=scontent.ffih1-2.fna&_nc_gid=p08jPo1RTo9jydTOqdQZkg&oh=00_AfiFjp8thnGPKt_0tZ4fdtEKSzZCb1F__lBCo3l7n3JGCA&oe=69191820"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <img
              src="https://scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/452438049_793828532866050_7713373290277823893_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH6XFiivX3gNzJjSJGIKyuHDQ0IyIkbeEoNDQjIiRt4SlxpyOGv1jZJWrfYifoR7OTnEJMuGYOY58tZTyEOxUhW&_nc_ohc=wqkxrGgdlwMQ7kNvwFhUdQH&_nc_oc=AdlQU9zcoXwH0mXszZC5U9u7xfIh_aMdmuns8rg5TwLV6iUbuO2lGZVjrY6-fv_Vs7s&_nc_zt=23&_nc_ht=scontent.ffih1-2.fna&_nc_gid=sZ_LB9oFdxRVWudNXUivmg&oh=00_Afh_LFHXOtgxA7AeSPqN88pxpcEXpbDQuy6sZyzQBSNzKQ&oe=69192AB1"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <img
              src="https://scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/337360281_1645758022511311_2858049976465293975_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEPFNTqaYfs_kWZxRcQvUWuCEPVCl1zPgQIQ9UKXXM-BG72dFWc_x7OpD6WR6cZ-Akbfm5GHbbDXZc8FZSFGjAA&_nc_ohc=eOnYTP_yXK8Q7kNvwHy83v9&_nc_oc=AdlFdjFnpNtUMIa88DIqIqB0t_k9zV1xsJRq1B3fynoHsPezKtELOx1HSwab0zy2Pak&_nc_zt=23&_nc_ht=scontent.ffih1-2.fna&_nc_gid=7d3H-LtHoTvwkXW_ZD9uTw&oh=00_AfhO_SzGgwstLTc3Mb70-pFVKAW_RBDt_DTJDw_iYiQqpw&oe=6919306B"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <img
              src="/6nvcHv_q.jpg"
              alt="Customer"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
    </section>
  );
}

export default testimony;
