/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-white py-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start md:items-center gap-5 lg:items-baseline lg:gap-10 space-y-8 lg:space-y-0 px-4">
          {/* Logo y descripción */}
          <div className="flex-1 lg:min-w-64">
            <h2 className="text-2xl font-bold mb-4">Casa Campo Arequipa</h2>
            <p className="text-gray-400 leading-relaxed">
              Ubicado en el corazón de Arequipa, Casa Campo Arequipa te brinda una
              experiencia única donde la naturaleza y el descanso se unen.
              Disfruta de un entorno rodeado de majestuosos árboles y vegetación
              exuberante que te invita a desconectar de la rutina diaria.
            </p>
          </div>

          <div
            style={{ marginTop: "0px" }}
            className="flex flex-col md:flex-row items-start gap-5 md:items-baseline lg:gap-10 m-auto mt-0"
          >
            <div className="responsive-link-polity">
              {/* Enlaces rápidos */}
              <div className="flex-1 grid sm:justify-center max-w-[162px]">
                <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Sobre nosotros
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Políticas y Condiciones */}
              <div className="flex-1 grid justify-center">
                <h3 className="text-xl font-semibold mb-4">
                  Políticas y Condiciones
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Política de Datos Personales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Aviso de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Términos y Condiciones de Uso
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comunícate con nosotros y Redes sociales */}
            <div className="flex-1 grid justify-center gap-5">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Comunícate con nosotros
                </h3>
                <div className="flex flex-col space-y-4 p-4 rounded-lg">
                  {/* Asistente Virtual */}
                  <div className="flex items-start space-x-2 text-gray-400">
                    <i className="fas fa-comment text-gray-400 text-xl"></i>
                    <div>
                      <p className="font-semibold ">
                        Asistente virtual
                      </p>
                      <p className="text-sm">
                        Te atenderá las 24 hrs
                      </p>
                    </div>
                  </div>

                  {/* Escribir */}
                  <div className="flex items-start space-x-2 text-gray-400">
                    <i className="fas fa-envelope text-gray-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Escríbenos</p>
                      <p className="text-sm">
                        Estamos para ayudarte{" "}
                        <a
                          href="mailto:servicioalcliente@spsa.pe"
                          className="text-white hover:underline"
                        >
                          arequipacasacampo@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Llamar */}
                  <div className="flex items-start space-x-2 text-gray-400">
                    <i className="fas fa-phone-alt text-gray-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Llámanos</p>
                      <p className="text-sm">
                        Centro de servicio al cliente en Arequipa:{" "}
                        <a
                          href="tel:+516258000"
                          className="text-white hover:underline"
                        >
                          (+51) 987 563 711
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Síguenos en:</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61564315336410&locale=es_LA"
                    target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <a href="https://www.instagram.com/Casacampoaqp/"
                    target="_blank"
                    rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@casacampo.arequipa"
                    target="_blank"
                    rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Casa Campo Arequipa. Todos los
            derechos reservados.
          </p>
          <p>Desarrollado por Grupo Peanuts</p>
        </div>
      </footer>
    </>
  );
}