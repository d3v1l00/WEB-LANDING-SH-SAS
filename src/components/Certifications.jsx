import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      id: 1,
      name: "CONTE Certificado",
      description: "Certificación técnica para construcción",
      logo: "/images/certifications/conte-logo.png",
      year: "2024"
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      description: "Sistema de Gestión de Calidad",
      logo: "/images/certifications/iso90012015-logo.png",
      year: "2023"
    },
    {
      id: 3,
      name: "OHSAS 18001",
      description: "Seguridad y Salud Ocupacional",
      logo: "/images/certifications/ohsas-logo.png",
      year: "2023"
    },
    {
      id: 4,
      name: "ISO 14001",
      description: "Sistema de Gestión Ambiental",
      logo: "/images/certifications/iso14001-logo.jpg",
      year: "2023"
    }
  ];

  return (
    <section id="certificaciones" className="section" style={{
      scrollMarginTop: '140px',
      backgroundColor: 'var(--gray-50)',
      padding: '5rem 0'
    }}>
      <div className="container-full">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundColor: 'var(--light-blue)',
              color: 'var(--primary-blue)',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}
          >
            <Award size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Certificaciones y Avales
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: 'var(--gray-900)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}
          >
            Respaldados por las Mejores 
            <span style={{ 
              background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}> Certificaciones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '1.125rem',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}
          >
            Nuestros certificados y avales técnicos garantizan la más alta calidad 
            y cumplimiento de estándares internacionales en todos nuestros proyectos.
          </motion.p>
        </motion.div>

        {/* Grid de Certificaciones */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--gray-200)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Badge del año */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'var(--primary-blue)',
                color: 'var(--white)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {cert.year}
              </div>

              {/* Icono de verificación */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                padding: '0.5rem',
                borderRadius: '50%'
              }}>
                <CheckCircle size={16} />
              </div>

              {/* Logo del certificado */}
              <div style={{
                width: '140px',
                height: '140px',
                margin: '1rem auto 1.5rem auto',
                backgroundColor: 'var(--white)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--gray-200)',
                padding: '15px',
                overflow: 'hidden'
              }}>
                <img
                  src={cert.logo}
                  alt={cert.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                  onError={(e) => {
                    // Fallback si no existe la imagen
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback icon */}
                <div style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  color: 'var(--gray-400)',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <Shield size={40} />
                  <span style={{ fontSize: '10px', textAlign: 'center' }}>Logo no disponible</span>
                </div>
              </div>

              {/* Información del certificado */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--gray-900)',
                marginBottom: '0.5rem'
              }}>
                {cert.name}
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--gray-600)',
                lineHeight: '1.5'
              }}>
                {cert.description}
              </p>

              {/* Efecto de hover */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary-blue), var(--secondary-blue))',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease'
              }} />
            </motion.div>
          ))}
        </div>

        {/* Mensaje adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            textAlign: 'center',
            margin: '4rem auto 0 auto',
            padding: '2.5rem',
            backgroundColor: 'var(--white)',
            borderRadius: '15px',
            border: '1px solid var(--gray-200)',
            maxWidth: '900px'
          }}
        >
          <Shield size={32} style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }} />
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: '0.5rem'
          }}>
            Garantía de Calidad
          </h4>
          <p style={{
            color: 'var(--gray-600)',
            fontSize: '0.95rem',
            lineHeight: 1.7
          }}>
            Todos nuestros proyectos se ejecutan bajo los más altos estándares de calidad, 
            seguridad y responsabilidad ambiental certificados internacionalmente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;