import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-brand-pink-light pt-20 pb-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Konten Teks di Kiri */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Wujudkan Ibadah Umroh Impian Anda
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Perjalanan spiritual yang nyaman, aman, dan penuh berkah bersama UmrohBahagia.
          </p>
          <a 
            href="#paket" 
            className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-pink-dark transition duration-300 shadow-lg"
          >
            Lihat Paket
          </a>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/kabah.jpg" 
            alt="Pemandangan Ka'bah untuk Umroh Bahagia" 
            className="
              w-80 h-80 md:w-96 md:h-96 
              rounded-full        
              shadow-2xl    
              object-cover      
              bg-brand-white    
            "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;