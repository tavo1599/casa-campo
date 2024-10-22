import React, { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const WelcomeSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);

  // Control de desplazamiento para detectar el scroll
  window.addEventListener("scroll", () => {
    setScrollPosition(window.scrollY);
  });

  // Función para manejar el desplazamiento suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { translations } = useContext(LanguageContext);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/images/casa-campo.jpg)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl py-4 font-serif">
            ¡Casa Campo Arequipa!
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-serif">
            {translations.donde_viviras_una_experiencia_inolvidable}
          </p>
          <button
            onClick={() => scrollToSection("cabins")}
            className="mt-8 px-8 py-4 bg-emerald-800 hover:bg-orange-800 text-white font-bold rounded-full text-xl"
          >
            {translations.reservas}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
