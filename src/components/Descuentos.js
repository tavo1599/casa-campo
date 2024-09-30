// src/components/Descuentos.js
import React from 'react';

const Descuentos = () => {
  return (
    <div className="descuentos-container p-8 font-serif">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar Descuento..."
          className="p-2 border rounded-lg w-1/3"
        />
        <div className="flex space-x-4">
          <button className="text-black px-4 py-2 rounded-lg border border-black hover:bg-yellow-800 hover:text-white">
            Agregar Descuento
          </button>
        </div>
      </div>

      {/* Renderiza la tabla de descuentos */}
      <div className="table-view">
        <table className="w-full table-auto border-collapse rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Nombre del Descuento</th>
              <th className="border px-4 py-2">Descripción</th>
              <th className="border px-4 py-2">Porcentaje</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Descuento 1</td>
              <td className="border px-4 py-2">Descripción del descuento 1</td>
              <td className="border px-4 py-2">15%</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Editar
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                  Eliminar
                </button>
              </td>
            </tr>
            {/* Agrega más filas aquí si es necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Descuentos;
