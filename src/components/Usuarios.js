

import React, { useState, useEffect } from 'react';

const Usuarios = () => {
  
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);


  useEffect(() => {
    const fetchUsuarios = () => {
      const dummyUsers = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
        { id: 2, nombre: 'Ana Martínez', email: 'ana@example.com' },
        { id: 3, nombre: 'Pedro García', email: 'pedro@example.com' },
        { id: 4, nombre: 'Lucía Torres', email: 'lucia@example.com' },
        { id: 5, nombre: 'Carlos Fernández', email: 'carlos@example.com' },
        { id: 6, nombre: 'María López', email: 'maria@example.com' },
        
      ];
      setUsuarios(dummyUsers);
    };
    fetchUsuarios();
  }, []);

  
  const filteredUsers = usuarios.filter((user) =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8 font-serif">
    
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar usuario"
          className="p-2 border border-gray-300 rounded-lg w-1/3 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className=" text-black p-2 rounded border border-black hover:bg-green-800 hover:text-white">
          Agregar Usuario
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.nombre}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">icon</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <select
          className="p-2 border border-gray-300 rounded"
          value={usersPerPage}
          onChange={(e) => setUsersPerPage(Number(e.target.value))}
        >
          <option value="5">5 por página</option>
          <option value="10">10 por página</option>
          <option value="15">15 por página</option>
        </select>

        <div>
          {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`px-2 py-2 mx-1 ${currentPage === number + 1 ? ' text-black' : 'bg-gray-300 text-black rounded-md'}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
