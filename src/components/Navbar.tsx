import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoGambar from '../assets/sogeh-bareng-long-logo.png';

const navLinks = [
  { id: 'hero', title: 'Beranda' },
  { id: 'paket', title: 'Paket' },
  { id: 'keunggulan', title: 'Keunggulan' },
  { id: 'testimoni', title: 'Testimoni' },
  { id: 'galeri', title: 'Galeri' },
  { id: 'kontak', title: 'Kontak' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(link => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null); 
    
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      threshold: 0.4, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header 
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-brand-pink/95 backdrop-blur-lg shadow-xl'
          : 'bg-brand-pink/70 backdrop-blur-md border-b border-white/20 shadow-md'
        }
      `}
    >
      <nav className={`
        container mx-auto px-6 flex justify-between items-center
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'py-2' : 'py-3'}
      `}>
        
        <a 
          href="#hero" 
          className="flex-shrink-0 transition-transform duration-300 transform hover:scale-105"
        >
          <img 
            src={logoGambar} 
            alt="Logo Umroh Bahagia" 
            className="h-20 sm:h-20 w-auto"
          />
        </a>
        
        <div className="hidden md:flex">
          
          <div className="relative flex items-center p-1 bg-black/20 rounded-full">
            
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative font-medium text-lg 
                  px-4 py-1.5 rounded-full
                  transition-colors duration-300
                  ${
                  activeSection === link.id 
                    ? 'text-brand-pink' 
                    : 'text-white hover:opacity-80'
                  }
                `}
              >
                
                {activeSection === link.id && (
                  <motion.span
                    className="absolute inset-0 z-0 bg-white"
                    style={{ borderRadius: 9999 }}
                    layoutId="capsule"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
            
          </div>

        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;