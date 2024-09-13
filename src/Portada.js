import React from 'react';

const Portada = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Bienvenido a Mi Página</h1>
        <p className="mt-4 text-lg">Una descripción breve sobre el contenido.</p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Empezar
        </button>
      </div>
    </div>
  );
};

export default Portada;
