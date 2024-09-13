import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -16.409, // Coordenada de ejemplo, reemplaza con la ubicación exacta
  lng: -71.537, // Coordenada de ejemplo, reemplaza con la ubicación exacta
};

const MapSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ubicación de Casa Campo Arequipa</h2>
        <div className="relative">
          <LoadScript googleMapsApiKey="TU_CLAVE_DE_API_AQUI">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
