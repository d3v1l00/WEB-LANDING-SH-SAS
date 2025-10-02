import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap, Shield, Award, Users, ChevronDown, Radio } from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStatsColumns = () => {
    return windowSize.width >= 1441 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)';
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = 120;
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - headerHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: <Zap />, number: "30+", label: "Años de Experiencia" },
    { icon: <Shield />, number: "500kV", label: "Hasta 500kV" },
    { icon: <Award />, number: "100%", label: "Proyectos Exitosos" },
    { icon: <Users />, number: "50+", label: "Profesionales" }
  ];

  return (
  <section 
      id="inicio" 
      ref={ref}
      className="hero-section"
      style={{
    scrollMarginTop: '140px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-120px',
        paddingTop: '120px'
      }}>
      {/* Patrón de fondo decorativo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }} />

      {/* Formas geométricas decorativas */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1
        }}
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '150px',
          height: '150px',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-2" style={{ 
          gap: windowSize.width < 768 ? '2rem' : '4rem', 
          alignItems: 'flex-start',
          gridTemplateColumns: windowSize.width < 1024 ? '1fr' : '1fr 1fr'
        }}>
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              marginTop: windowSize.width < 768 ? '2rem' : '0' // Espaciado extra en móvil
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                padding: '0.75rem 1.5rem',
                borderRadius: '30px',
                marginBottom: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Radio size={18} style={{ 
                marginRight: '0.5rem', 
                color: 'var(--accent-blue)',
                verticalAlign: 'middle',
                position: 'relative',
                top: '-0.5px'
              }} />
              Líderes en Infraestructura Eléctrica y Telecomunicaciones.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '1.5rem'
              }}
            >
              Construimos el{' '}
              <span style={{
                background: 'linear-gradient(45deg, #60a5fa, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Futuro Energético
              </span>{' '}
              de Colombia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                fontSize: windowSize.width < 768 ? '1rem' : '1.25rem',
                lineHeight: '1.6',
                marginBottom: windowSize.width < 768 ? '1.5rem' : '2.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '500px'
              }}
            >
              Especialistas en infraestructura eléctrica de alta tensión. 
              Más de 30 años de experiencia en construcción de torres de transmisión hasta 500kV.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                href="#servicios"
                style={{
                  backgroundColor: 'var(--white)',
                  color: 'var(--primary-blue)',
                  fontWeight: '700',
                  padding: windowSize.width < 768 ? '0.8rem 1.5rem' : '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: windowSize.width < 768 ? '1rem' : '1.1rem',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Ver Servicios
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
                href="#contacto"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--white)',
                  fontWeight: '600',
                  padding: windowSize.width < 768 ? '0.8rem 1.5rem' : '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: windowSize.width < 768 ? '1rem' : '1.1rem',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Contactar
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Imagen y estadísticas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              {/* Imagen real de torre de transmisión */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                style={{
                  width: '100%',
                  maxWidth: windowSize.width >= 1024 ? '550px' : windowSize.width >= 768 ? '500px' : '450px',
                  height: windowSize.width >= 1024 ? '400px' : '350px',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <img 
                  src="/images/hero/torre-transmision-banner.jpg"
                  alt="Torre de Transmisión - Infraestructura Eléctrica"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '18px'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Overlay decorativo */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                  borderRadius: '18px'
                }} />
              </motion.div>
            </motion.div>

            {/* Estadísticas debajo de la imagen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: getStatsColumns(),
                gap: windowSize.width < 768 ? '0.5rem' : '0.75rem',
                marginTop: windowSize.width < 768 ? '2rem' : '1rem',
                marginBottom: windowSize.width < 768 ? '3rem' : '2rem',
                paddingLeft: windowSize.width < 768 ? '0' : '0',
                paddingRight: windowSize.width < 768 ? '0' : '0'
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: windowSize.width < 768 ? '0.5rem 0.25rem' : '0.75rem 0.5rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    color: '#fbbf24',
                    marginBottom: '0.4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {React.cloneElement(stat.icon, { 
                      size: windowSize.width < 768 ? 16 : 18,
                      style: { position: 'relative', left: '-2px' }
                    })}
                  </div>
                  <div style={{
                    fontSize: windowSize.width < 768 ? '0.9rem' : '1.1rem',
                    fontWeight: '700',
                    marginBottom: '0.2rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: windowSize.width < 768 ? '0.55rem' : '0.65rem',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.2'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}

              {/* Botón "Descubre más" debajo de las estadísticas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                style={{
                  gridColumn: '1 / -1', // Ocupa todo el ancho del grid
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: windowSize.width < 768 ? '1.5rem' : '2.5rem', // Más espacio en desktop
                  marginBottom: windowSize.width < 768 ? '0' : '1.5rem' // Margen inferior en desktop
                }}
              >
                <motion.a
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    scale: 1.05
                  }}
                  href="#servicios"
                >
                  <span>Descubre más</span>
                  <ChevronDown size={16} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;