import { useState, useEffect } from 'react';

export const useScrollParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export const getParallaxStyle = (scrollY: number, speed: number = 0.5) => ({
  transform: `translateY(${scrollY * speed}px)`
});

export const getParallaxStyleWithRotation = (scrollY: number, speed: number = 0.5, rotationSpeed: number = 0.1) => ({
  transform: `translateY(${scrollY * speed}px) rotate(${scrollY * rotationSpeed}deg)`
});

export const getParallaxFadeStyle = (scrollY: number, speed: number = 0.5, fadeStart: number = 200) => ({
  transform: `translateY(${scrollY * speed}px)`,
  opacity: Math.max(0, 1 - (scrollY - fadeStart) / 300)
});