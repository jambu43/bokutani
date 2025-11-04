"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Sidebar */}
          <div className="absolute left-0 top-0 h-full w-100 bg-white rounded-r-2xl shadow-2xl">
            <div className="p-6 h-full flex flex-col">
              {/* Close Button */}
              <div className="flex justify-start mb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-lg font-bold hover:text-gray-600 transition-colors"
                >
                  ✕ FERMER
                </button>
              </div>

              {/* Find My Room Button */}
              <Link href="/reservation" className="w-full z-10 bg-[#fc9937] hover:bg-[#fc9937] text-white font-bold text-lg py-4 px-6 rounded-lg mb-8 transition-colors">
                RÉSERVER
              </Link>

              {/* Main Navigation */}
              <nav className="flex-1">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/jeux-vr"
                      className="text-black font-bold text-lg uppercase flex items-center justify-between hover:text-gray-600 transition-colors"
                    >
                      JEUX EN RÉALITÉ VIRTUELLE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/a-propos"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                      À PROPOS
                    </Link>
                  </li>
                  <li>
                    <a
                      href="attractions"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                     ATTRACTIONS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                      Hôtellerie
                    </a>  
                  </li>
                  <li>
                    <Link
                      href="/tarifs-reservations"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                     TARIFS & RÉSERVATIONS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-black font-bold text-lg uppercase flex items-center justify-between hover:text-gray-600 transition-colors"
                    >
                      VR BAR
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                      TARIFS
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Other Sites Section */}
              <div className="mt-8 mb-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                      Actualités
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                     Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                      Galerie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                      Événements
                    </a>
                  </li>
                  
                </ul>
              </div>

              {/* Language and Country Selector */}
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs">🌐</span>
                  <span className="text-black text-xs">FRANÇAIS</span>
                  <span className="text-gray-400">▼</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="fixed top-0 w-full bg-transparent z-50">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Left side - Menu icon and navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              ☰
            </button>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/jeux-vr"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Jeux VR
              </Link>
              <Link
                href="/bar"
                className="text-white hover:text-gray-300 transition-colors"
              >
               Restaurant
              </Link>
              <Link
                href="#evenements"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Événements
              </Link>
            </div>
          </div>

         <Link href="/" className="text-white hover:text-gray-300 transition-colors">
         <Image src="/logo-bokutani.svg" alt="Bokutani" width={200} height={200} />
         </Link>

          {/* Right side - User and CTA */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="px-4 py-2 text-white hover:text-gray-300 transition-colors">
              Nous Contactez
            </Link>
            <button className="px-6 py-2 bg-white hover:bg-gray-100 text-black font-medium transition-colors rounded-xl">
              RÉSERVER
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default index;
