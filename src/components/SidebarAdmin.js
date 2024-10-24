import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaTag,
  FaPercent,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const SidebarAdmin = () => {
  return (
    <Sidebar>
      <Sidebar.Logo
        href="#"
        img="/images/logo-arequipa-remove.png"
        imgAlt="Flowbite logo"
      >
        Casa Campo
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="flex flex-col gap-2">
            <Link to="dashboard">
              <Sidebar.Item icon={FaChartLine} className="text-sm">Dashboard</Sidebar.Item>
            </Link>
            
            <Link to="cabanas">
              <Sidebar.Item icon={FaHome} className="text-sm">Cabañas</Sidebar.Item>
            </Link>
            
            <Link to="usuarios">
              <Sidebar.Item icon={FaUser} className="text-sm">Usuarios</Sidebar.Item>
            </Link>
            
            <Link to="reservas">
              <Sidebar.Item icon={FaCalendarAlt} className="text-sm">Reservas</Sidebar.Item>
            </Link>
            
            <Link to="promociones">
              <Sidebar.Item icon={FaTag} className="text-sm">Promociones</Sidebar.Item>
            </Link>
            
            <Link to="descuentos">
              <Sidebar.Item icon={FaPercent} className="text-sm">Descuentos</Sidebar.Item>
            </Link>
          </div>

          <Sidebar.Item href="#" icon={FaArrowRight} className="text-sm">
            Sign In
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarAdmin;
