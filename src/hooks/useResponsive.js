import { useState, useEffect } from 'react';

// Hook personalizado para manejar responsive design
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024 && windowSize.width < 1440;
  const isLargeDesktop = windowSize.width >= 1440;
  
  const isSmallMobile = windowSize.width < 480;
  const isLargeMobile = windowSize.width >= 480 && windowSize.width < 768;

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isSmallMobile,
    isLargeMobile
  };
};

// Función para obtener valores responsive
export const getResponsiveValue = (mobile, tablet, desktop, largeDesktop) => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive();
  
  if (isLargeDesktop && largeDesktop !== undefined) return largeDesktop;
  if (isDesktop && desktop !== undefined) return desktop;
  if (isTablet && tablet !== undefined) return tablet;
  return mobile;
};