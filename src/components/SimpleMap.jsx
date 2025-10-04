import React from 'react';

const SimpleMap = ({
  latitude = 6.2442,
  longitude = -75.5812,
  height = "350px",
  address = "Calle 91 # 65-30, Medellín, Colombia"
}) => {
  // OpenStreetMap embed URL
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;

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
      <iframe
        src={osmUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Ubicación SH SAS"
      />
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#16a34a' }}>
          Nuestra Ubicación
        </h3>
        <p style={{ fontSize: '1rem', color: '#333', margin: 0 }}>{address}</p>
      </div>
    </div>
  );
};
export default SimpleMap;
