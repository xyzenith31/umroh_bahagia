// src/components/Kontak.tsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal.tsx';

const Kontak: React.FC = () => {
  return (
    // 1. Hapus SVG wave
    // 2. Ganti 'pt-32' (padding wave) jadi 'py-20' (padding normal)
    // 3. Tambahkan shadow (ini "pembatas cahaya"nya) di atas section
    <section 
      id="kontak" 
      className="
        bg-brand-pink-light py-20 relative 
        shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.08)]
      "
    >
      {/* Konten (sudah benar, warna teks gelap) */}
      <div className="container mx-auto px-6 text-center relative z-10">
        
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Siap Berangkat ke Tanah Suci?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis rencana ibadah Anda. 
            Tim kami siap melayani Anda.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              bg-brand-pink text-white px-8 py-3 
              rounded-full font-bold text-lg 
              hover:bg-brand-pink-dark transition duration-300 
              shadow-lg transform hover:scale-105 mb-12
            "
          >
            <FaWhatsapp className="mr-2" size={22} />
            Hubungi via WhatsApp
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-pink transition duration-300">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-pink transition duration-300">
              <FaEnvelope size={28} />
            </a>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
};

export default Kontak;