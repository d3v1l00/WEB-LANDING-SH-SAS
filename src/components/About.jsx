import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Award, Lightbulb, Shield, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Target size={32} />,
      title: "Misión",
      description: "Desarrollar proyectos de infraestructura eléctrica de alta calidad, contribuyendo al desarrollo energético del país con responsabilidad ambiental."
    },
    {
      icon: <Globe size={32} />,
      title: "Visión",
      description: "Ser la empresa líder en infraestructura eléctrica en Colombia, reconocida por nuestra excelencia técnica y compromiso con la seguridad."
    },
    {
      icon: <Award size={32} />,
      title: "Valores",
      description: "Compromiso, seguridad, calidad, responsabilidad ambiental e innovación son los pilares que guían nuestro trabajo diario."
    }
  ];

  const professionals = [
    {
      icon: <Lightbulb size={24} />,
      title: "Ingeniería",
      description: "Profesionales en ingeniería eléctrica",
      experience: "30+ años de experiencia",
      highlight: "Sector eléctrico especializado"
    },
    {
      icon: <Shield size={24} />,
      title: "Técnicos",
      description: "Profesionales certificados (CONTE)",
      experience: "8+ años de experiencia",
      highlight: "Líneas de transmisión 115, 230 y 500 kV"
    },
    {
      icon: <Users size={24} />,
      title: "Logística y Administración",
      description: "Especialistas en SST",
      experience: "12+ años de experiencia",
      highlight: "Equipos y herramientas especializadas"
    }
  ];

  return (
  <section id="nosotros" className="section section-alt" style={{ scrollMarginTop: '140px' }}>
      <div className="container-full">
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
            Quiénes Somos
          </motion.div>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
            Experiencia y Compromiso en{' '}
            <span className="text-primary">Infraestructura Eléctrica</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Somos un equipo técnico especializado en ingeniería con experiencia en el sector eléctrico, 
            dedicado al desarrollo de proyectos de construcción, infraestructura eléctrica, civil y telecomunicaciones.
          </p>
        </motion.div>

        {/* Misión, Visión, Valores */}
        <div
          className="grid grid-3"
          style={{ marginBottom: '5rem' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--white)',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
                border: '1px solid var(--gray-200)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transitionDelay: `${0.4 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 35px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.08)';
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                style={{
                  color: 'var(--primary-blue)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                color: 'var(--gray-600)',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            backgroundColor: 'var(--primary-blue)',
            color: 'var(--white)',
            padding: '3rem 2rem',
            borderRadius: '20px',
            textAlign: 'center',
            marginBottom: '5rem',
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: 'var(--white)'
              }}
            >
              Nuestro Compromiso
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto',
                color: 'var(--white)',
                opacity: 0.95
              }}
            >
              Estamos comprometidos con el progreso del país, cuidando el medio ambiente y 
              garantizando la seguridad de nuestra gente en cada proyecto que desarrollamos.
            </motion.p>
          </div>
        </motion.div>

        {/* Nuestros Profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--gray-900)'
            }}>
              Nuestros <span className="text-primary">Profesionales</span>
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Contamos con un equipo altamente calificado y certificado en todas las áreas de especialización
            </p>
          </div>

          <div className="grid grid-3">
            {professionals.map((professional, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid var(--gray-200)',
                  boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.05s ease'
                }}
              >
                <div style={{
                  backgroundColor: 'var(--light-blue)',
                  color: 'var(--primary-blue)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {professional.icon}
                </div>

                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: 'var(--gray-900)'
                }}>
                  {professional.title}
                </h4>

                <p style={{
                  color: 'var(--gray-600)',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {professional.description}
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--primary-blue)',
                  marginBottom: '0.5rem'
                }}>
                  {professional.experience}
                </div>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--gray-500)',
                  fontStyle: 'italic'
                }}>
                  {professional.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;