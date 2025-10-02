import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Forzar scroll al top al montar el componente
  useEffect(() => {
    // Múltiples intentos para asegurar que vaya al top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // También con un pequeño delay para asegurar
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div className="App"
      style={{
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
