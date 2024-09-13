import React from 'react';
import backgroundImage from '../assets/casa-campo.jpg'; // Importa la imagen de fondo

const WelcomeSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Texto superpuesto */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
            <h3 className="text-4xl font-medium py-8">Muy Pronto</h3>
          <h1 className="text-4xl md:text-6xl font-serif py-4">
            ¡Casa Campo Arequipa!
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Donde viviras una experiencia inolvidable
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
