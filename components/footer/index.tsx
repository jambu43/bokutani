import React from 'react'
import Image from 'next/image'

function index() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
        <Image src="/logo-bokutani.svg" alt="EVA" width={200} height={200} />
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Jeux</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">After H Battle Arena</a></li>
            <li><a href="#" className="hover:text-white transition-colors">After H Zombie</a></li>
            <li><a href="#" className="hover:text-white transition-colors">After H Moon of the dead</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Eva Darts</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Réserver</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Où jouer ?</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Carte cadeau</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Entreprise</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Franchise</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Compétition</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nous contacter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Carrière</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2025 · Bokutani· Tous droits réservés
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Conditions générales</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Mentions légales</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default index
