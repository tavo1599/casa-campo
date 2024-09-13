import React from 'react';
import cabana1 from '../assets/cabana1.jpg'; // Importa la imagen de la primera cabaña
import cabana2 from '../assets/cabana1.jpg'; // Importa la imagen de la segunda cabaña

const CabinCards = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={cabana1} alt="Cabaña 1" className="w-full h-auto object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold font-serif">Oak Cabin</h2>
            </div>
          </div>

          {/* Segunda card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={cabana2} alt="Cabaña 2" className="w-full h-auto object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold font-serif">Oak Cabin</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinCards;
