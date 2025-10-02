import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Zap,
  Building2,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 120; // Altura del header fijo
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - headerHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Torres de Transmisión', icon: <Zap size={16} /> },
    { name: 'Cimentaciones', icon: <Building2 size={16} /> },
    { name: 'Líneas de Transmisión', icon: <Shield size={16} /> },
    { name: 'Telecomunicaciones', icon: <Award size={16} /> }
  ];

  const certifications = [
    "CONTE Certificado",
    "ISO 9001:2015",
    "OHSAS 18001",
    "ISO 14001"
  ];

  return (
    <footer style={{
      backgroundColor: 'var(--gray-900)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Patrón de fondo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.1
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Sección principal del footer */}
        <div className="container-full" style={{ padding: '4rem 2rem 2rem 2rem' }}>
          <div className="grid grid-4" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Logo y descripción */}
            <div style={{ gridColumn: 'span 2' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}
              >
                 {/* Logo */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--white)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.15)',
                  border: '2px solid var(--light-blue)',
                  transition: 'all 0.3s ease'
                 }}>
                   <img 
                     src="/logo.png" 
                    alt="Estructuras y Montajes SH SAS Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease'
                    }}
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="color: var(--primary-blue); font-weight: 800; font-size: 1.5rem;">SH</span>';
                    }}
                  />
                </div>
                <div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'var(--white)',
                    lineHeight: 1
                  }}>
                    ESTRUCTURAS Y MONTAJES
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: 'var(--accent-blue)',
                    fontWeight: '600',
                    lineHeight: 1
                  }}>
                    SH S.A.S
                  </div>
                </div>
              </motion.div>
              

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  fontSize: '1rem'
                }}
              >
                Somos especialistas en ingeniería eléctrica con más de 30 años de experiencia, 
                comprometidos con el progreso del país, cuidando el medio ambiente y la seguridad 
                de nuestra gente.
              </motion.p>

              {/* Información de contacto rápida */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ display: 'grid', gap: '1rem' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  <MapPin size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span style={{ fontSize: '0.875rem' }}>
                    Calle 91 # 65-30, Medellín, Antioquia
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  <Phone size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span style={{ fontSize: '0.875rem' }}>
                    +57 3207489848
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  <Mail size={18} style={{ color: 'var(--accent-blue)' }} />
                  <span style={{ fontSize: '0.875rem' }}>
                    estructurasymontajesshsas@gmail.com
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--white)'
                }}
              >
                Enlaces Rápidos
              </motion.h4>

              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gap: '0.75rem'
                }}
              >
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      whileHover={{ x: 5, color: 'var(--accent-blue)' }}
                      href={link.href}
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        padding: '0.25rem 0',
                        transition: 'all 0.05s ease',
                        textAlign: 'left'
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Servicios */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--white)'
                }}
              >
                Nuestros Servicios
              </motion.h4>

              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gap: '0.75rem'
                }}
              >
                {services.map((service) => (
                  <li key={service.name}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        padding: '0.25rem 0',
                        transition: 'all 0.05s ease'
                      }}
                      onClick={() => scrollToSection('#servicios')}
                    >
                      <span style={{ color: 'var(--accent-blue)' }}>
                        {service.icon}
                      </span>
                      {service.name}
                    </motion.div>
                  </li>
                ))}
              </motion.ul>

              {/* Certificaciones */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ marginTop: '2rem' }}
              >
                <h5 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--accent-blue)'
                }}>
                  Certificaciones
                </h5>
                <div style={{
                  display: 'grid',
                  gap: '0.5rem'
                }}>
                  {certifications.map((cert) => (
                    <div
                      key={cert}
                      style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '4px',
                        textAlign: 'center'
                      }}
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: 'var(--primary-blue)',
            margin: '0 2rem',
            borderRadius: '16px',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Patrón decorativo */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.1
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'var(--white)'
            }}>
              ¿Listo para tu Próximo Proyecto?
            </h3>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Contáctanos hoy mismo y descubre cómo podemos hacer realidad tu proyecto 
              de infraestructura eléctrica.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contacto'); }}
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--primary-blue)',
                border: 'none',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              Contactar Ahora
            </motion.a>
          </div>
        </motion.div>

        {/* Línea divisoria */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          margin: '3rem 2rem 2rem 2rem'
        }} />

        {/* Footer inferior */}
        <div className="container-full" style={{ padding: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem'
              }}
            >
              © 2024 Estructuras y Montajes SH SAS. Todos los derechos reservados.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem'
              }}>
                Medellín, Antioquia - Colombia
              </div>

              {/* Botón scroll to top */}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                style={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'var(--white)',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                }}
              >
                <ArrowUp size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;