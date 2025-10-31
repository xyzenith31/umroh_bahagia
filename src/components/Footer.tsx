import React from 'react';
// Impor ikon (pastikan sudah install react-icons)
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Perhatikan: ': React.FC' dihilangkan karena ini file .jsx
const Footer = () => {
  return (
    // Kita tetap pakai id="kontak" biar link di Navbar & BottomNavbar tetap jalan
    <footer id="kontak" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-4">
          Siap Berangkat ke Tanah Suci?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Hubungi kami sekarang untuk konsultasi gratis rencana ibadah Anda. 
          Tim kami siap melayani Anda.
        </p>
        
        {/* Tombol CTA ke WhatsApp */}
        <a 
          href="https://wa.me/6281234567890" // Ganti dengan nomor WA-mu
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

        {/* Ikon Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaEnvelope size={28} />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-500">
          Copyright &copy; {new Date().getFullYear()} UmrohBahagia. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;