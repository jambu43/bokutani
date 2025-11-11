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
      <Resume />
      {/* Vous N'oublierez Jamais Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#fc9937] text-white p-12 rounded-2xl">
              <h2 className="text-4xl font-black mb-6">
                VOUS N'OUBLIEREZ JAMAIS
                <br />
                CE TEAM BUILDING
              </h2>
              <p className="mb-8 text-lg leading-relaxed">
                Offrez à vos équipes une expérience de team building
                exceptionnelle en réalité virtuelle. Immersion totale,
                adrénaline garantie !
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Jusqu'à 10 joueurs simultanés par arène</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>500 m² d'espace de jeu libre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Briefing et accompagnement inclus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Cyber Bar pour prolonger l'expérience</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-[#fc9937] hover:bg-gray-100 font-bold py-6">
                RÉSERVER MAINTENANT
              </Button>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/people-at-cyber-bar-with-neon-sign.jpg"
                alt="Cyber Bar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Votre Événement VR Clés en Main */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center text-black mb-6">
            VOTRE ÉVÉNEMENT VR{" "}
            <span className="text-[#fc9937]">CLÉS EN MAIN</span>
          </h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
            Séminaire, soirée d'entreprise, anniversaire... Nous organisons
            votre événement de A à Z.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/dark-corridor-tactical-shooter-game-environment.jpg"
                alt="Séminaire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-black mb-2">
                  SÉMINAIRE
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Renforcez la cohésion de vos équipes lors de votre séminaire
                  d'entreprise.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/bright-futuristic-corridor-with-light-beam-sci-fi.jpg"
                alt="Soirée d'entreprise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-black mb-2">
                  SOIRÉE D'ENTREPRISE
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Organisez une soirée inoubliable pour vos collaborateurs.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/armored-soldier-in-blue-sci-fi-environment.jpg"
                alt="Anniversaire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-black mb-2">
                  ANNIVERSAIRE
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Célébrez votre anniversaire dans l'arène VR avec vos amis.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/soldier-in-outdoor-desert-environment-with-weapon.jpg"
                alt="Et plus encore"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-black mb-2">
                  ET PLUS ENCORE
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  EVG/EVJF, lancement de produit, incentive... Contactez-nous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Une Expérience Unique Dans Votre Budget */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center text-black mb-6">
            UNE EXPÉRIENCE UNIQUE DANS
            <br />
            <span className="text-[#fc9937]">VOTRE BUDGET !</span>
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Chez BOKUTANI, nous adaptons nos offres à vos besoins et votre
            budget. Demandez un devis personnalisé !
          </p>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/parcaquatique.jpeg"
              alt="Large group event"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-black mb-6 text-black">
              OFFRE TEAM BUILDING
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Profitez d'une expérience complète incluant briefing, équipement
              VR de pointe, et accompagnement par notre équipe. Idéal pour
              renforcer la cohésion de vos équipes dans un cadre innovant et
              ludique.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#fc9937] text-xl">✓</span>
                <span className="text-black">
                  Accueil et briefing par notre équipe
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fc9937] text-xl">✓</span>
                <span className="text-black">
                  Équipement VR haut de gamme (casque, gun connecté)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fc9937] text-xl">✓</span>
                <span className="text-black">
                  Sessions de jeu adaptées à votre groupe
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fc9937] text-xl">✓</span>
                <span className="text-black">
                  Accès au Cyber Bar pour prolonger l'expérience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fc9937] text-xl">✓</span>
                <span className="text-black">Options traiteur disponibles</span>
              </li>
            </ul>

            <Button className="w-full bg-[#fc9937] hover:bg-[#fc9937] text-white font-bold py-6 text-lg">
              OBTENIR UN DEVIS PERSONNALISÉ
            </Button>
          </div>
        </div>
      </section>

      {/* Ils Nous Font Confiance */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center text-black mb-16">
            ILS NOUS FONT CONFIANCE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-60">
            <div className="text-6xl">🏢</div>
            <div className="text-6xl">🏢</div>
            <div className="text-6xl">🏢</div>
            <div className="text-6xl">🏢</div>
            <div className="text-6xl">🏢</div>
          </div>
        </div>
      </section>

      {/* Privatisez Nos Arènes */}
      <section className="py-20 px-6 bg-[#1A1A1E]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="/paintball.jpg"
              alt="Privatize arenas"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-5xl font-black mb-6 text-white">
            PRIVATISEZ NOS ARÈNES
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Réservez une arène complète pour votre événement privé et vivez une
            expérience exclusive.
          </p>
          <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white font-bold px-12 py-6 text-lg">
            RÉSERVER
          </Button>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-20 px-6 bg-[#2A2A2E]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/futuristic-soldier-with-glowing-helmet-in-post-apo.jpg"
                alt="After-H Battle Arena"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="mb-4">
                  <span className="bg-[#fc9937] text-white px-4 py-1 rounded-full text-sm font-bold">
                    NOS JEUX
                  </span>
                </div>
                <h3 className="text-white text-4xl font-black mb-4">
                  AFTER-H BATTLE ARENA
                </h3>
                <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white w-fit">
                  EN SAVOIR PLUS
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/zombie-creature-in-teal-cyan-underwater-horror-atm.jpg"
                alt="After-H Moon of the Dead"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="mb-4">
                  <span className="bg-[#fc9937] text-white px-4 py-1 rounded-full text-sm font-bold">
                    NOS JEUX
                  </span>
                </div>
                <h3 className="text-white text-4xl font-black mb-4">
                  AFTER-H MOON OF THE DEAD
                </h3>
                <Button className="bg-[#fc9937] hover:bg-[#fc9937] text-white w-fit">
                  EN SAVOIR PLUS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Adresse */}
      <section className="py-10 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center text-black mb-12">
            NOUS TROUVER
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-black mb-6">ADRESSE</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong className="text-black">BOKUTANI</strong>
                  </p>
                  <p className="text-lg">
                    3eme niveau Galleria Mall <br/> 9, Avenue Colonel Lukusa 6133, Kinshasa-Gombe <br />
                    Réf: Arrêt Chancellerie & Premier Shopping <br />
                    Kinshasa-Gombe
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black mb-6">CONTACT</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>[Téléphone à compléter]</span>
                  </p>
                  <p className="text-lg flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:contact@bokutani.cd">contact@bokutani.cd</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black mb-6">
                  HORAIRES
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="text-lg">Lundi - Vendredi: 9h-22h</p>
                  <p className="text-lg">Samedi - Dimanche: 10h-00h</p>
                </div>
              </div>
            </div>

            {/* Carte ou image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-200">
              {/* Placeholder pour la carte Google Maps ou une image */}
              {/* <div className="w-full h-full flex items-center justify-center text-gray-400">
                <p className="text-xl">Carte à intégrer</p>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5660379155133!2d15.299602199999999!3d-4.3041114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3369d6a3d1b3%3A0x2053597522e69370!2sGalleria%20Mall!5e0!3m2!1sfr!2scd!4v1762868509378!5m2!1sfr!2scd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
