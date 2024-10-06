import React, { createContext, useState, useEffect } from "react";
import { translateText } from "./translateService";
import contentToTranslate from "../data/data.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "es");
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState("Inicio");

  const getVisibleContentKeys = (currentView) => {
    return Object.keys(contentToTranslate[currentView] || {});
  };

  const translateContent = async (currentView) => {
    setLoading(true);
    setError(null);
    const newTranslations = {};
    const visibleKeys = getVisibleContentKeys(currentView);

    try {
      // Muestra texto original inmediatamente si el idioma no es español
      if (language !== "es") {
        visibleKeys.forEach((key) => {
          newTranslations[key] = contentToTranslate[currentView][key]; // Asignar texto original
        });
        setTranslations(newTranslations); // Actualizar inmediatamente las traducciones
      }

      // Realiza traducciones solo si el idioma no es español
      if (language !== "es") {
        const storedTranslations = localStorage.getItem(`translations-${language}`);

        if (storedTranslations) {
          const parsedStoredTranslations = JSON.parse(storedTranslations);
          visibleKeys.forEach((key) => {
            if (parsedStoredTranslations[key]) {
              newTranslations[key] = parsedStoredTranslations[key]; // Usar traducción almacenada
            } else {
              // Traduce el contenido
              translateText(contentToTranslate[currentView][key], language)
                .then((translation) => {
                  newTranslations[key] = translation;
                  setTranslations((prev) => ({ ...prev, [key]: translation })); // Actualiza solo la clave traducida
                })
                .catch((error) => {
                  console.warn(`No se pudo traducir ${key}: ${error.message}`);
                  newTranslations[key] = contentToTranslate[currentView][key]; // Mantener el texto original si la traducción falla
                });
            }
          });
        } else {
          // Si no hay traducciones almacenadas, traduce el contenido
          await Promise.all(
            visibleKeys.map(async (key) => {
              try {
                const translation = await translateText(contentToTranslate[currentView][key], language);
                newTranslations[key] = translation;
                localStorage.setItem(`translations-${language}`, JSON.stringify(newTranslations)); // Almacena traducciones nuevas
                setTranslations((prev) => ({ ...prev, [key]: translation })); // Actualiza solo la clave traducida
              } catch (error) {
                console.warn(`No se pudo traducir ${key}: ${error.message}`);
                newTranslations[key] = contentToTranslate[currentView][key]; // Mantener el texto original si la traducción falla
              }
            })
          );
        }
      } else {
        // Si el idioma es español, carga el contenido original
        visibleKeys.forEach((key) => {
          newTranslations[key] = contentToTranslate[currentView][key];
        });
        setTranslations(newTranslations); // Actualiza las traducciones
      }
    } catch (error) {
      console.error("Error al traducir contenido:", error);
      setError("Error al traducir el contenido.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    translateContent(currentView);
    localStorage.setItem("language", language);
  }, [language, currentView]);

  useEffect(() => {
    if (language === "es") {
      const visibleKeys = getVisibleContentKeys(currentView);
      const initialTranslations = {};
      visibleKeys.forEach((key) => {
        initialTranslations[key] = contentToTranslate[currentView][key];
      });
      setTranslations(initialTranslations); // Cargar traducciones en español
    }
  }, [currentView]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations, loading, error, currentView, setCurrentView }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
