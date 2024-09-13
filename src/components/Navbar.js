import React from 'react';
import { FaUser } from 'react-icons/fa'; // Icono de usuario
import logo from '../assets/logo-arequipa-remove.png';
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-amber-900 text-white">
      {/* Parte izquierda: Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 object-cover"
        />
      </div>

      {/* Parte central: Texto "Casa Campo" y "Arequipa" */}
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight font-serif">
          Casa Campo
        </h1>
        <span className="text-xl font-semibold">Arequipa</span>
      </div>

      {/* Parte derecha: Icono de usuario */}
      <div className="flex items-center">
        <FaUser className="text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
