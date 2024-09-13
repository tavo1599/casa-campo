import React from 'react';
import facebookIcon from '../assets/facebook.png'; // Asegúrate de tener un ícono en assets
import instagramIcon from '../assets/instagram.png'; // Asegúrate de tener un ícono en assets
import tiktokIcon from '../assets/tiktok.png'; // Asegúrate de tener un ícono en assets

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <a href="https://www.facebook.com/profile.php?id=61564315336410&locale=es_LA" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/Casacampoaqp/" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="https://www.tiktok.com/@casacampo.arequipa" target="_blank" rel="noopener noreferrer" className="mx-3">
            <img src={tiktokIcon} alt="TikTok" className="h-8 w-8" />
          </a>
        </div>
        <div className="mb-4">
          <p className="text-lg">Teléfono: +51 906771606</p>
          <p className="text-lg">Correo: contacto@casacampoarequipa.com</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Casa Campo Arequipa. Todos los derechos reservados.</p>
        <p>Desarrollado por Grupo Peanuts</p>
      </div>
    </footer>
  );
};

export default Footer;
