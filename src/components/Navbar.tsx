import React from 'react';
// Ikon sudah tidak perlu di sini
import logoGambar from '../assets/sogeh-bareng-long-logo.png'; 

const Navbar: React.FC = () => {
  // state "isOpen" sudah dihapus

  const navLinks = [
    { title: 'Beranda', href: '#hero' },
    { title: 'Kontak', href: '#kontak' },
  ];

  return (
    // Kita tidak perlu Fragment (<>) lagi
    <header 
      className={`
        sticky top-0 z-50 w-full
        bg-brand-pink/70 backdrop-blur-md
        border-b border-white/20
        shadow-md
        transition-all duration-300 ease-in-out
      `}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* === 1. LOGO (Tetap ada di mobile & desktop) === */}
        <a 
          href="#hero" 
          className="flex-shrink-0 transition-transform duration-300 transform hover:scale-105"
        >
          <img 
            src={logoGambar} 
            alt="Logo Umroh Bahagia" 
            className="h-10 sm:h-11 w-auto"
          />
        </a>
        
        {/* === 2. Menu Navigasi Desktop === */}
        {/* Ini sudah benar, 'hidden' di mobile, 'flex' di desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href} 
              className="
                text-white font-medium text-lg 
                relative transition-opacity duration-300 
                hover:opacity-80 group
              "
            >
              {link.title}
              <span className="
                absolute left-1/2 -bottom-1.5 h-0.5 bg-white 
                w-0 transition-all duration-300 
                group-hover:w-full group-hover:left-0
              "></span>
            </a>
          ))}
        </div>
        
        {/* Tombol hamburger dan menu slide-in sudah dihapus */}
        
      </nav>
    </header>
  );
};

export default Navbar;