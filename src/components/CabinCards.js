import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import cabana1 from '../assets/cabana1.jpg';
import cabana2 from '../assets/cabana1.jpg';
import searchIcon from '../assets/search.png';
import misti from '../assets/misit.jpg';

const CabinCards = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const sectionRef = useRef(null); // Create a ref for the section

  const handleCardClick = (cabin) => {
    navigate('/cabin-detail', { state: { cabin } }); // Pass cabin details to the new route
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the section
    }
  };

  return (
    <div className="py-10 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-cover bg-center opacity-25 grayscale" style={{ backgroundImage: `url(${misti})`, height: '100%', width: '100%' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-5 px-5 rounded-lg shadow-md bg-white bg-opacity-80">
          <div className="flex flex-col items-center">
            <label htmlFor="checkin" className="text-base font-medium">Fecha de Ingreso</label>
            <input type="date" id="checkin" className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-600" />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="checkout" className="text-base font-medium">Fecha de Salida</label>
            <input type="date" id="checkout" className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-600" />
          </div>
          <button className="flex items-center justify-center hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full shadow-md">
            <img src={searchIcon} alt="Buscar" className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer" onClick={() => handleCardClick({ name: 'Oak Cabin', image: cabana1, capacity: '4', rooms: '2', beds: '3', baths: '2', description: 'A cozy oak cabin...', price: 100 })}>
            <img src={cabana1} alt="Cabaña 1" className="w-full h-auto object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold font-serif">Oak Cabin</h2>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer" onClick={() => handleCardClick({ name: 'Maple Cabin', image: cabana2, capacity: '6', rooms: '3', beds: '4', baths: '3', description: 'A spacious maple cabin...', price: 150 })}>
            <img src={cabana2} alt="Cabaña 2" className="w-full h-auto object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold font-serif">Maple Cabin</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinCards;
