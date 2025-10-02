import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useResponsive } from '../hooks/useResponsive';
import { 
  Zap, 
  Building2, 
  Wrench, 
  Truck,
  HardHat,
  Route,
  Shield,
  Settings,
  Mountain
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { isMobile, isTablet } = useResponsive();

  const services = [
    {
      icon: <Zap size={32} />,
      title: "Torres de Transmisión",
      description: "Construcción, transporte, instalación, reparación, recuperación, desmontaje, montaje y refuerzos estructurales de torres de transmisión de energía eléctrica hasta 500 kV.",
      features: ["Hasta 500 kV", "Refuerzos estructurales", "Mantenimiento integral"],
      color: "var(--primary-blue)"
    },
    {
      icon: <Building2 size={32} />,
      title: "Cimentaciones",
      description: "Construcción de cimentaciones para torres de transmisión de energía, torres de comunicación y subestaciones eléctricas. Incluye cimentaciones especiales tipo pilas.",
      features: ["Torres de transmisión", "Torres de comunicación", "Subestaciones"],
      color: "var(--secondary-blue)"
    },
    {
      icon: <Route size={32} />,
      title: "Líneas de Transmisión",
      description: "Montaje y desmontaje de líneas y torres de transmisión de energía y telecomunicaciones, incluyendo atención de emergencias las 24 horas.",
      features: ["Montaje y desmontaje", "Energía y telecomunicaciones", "Servicio de emergencia"],
      color: "var(--accent-blue)"
    },
    {
      icon: <Wrench size={32} />,
      title: "Herrajes y Componentes",
      description: "Instalación, revisión y cambio de herrajes en estructuras tipo suspensión y retención de líneas de transmisión con la más alta calidad.",
      features: ["Suspensión y retención", "Alta calidad", "Mantenimiento preventivo"],
      color: "var(--dark-blue)"
    },
    {
      icon: <Mountain size={32} />,
      title: "Estabilización de Taludes",
      description: "Construcción de muros de contención y canaletas para estabilización de taludes, así como obras de drenaje y filtros para torres de transmisión.",
      features: ["Muros de contención", "Canaletas", "Obras de drenaje"],
      color: "var(--primary-blue)"
    },
    {
      icon: <Settings size={32} />,
      title: "Cimentaciones Especiales",
      description: "Cimentaciones especiales tipo pilas para torres de transmisión y telecomunicaciones, adaptadas a las condiciones específicas del terreno.",
      features: ["Tipo pilas", "Terrenos especiales", "Diseño personalizado"],
      color: "var(--secondary-blue)"
    }
  ];

  const capabilities = [
    {
      icon: <HardHat size={24} />,
      title: "Seguridad Integral",
      value: "100%",
      description: "Cumplimiento en normas de seguridad"
    },
    {
      icon: <Zap size={24} />,
      title: "Alta Tensión",
      value: "500kV",
      description: "Capacidad máxima de trabajo"
    },
    {
      icon: <Shield size={24} />,
      title: "Certificaciones",
      value: "CONTE",
      description: "Profesionales certificados"
    },
    {
      icon: <Truck size={24} />,
      title: "Logística",
      value: "24/7",
      description: "Disponibilidad de emergencia"
    }
  ];

  return (
  <section id="servicios" className="section" style={{ scrollMarginTop: '140px' }}>
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
              display: 'inline-block',
              marginBottom: '1rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}
          >
            Nuestros Servicios
          </motion.div>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
            Soluciones Integrales en{' '}
            <span className="text-primary">Infraestructura Eléctrica</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Ofrecemos servicios especializados en construcción, montaje y mantenimiento de 
            infraestructura eléctrica con los más altos estándares de calidad y seguridad.
          </p>
        </motion.div>

        {/* Capacidades clave */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid"
          style={{ 
            marginBottom: '5rem',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem'
          }}
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="hover-card"
              style={{
                backgroundColor: 'var(--white)',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid var(--gray-200)',
                boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'scale(0.8)',
                transitionDelay: `${0.4 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{
                backgroundColor: 'var(--light-blue)',
                color: 'var(--primary-blue)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                {capability.icon}
              </div>

              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>
                {capability.value}
              </div>

              <h4 style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: 'var(--gray-900)'
              }}>
                {capability.title}
              </h4>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--gray-600)',
                lineHeight: '1.4'
              }}>
                {capability.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Servicios principales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid"
          style={{ 
            gap: isMobile ? '1.5rem' : '2rem',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)'
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--white)',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                border: '1px solid var(--gray-200)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transitionDelay: `${0.7 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Gradiente decorativo */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${service.color}, var(--accent-blue))`
              }} />

              <div style={{
                backgroundColor: `${service.color}15`,
                color: service.color,
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                {service.title}
              </h3>

              <p style={{
                color: 'var(--gray-600)',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontSize: '1rem'
              }}>
                {service.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    style={{
                      backgroundColor: `${service.color}10`,
                      color: service.color,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      border: `1px solid ${service.color}20`
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
            color: 'var(--white)',
            padding: '3rem 2rem',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Patrón de fondo */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.1
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'var(--white)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              ¿Necesitas un Proyecto de Infraestructura Eléctrica?
            </h3>

            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.98)',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              lineHeight: '1.6'
            }}>
              Contáctanos para una consulta personalizada y cotización sin compromiso. 
              Nuestro equipo está listo para hacer realidad tu proyecto.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--primary-blue)',
                fontWeight: '700',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
              }}
            >
              Solicitar Cotización
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;