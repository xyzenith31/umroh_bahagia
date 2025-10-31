// src/components/BottomNavbar.tsx
import React, { useState, useEffect } from 'react';
import { HiHome, HiTicket, HiChatAlt2 } from 'react-icons/hi';

const BottomNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sectionsToTrack = [
    { id: 'hero' },
    { id: 'keunggulan' },
    { id: 'paket' },
    { id: 'testimoni' },
    { id: 'kontak' },
  ];

  // Effect untuk SCROLL-SPY
  useEffect(() => {
    // PERBAIKAN: Menggunakan type guard (el): el is HTMLElement
    // untuk memastikan tidak ada elemen 'null' di dalam array 'sections'
    const sections = sectionsToTrack
      .map(link => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null); // <-- INI PERBAIKANNYA
    
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      threshold: 0.6, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Sekarang 'sections' dijamin aman dari 'null'
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav 
      className="
        md:hidden fixed bottom-0 left-0 right-0 h-16 
        bg-brand-pink/70 backdrop-blur-md 
        border-t border-white/20
        z-40
      "
    >
      <div className="container mx-auto h-full px-6">
        <div className="flex justify-around items-center h-full">

          {/* === Tombol Beranda (Dinamis) === */}
          <a 
            href="#hero" 
            className={`
              flex flex-col items-center justify-center 
              text-xs font-medium 
              transition-all duration-300
              ${
              activeSection === 'hero' 
                ? 'text-white scale-110 opacity-100' 
                : 'text-white opacity-70 hover:opacity-100'
              }
            `}
          >
            <HiHome className="w-6 h-6 mb-0.5" />
            <span>Beranda</span>
          </a>

          {/* === Tombol Tengah (Paket) (Dinamis) === */}
          <a 
            href="#paket"
            className={`
              flex items-center justify-center
              w-16 h-16 rounded-full
              shadow-lg
              -mt-8 transform transition-all duration-300
              ${
              activeSection === 'paket' || 
              activeSection === 'keunggulan' || 
              activeSection === 'testimoni'
                ? 'bg-white text-brand-pink scale-110'
                : 'bg-white text-brand-pink opacity-80 hover:scale-110'
              }
            `}
            aria-label="Lihat Paket Umroh"
          >
            <HiTicket className="w-8 h-8" />
          </a>
          
          {/* === Tombol Kontak (Dinamis) === */}
          <a 
            href="#kontak" 
            className={`
              flex flex-col items-center justify-center 
              text-xs font-medium 
              transition-all duration-300
              ${
              activeSection === 'kontak' 
                ? 'text-white scale-110 opacity-100'
                : 'text-white opacity-70 hover:opacity-100'
              }
            `}
          >
            <HiChatAlt2 className="w-6 h-6 mb-0.5" />
            <span>Kontak</span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;