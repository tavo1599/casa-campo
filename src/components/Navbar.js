import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import logo from '../assets/logo-arequipa-remove.png';

const Navbar = ({ currentLanguage, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef(null);
  const location = useLocation(); // Get current location

  // Toggle the state of the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
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

  // Effect to change the background and color of the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`${
        isHomePage ? 'fixed' : 'relative'
      } w-full flex items-center justify-between p-4 top-0 z-50 transition-all duration-800 ${
        isHomePage
          ? scrollPosition > 0
            ? 'bg-white text-black shadow-lg'
            : 'bg-transparent text-white'
          : 'bg-white text-black shadow-lg' // White background on other pages
      }`}
    >
      {/* Left part: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-28 w-28 object-cover cursor-pointer" />
        </Link>
      </div>

      {/* Center part: Text "Casa Campo" and "Arequipa" */}
      <div className="flex flex-col items-center cursor-pointer">
        <Link to="/">
          <h1 className="text-xl md:text-4xl font-bold leading-tight font-serif">
            Casa Campo
          </h1>
        </Link>
        <span className="text-sm md:text-xl font-semibold">Arequipa</span>
      </div>

      {/* Right part: User icons */}
      <div className="relative flex items-center space-x-4">
        {/* User icon */}
        <FaUser className="text-2xl cursor-pointer" onClick={toggleMenu} />

        {/* Dropdown menu */}
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
