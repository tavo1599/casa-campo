import React from 'react';
import facebookIcon from '../assets/facebook.png'; // Asegúrate de tener un ícono en assets
import instagramIcon from '../assets/instagram.png'; // Asegúrate de tener un ícono en assets
import tiktokIcon from '../assets/tiktok.png';

const SocialMediaIcons = () => {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col space-y-4 p-2 z-50">
      {/* Facebook */}
      <a href="https://www.facebook.com/profile.php?id=61564315336410&locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <div className="bg-slate-600 bg-opacity-70 rounded-full p-2 shadow-md">
          <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
        </div>
      </a>
      {/* Instagram */}
      <a href="https://www.instagram.com/Casacampoaqp/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <div className="bg-slate-600 bg-opacity-70 rounded-full p-2 shadow-md">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
        </div>
      </a>
      {/* TikTok */}
      <a href="https://www.tiktok.com/@casacampo.arequipa" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <div className="bg-slate-600 bg-opacity-70 rounded-full p-2 shadow-md">
          <img src={tiktokIcon} alt="TikTok" className="h-8 w-8" />
        </div>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
