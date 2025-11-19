import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logoGambar from '../assets/sogeh-bareng-logo.png';

const navLinks = [
  { id: 'hero', title: 'Beranda' },
  { id: 'paket', title: 'Paket Umroh' },
  { id: 'keunggulan', title: 'Keunggulan' },
  { id: 'testimoni', title: 'Testimoni' },
  { id: 'galeri', title: 'Galeri' },
  { id: 'kontak', title: 'Kontak' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out shadow-lg
          bg-brand-pink
          ${isScrolled ? 'py-2' : 'py-3'}
        `}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex-shrink-0 z-50 select-none">
            <motion.img 
              src={logoGambar} 
              alt="Logo Umroh Bahagia" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-brand-pink-dark/20 p-1 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer
                  ${activeSection === link.id 
                    ? 'text-brand-pink' 
                    : 'text-white hover:text-white/80'
                  }
                `}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white shadow-md rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-pink flex flex-col justify-center items-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-2xl font-bold text-white hover:text-brand-pink-light transition-colors"
              >
                {link.title}
              </motion.a>
            ))}
            
            <motion.a
              href="https://wa.me/6285755337762"
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-8 py-3 bg-white text-brand-pink rounded-full font-bold shadow-lg active:scale-95 transition-transform"
            >
              Hubungi Kami
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;