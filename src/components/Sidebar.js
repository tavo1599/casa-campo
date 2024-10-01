

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCalendarAlt, FaTag, FaPercent, FaChartLine } from 'react-icons/fa'; 


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-200 font-serif text-black flex flex-col border-r-2 rounded-r-lg border-slate-800">
      <nav className="flex-1 px-4 py-8">
        <ul className="space-y-4">
        <li>
            <Link to="dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaChartLine/>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="cabanas" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaHome />
              <span>Cabañas</span>
            </Link>
          </li>
          <li>
          <Link to="usuarios" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaUser />
                <span>Usuarios</span>
            </Link>
          </li>
          <li>
            <Link to="reservas" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaCalendarAlt />
              <span>Reservas</span>
            </Link>
          </li>
          <li>
            <Link to="promociones" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaTag />
              <span>Promociones</span>
            </Link>
          </li>
          <li>
            <Link to="descuentos" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaPercent />
              <span>Descuentos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
