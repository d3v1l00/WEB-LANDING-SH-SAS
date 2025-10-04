import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.scrollTo(0, 0);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  // Navegación: usamos enlaces con href a anclas y scroll-margin-top en secciones.

  return (
    <>
      {/* Top Bar */}
      <div style={{
        backgroundColor: 'var(--primary-blue)',
        color: 'var(--white)',
        padding: isMobile ? '0.3rem 0' : '0.5rem 0',
        fontSize: isMobile ? '0.75rem' : '0.875rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
        display: 'block' // Siempre visible pero con diseño responsive
      }}>
        <div className="container-full flex-between">
          <div className="flex" style={{ 
            gap: isMobile ? '1.2rem' : '1.5rem',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={isMobile ? 12 : 14} />
              <span style={{ fontSize: isMobile ? '0.7rem' : 'inherit' }}>+57 3207489848</span>
            </div>
            <div className="flex" style={{ 
              alignItems: 'center', 
              gap: '0.5rem',
              display: 'flex'
            }}>
              <Mail size={isMobile ? 12 : 14} />
              <span style={{ fontSize: isMobile ? '0.7rem' : 'inherit' }}>estructurasymontajesshsas@gmail.com</span>
            </div>
          </div>
          <div style={{ display: 'none' }}>
            {/* redes sociales más tarde */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        style={{
          position: 'fixed',
          top: isMobile ? '25px' : '39px', // Ajustado para el top bar más pequeño en móvil
          left: 0,
          right: 0,
          backgroundColor: 'var(--white)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          borderBottom: '1px solid var(--gray-200)'
        }}
      >
        <div className="container-full">
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '1rem 0' : '0.5rem 0',
            position: 'relative'
          }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                {/* Logo de la empresa - Más prominente */}
                <a 
                  className="logo-container"
                  style={{
                    width: isMobile ? '56px' : '72px',
                    height: isMobile ? '56px' : '72px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  href="#inicio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img 
                    src="/logo.png" 
                    alt="Estructuras y Montajes SH SAS Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      transition: 'transform 0.05s ease'
                    }}
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span style="color: var(--primary-blue); font-weight: 800; font-size: 1.5rem;">SH</span>';
                    }}
                  />
                </a>
                <div>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    color: 'var(--gray-900)',
                    lineHeight: 1
                  }}>
                    ESTRUCTURAS Y MONTAJES
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--primary-blue)',
                    fontWeight: '600',
                    lineHeight: 1
                  }}>
                    SH S.A.S
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap'
            }} className="hidden-mobile">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--gray-700)',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    transition: 'all 0.05s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary-blue)';
                    e.currentTarget.style.backgroundColor = 'var(--light-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--gray-700)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  marginLeft: '1rem'
                }}
              >
                Cotizar Proyecto
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--gray-700)',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          style={{
            overflow: 'hidden',
            backgroundColor: 'var(--white)',
            borderTop: '1px solid var(--gray-200)',
            display: 'none'
          }}
          className="mobile-menu"
        >
          <div className="container-full">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 0'
            }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gray-700)',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '1rem',
                    textAlign: 'left',
                    borderRadius: '6px',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--light-blue)';
                    e.currentTarget.style.color = 'var(--primary-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--gray-700)';
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div style={{ padding: '1rem' }}>
                <a
                  className="btn btn-primary"
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ width: '100%', display: 'block', textAlign: 'center' }}
                >
                  Cotizar Proyecto
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* CSS adicional para responsive y efectos */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
        
        /* Efecto hover para el logo */
        .logo-container:hover {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Header;