// src/pages/DashboardLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '../components/SidebarAdmin';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar persistente */}
      <SidebarAdmin />

      {/* Contenido de la página que cambia según la ruta */}
      <div className="flex-1">
        <Outlet /> {/* Muestra el contenido de las rutas hijas */}
      </div>
    </div>
  );
};

export default DashboardLayout;
