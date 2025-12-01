"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Sidebar */}
          <div className="absolute left-0 top-0 h-full w-[85vw] max-w-sm bg-white rounded-r-2xl shadow-2xl z-20">
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
              <Link 
                href="/reservation" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full z-10 bg-[#0ba0da] hover:bg-[#0ba0da] text-white font-bold text-lg py-4 px-6 rounded-lg mb-8 transition-colors">
                RÉSERVER
              </Link>

              {/* Main Navigation */}
              <nav className="flex-1">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/jeux-vr"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black font-bold text-lg uppercase flex items-center justify-between hover:text-gray-600 transition-colors"
                    >
                      JEUX VR
                    </Link>
                  </li>
                  
                  {/* <li>
                    <Link
                      href="/attractions"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                     ATTRACTIONS
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/hotellerie"
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                      Hôtellerie
                    </Link>  
                  </li> */}
                  <li>
                    <Link
                      href="/tarifs-reservations"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                     TARIFS & RÉSERVATIONS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bar"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black font-bold text-lg uppercase flex items-center justify-between hover:text-gray-600 transition-colors"
                    >
                      RESTAURANT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/a-propos"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors"
                    >
                      À PROPOS
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Other Sites Section */}
              <div className="mt-8 mb-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                      Actualités
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                     Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-black text-sm hover:text-gray-600 transition-colors"
                    >
                      Galerie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
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
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
        <nav className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between max-w-full relative">
          {/* Left side - Menu icon and navigation */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0 z-10">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`transition-colors ${
                isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
              aria-label="Ouvrir le menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              <Link
                href="/jeux-vr"
                className={`text-sm lg:text-base transition-colors ${
                  isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                }`}
              >
                Jeux VR
              </Link>
              <Link
                href="/bar"
                className={`text-sm lg:text-base transition-colors ${
                  isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                }`}
              >
               Restaurant
              </Link>
              {/* <Link
                href="/#"
                className={`text-sm lg:text-base transition-colors ${
                  isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                }`}
              >
                Événements
              </Link> */}
            </div>
          </div>

          {/* Logo - Centered and Superimposed */}
          <Link 
            href="/" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300"
          >
            <div className={`relative transition-all duration-300 ${
              isScrolled ? "opacity-100" : "opacity-100"
            }`}>
              <div className={`absolute t-4 inset-0 blur-xl opacity-20 transition-opacity duration-300 ${
                isScrolled ? "bg-white" : "bg-white"
              }`}></div>
              <Image 
                src="/logo-bokutani.svg" 
                alt="Bokutani" 
                width={200} 
                height={200}
                className="relative top-[4rem] w-[300px] h-auto md:w-[450px] max-w-[50vw] md:max-w-none drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Right side - User and CTA */}
          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 z-10">
            <Link 
              href="/contact" 
              className={`hidden md:inline-block px-3 lg:px-4 py-2 text-sm lg:text-base transition-colors ${
                isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
            >
              Nous Contactez
            </Link>
            <Link  
              href="/contact" 
              className={`hidden md:inline-block px-4 lg:px-6 py-2 text-sm lg:text-base font-medium transition-all rounded-xl ${
                isScrolled 
                  ? "bg-[#0ba0da] hover:bg-[#0ba0da]/90 text-white shadow-md" 
                  : "bg-white hover:bg-gray-100 text-black shadow-lg"
              }`}
            >
              RÉSERVER
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default index;
