import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-pink-dark">
          UmrohBahagia
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-brand-pink">Beranda</a>
          <a href="#paket" className="text-gray-700 hover:text-brand-pink">Paket Umroh</a>
          <a href="#testimoni" className="text-gray-700 hover:text-brand-pink">Testimoni</a>
          <a href="#kontak" className="text-gray-700 hover:text-brand-pink">Kontak</a>
        </div>
        
        <a 
          href="#kontak" 
          className="hidden md:block bg-brand-pink text-white px-5 py-2 rounded-full font-semibold hover:bg-brand-pink-dark transition duration-300"
        >
          Daftar Sekarang
        </a>
        
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;