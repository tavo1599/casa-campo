import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CabinDetail from "./components/CabinDetail";
import DashboardLayout from "./pages/DashboardLayout"; // Importa DashboardLayout
import Usuarios from "./components/Usuarios"; // Importa el componente Usuarios
import "./index.css";
import Cabanas from "./components/Cabanas";
import Promociones from "./components/Promociones";
import Descuentos from "./components/Descuentos";
import Reservas from "./components/Reservas";
import SocialMediaIcons from "./components/SocialMediaIcons";
import PaymentPage from "./components/PaymentPage";
import { LanguageProvider } from "./components/LanguageContext";
import Whasap from "./components/Whasap";

import Inicio from "./views/client/Inicio";
import Navbar from "./views/client/partials/Navbar";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          {/* Navbar */}
          <Navbar />

          {/* Whasap Flotante */}
          <Whasap />

          {/* Rutas de las páginas */}
          <Routes>
            {/* Rutas públicas */}
            {/* <Route path="/" element={<><WelcomeSection /><CabinCards /><ServicesSection /><AboutSection /><SocialMediaIcons /></>} /> */}
            <Route
              path="/"
              element={
                <>
                  <Inicio />
                  <SocialMediaIcons />
                </>
              }
            />

            <Route
              path="/cabin-detail"
              element={
                <>
                  <CabinDetail />
                  <SocialMediaIcons />
                </>
              }
            />
            <Route path="/pago" element={<PaymentPage />} />
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
    </LanguageProvider>
  );
}

export default App;
