import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  Building, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import SimpleMap from './SimpleMap';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    status: '', // 'sending', 'success', 'error'
    message: ''
  });

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Dirección",
      content: "Calle 91 # 65-30",
      subtitle: "Medellín, Antioquia",
      color: "var(--primary-blue)"
    },
    {
      icon: <Mail size={24} />,
      title: "Correo Electrónico",
      content: "estructurasymontajesshsas@gmail.com",
      subtitle: "sneider1987h@hotmail.com",
      color: "var(--secondary-blue)"
    },
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      content: "+57 3207489848",
      subtitle: "Disponible 24/7 para emergencias",
      color: "var(--accent-blue)"
    },
    {
      icon: <Clock size={24} />,
      title: "Horario de Atención",
      content: "Lunes a Viernes: 7:00 AM - 6:00 PM",
      subtitle: "Sábados: 8:00 AM - 12:00 PM",
      color: "var(--dark-blue)"
    }
  ];

  const projectTypes = [
    "Torres de Transmisión",
    "Cimentaciones",
    "Líneas de Transmisión",
    "Telecomunicaciones",
    "Mantenimiento",
    "Emergencias",
    "Consultoría",
    "Otro"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ status: 'sending', message: 'Enviando mensaje...' });

    try {
      // Envío con Formspree
      const response = await fetch('https://formspree.io/f/myznjwgy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          project: formData.project,
          message: formData.message,
          _subject: `Nuevo contacto web - ${formData.name} (${formData.project})`
        }),
      });

      if (response.ok) {
        setFormStatus({
          status: 'success',
          message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.'
        });
        
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          project: '',
          message: ''
        });
      } else {
        try {
          const data = await response.json();
          const errorMsg = data?.errors?.[0]?.message || 'Error en el envío';
          throw new Error(errorMsg);
        } catch (err) {
          throw new Error('Error en el envío');
        }
      }

    } catch (error) {
      console.error('Error enviando formulario:', error);
      setFormStatus({
        status: 'error',
        message: 'Error al enviar el mensaje. Por favor intenta nuevamente.'
      });
    }

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      setFormStatus({ status: '', message: '' });
    }, 5000);
  };

  return (
  <section id="contacto" className="section" style={{ scrollMarginTop: '140px' }}>
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
            Contáctanos
          </motion.div>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
            Hablemos de tu <span className="text-primary">Próximo Proyecto</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Estamos aquí para ayudarte con tus proyectos de infraestructura eléctrica. 
            Contáctanos para una consulta gratuita y cotización personalizada.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: windowSize.width >= 1024 ? '1fr 1fr' : '1fr',
          gap: windowSize.width >= 1024 ? '4rem' : windowSize.width >= 768 ? '3rem' : '2rem', 
          alignItems: 'start'
        }}>
          {/* Columna izquierda: Información de contacto y mapa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 style={{
              fontSize: windowSize.width >= 1024 ? '2rem' : 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              marginBottom: windowSize.width >= 1024 ? '2rem' : 'clamp(1rem, 4vw, 2rem)',
              color: 'var(--gray-900)'
            }}>
              Información de Contacto
            </h3>

            <div style={{ 
              display: 'grid', 
              gap: windowSize.width >= 1024 ? '1.5rem' : windowSize.width >= 768 ? '1.25rem' : '0.75rem',
              marginBottom: windowSize.width >= 1024 ? '3rem' : '2rem'
            }}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: windowSize.width >= 1024 ? '1rem' : windowSize.width >= 768 ? '0.85rem' : '0.75rem',
                    padding: windowSize.width >= 1024 ? '1.5rem' : windowSize.width >= 768 ? '1.25rem' : '0.75rem',
                    backgroundColor: 'var(--white)',
                    borderRadius: '16px',
                    border: '1px solid var(--gray-200)',
                    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${0.4 + index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.boxShadow = '0 8px 35px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div style={{
                    backgroundColor: `${info.color}15`,
                    color: info.color,
                    width: windowSize.width >= 1024 ? '60px' : windowSize.width >= 768 ? '55px' : '45px',
                    height: windowSize.width >= 1024 ? '60px' : windowSize.width >= 768 ? '55px' : '45px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: windowSize.width >= 1024 ? '1.125rem' : windowSize.width >= 768 ? '1rem' : '0.9rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: 'var(--gray-900)'
                    }}>
                      {info.title}
                    </h4>
                    <p style={{
                      color: 'var(--gray-700)',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      fontSize: windowSize.width >= 1024 ? '1rem' : windowSize.width >= 768 ? '0.9rem' : '0.85rem',
                      lineHeight: '1.3'
                    }}>
                      {info.content}
                    </p>
                    <p style={{
                      color: 'var(--gray-500)',
                      fontSize: windowSize.width >= 1024 ? '0.875rem' : windowSize.width >= 768 ? '0.8rem' : '0.75rem',
                      lineHeight: '1.2'
                    }}>
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SimpleMap
                latitude={6.2442}
                longitude={-75.5812}
                height={windowSize.width >= 1024 ? "300px" : "350px"}
                address="Calle 91 # 65-30, Medellín, Colombia"
              />
            </motion.div>
          </motion.div>

          {/* Columna derecha: Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              backgroundColor: 'var(--white)',
              padding: windowSize.width >= 1024 ? '3rem 2.5rem' : 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2.5rem)',
              borderRadius: '20px',
              border: '1px solid var(--gray-200)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--gray-900)'
            }}>
              Solicitar Cotización
            </h3>

            <p style={{
              color: 'var(--gray-600)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <form 
              onSubmit={handleSubmit} 
              aria-label="Formulario de contacto"
              style={{ display: 'grid', gap: '1.5rem' }}
            >
              {/* Nombre */}
              <div>
                <label htmlFor="contact-name" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--gray-700)',
                  marginBottom: '0.5rem'
                }}>
                  Nombre Completo *
                </label>
                <div style={{ position: 'relative' }}>
                  <User 
                    size={20} 
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--gray-400)'
                    }}
                  />
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="name"
                    required
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 3rem',
                      border: '2px solid var(--gray-200)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: 'var(--white)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              {/* Email y Empresa */}
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label htmlFor="contact-email" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Correo Electrónico *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail 
                      size={20} 
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--gray-400)'
                      }}
                    />
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Empresa
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building 
                      size={20} 
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--gray-400)'
                      }}
                    />
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      autoComplete="organization"
                      style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
              </div>

              {/* Teléfono y Tipo de Proyecto */}
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label htmlFor="contact-phone" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Teléfono
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone 
                      size={20} 
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--gray-400)'
                      }}
                    />
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        border: '2px solid var(--gray-200)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-project" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="contact-project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                    aria-describedby="project-help"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid var(--gray-200)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: 'var(--white)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  >
                    <option value="">Selecciona un tipo</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <small 
                    id="project-help"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--gray-500)',
                      marginTop: '0.25rem',
                      display: 'block'
                    }}
                  >
                    Selecciona el tipo de proyecto que mejor describe tu necesidad
                  </small>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="contact-message" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--gray-700)',
                  marginBottom: '0.5rem'
                }}>
                  Mensaje *
                </label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare 
                    size={20} 
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '1rem',
                      color: 'var(--gray-400)'
                    }}
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 3rem',
                      border: '2px solid var(--gray-200)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                    placeholder="Describe tu proyecto, requisitos específicos, ubicación, presupuesto aproximado, etc."
                  />
                </div>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={formStatus.status === 'sending'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  opacity: formStatus.status === 'sending' ? 0.7 : 1,
                  cursor: formStatus.status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (formStatus.status !== 'sending') {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (formStatus.status !== 'sending') {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
                onMouseDown={(e) => {
                  if (formStatus.status !== 'sending') {
                    e.currentTarget.style.transform = 'scale(0.98)';
                  }
                }}
                onMouseUp={(e) => {
                  if (formStatus.status !== 'sending') {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
                  }
                }}
              >
                {formStatus.status === 'sending' ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {/* Mensaje de estado del formulario (abajo) */}
              {formStatus.status && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="polite"
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor:
                      formStatus.status === 'success'
                        ? '#dcfce7' // verde claro
                        : formStatus.status === 'error'
                        ? '#fee2e2' // rojo claro
                        : 'var(--gray-100)', // neutro
                    color:
                      formStatus.status === 'success'
                        ? '#166534' // verde oscuro
                        : formStatus.status === 'error'
                        ? '#dc2626' // rojo
                        : 'var(--gray-600)',
                    border:
                      formStatus.status === 'success'
                        ? '1px solid #86efac'
                        : formStatus.status === 'error'
                        ? '1px solid #fecaca'
                        : '1px solid var(--gray-200)'
                  }}
                >
                  {formStatus.status === 'success' && <CheckCircle size={20} />}
                  {formStatus.status === 'error' && <AlertCircle size={20} />}
                  {formStatus.status === 'sending' && (
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid var(--gray-300)',
                      borderTop: '2px solid var(--primary-blue)',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                  )}
                  <span>{formStatus.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* CSS para animación de carga */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;