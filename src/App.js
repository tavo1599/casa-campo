import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import CabinCards from './components/CabinCards';
import './index.css';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Sección de bienvenida con la imagen y el texto */}
      <WelcomeSection />

      {/* Sección de cards de cabañas */}
      <CabinCards />

      <ServicesSection />

      <AboutSection />

      

      <Footer />
    </div>
  );
}

export default App;
