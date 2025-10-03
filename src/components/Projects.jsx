import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useResponsive } from '../hooks/useResponsive';
import { Calendar, MapPin, Zap, Building, Eye, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { isMobile, isTablet } = useResponsive();

  const [selectedProject, setSelectedProject] = useState(null);

  // Limpiar estilos del body al desmontar el componente
  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.removeAttribute('data-scroll-y');
    };
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.setAttribute('data-scroll-y', scrollY.toString());
  };

  const preventDefault = (e) => e.preventDefault();

  const closeProject = () => {
    setSelectedProject(null);
    const scrollY = document.body.getAttribute('data-scroll-y') || '0';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.removeAttribute('data-scroll-y');
    window.scrollTo(0, parseInt(scrollY, 10));
  };

  // Componente de slideshow para imágenes múltiples
  const ProjectSlideshow = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (images.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex(prev => (prev + 1) % images.length);
        }, 2000);
        
        return () => clearInterval(interval);
      }
    }, [images.length]);

    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          style={{
            display: 'flex',
            width: `${images.length * 100}%`,
            height: '100%'
          }}
          animate={{
            x: `-${currentIndex * (100 / images.length)}%`
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.5
          }}
        >
          {images.map((imagePath, index) => (
            <div
              key={index}
              style={{
                width: `${100 / images.length}%`,
                height: '100%',
                position: 'relative'
              }}
            >
              <img
                src={`${imagePath}.jpg`}
                alt={`${title} - Imagen ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  if (e.target.src.includes('.jpg')) {
                    e.target.src = `${imagePath}.png`;
                  } else if (e.target.src.includes('.png')) {
                    e.target.src = `${imagePath}.jpeg`;
                  } else if (e.target.src.includes('.jpeg')) {
                    e.target.src = `${imagePath}.webp`;
                  } else {
                    e.target.style.display = 'none';
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Indicadores de slideshow */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '6px'
          }}>
            {images.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const ProjectImage = ({ imagePath, title }) => (
    <img
      src={`${imagePath}.jpg`}
      alt={title}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      onError={(e) => {
        const formats = ['.png', '.jpeg', '.webp'];
        const current = e.target.src;
        const nextFormat = formats.find(format => !current.includes(format));
        
        if (nextFormat) {
          e.target.src = `${imagePath}${nextFormat}`;
        } else {
          e.target.style.display = 'none';
          if (e.target.nextElementSibling) {
            e.target.nextElementSibling.style.display = 'flex';
          }
        }
      }}
    />
  );

  const projects = [
    {
      id: 1,
      title: "INSTELEC SAS – Jaguey-Tigana-Jacana 115 kV",
      year: "2021",
      client: "INSTELEC SAS",
      location: "Jaguey-Tigana-Jacana",
      voltage: "115 kV",
      description: "Construcción, montaje y refuerzos estructurales de 19 torres de transmisión de energía eléctrica.",
      details: "Proyecto integral que incluyó la construcción completa de 19 torres de transmisión con refuerzos estructurales especializados para garantizar la estabilidad y durabilidad de la infraestructura eléctrica.",
      scope: [
        "19 torres de transmisión",
        "Refuerzos estructurales",
        "Montaje especializado",
        "Control de calidad integral"
      ],
      images: [
        "/images/projects/proyecto-jaguey-tigana-115kv",
        "/images/projects/proyecto-jaguey-tigana-115kv2"
      ],
      hasSlideshow: true,
      category: "Transmisión"
    },
    {
      id: 2,
      title: "SABO (Sabanalarga-Bolívar) 500 kV – INSTELEC SAS",
      year: "2022",
      client: "INSTELEC SAS",
      location: "Sabanalarga, Bolívar",
      voltage: "500 kV",
      description: "Construcción de cimentaciones y montaje de 30 torres de transmisión de energía eléctrica.",
      details: "Proyecto de alta complejidad técnica para líneas de 500 kV, incluyendo cimentaciones especiales y montaje de torres con los más altos estándares de seguridad y calidad.",
      scope: [
        "30 torres de transmisión",
        "Cimentaciones especiales",
        "Alta tensión 500 kV",
        "Supervisión técnica especializada"
      ],
      image: "/images/projects/proyecto-sabo-bolivar-500kv",
      category: "Alta Tensión"
    },
    {
      id: 3,
      title: "Hidroituango Medellín",
      year: "2023-2024",
      client: "Hidroituango",
      location: "Medellín, Antioquia",
      voltage: "110-500 kV",
      description: "Subcontratista para montaje y tendido de torres de energía de 110 a 500 kV.",
      details: "Participación como subcontratista especializado en uno de los proyectos hidroeléctricos más importantes de Colombia, trabajando con diferentes niveles de tensión.",
      scope: [
        "Múltiples niveles de tensión",
        "Montaje y tendido",
        "Proyecto hidroeléctrico",
        "Trabajo en equipo multidisciplinario"
      ],
      image: "/images/projects/proyecto-hidroituango",
      category: "Hidroeléctrico"
    },
    {
      id: 4,
      title: "EQUANS – Guadueros-Dorada 115 kV",
      year: "2023-2024",
      client: "EQUANS",
      location: "Guadueros-Dorada",
      voltage: "115 kV",
      description: "Montaje de 35 torres y tendido de cable (35 km).",
      details: "Proyecto de gran envergadura que incluyó el montaje completo de 35 torres de transmisión y 35 kilómetros de tendido de cable, demostrando nuestra capacidad logística y técnica.",
      scope: [
        "35 torres de transmisión",
        "35 km de tendido",
        "Logística compleja",
        "Cumplimiento de cronograma"
      ],
      image: "/images/projects/proyecto-equans",
      category: "Transmisión"
    },
    {
      id: 5,
      title: "INSITEL-EPM – La Galia-Don Matías",
      year: "2024",
      client: "INSITEL-EPM",
      location: "La Galia-Don Matías",
      voltage: "Telecomunicaciones",
      description: "Construcción, montaje y refuerzos estructurales de torre de telecomunicación.",
      details: "Proyecto especializado en infraestructura de telecomunicaciones, aplicando nuestra experiencia en construcción y montaje para el sector de comunicaciones.",
      scope: [
        "Torre de telecomunicación",
        "Refuerzos estructurales",
        "Construcción integral",
        "Tecnología de comunicaciones"
      ],
      image: "/images/projects/proyecto-insitel-telecomunicaciones",
      category: "Telecomunicaciones"
    },
    {
      id: 6,
      title: "IDJ 230 kV – Puerta de Oro – San Felipe",
      year: "2024 - Actual",
      client: "IDJ",
      location: "Puerta de Oro – San Felipe",
      voltage: "230 kV",
      description: "Construcción de cimentaciones y montaje de torre de transmisión de energía de 230 kV.",
      details: "Proyecto en curso que representa nuestra capacidad actual en el manejo de proyectos de media-alta tensión con cimentaciones especializadas.",
      scope: [
        "Torre 230 kV",
        "Cimentaciones especializadas",
        "Proyecto en ejecución",
        "Tecnología avanzada"
      ],
      image: "/images/projects/proyecto-idj-sas",
      category: "En Ejecución"
    }
  ];

  const categories = ["Todos", "Transmisión", "Alta Tensión", "Telecomunicaciones", "Hidroeléctrico", "En Ejecución"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
  <section id="proyectos" className="section section-alt" style={{ scrollMarginTop: '140px' }}>
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
            Nuestros Proyectos
          </motion.div>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
            Proyectos <span className="text-primary">Destacados</span>
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Conoce algunos de nuestros proyectos más importantes que demuestran nuestra 
            experiencia y compromiso con la excelencia en infraestructura eléctrica.
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.05s ease',
                backgroundColor: activeCategory === category 
                  ? 'var(--primary-blue)' 
                  : 'var(--white)',
                color: activeCategory === category 
                  ? 'var(--white)' 
                  : 'var(--gray-600)',
                boxShadow: activeCategory === category 
                  ? '0 4px 15px rgba(30, 64, 175, 0.3)' 
                  : '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-2"
          style={{ gap: '2rem' }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--gray-200)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onClick={() => openProject(project)}
              >
                {/* Imagen del proyecto */}
                <div style={{
                  height: '260px',
                  backgroundColor: 'var(--gray-100)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Renderizar slideshow o imagen única */}
                  {project.hasSlideshow && project.images ? (
                    <ProjectSlideshow 
                      images={project.images} 
                      title={project.title}
                    />
                  ) : (
                    <>
                      <ProjectImage 
                        imagePath={project.image} 
                        title={project.title}
                      />
                      {/* Fallback si la imagen no carga */}
                      <div style={{
                        display: 'none',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'var(--light-blue)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-blue)',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        🏗️ {project.title.split(' ')[0]}
                        <br />
                        <span style={{ fontSize: '0.875rem' }}>
                          [Imagen del Proyecto]
                        </span>
                      </div>
                    </>
                  )}

                  {/* Overlay con información */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      backgroundColor: 'var(--white)',
                      color: 'var(--primary-blue)',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}>
                      {project.voltage}
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(30, 64, 175, 0.9)',
                      color: 'var(--white)',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {project.year}
                    </div>
                  </div>

                  {/* Botón de ver más */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      backgroundColor: 'var(--white)',
                      color: 'var(--primary-blue)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Eye size={20} />
                  </motion.div>
                </div>

                {/* Contenido */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    <MapPin size={16} style={{ color: 'var(--gray-500)' }} />
                    <span style={{
                      fontSize: '0.875rem',
                      color: 'var(--gray-500)',
                      fontWeight: '500'
                    }}>
                      {project.location}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--gray-900)',
                    lineHeight: '1.3'
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    color: 'var(--gray-600)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}
                    >
                      Ver más <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de proyecto seleccionado */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 9999,
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                justifyContent: 'center',
                padding: isMobile ? '0 10px 20px 10px' : '1rem',
                paddingTop: isMobile ? '330px' : '1rem',
                overflowY: 'auto'
              }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  closeProject();
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: isMobile ? '12px' : '20px',
                  maxWidth: isMobile ? '100%' : '800px',
                  width: isMobile ? '100%' : '100%',
                  maxHeight: isMobile ? '75vh' : '90vh',
                  minHeight: isMobile ? '60vh' : 'auto',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                  margin: 0,
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header del modal */}
                <div style={{
                  padding: isMobile ? '1rem' : '2rem 2rem 1rem 2rem',
                  borderBottom: '1px solid var(--gray-200)',
                  flexShrink: 0 // No se encoge
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: isMobile ? '0.5rem' : '1rem'
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.2rem' : '1.5rem',
                      fontWeight: '700',
                      color: 'var(--gray-900)',
                      maxWidth: '80%',
                      lineHeight: 1.2
                    }}>
                      {selectedProject.title}
                    </h3>

                    <button
                      onClick={() => closeProject()}
                      style={{
                        background: 'var(--gray-100)',
                        border: '1px solid var(--gray-300)',
                        borderRadius: '50%',
                        width: isMobile ? '40px' : '32px',
                        height: isMobile ? '40px' : '32px',
                        fontSize: isMobile ? '20px' : '16px',
                        cursor: 'pointer',
                        color: 'var(--gray-700)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      ×
                    </button>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: isMobile ? '0.5rem' : '1rem',
                    flexWrap: 'wrap',
                    marginBottom: isMobile ? '0.5rem' : '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Calendar size={16} style={{ color: 'var(--primary-blue)' }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                        {selectedProject.year}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <MapPin size={16} style={{ color: 'var(--primary-blue)' }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                        {selectedProject.location}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Zap size={16} style={{ color: 'var(--primary-blue)' }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                        {selectedProject.voltage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenido del modal */}
                <div style={{ 
                  padding: isMobile ? '1rem' : '2rem',
                  flex: 1, // Toma el espacio restante
                  overflowY: 'auto' // Solo este div puede hacer scroll
                }}>
                  <p style={{
                    color: 'var(--gray-600)',
                    lineHeight: isMobile ? '1.5' : '1.7',
                    marginBottom: isMobile ? '1rem' : '2rem',
                    fontSize: isMobile ? '0.875rem' : '1rem'
                  }}>
                    {selectedProject.details}
                  </p>

                  <h4 style={{
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    fontWeight: '700',
                    color: 'var(--gray-900)',
                    marginBottom: isMobile ? '0.75rem' : '1rem'
                  }}>
                    Alcance del Proyecto
                  </h4>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'grid',
                    gap: isMobile ? '0.5rem' : '0.75rem'
                  }}>
                    {selectedProject.scope.map((item, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '0.5rem' : '0.75rem',
                        padding: isMobile ? '0.5rem' : '0.75rem',
                        backgroundColor: 'var(--gray-50)',
                        borderRadius: '8px'
                      }}>
                        <div style={{
                          width: isMobile ? '6px' : '8px',
                          height: isMobile ? '6px' : '8px',
                          backgroundColor: 'var(--primary-blue)',
                          borderRadius: '50%'
                        }} />
                        <span style={{ 
                          color: 'var(--gray-700)',
                          fontSize: isMobile ? '0.875rem' : '1rem'
                        }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;