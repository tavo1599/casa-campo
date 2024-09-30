// src/pages/DashboardLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar persistente */}
      <Sidebar />

      {/* Contenido de la página que cambia según la ruta */}
      <div className="flex-1 p-4">
        <Outlet /> {/* Muestra el contenido de las rutas hijas */}
      </div>
    </div>
  );
};

export default DashboardLayout;
