import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-400 shadow-xl shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
