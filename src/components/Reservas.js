// src/components/Reservas.js
import React, { useState } from 'react';

const Reservas = () => {
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [itemsPerPage, setItemsPerPage] = useState(5); // Estado para el número de elementos por página
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Datos de ejemplo de reservas (puedes cambiarlos o conectarlo a tu base de datos)
  const reservasData = [
    { id: 1, nombre: 'Reserva 1', fecha: '2024-09-10', cabaña: 'Cabaña A', estado: 'Confirmada' },
    { id: 2, nombre: 'Reserva 2', fecha: '2024-09-11', cabaña: 'Cabaña B', estado: 'Pendiente' },
    { id: 3, nombre: 'Reserva 3', fecha: '2024-09-12', cabaña: 'Cabaña C', estado: 'Cancelada' },
    { id: 4, nombre: 'Reserva 4', fecha: '2024-09-13', cabaña: 'Cabaña D', estado: 'Confirmada' },
    { id: 5, nombre: 'Reserva 5', fecha: '2024-09-14', cabaña: 'Cabaña E', estado: 'Pendiente' },
    { id: 6, nombre: 'Reserva 6', fecha: '2024-09-15', cabaña: 'Cabaña F', estado: 'Confirmada' },
    // Agrega más reservas si es necesario
  ];

  // Filtrar reservas por búsqueda
  const filteredReservas = reservasData.filter((reserva) =>
    reserva.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular el índice inicial y final de los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReservas = filteredReservas.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="reservas-container">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar Reserva..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg w-1/3"
        />
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Agregar Reserva
          </button>
        </div>
      </div>

      {/* Renderiza la tabla de reservas */}
      <div className="table-view">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Nombre de la Reserva</th>
              <th className="border px-4 py-2">Fecha</th>
              <th className="border px-4 py-2">Cabaña</th>
              <th className="border px-4 py-2">Estado</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentReservas.map((reserva) => (
              <tr key={reserva.id}>
                <td className="border px-4 py-2">{reserva.nombre}</td>
                <td className="border px-4 py-2">{reserva.fecha}</td>
                <td className="border px-4 py-2">{reserva.cabaña}</td>
                <td className="border px-4 py-2">{reserva.estado}</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded">
                    Editar
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="pagination mt-4 flex justify-between items-center">
        <div>
          <span>Mostrar </span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="p-2 border rounded-lg"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <span> por página</span>
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(filteredReservas.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservas;
