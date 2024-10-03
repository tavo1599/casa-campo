import React, { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import "../../styles/inicio.css";
import { Card } from '../../components/Card';
import ColoredSection from '../../components/Section/ColoredSection';
import WelcomeSection from '../../components/WelcomeSection';
import CabinCards from '../../components/CabinCards';
import Contactanos from '../../components/Contactanos';

export default function Inicio() {

  useEffect(() => {
    Aos.init({
      duration: 1200,  // duración de la animación en milisegundos
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);

  // Control de desplazamiento para detectar el scroll
  window.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY);
  });

  // Función para manejar el desplazamiento suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const images = [
    { src: '/images/lake-image.jpg', alt: 'Lago con montañas y cabaña' },
    { src: '/images/mountain-image.jpg', alt: 'Persona frente a montaña nevada' },
    { src: '/images/campfire-image.jpg', alt: 'Grupo alrededor de una fogata' },
    { src: '/images/forest-image.jpg', alt: 'Persona con chaqueta amarilla en bosque' },
  ];

  const serviceTexts = [
    { img: '/icons/wifi_gratis.png', title: 'WiFi Gratuito', description: 'Conexión rápida y gratuita en todas las cabañas.' },
    { img: '/icons/vista_montaña.png', title: 'Vista a la Montaña', description: 'Rodeado de naturaleza para relajarse y disfrutar.' },
    { img: '/icons/estacionamiento.png', title: 'Estacionamiento', description: 'Espacio seguro para guardar los vehículos.' },
    { img: '/icons/seguridad_cam.png', title: 'Seguridad 24/7', description: 'Nuestras cámaras de seguridad están disponibles las 24 horas.' },
    { img: '/icons/tv.png', title: 'Televisión', description: 'Entretenimiento, películas y música en los televisores smart tv.' },
    { img: '/icons/piscina.png', title: 'Piscina', description: 'Piscina al aire libre privada - abierto las 24 horas.' },
    { img: '/icons/cocina.png', title: 'Cocina', description: 'Los huéspedes pueden cocinar en este espacio.' },
    { img: '/icons/fogata.png', title: 'Fogata', description: 'Realiza tu fogata bajo las estrellas y disfruta de la noche.' },
  ];

  return (
    <>

      <WelcomeSection />

      <div id="cabins">
        <ColoredSection backgroundColor="#F3F5F4">
          <section className="py-12 px-4">
            <CabinCards />
          </section>
        </ColoredSection>
      </div>

      <div className='bg-red-800 pilares'>
        <div className='max-w-[1180px] w-full mx-auto'>
          <div className='py-12 px-4'>
            <div className='flex md:flex-row flex-col justify-between items-center text-white md:gap-36 gap-4'>
              <div className='flex gap-4 items-center text-5xl md:text-left text-center'>
                <i className="fa-solid fa-magnifying-glass md:block hidden"></i>
                <div className='border py-6 md:block hidden'></div>
                <div className='text-2xl font-bold'>
                  Revisa nuestros lugares de estadia y contáctanos para obtener más información
                </div>
              </div>
              <button onClick={() => scrollToSection('about')} className='px-6 py-3 flex items-center gap-2 bg-green-800 border hover:bg-white hover:text-red-700 hover:border-red-700 duration-500 rounded-lg text-sm'>
                <i className="fa-solid fa-phone"></i>
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>

      <ColoredSection>
        <section className="w-full h-auto flex flex-col items-center justify-center relative py-12 px-4">
          <main className="w-full flex flex-col gap-3 items-center justify-center">
            <h2 className="md:text-4xl text-2xl font-bold capitalize">
              Nuestros servicios
            </h2>

            <div className="w-full h-auto grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-7 sm:gap-10 gap-7 px-8 sm:px-0 mt-4">
              {
                serviceTexts.map((service, index) => (

                  <Card data-aos="flip-up" key={index} cardClass="relative group w-full flex flex-col items-center justify-center gap-3 p-5 cursor-pointer transition duration-500 hover:shadow-xl rounded-xl border hover:border-red-700 overflow-hidden" imageWrapperClass="w-20 h-20 relative z-10 object-cover" imageAlt={service.title} imageSrc={service.img} textWrapperClass="w-full flex flex-col items-center gap-2" >
                    <h4 className="text-base rounded font-semibold">
                      {service.title}
                    </h4>
                    <p className="text-sm  font-light text-center">
                      {service.description}
                    </p>

                    <div className='absolute top-2 px-1 py-1 bg-red-800 rounded-full group-hover:px-16 duration-500'>
                    </div>
                  </Card>
                ))
              }
            </div>
          </main>
        </section>
      </ColoredSection>

      <div id="about">
        <ColoredSection backgroundColor="#F3F5F4">
          <div className='grid lg:grid-cols-2 lg:gap-14 gap-4 py-12 px-4 items-center'>
        
            <div className='flex flex-col gap-6'>
              <div data-aos="fade-right">
                <div className='text-base text-yellow-500'>nuestra oferta</div>
                <div className='text-2xl font-extrabold'>Explora Casa Campo Arequipa</div>
              </div>
        
              <p data-aos="fade-left">
                Ubicado en el corazón de Arequipa, Casa Campo Arequipa te brinda una experiencia única donde la naturaleza y el descanso se unen.
                Disfruta de un entorno rodeado de majestuosos árboles y vegetación exuberante que te invita a desconectar de la rutina diaria.
              </p>
        
              <div className='flex gap-4' data-aos="fade-right">
                <div className='p-2 text-green-800 bg-green-700/20 rounded-md flex-none h-14 w-14 flex items-center justify-center'>
                  <i className="fa-regular fa-face-laugh-beam fa-2xl"></i>
                </div>
                <div>
                  <div className='text-lg font-bold'>Experiencia inolvidable</div>
                  <div className='text-sm'>
                    Ya sea que busques un refugio relajante o un punto de partida para descubrir la región, en Casa Campo Arequipa encontrarás lo que necesitas.
                    Nuestras instalaciones están preparadas para que vivas momentos inolvidables, rodeado de belleza natural.
                  </div>
                </div>
              </div>
        
              <div className='flex gap-4' data-aos="fade-left">
                <div className='p-2 text-blue-500 bg-blue-400/30 rounded-md flex-none h-14 w-14 flex items-center justify-center'>
                  <i className="fa-solid fa-people-group fa-2xl"></i>
                </div>
                <div>
                  <div className='text-lg font-bold'>Servicio personalizado y profesional</div>
                  <div className='text-sm'>
                    Contamos con un equipo profesional y altamente capacitado, dedicado a hacer de tu estadía una experiencia memorable. Nuestra prioridad es tu
                    comodidad y seguridad, y nos esforzamos por garantizar que cada detalle esté cuidadosamente planeado para ti.
                  </div>
                </div>
              </div>
        
              <div className='flex gap-4' data-aos="fade-right">
                <div className='p-2 text-yellow-500 bg-yellow-200/50 rounded-md flex-none h-14 w-14 flex items-center justify-center'>
                  <i className="fa-solid fa-hand-holding-dollar fa-2xl"></i>
                </div>
                <div>
                  <div className='text-lg font-bold'>Precios leales</div>
                  <div className='text-sm'>
                    En Casa Campo Arequipa, nos comprometemos a ofrecer precios justos y accesibles, con promociones especiales disponibles durante todo el año.
                    Te invitamos a descubrir por qué somos el destino preferido para quienes buscan una escapada inolvidable.
                  </div>
                </div>
              </div>
        
              <div data-aos="flip-down" className='w-full hidden'>
                <button className='px-3 py-2 w-full rounded-lg text-sm text-white bg-gray-800 hover:bg-red-800 hover:shadow-lg hover:scale-[1.04] hover:shadow-red-800 duration-500'>
                  Conoce más sobre nosotros
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
        
            <div className='p-4'>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] aspect-square" data-aos="flip-up">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
        
          </div>
        </ColoredSection>
      </div>

      <div id="contact">
        <Contactanos></Contactanos>
      </div>
    </>
  );
}