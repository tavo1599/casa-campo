import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import cabana1 from "../assets/cabana1.jpg";
import cabana2 from "../assets/cabana1.jpg";
import { LanguageContext } from "./LanguageContext";

const CabinCards = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const handleCardClick = (cabin) => {
    navigate("/cabin-detail", { state: { cabin } });
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const { translations } = useContext(LanguageContext);

  return (
    <div className="relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="px-6 py-3 bg-white flex gap-4 rounded-full border shadow-lg">
            <div className="flex gap-4 text-sm">
              <div className="flex flex-row items-center gap-2">
                <label htmlFor="checkin" className="font-medium">
                  {translations.fecha_ingreso}
                </label>
                <input
                  type="date"
                  className="p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="border"></div>

              <div className="flex flex-row items-center gap-2">
                <label htmlFor="checkout" className="font-medium">
                  {translations.fecha_salida}
                </label>
                <input
                  type="date"
                  className="p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
            </div>

            <div className="border"></div>
            <button className="flex items-center justify-center gap-2 group bg-green-800 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-full shadow-md duration-500">
              <i className="fa-solid fa-magnifying-glass"></i>
              {translations.buscar}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer max-w-md lg:max-w-lg mx-auto transform transition-all duration-300 hover:scale-105"
            onClick={() =>
              handleCardClick({
                name: "Oak Cabin",
                image: cabana1,
                capacity: "4",
                rooms: "2",
                beds: "3",
                baths: "2",
                description: "A cozy oak cabin...",
                price: 100,
              })
            }
          >
            <img
              src={cabana1}
              alt="Cabaña 1"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold font-serif">
                Oak Cabin
              </h2>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer max-w-md lg:max-w-lg mx-auto transform transition-all duration-300 hover:scale-105"
            onClick={() =>
              handleCardClick({
                name: "Maple Cabin",
                image: cabana2,
                capacity: "6",
                rooms: "3",
                beds: "4",
                baths: "3",
                description: "A spacious maple cabin...",
                price: 150,
              })
            }
          >
            <img
              src={cabana2}
              alt="Cabaña 2"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold font-serif">
                Maple Cabin
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinCards;
