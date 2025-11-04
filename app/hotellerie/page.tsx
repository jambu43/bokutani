import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const Wifi = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>
);

const Tv = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Wind = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const Coffee = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 11h14M5 11a2 2 0 110-4h14a2 2 0 110 4M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6m-9 4h6"
    />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default function HoteleriePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fc9937] via-[#fc9937] to-[#fc9937] text-black">
          <Image
            src="/luxury-urban-chalets-kinshasa-bokutani.jpg"
            alt="Chalets urbains BOKUTANI"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            HÔTELERIE
            <br />
            <span className="text-white/90">& ZONES DE RASSEMBLEMENT</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos chalets urbains luxueux et nos espaces de
            rassemblement uniques au cœur de Kinshasa
          </p>
          <Button className="bg-white text-[#fc9937] hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold">
            EXPLORER NOS HÉBERGEMENTS
          </Button>
        </div>

        {/* Curved transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6">
                VOTRE <span className="text-[#fc9937]">REFUGE URBAIN</span>
                <br />À KINSHASA
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                BOKUTANI redéfinit l'hospitalité à Kinshasa avec ses chalets
                urbains contemporains. Alliant confort moderne et design
                africain authentique, nos hébergements offrent une expérience
                unique pour les voyageurs d'affaires, les familles et les
                groupes.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Que vous veniez pour un séjour de détente, un événement
                d'entreprise ou des vacances en famille, nos espaces sont conçus
                pour créer des moments inoubliables.
              </p>
              <Button className="bg-[#fc9937] hover:bg-[#4A2FCC] text-white text-lg px-8 py-6 h-auto">
                DÉCOUVRIR NOS OFFRES
              </Button>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-chalet-interior-bokutani.jpg"
                alt="Intérieur chalet BOKUTANI"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chalets Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              NOS <span className="text-[#fc9937]">CHALETS URBAINS</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Chaque chalet est une oasis de confort, équipé de toutes les
              commodités modernes pour un séjour exceptionnel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Chalet Standard */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/chalet-standard-bokutani.jpg"
                  alt="Chalet Standard"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#fc9937] text-white px-4 py-2 rounded-full font-bold">
                  STANDARD
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">CHALET CONFORT</h3>
                <p className="text-gray-700 mb-6">
                  Parfait pour les couples ou les voyageurs solo. Espace cosy
                  avec toutes les commodités essentielles.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-[#fc9937]" />
                    <span>2 personnes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Wifi className="w-5 h-5 text-[#fc9937]" />
                    <span>WiFi haut débit</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Tv className="w-5 h-5 text-[#fc9937]" />
                    <span>TV écran plat</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Wind className="w-5 h-5 text-[#fc9937]" />
                    <span>Climatisation</span>
                  </li>
                </ul>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-[#fc9937]">
                    $80
                  </span>
                  <span className="text-gray-600">/nuit</span>
                </div>
                <Button className="w-full bg-[#fc9937] hover:bg-[#4A2FCC] text-white">
                  RÉSERVER
                </Button>
              </div>
            </div>

            {/* Chalet Familial */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-4 border-[#fc9937]">
              <div className="relative h-64">
                <Image
                  src="/chalet-familial-bokutani.jpg"
                  alt="Chalet Familial"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#fc9937] text-white px-4 py-2 rounded-full font-bold">
                  POPULAIRE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">CHALET FAMILIAL</h3>
                <p className="text-gray-700 mb-6">
                  Idéal pour les familles. Espace généreux avec chambres
                  séparées et salon commun.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-[#fc9937]" />
                    <span>4-6 personnes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Wifi className="w-5 h-5 text-[#fc9937]" />
                    <span>WiFi haut débit</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Tv className="w-5 h-5 text-[#fc9937]" />
                    <span>2 TV écran plat</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Coffee className="w-5 h-5 text-[#fc9937]" />
                    <span>Kitchenette équipée</span>
                  </li>
                </ul>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-[#fc9937]">
                    $150
                  </span>
                  <span className="text-gray-600">/nuit</span>
                </div>
                <Button className="w-full bg-[#fc9937] hover:bg-[#4A2FCC] text-white">
                  RÉSERVER
                </Button>
              </div>
            </div>

            {/* Chalet Premium */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/chalet-premium-bokutani.jpg"
                  alt="Chalet Premium"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  PREMIUM
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">CHALET LUXE</h3>
                <p className="text-gray-700 mb-6">
                  L'excellence absolue. Suite spacieuse avec terrasse privée et
                  services VIP inclus.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-[#fc9937]" />
                    <span>6-8 personnes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Wifi className="w-5 h-5 text-[#fc9937]" />
                    <span>WiFi ultra-rapide</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Tv className="w-5 h-5 text-[#fc9937]" />
                    <span>Home cinéma</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Coffee className="w-5 h-5 text-[#fc9937]" />
                    <span>Cuisine complète</span>
                  </li>
                </ul>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-[#fc9937]">
                    $250
                  </span>
                  <span className="text-gray-600">/nuit</span>
                </div>
                <Button className="w-full bg-[#fc9937] hover:bg-[#4A2FCC] text-white">
                  RÉSERVER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones de Rassemblement Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#fc9937] to-[#7C3FFF] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              ZONES DE <span className="text-white/90">RASSEMBLEMENT</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Des espaces polyvalents conçus pour accueillir vos événements,
              réunions et célébrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Salle de Conférence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all">
              <div className="relative h-64">
                <Image
                  src="/conference-room-bokutani.jpg"
                  alt="Salle de conférence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">
                  SALLE DE CONFÉRENCE
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Espace professionnel équipé pour vos réunions d'affaires,
                  séminaires et formations. Technologie de pointe et
                  configuration modulable.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>Capacité : 50-100 personnes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Tv className="w-5 h-5" />
                    <span>Écrans de projection HD</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Wifi className="w-5 h-5" />
                    <span>WiFi professionnel</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Coffee className="w-5 h-5" />
                    <span>Service traiteur disponible</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#fc9937] hover:bg-gray-100">
                  DEMANDER UN DEVIS
                </Button>
              </div>
            </div>

            {/* Espace Événementiel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all">
              <div className="relative h-64">
                <Image
                  src="/event-space-bokutani.jpg"
                  alt="Espace événementiel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">
                  ESPACE ÉVÉNEMENTIEL
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Grand hall polyvalent pour vos mariages, anniversaires, galas
                  et événements privés. Ambiance personnalisable selon vos
                  besoins.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>Capacité : 100-300 personnes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span>Décoration personnalisée</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Tv className="w-5 h-5" />
                    <span>Système son et lumière</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Coffee className="w-5 h-5" />
                    <span>Restauration sur mesure</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#fc9937] hover:bg-gray-100">
                  DEMANDER UN DEVIS
                </Button>
              </div>
            </div>

            {/* Terrasse Panoramique */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all">
              <div className="relative h-64">
                <Image
                  src="/panoramic-terrace-bokutani.jpg"
                  alt="Terrasse panoramique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">
                  TERRASSE PANORAMIQUE
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Vue imprenable sur Kinshasa. Parfait pour les cocktails,
                  réceptions en plein air et moments de détente entre collègues
                  ou amis.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>Capacité : 30-80 personnes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Vue panoramique</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Coffee className="w-5 h-5" />
                    <span>Bar extérieur</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Wind className="w-5 h-5" />
                    <span>Espace climatisé naturellement</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#fc9937] hover:bg-gray-100">
                  DEMANDER UN DEVIS
                </Button>
              </div>
            </div>

            {/* Salon VIP */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all">
              <div className="relative h-64">
                <Image
                  src="/vip-lounge-bokutani.jpg"
                  alt="Salon VIP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">SALON VIP</h3>
                <p className="text-white/90 mb-6 text-lg">
                  Espace intimiste et luxueux pour vos réunions privées,
                  négociations d'affaires ou célébrations exclusives.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>Capacité : 10-20 personnes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5" />
                    <span>Service personnalisé</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Tv className="w-5 h-5" />
                    <span>Équipement audiovisuel</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Coffee className="w-5 h-5" />
                    <span>Service de restauration VIP</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#fc9937] hover:bg-gray-100">
                  DEMANDER UN DEVIS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="text-[#fc9937]">GALERIE</span> PHOTOS
            </h2>
            <p className="text-xl text-gray-700">
              Découvrez nos espaces en images
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-1-bokutani.jpg"
                alt="Galerie 1"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-2-bokutani.jpg"
                alt="Galerie 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-3-bokutani.jpg"
                alt="Galerie 3"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-4-bokutani.jpg"
                alt="Galerie 4"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden md:col-span-2">
              <Image
                src="/gallery-5-bokutani.jpg"
                alt="Galerie 5"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden md:col-span-2">
              <Image
                src="/gallery-6-bokutani.jpg"
                alt="Galerie 6"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">
            PRÊT À RÉSERVER VOTRE
            <br />
            <span className="text-[#fc9937]">SÉJOUR À BOKUTANI ?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous dès maintenant pour réserver votre chalet ou votre
            espace événementiel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#fc9937] hover:bg-[#4A2FCC] text-white text-lg px-8 py-6 h-auto">
              RÉSERVER UN CHALET
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 h-auto bg-transparent">
              DEMANDER UN DEVIS
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
