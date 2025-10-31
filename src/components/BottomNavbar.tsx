import React from 'react';
// Impor ikon-ikon yang kita butuhkan
import { HiHome, HiTicket, HiChatAlt2 } from 'react-icons/hi';

const BottomNavbar: React.FC = () => {
  return (
    /* Wrapper utama:
      - md:hidden: Hanya muncul di mobile, hilang di desktop
      - fixed bottom-0: Nempel di bagian bawah layar
      - z-40: Muncul di atas konten, tapi di bawah modal/popup (jika ada)
      - Efek Frosted Glass: Sama kayak top navbar
    */
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

          {/* === Tombol Beranda === */}
          <a 
            href="#hero" 
            className="
              flex flex-col items-center justify-center 
              text-white text-xs font-medium 
              opacity-90 hover:opacity-100 transition-opacity
            "
          >
            <HiHome className="w-6 h-6 mb-0.5" />
            <span>Beranda</span>
          </a>

          {/* === Tombol Tengah (CTA Paket) === */}
          {/* Dibuat menonjol dan lebih besar */}
          <a 
            href="#paket" // Kita arahkan ke section paket
            className="
              flex items-center justify-center
              w-16 h-16 bg-white rounded-full
              text-brand-pink shadow-lg
              -mt-8 transform hover:scale-110 transition-transform
            "
            aria-label="Lihat Paket Umroh"
          >
            <HiTicket className="w-8 h-8" />
          </a>

          {/* === Tombol Kontak === */}
          <a 
            href="#kontak" 
            className="
              flex flex-col items-center justify-center 
              text-white text-xs font-medium 
              opacity-90 hover:opacity-100 transition-opacity
            "
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