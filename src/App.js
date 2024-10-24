import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
import CabinDetail from "./views/client/CabinDetail";
import Navbar from "./views/client/partials/Navbar";
import Footer from "./views/client/partials/Footer";

function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Solo mostrar Navbar y Footer fuera de las rutas del dashboard */}
      {!isDashboard && <Navbar />}
      {!isDashboard && <Whasap />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Layout>
            {/* Rutas de las páginas */}
            <Routes>
              {/* Rutas públicas */}
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
          </Layout>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
