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
import './index.css';
import CabinDetail from './components/CabinDetail';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Rutas de las páginas */}
        <Routes>
          <Route path="/" element={<><WelcomeSection /><CabinCards /><ServicesSection /><AboutSection /></>} />
          <Route path="/cabin-detail" element={<CabinDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
