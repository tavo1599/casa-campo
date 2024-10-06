import React, { useEffect, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Whasap = () => {
  const botonRef = useRef(null);

  useEffect(() => {
    // Se ejecuta cuando el componente se monta
    if (botonRef.current) {
      botonRef.current.classList.add("mostrar");
    }
  }, []);

  const { translations } = useContext(LanguageContext);
  console.log(translations);
  
  return (
    <div className="container-boton" ref={botonRef}>
      <a
        href="https://api.whatsapp.com/send?phone=+51987563711&text=Hola, Necesito más información!"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width="30"
          height="30"
          className="boton"
          src="/images/wasap-v1-removebg-preview.png"
          alt=""
        />
      </a>
      <div className="texto-emergente">{translations.chatea}</div>
    </div>
  );
};

export default Whasap;
