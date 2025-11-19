import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logoGambar from '../assets/sogeh-bareng-logo.png';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect 1: Ubah style navbar saat discroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect 2: Deteksi Section Aktif (Logika Center Line Spy - ANTI MENTAL)
  useEffect(() => {
    // PERBAIKAN ERROR TS: Menambahkan type predicate ((el): el is HTMLElement => ...)
    // agar TypeScript yakin bahwa hasilnya adalah HTMLElement, bukan null.
    const sections = navLinks
      .map(link => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      // LOGIKA ANTI MENTAL:
      // Fokus deteksi hanya pada garis tipis (10%) di tengah layar.
      // Ini mencegah navbar loncat saat melewati section panjang di HP.
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));
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
      <header 
        className={`
          sticky top-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-brand-pink/95 backdrop-blur-lg shadow-xl py-2' 
            : 'bg-brand-pink/70 backdrop-blur-md border-b border-white/20 shadow-md py-3'
          }
        `}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, 'hero')}
            className="flex-shrink-0 transition-transform duration-300 transform hover:scale-105"
          >
            <img 
              src={logoGambar} 
              alt="Logo Umroh Bahagia" 
              className="h-12 w-auto"
            />
          </a>
          
          {/* Desktop Menu (DESAIN KAPSUL PUTIH) */}
          <div className="hidden md:flex">
            <div className="relative flex items-center p-1 bg-black/20 rounded-full">
              
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`
                    relative font-medium text-sm lg:text-base
                    px-5 py-2 rounded-full
                    transition-colors duration-300 z-10
                    ${activeSection === link.id 
                      ? 'text-brand-pink' 
                      : 'text-white hover:text-white/80'
                    }
                  `}
                >
                  {/* Animasi Kapsul Putih */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="capsule"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  
                  {link.title}
                </a>
              ))}
              
            </div>
          </div>

          {/* Tombol Mobile Menu (Hamburger) */}
          <div className="md:hidden flex items-center">
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
               aria-label="Menu"
             >
               {isMobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
             </button>
           </div>

        </nav>
      </header>

      {/* Mobile Menu Overlay (Full Screen Pink) */}
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