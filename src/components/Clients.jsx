import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Award, Handshake, Users } from 'lucide-react';

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Clientes principales - logos reales
  const clients = [
    {
      name: "INSTELEC SAS",
      logo: "LOGO-INSTELEC",
      description: "Múltiples proyectos de transmisión",
      projects: "3+"
    },
    {
      name: "EQUANS",
      logo: "LOGO-ECUANS",
      description: "Líneas de transmisión 115 kV",
      projects: "1"
    },
    {
      name: "Hidroituango",
      logo: "LOGO-HIDROITUANGO",
      description: "Proyecto hidroeléctrico",
      projects: "1"
    },
    {
      name: "INSITEL-EPM",
      logo: "LOGO-INSITEL",
      description: "Telecomunicaciones",
      projects: "1"
    },
    {
      name: "IDJ",
      logo: "LOGO-IDJ",
      description: "Ingeniería y construcción eléctrica",
      projects: "1"
    }
  ];

  const testimonials = [
    {
      quote: "Estructuras y Montajes SH SAS ha demostrado ser un aliado confiable en nuestros proyectos de infraestructura eléctrica. Su compromiso con la calidad y los tiempos de entrega es excepcional.",
      author: "Gerente de Proyecto",
      company: "INSTELEC SAS",
      rating: 5
    },
    {
      quote: "La experiencia técnica y el profesionalismo del equipo de SH SAS nos han permitido ejecutar proyectos complejos con total confianza y excelentes resultados.",
      author: "Director Técnico",
      company: "Cliente Confidencial",
      rating: 5
    },
    {
      quote: "Su capacidad para manejar proyectos de alta tensión y la atención al detalle en seguridad los convierte en nuestro socio preferido para proyectos críticos.",
      author: "Supervisor de Obra",
      company: "Proyecto Hidroeléctrico",
      rating: 5
    }
  ];

  const stats = [
    { icon: <Users size={24} />, number: "15+", label: "Clientes Satisfechos" },
    { icon: <Award size={24} />, number: "100+", label: "Proyectos Completados" },
    { icon: <Star size={24} />, number: "99%", label: "Satisfacción del Cliente" },
    { icon: <Handshake size={24} />, number: "20+", label: "Años de Relaciones" }
  ];

  return (
    <section id="clientes" className="section">
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
            Nuestros Clientes
          </motion.div>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
            Empresas que <span className="text-primary">Confían en Nosotros</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Trabajamos con las empresas más importantes del sector eléctrico en Colombia, 
            construyendo relaciones de confianza a largo plazo.
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-4"
          style={{ marginBottom: '5rem' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--white)',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid var(--gray-200)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1)' : 'scale(0.8)',
                transitionDelay: `${0.4 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
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
                margin: '0 auto 1.5rem auto'
              }}>
                {stat.icon}
              </div>

              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>

              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--gray-700)',
                lineHeight: '1.3'
              }}>
                {stat.label}
              </h4>
            </div>
          ))}
        </motion.div>

        {/* Grid de logos de clientes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--gray-900)'
          }}>
            Empresas que Trabajan con Nosotros
          </h3>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {clients.map((client, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid var(--gray-200)',
                  boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${0.7 + index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 35px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Logo de la empresa */}
                <div style={{
                  width: '120px',
                  height: '80px',
                  margin: '0 auto 1.5rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  borderRadius: '12px',
                  border: '1px solid var(--gray-200)',
                  padding: '10px'
                }}>
                  <img 
                    src={`/images/clients/${client.logo}.jpg`}
                    alt={`Logo ${client.name}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'contrast(1.1) saturate(1.1)'
                    }}
                    onError={(e) => {
                      // Fallback para diferentes extensiones basado en el nombre del logo
                      const logoName = client.logo;
                      if (e.target.src.includes('.jpg')) {
                        if (logoName === 'LOGO-INSITEL' || logoName === 'LOGO-IDJ') {
                          e.target.src = `/images/clients/${client.logo}.png`;
                        } else {
                          e.target.src = `/images/clients/${client.logo}.svg`;
                        }
                      } else if (e.target.src.includes('.png')) {
                        e.target.src = `/images/clients/${client.logo}.svg`;
                      } else {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback si la imagen no carga */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--gray-500)',
                    textAlign: 'center'
                  }}>
                    {client.name}
                  </div>
                </div>

                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: 'var(--gray-900)'
                }}>
                  {client.name}
                </h4>

                <p style={{
                  color: 'var(--gray-600)',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {client.description}
                </p>

                <div style={{
                  backgroundColor: 'var(--light-blue)',
                  color: 'var(--primary-blue)',
                  padding: '0.375rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {client.projects} Proyectos
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, var(--gray-50), var(--light-blue))',
            padding: '4rem 3rem',
            borderRadius: '20px',
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                Lo que Dicen Nuestros <span className="text-primary">Clientes</span>
              </h3>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--gray-600)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                La satisfacción de nuestros clientes es nuestro mayor logro
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '2rem' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid var(--gray-200)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${1 + index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Estrellas */}
                  <div style={{
                    display: 'flex',
                    gap: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="var(--accent-blue)"
                        style={{ color: 'var(--accent-blue)' }}
                      />
                    ))}
                  </div>

                  <blockquote style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'var(--gray-700)',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}>
                    "{testimonial.quote}"
                  </blockquote>

                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--gray-900)',
                      marginBottom: '0.25rem'
                    }}>
                      {testimonial.author}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--primary-blue)',
                      fontWeight: '500'
                    }}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%)',
            padding: '3rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Elemento decorativo de fondo */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--white)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}>
              ¿Quieres Ser Nuestro Próximo Cliente Satisfecho?
            </h3>

            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              color: 'var(--white)',
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
            }}>
            Únete a las empresas que han confiado en nuestra experiencia y profesionalismo 
            para sus proyectos de infraestructura eléctrica.
          </p>
          
          </div>

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
            Comenzar Proyecto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;