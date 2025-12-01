"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Reserver() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
    typeReservation: '',
    nombrePersonnes: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.typeReservation) {
      alert('Veuillez sélectionner un jeu ou événement');
      return;
    }
    // Ici vous pouvez ajouter la logique de soumission
    console.log('Formulaire soumis:', formData);
    alert('Votre réservation a été envoyée avec succès !');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://app.eva.gg/assets/after-h-battle-arena-fhd-min-BXpFo7Is.webp" 
            alt="Background" 
            className="w-full h-full object-cover" 
          />
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(180deg,#0ba0da,rgba(75,17,226,.02))'
            }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 mt-20 leading-tight">
            RÉSERVER
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Réservez votre expérience immersive dès maintenant
          </p>
        </div>
      </section>

      {/* Formulaire de Réservation */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#0ba0da] to-[#2d1654] p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-white text-center">
                FORMULAIRE DE RÉSERVATION
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              {/* Informations Personnelles */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informations Personnelles</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Détails de la Réservation */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Détails de la Réservation</h3>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Sélectionnez un Jeu ou Événement *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      // Jeux VR
                      { id: 'vr-super-armor', name: 'VR Super Armor', image: '/games/vR-super-armor.jpg', type: 'jeu' },
                      { id: 'vr-space-wheel', name: 'VR Space Wheel', image: '/games/vR-space-wheel.jpg', type: 'jeu' },
                      { id: 'vr-super-engine', name: 'VR Super Engine', image: '/games/vR-super-engine.jpg', type: 'jeu' },
                      { id: 'vr-super-ride', name: 'VR Super Ride', image: '/games/vR-super-ride.jpg', type: 'jeu' },
                      { id: 'vr-doomsday-survival', name: 'VR Doomsday Survival', image: '/games/vR-doomsday-survival.jpg', type: 'jeu' },
                      { id: 'vr-super-360-fligh', name: 'VR Super 360 Fligh', image: '/games/vR-super-360-fligh.jpg', type: 'jeu' },
                      { id: 'vr-cat-a', name: 'VR CAT-A', image: '/games/vR-cAT-A.png', type: 'jeu' },
                      { id: 'vr-kid', name: 'VR Kid', image: '/games/vR-kid.jpg', type: 'jeu' },
                      { id: 'vr-kids-racing', name: 'VR Kids Racing', image: '/games/vR-kids-racing.jpg', type: 'jeu' },
                      { id: 'vr-battlefield', name: 'VR Battlefield', image: '/games/vR-battlefield.jpg', type: 'jeu' },
                      // Événement
                      { id: 'evenement', name: 'Événement', image: '/events/anniversary.jpg', type: 'evenement' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, typeReservation: item.id })}
                        className={`relative group overflow-hidden rounded-lg border-2 transition-all ${
                          formData.typeReservation === item.id
                            ? 'border-[#0ba0da] ring-2 ring-[#0ba0da] ring-offset-2'
                            : 'border-gray-300 hover:border-[#0ba0da]'
                        }`}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className={`absolute inset-0 ${
                            formData.typeReservation === item.id
                              ? 'bg-[#0ba0da]/30'
                              : 'bg-black/40 group-hover:bg-black/20'
                          } transition-all`}></div>
                          {item.type === 'evenement' && (
                            <div className="absolute top-2 left-2 bg-[#fc9937] text-white text-xs font-bold px-2 py-1 rounded">
                              ÉVÉNEMENT
                            </div>
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                          <p className="text-white text-xs font-semibold text-center">{item.name}</p>
                        </div>
                        {formData.typeReservation === item.id && (
                          <div className="absolute top-2 right-2 bg-[#0ba0da] rounded-full p-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  {!formData.typeReservation && (
                    <p className="text-red-500 text-sm mt-2">Veuillez sélectionner un jeu ou événement</p>
                  )}
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label htmlFor="nombrePersonnes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de Personnes *
                    </label>
                    <input
                      type="number"
                      id="nombrePersonnes"
                      name="nombrePersonnes"
                      required
                      min="1"
                      value={formData.nombrePersonnes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="heure" className="block text-sm font-semibold text-gray-700 mb-2">
                      Heure *
                    </label>
                    <input
                      type="time"
                      id="heure"
                      name="heure"
                      required
                      value={formData.heure}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="pt-6 border-t border-gray-200">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message / Commentaires
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ba0da] focus:border-transparent outline-none transition-all resize-none"
                  placeholder={formData.typeReservation === 'evenement' 
                    ? "Décrivez votre événement en détail (type d'événement, nombre de participants, besoins spécifiques, etc.)"
                    : "Avez-vous des demandes spéciales ou des commentaires ?"
                  }
                ></textarea>
              </div>

              {/* Bouton de Soumission */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0ba0da] to-[#2d1654] hover:from-[#0ba0da]/90 hover:to-[#2d1654]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg"
                >
                  CONFIRMER LA RÉSERVATION
                </Button>
              </div>
            </form>
          </div>

          {/* Informations Complémentaires */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-bold text-gray-800 mb-2">Contact</h4>
              <p className="text-sm text-gray-600">+243 XXX XXX XXX</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-bold text-gray-800 mb-2">Horaires</h4>
              <p className="text-sm text-gray-600">Lun - Dim: 9h - 22h</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-bold text-gray-800 mb-2">Localisation</h4>
              <p className="text-sm text-gray-600">
              3eme niveau Galleria Mall 9, Avenue Colonel Lukusa 6133, Kinshasa-Gombe Réf: Arrêt Chancellerie & Premier Shopping Kinshasa-Gombe
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reserver;
