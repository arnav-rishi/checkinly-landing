import { useState, useEffect } from 'react';

export const useScrollParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export const getParallaxStyle = (scrollY: number, factor: number = 0.1) => {
  return {
    transform: `translateY(${scrollY * factor}px)`,
  };
};