import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaGlobe } from 'react-icons/fa'; // Iconos de usuario y lenguaje
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import logo from '../assets/logo-arequipa-remove.png';

const Navbar = ({ currentLanguage, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar el menú cuando se hace clic fuera del mismo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-amber-900 text-white relative sticky top-0 z-50">
      {/* Parte izquierda: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-16 object-cover cursor-pointer" />
        </Link>
      </div>

      {/* Parte central: Texto "Casa Campo" y "Arequipa" con tamaño adaptativo */}
      <div className="flex flex-col items-center cursor-pointer">
        <Link to="/">
          <h1 className="text-xl md:text-4xl font-bold leading-tight font-serif">Casa Campo</h1>
        </Link>
        <span className="text-sm md:text-xl font-semibold">Arequipa</span>
      </div>

      {/* Parte derecha: Iconos de usuario y lenguaje */}
      <div className="relative flex items-center space-x-4">
        {/* Icono de lenguaje */}
        <FaGlobe className="text-2xl cursor-pointer" onClick={toggleLanguage} />

        {/* Icono de usuario */}
        <FaUser className="text-2xl cursor-pointer" onClick={toggleMenu} />

        {/* Menú desplegable */}
        {isMenuOpen && (
          <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10 top-full">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/login">Iniciar Sesión</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/register">Registrarse</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
