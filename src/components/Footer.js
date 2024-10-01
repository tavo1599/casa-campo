import React from 'react';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import tiktokIcon from '../assets/tiktok.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center font-serif">
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
        <div className="mb-4 font-serif">
  <a
    href="https://api.whatsapp.com/send?phone=51987563711&text=Hola,%20Casa%20campo%20Arequipa"
    target="_blank"
    rel="noopener noreferrer"
    className="block mb-2"
  >
    Teléfono: +51987563711
  </a>
  <a
    href="mailto:arequipacasacampo@gmail.com?subject=Informacion&body=Hola, Casa campo Arequipa"
    className="block"
  >
    Correo: arequipacasacampo@gmail.com
  </a>
</div>
        <p className="text-sm">© {new Date().getFullYear()} Casa Campo Arequipa. Todos los derechos reservados.</p>
        <p>Desarrollado por Grupo Peanuts</p>
      </div>
    </footer>
  );
};

export default Footer;
