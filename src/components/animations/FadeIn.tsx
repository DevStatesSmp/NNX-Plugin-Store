import React, { useState, useEffect } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  show?: boolean;
  delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  show = true, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [delay, show]);
  
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};