import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get state from navigation
import Calendar from 'react-calendar'; // Import calendar component for date selection

const CabinDetail = () => {

    const comments = [
        {
          author: "Juan Pérez",
          date: "2024-09-15",
          text: "¡Excelente cabaña! El lugar es muy acogedor y las vistas son increíbles. Recomiendo esta cabaña a todos los que buscan una escapada tranquila."
        },
        {
          author: "Ana Gómez",
          date: "2024-09-10",
          text: "Nos encantó nuestra estancia. La cabaña estaba limpia y bien equipada. Sin duda volveremos."
        },
        {
          author: "Carlos Fernández",
          date: "2024-09-08",
          text: "La cabaña tiene todo lo que necesitas para una estancia cómoda. Sin embargo, el proceso de reserva podría ser más claro."
        },
        {
          author: "Laura Martínez",
          date: "2024-09-05",
          text: "Muy buena experiencia. El entorno es perfecto para relajarse y desconectar. El personal fue muy amable."
        },
        {
          author: "Pedro Ruiz",
          date: "2024-09-02",
          text: "Disfrutamos mucho de nuestra estancia. La cabaña es bonita y bien cuidada. Solo desearía que hubiera más opciones de actividades en la zona."
        }
      ];
  const location = useLocation();
  const cabin = location.state?.cabin || {}; // Get cabin details from navigation state
  const [dates, setDates] = useState([new Date(), new Date()]); // State for selected dates

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const handleDateChange = (dates) => {
    setDates(dates);
  };

  const calculateTotal = () => {
    const numberOfNights = (dates[1] - dates[0]) / (1000 * 60 * 60 * 24); // Calculate number of nights
    return numberOfNights * cabin.price;
  };

  const numberOfNights = (dates[1] - dates[0]) / (1000 * 60 * 60 * 24); // Calculate number of nights for display

  // Function to get tile class names based on selected dates
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      // Check if date is within selected range
      const isStartDate = dates[0] && date.toDateString() === dates[0].toDateString();
      const isEndDate = dates[1] && date.toDateString() === dates[1].toDateString();
      const isWithinRange = dates[0] && dates[1] && date >= dates[0] && date <= dates[1];
      
      if (isStartDate || isEndDate || isWithinRange) {
        return 'bg-orange-800 text-white rounded-lg'; // Highlight selected dates
      }
    }
    return '';
  };

  return (
    <div className="container mx-auto px-4 py-10 font-serif">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={cabin.image} alt={cabin.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="my-12">
            <h1 className="text-3xl font-bold ">{cabin.name}</h1>
            <div className="flex flex-row">
              <p className="text-gray-600"> {cabin.capacity} personas • </p>
              <p className="text-gray-600"> {cabin.rooms} Habitaciones • </p>
              <p className="text-gray-600"> {cabin.beds} Camas • </p>
              <p className="text-gray-600"> {cabin.baths} Baños</p>
            </div>
            <p className="text-gray-800 my-12">lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 flex flex-col space-y-4 ">          
          <div className="bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-semibold mb-4">Reserva tu estancia</h2>
            <Calendar
              selectRange
              onChange={handleDateChange}
              value={dates}
              tileClassName={tileClassName} // Apply custom tile class names
            />
            <p className="mt-4 text-lg font-bold font-">
              Precio por noche: S/{cabin.price.toFixed(2)} <br />
              Noches: {numberOfNights.toFixed()} <br />
              <span className="text-gray-600">Total a Pagar: S/{calculateTotal().toFixed(2)}</span>
            </p>
            <button className="mt-4 bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800">
              Reservar
            </button>
          </div>
        </div>
      </div>

      {/* Comentarios */}
      <div className="mt-10 max-w-3xl bg-white p-6 ">
        <h2 className="text-2xl font-semibold mb-4">Comentarios</h2>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="border-b last:border-b-0 pb-4">
              <p className="text-gray-800 font-semibold">{comment.author}</p>
              <p className="text-gray-600 text-sm">{comment.date}</p>
              <p className="text-gray-800 mt-2">{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CabinDetail;
