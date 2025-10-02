import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

const SimpleMap = ({ 
  latitude = 6.2442, 
  longitude = -75.5812, 
  height = "350px",
  address = "Calle 91 # 65-30, Medellín, Colombia"
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // URL para OpenStreetMap embebido
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;
  
  // URL para Google Maps (abrir en nueva pestaña)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const handleMapError = () => {
    setMapError(true);
  };

  const openInGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div style={{ 
      height, 
      borderRadius: '16px', 
      overflow: 'hidden',
      border: '1px solid var(--gray-200)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      backgroundColor: 'var(--gray-50)'
    }}>
      {!mapError ? (
        <>
          {!mapLoaded && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--gray-50)',
              zIndex: 2
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--gray-600)'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  border: '3px solid var(--primary-blue)',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  Cargando mapa...
                </span>
              </div>
            </div>
          )}
          
          <iframe
            src={osmUrl}
            width="100%"
            height="100%"
            style={{ 
              border: 'none',
              filter: mapLoaded ? 'none' : 'blur(2px)',
              transition: 'filter 0.5s ease'
            }}
            loading="lazy"
            onLoad={handleMapLoad}
            onError={handleMapError}
            title="Mapa de ubicación"
          />
        </>
      ) : (
        // Fallback si el mapa no carga
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--light-blue) 0%, var(--gray-50) 100%)',
          color: 'var(--gray-700)',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <MapPin size={48} color="var(--primary-blue)" style={{ marginBottom: '1rem' }} />
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: 'var(--gray-900)'
          }}>
            Nuestra Ubicación
          </h3>
          <p style={{
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: 'var(--gray-600)',
            lineHeight: '1.5'
          }}>
            {address}
          </p>
          <button
            onClick={openInGoogleMaps}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--accent-blue)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--primary-blue)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
            }}
          >
            <Navigation size={16} />
            Ver en Google Maps
            <ExternalLink size={14} />
          </button>
        </div>
      )}

      {/* Overlay con información y botón */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '0.75rem 1rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 3
        }}
      >
        <button
          onClick={openInGoogleMaps}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0.75rem',
            backgroundColor: 'transparent',
            color: 'var(--primary-blue)',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--primary-blue)';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--primary-blue)';
          }}
        >
          <ExternalLink size={14} />
          Abrir en Maps
        </button>
      </motion.div>

      {/* CSS para animaciones */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SimpleMap;