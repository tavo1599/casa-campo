// src/components/Cabanas.js
import React, { useState } from 'react';
import { FaTable, FaTh } from 'react-icons/fa'; // Importamos los iconos de tabla y grid para cambiar de vista

const Cabanas = () => {
  const [isTableView, setIsTableView] = useState(true); // Estado para alternar entre la vista de tabla y cards

  const toggleView = () => {
    setIsTableView(!isTableView); // Alterna la vista entre tabla y cards
  };

  return (
    <div className="cabanas-container p-8 font-serif">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar Cabaña..."
          className="p-2 border rounded-lg w-1/3"
        />
        <div className="flex space-x-4">
          <button className="text-black px-4 py-2 rounded-lg border border-black hover:bg-yellow-800 hover:text-white">
            Agregar Cabaña
          </button>
          <button
            onClick={toggleView}
            className=" text-black px-4 py-2 rounded-lg flex items-center"
          >
            {isTableView ? (
              <>
                <FaTh className="mr-2" />
              </>
            ) : (
              <>
                <FaTable className="mr-2" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Renderiza la vista de tabla o de cards dependiendo del estado */}
      {isTableView ? (
        <div className="table-view">
          {/* Tabla de cabañas */}
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Capacidad</th>
                <th className="border px-4 py-2">Precio</th>
                <th className="border px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Cabaña 1</td>
                <td className="border px-4 py-2">4 Personas</td>
                <td className="border px-4 py-2">$100</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded">
                    Editar
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                    Eliminar
                  </button>
                </td>
              </tr>
              {/* Puedes agregar más filas aquí */}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="cards-view grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cards de cabañas */}
          <div className="card bg-white shadow-lg p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Cabaña 1</h2>
            <p>Capacidad: 4 Personas</p>
            <p>Precio: $100</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Ver detalles
            </button>
          </div>
          {/* Puedes agregar más cards aquí */}
        </div>
      )}
    </div>
  );
};

export default Cabanas;
