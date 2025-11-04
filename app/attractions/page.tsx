import Image from "next/image"
import { Button } from "@/components/ui/button"
import Faq from '@/components/home/faq';
import Testimony from '@/components/home/testimony';
import Link from "next/link";
// Icon components
const Waves = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-2.5 0-4.5-2-4.5-4.5S6.5 10 9 10s4.5 2 4.5 4.5S11.5 19 9 19zM9 10v9M15 19c-2.5 0-4.5-2-4.5-4.5S12.5 10 15 10s4.5 2 4.5 4.5S17.5 19 15 19zM15 10v9" />
  </svg>
);

const Gamepad2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.751 9.5l-3.5 2.5v-5l3.5 2.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Car = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 0a2 2 0 00-2 2v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2m-8 0V6a2 2 0 012-2h4a2 2 0 012 2v1M8 7v1m8-1v1m-8 6h.01M16 14h.01" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Headset = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default function Attractions() {
  return (
    <div className="min-h-screen">

<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <img src="https://www.eva.gg/_next/static/media/bg.3ef46437.webp" alt="Cyber Bar Interior" className="w-full h-full object-cover" />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg,#fc9937,rgba(75,17,226,.02))'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white mb-8 leading-tight font-gotham">
        DÉCOUVREZ 
          <br />
          <span className="text-white">NOS ATTRACTIONS</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Un parc d'attractions complet pour toute la famille à Kinshasa
          </p>
      </div>
    </section>


      {/* Activities for Children Section */}
      <section className="py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="px-12 py-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black" >
              ACTIVITÉS POUR LES
              <span className="block text-[#fc9937]">ENFANTS</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Un univers magique conçu spécialement pour les plus jeunes ! De 3 à 12 ans, vos enfants découvriront des
              activités adaptées à leur âge dans un environnement sécurisé et encadré par des professionnels.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Waves className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Parc aquatique avec toboggans adaptés</span>
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Kukule Land - Aire de jeux intérieur</span>
              </li>
              <li className="flex items-center gap-3">
                <Gamepad2 className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Aire de jeux extérieur (3 à 12 ans)</span>
              </li>
            </ul>
            <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white px-8 py-6 text-lg">
              RÉSERVER POUR LES ENFANTS
            </Button>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/children-playing-at-water-park-kinshasa.jpg"
              alt="Enfants jouant au parc aquatique"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Dark Separator with CTA */}
      <section className="relative py-20 bg-[#1A1A1A] text-white">
        <div className="absolute inset-0">
          <Image
            src="/bokutani-park-aerial-view-kinshasa.jpg"
            alt="Vue aérienne BOKUTANI"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">PRIVATISEZ LE PARC</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Organisez votre événement privé dans notre parc d'attractions
          </p>
          <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white px-8 py-6 text-lg">DEMANDER UN DEVIS</Button>
        </div>
      </section>

      {/* Activities for Teenagers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              ACTIVITÉS POUR LES
              <span className="block text-[#fc9937]">ADOLESCENTS</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des sensations fortes et des défis excitants pour les ados ! Adrénaline, compétition et fun garantis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/teenagers-at-water-park-bokutani.jpg"
                alt="Parc aquatique"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Waves className="text-white w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold text-white">Parc Aquatique</h3>
                  <p className="text-white/90">Toboggans géants et piscines à vagues</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/teenagers-playing-laser-quest-bokutani.jpg"
                alt="Laser Quest"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Target className="text-white w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold text-white">Laser Quest</h3>
                  <p className="text-white/90">Combat laser en équipe</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/teenagers-on-quad-rides-bokutani.jpg"
                alt="Quad Rides"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Car className="text-white w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold text-white">Quad Rides</h3>
                  <p className="text-white/90">Parcours tout-terrain sécurisé</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/teenagers-ekart-racing-bokutani.jpg"
                alt="E-Kart"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Car className="text-white w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold text-white">E-Kart</h3>
                  <p className="text-white/90">Course de karts électriques</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/teenagers-paintball-bokutani.jpg"
                alt="Paintball"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Target className="text-white w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold text-white">Paintball</h3>
                  <p className="text-white/90">Bataille stratégique en équipe</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/teenagers-vr-gaming-bokutani.jpg"
                alt="Réalité Virtuelle"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Headset className="text-white w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold text-white">Réalité Virtuelle</h3>
                  <p className="text-white/90">Jeux VR immersifs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities for Adults Section */}
      <section className="py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="relative h-[600px] order-2 md:order-1">
            <Image
              src="/adults-enjoying-activities-bokutani.jpg"
              alt="Adultes profitant des activités"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-12 py-16 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              ACTIVITÉS POUR LES
              <span className="block text-[#fc9937]">ADULTES</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Détente, adrénaline ou compétition ? Choisissez votre expérience ! BOKUTANI propose des activités variées
              pour tous les goûts.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Waves className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Parc aquatique avec zones de détente</span>
              </li>
              <li className="flex items-center gap-3">
                <Target className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Laser Quest et Paintball</span>
              </li>
              <li className="flex items-center gap-3">
                <Car className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">E-Kart - Course électrique</span>
              </li>
              <li className="flex items-center gap-3">
                <Headset className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Réalité Virtuelle - Expériences immersives</span>
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="text-[#fc9937] w-6 h-6" />
                <span className="text-lg text-black">Espace détente et massages</span>
              </li>
            </ul>
            <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white px-8 py-6 text-lg">
              RÉSERVER MAINTENANT
            </Button>
          </div>
        </div>
      </section>

      {/* Relaxation Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
              ESPACE
              <span className="block text-[#fc9937]">DÉTENTE & BIEN-ÊTRE</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Après l'adrénaline, place à la relaxation ! Profitez de notre espace bien-être pour vous ressourcer et
              vous détendre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/spa-massage-relaxation-bokutani.jpg"
                alt="Espace détente et massage"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-black">Nos Services de Détente</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fc9937]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-[#fc9937] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Massages Professionnels</h4>
                    <p className="text-gray-700">
                      Massages relaxants, sportifs et thérapeutiques par des professionnels qualifiés
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fc9937]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-[#fc9937] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Sauna & Hammam</h4>
                    <p className="text-gray-700">Détendez-vous dans nos espaces sauna et hammam après vos activités</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fc9937]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-[#fc9937] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Salon de Thé</h4>
                    <p className="text-gray-700">Savourez des boissons chaudes et collations dans un cadre apaisant</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fc9937]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-[#fc9937] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-black">Zones de Repos</h4>
                    <p className="text-gray-700">Espaces confortables avec transats et zones ombragées</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white px-8 py-6 text-lg mt-8">
                RÉSERVER UN MASSAGE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">NOS OFFRES VOUS ATTENDENT, CONTACTEZ-NOUS !</h2>
          <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white px-8 py-6 text-lg">DEMANDER UN DEVIS</Button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/bokutani-park-interior-kinshasa.jpg"
              alt="Intérieur du parc BOKUTANI"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-12 py-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 ">NOS FORMULES TOUT COMPRIS</h2>
            <p className="text-lg text-gray-300 mb-6">
              Profitez de nos formules complètes incluant l'accès à plusieurs attractions, la restauration et les
              services de détente. Des packages adaptés à tous les budgets et toutes les envies.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✓ Accès illimité aux attractions incluses</li>
              <li>✓ Repas et boissons au restaurant du parc</li>
              <li>✓ Équipements fournis (casques, protections, etc.)</li>
              <li>✓ Encadrement par des professionnels</li>
              <li>✓ Accès à l'espace détente</li>
              <li>✓ Parking gratuit</li>
            </ul>
            <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white px-8 py-6 text-lg">VOIR NOS FORMULES</Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 ">DEMANDER UN DEVIS</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50"
                  placeholder="+243 XXX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Activités souhaitées</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option>Sélectionnez les activités</option>
                  <option>Parc aquatique</option>
                  <option>Laser Quest</option>
                  <option>E-Kart</option>
                  <option>Paintball</option>
                  <option>Réalité Virtuelle</option>
                  <option>Espace détente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              <Button className="w-full bg-[#fc9937] hover:bg-[#fc9937] text-white py-6 text-lg">
                ENVOYER LA DEMANDE
              </Button>
            </form>
          </div>
          <div className="relative h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image src="/bokutani-logo-triangle-kinshasa.jpg" alt="Logo BOKUTANI" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

    <Faq />

      {/* Testimonials Section */}
      <Testimony />

      {/* Other Events Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12">
            D'AUTRES ÉVÉNEMENTS À ORGANISER ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/team-building-corporate-bokutani.jpg"
                alt="Team Building"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fc9937]/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">TEAM BUILDING</h3>
                  <p className="text-white/90 mb-4">Renforcez la cohésion de vos équipes</p>
                  <Button className="bg-white text-[#fc9937] hover:bg-gray-100">EN SAVOIR PLUS</Button>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/corporate-events-bokutani.jpg"
                alt="Événements d'entreprise"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fc9937]/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">ÉVÉNEMENTS D'ENTREPRISE</h3>
                  <p className="text-white/90 mb-4">Séminaires, soirées et célébrations</p>
                  <Button className="bg-white text-[#fc9937] hover:bg-gray-100">EN SAVOIR PLUS</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-[#fc9937] to-[#fc9937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12">NOTRE PARC À KINSHASA</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-black">BOKUTANI Kinshasa</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <span>Avenue de la Libération, Kinshasa, RDC</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <span>+243 XXX XXX XXX</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <span>contact@bokutani.cd</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <span>Ouvert tous les jours de 9h à 21h</span>
                  </p>
                </div>
                <Button className="bg-white text-[#fc9937] hover:bg-gray-100 mt-8 px-8 py-6 text-lg">
                  OBTENIR L'ITINÉRAIRE
                </Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/bokutani-location-map-kinshasa.jpg"
                  alt="Localisation BOKUTANI Kinshasa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
