import React from 'react';

// URL Gambar Hero (Ka'bah)
const heroImageUrl = 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg';

const Beranda: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="
        h-screen min-h-[600px] w-full 
        flex items-center justify-center 
        relative text-white text-center
        bg-cover bg-center
      "
      // Set background image
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Lapisan Overlay (biar teksnya kebaca) */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Konten Teks (di atas overlay) */}
      <div className="container mx-auto px-6 z-10">
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl 
          font-bold leading-tight mb-4
          drop-shadow-lg
        ">
          Wujudkan Ibadah Umroh Impian Anda
        </h1>
        <p className="
          text-lg sm:text-xl md:text-2xl 
          text-gray-200 mb-8
          drop-shadow-md
        ">
          Perjalanan spiritual yang nyaman, aman, dan penuh berkah.
        </p>
        <a 
          href="#paket" // Nanti ini link ke section paket
          className="
            bg-brand-pink text-white px-8 py-3 
            rounded-full font-bold text-lg 
            hover:bg-brand-pink-dark transition duration-300 
            shadow-lg transform hover:scale-105a
          "
        >
          Lihat Paket
        </a>
      </div>
    </section>
  );
};

export default Beranda;
