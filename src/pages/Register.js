// src/pages/Register.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-arequipa-remove.png'; // Asegúrate de que la ruta del logo sea correcta

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src={logo} alt="Logo" className="h-24 mb-8" />
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">Nombre</label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">Apellido</label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700">País</label>
            <input
              type="text"
              id="country"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Usuario</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">Registrarse</button>
        </form>
        <p className="mt-4 text-center">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
