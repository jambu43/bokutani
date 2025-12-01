import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/about/hero";
import Resume from "@/components/about/resume";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Notre Histoire Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0ba0da] via-[#2d1654] to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              NOTRE HISTOIRE
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                <strong className="text-2xl">BOKUTANI</strong> est le premier parc d'attractions en réalité virtuelle à Kinshasa, 
                révolutionnant le divertissement et l'expérience gaming en République Démocratique du Congo.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Fondé sur la vision de repousser les limites du possible, BOKUTANI offre une immersion totale 
                dans des univers virtuels où la technologie rencontre l'adrénaline. Nous croyons que tout le monde 
                mérite de vivre des expériences extraordinaires, que vous soyez joueur occasionnel ou compétiteur aguerri.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Avec <strong>500 m² d'espace de jeu libre</strong>, nous sommes le leader des jeux VR en équipe, 
                offrant la seule expérience à grande échelle où vous pouvez bouger librement, tirer, esquiver et 
                vivre l'action comme jamais auparavant.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/people-at-cyber-bar-with-neon-sign.jpg"
                alt="BOKUTANI Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#0ba0da] to-[#2d1654] text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-black mb-4">NOTRE MISSION</h3>
              <p className="leading-relaxed">
                Révolutionner le divertissement en RDC en offrant des expériences VR immersives accessibles à tous, 
                du joueur occasionnel au compétiteur professionnel.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#fc9937] to-[#0ba0da] text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-black mb-4">NOTRE VISION</h3>
              <p className="leading-relaxed">
                Devenir la référence africaine en matière de réalité virtuelle, en créant des espaces où la technologie, 
                le fun et la performance se rencontrent.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2d1654] to-black text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-black mb-4">NOS VALEURS</h3>
              <p className="leading-relaxed">
                Innovation, accessibilité, excellence et passion. Chez BOKUTANI, chaque expérience est conçue 
                pour créer des moments inoubliables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce Qui Nous Rend Unique Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              CE QUI NOUS REND <span className="text-[#0ba0da]">UNIQUE</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez pourquoi BOKUTANI est l'expérience VR la plus immersive de Kinshasa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0ba0da]">
              <div className="flex items-start gap-4">
                <div className="bg-[#0ba0da] text-white rounded-full p-4 text-2xl font-black min-w-[60px] h-[60px] flex items-center justify-center">
                  500
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-3">M² D'ESPACE LIBRE</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Le plus grand espace de jeu VR de Kinshasa. Bougez librement, sans contraintes, 
                    dans un environnement sécurisé et immersif.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#fc9937]">
              <div className="flex items-start gap-4">
                <div className="bg-[#fc9937] text-white rounded-full p-4 text-2xl font-black min-w-[60px] h-[60px] flex items-center justify-center">
                  10
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-3">JOUEURS PAR ARÈNE</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Formez votre squad et affrontez d'autres équipes. Jusqu'à 10 joueurs simultanés 
                    pour des batailles épiques et mémorables.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#2d1654]">
              <div className="flex items-start gap-4">
                <div className="bg-[#2d1654] text-white rounded-full p-4 text-2xl font-black min-w-[60px] h-[60px] flex items-center justify-center">
                  🎮
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-3">TECHNOLOGIE DE POINTE</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Casques VR dernière génération, guns connectés, tracking précis. Une technologie 
                    professionnelle pour une expérience exceptionnelle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0ba0da]">
              <div className="flex items-start gap-4">
                <div className="bg-[#0ba0da] text-white rounded-full p-4 text-2xl font-black min-w-[60px] h-[60px] flex items-center justify-center">
                  🍹
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-3">CYBER BAR</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Après l'effort, le réconfort ! Prolongez votre expérience autour d'un verre dans 
                    notre Cyber Bar, l'endroit parfait pour partager vos exploits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi BOKUTANI Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0ba0da] to-[#2d1654] rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  POURQUOI <span className="text-[#0ba0da]">BOKUTANI</span> ?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0ba0da] rounded-full p-2 mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">Accessible à Tous</h4>
                      <p className="text-gray-300">Que vous soyez débutant ou expert, BOKUTANI s'adapte à votre niveau.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0ba0da] rounded-full p-2 mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">Immersion Totale</h4>
                      <p className="text-gray-300">Plongez dans des univers virtuels où la frontière avec la réalité disparaît.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0ba0da] rounded-full p-2 mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">Fun & Performance</h4>
                      <p className="text-gray-300">Conçu pour le plaisir comme pour la compétition, BOKUTANI répond à tous les besoins.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0ba0da] rounded-full p-2 mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">Équipe Accompagnante</h4>
                      <p className="text-gray-300">Notre équipe vous guide à chaque étape pour une expérience optimale.</p>
                    </div>
                  </div>
                </div>
                <Link href="/reserver">
                  <Button className="mt-8 bg-[#0ba0da] hover:bg-[#0ba0da]/90 text-white font-bold py-6 px-8 text-lg">
                    RÉSERVER VOTRE EXPÉRIENCE
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/howitwork/howtowork1.jpg"
                  alt="VR Experience"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/howitwork/howtowork2.jpg"
                  alt="VR Arena"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/howitwork/howtowork3.jpg"
                  alt="Team Building"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/people-at-cyber-bar-with-neon-sign.jpg"
                  alt="Cyber Bar"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Section Adresse */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ba0da]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2d1654]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              NOUS <span className="text-[#0ba0da]">TROUVER</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0ba0da] to-[#2d1654] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Venez vivre l'expérience BOKUTANI au cœur de Kinshasa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="space-y-6">
              {/* Carte Adresse */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#0ba0da] to-[#2d1654] text-white rounded-xl p-4 min-w-[60px] h-[60px] flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-black mb-4">ADRESSE</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="text-lg font-bold text-black">BOKUTANI</p>
                      <p className="text-lg leading-relaxed">
                        3ème niveau Galleria Mall<br/>
                        9, Avenue Colonel Lukusa 6133<br/>
                        Kinshasa-Gombe
                      </p>
                      <p className="text-base text-gray-500 italic">
                        Réf: Arrêt Chancellerie & Premier Shopping
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#fc9937] to-[#0ba0da] text-white rounded-xl p-4 min-w-[60px] h-[60px] flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-black mb-4">CONTACT</h3>
                    <div className="space-y-4">
                      <a 
                        href="tel:+243XXXXXXXXX" 
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#0ba0da]/10 transition-colors group"
                      >
                        <div className="bg-[#0ba0da] text-white rounded-lg p-3 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Téléphone</p>
                          <p className="text-lg font-semibold text-black">[À compléter]</p>
                        </div>
                      </a>
                      <a 
                        href="mailto:contact@bokutani.cd" 
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#0ba0da]/10 transition-colors group"
                      >
                        <div className="bg-[#fc9937] text-white rounded-lg p-3 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-lg font-semibold text-[#0ba0da]">contact@bokutani.cd</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Horaires */}
              <div className="bg-gradient-to-br from-[#0ba0da] to-[#2d1654] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[60px] h-[60px] flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black mb-4">HORAIRES</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        <span className="font-semibold">Lundi - Vendredi</span>
                        <span className="font-bold">9h - 22h</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        <span className="font-semibold">Samedi - Dimanche</span>
                        <span className="font-bold">10h - 00h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0ba0da] to-[#2d1654] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5660379155133!2d15.299602199999999!3d-4.3041114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3369d6a3d1b3%3A0x2053597522e69370!2sGalleria%20Mall!5e0!3m2!1sfr!2scd!4v1762868509378!5m2!1sfr!2scd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl min-h-[600px]"
                ></iframe>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-bold text-black">📍 Galleria Mall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
