import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function faq() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-6xl md:text-7xl font-black text-[#fc9937] mb-6">FAQ</h4>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Tout ce que vous devez savoir avant d'entrer dans l'arène ! Retrouvez ici les réponses à vos questions
          pour profiter pleinement de l'expérience Bokutani.
        </p>
      </div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {/* Question 1 */}
        <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm">
          <AccordionTrigger className="text-xl font-black text-black hover:no-underline py-6">
            C'EST QUOI Bokutani ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-6">
            Bokutani, c'est le leader des jeux VR en équipe. La seule expérience à grande échelle, sur 500 m² de terrain
            libre. Casque VR, gun connecté, liberté totale de mouvement : vous plongez dans un jeu de tir à la
            première personne, en pleine immersion. Accessible à tous, pensé pour le fun comme pour la perf, Bokutani
            fait passer le gaming dans une autre dimension.
          </AccordionContent>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm">
          <AccordionTrigger className="text-xl font-black text-black hover:no-underline py-6">
            QUELLES SONT LES CONDITIONS POUR JOUER À Bokutani ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-6">
            Pour jouer à Bokutani, vous devez avoir au moins 10 ans. Aucune expérience en VR n'est nécessaire - nos
            équipes vous accompagnent pour une prise en main rapide. Il est recommandé de porter des vêtements
            confortables et des chaussures de sport fermées pour profiter pleinement de l'expérience.
          </AccordionContent>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm">
          <AccordionTrigger className="text-xl font-black text-black hover:no-underline py-6">
            OÙ PUIS-JE JOUER À Bokutani ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-6">
            Bokutani dispose de plusieurs arènes en France : Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes,
            Strasbourg, Dijon et Amiens. Chaque salle offre la même expérience immersive de haute qualité avec nos
            jeux exclusifs. Consultez notre page de localisation pour trouver l'arène la plus proche de chez vous.
          </AccordionContent>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-2xl px-8 shadow-sm">
          <AccordionTrigger className="text-xl font-black text-black hover:no-underline py-6">
            COMMENT SE DÉROULE UNE PARTIE EN RÉALITÉ VIRTUELLE ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-6">
            Une session Bokutani dure environ 1h30 au total. Après votre arrivée, vous recevez un briefing de 10 minutes
            pour comprendre les règles et l'équipement. Ensuite, vous enfilez votre casque VR et votre équipement,
            puis vous entrez dans l'arène pour 30-45 minutes de jeu intense. Après la partie, vous pouvez vous
            détendre au bar et revivre vos meilleurs moments avec vos coéquipiers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </section>
  );
}

export default faq
