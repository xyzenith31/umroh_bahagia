// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    // 1. Hapus SVG wave
    // 2. Ganti 'pt-20' jadi 'pt-8' (padding normal), 'pb-6' tetap
    // 3. Tambahkan shadow yang SANGAT HALUS
    <footer 
      className="
        bg-white pt-8 pb-6 relative 
        shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.03)]
      "
    >
      {/* Konten Copyright */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-gray-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} UmrohBahagia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;