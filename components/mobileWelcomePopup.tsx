"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MobileWelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Vérifier immédiatement si on doit afficher la popup
    if (typeof window === "undefined") {
      setMounted(true);
      return;
    }
    
    const hasSeenPopup = localStorage.getItem("bokutani-welcome-seen");
    const isMobile = window.innerWidth < 768;
    
    if (isMobile && !hasSeenPopup) {
      // Bloquer le scroll de la page IMMÉDIATEMENT avant tout rendu
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      
      setMounted(true);
      
      // Afficher la popup immédiatement avec fond opaque
      setIsVisible(true);
      setIsAnimating(true); // Commencer avec opacité 100% immédiatement
      
      // Animation du logo avec un léger délai
      setTimeout(() => {
        setLogoVisible(true);
      }, 300);
    } else {
      setMounted(true);
    }

    // Cleanup: réactiver le scroll si le composant est démonté
    return () => {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, []);

  const handleNavigate = () => {
    setLogoVisible(false);
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("bokutani-welcome-seen", "true");
      }
    }, 400);
  };

  // Ne pas rendre avant le montage pour éviter le flash
  if (!mounted || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center px-6">
        {/* Logo animé avec animation d'entrée */}
        <div className="mb-8">
          <Image
            src="/logo-bokutani.svg"
            alt="Bokutani"
            width={900}
            height={900}
            className={`max-w-[100vw] h-auto ${
              logoVisible ? "logo-enter" : "opacity-0"
            }`}
            onClick={handleNavigate}
            style={{ cursor: "pointer" }}
            priority
          />
        </div>

        {/* Bouton Naviguer avec animation d'entrée */}
        {/* <button
          onClick={handleNavigate}
          className={`px-8 py-4 bg-[#fc9937] hover:bg-[#fc9937]/90 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
            logoVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: logoVisible ? "0.3s" : "0s" }}
        >
          NAVIGUER
        </button> */}
      </div>
    </div>
  );
};

export default MobileWelcomePopup;

