import React, { useState } from 'react';
import backgroundImage from '../assets/casa-campo.jpg';

const WelcomeSection = () => {

  // eslint-disable-next-line no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);

  // Control de desplazamiento para detectar el scroll
  window.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY);
  });

  // Función para manejar el desplazamiento suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
            
          <h1 className="text-4xl md:text-6xl font-serif py-4">
            ¡Casa Campo Arequipa!
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-serif">
            Donde viviras una experiencia inolvidable
          </p>
          <button  onClick={() => scrollToSection('cabins')} className="mt-8 px-8 py-4 bg-emerald-800 hover:bg-orange-800 text-white font-bold rounded-full text-xl">
            Reservas
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
