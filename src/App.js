import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import CabinCards from './components/CabinCards';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import CabinDetail from './components/CabinDetail';
import DashboardLayout from './pages/DashboardLayout'; // Importa DashboardLayout
import Usuarios from './components/Usuarios'; // Importa el componente Usuarios
import './index.css';
import Cabanas from './components/Cabanas';
import Promociones from './components/Promociones';
import Descuentos from './components/Descuentos';
import Reservas from './components/Reservas';
import SocialMediaIcons from './components/SocialMediaIcons';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        

        {/* Rutas de las páginas */}
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<><WelcomeSection /><CabinCards /><ServicesSection /><AboutSection /><SocialMediaIcons /></>} />
          <Route path="/cabin-detail" element={<><CabinDetail /><SocialMediaIcons /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard con Sidebar persistente */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="cabanas" element={<Cabanas />} />
            <Route path="promociones" element={<Promociones />} />
            <Route path="descuentos" element={<Descuentos />} />
            <Route path="reservas" element={<Reservas />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
