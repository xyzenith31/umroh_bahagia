import React from 'react';
import ScrollReveal from './ScrollReveal';

import videoTawaf from '../assets/galeri/1.mp4';
import videoHajarAswad from '../assets/galeri/2.mp4';
import videoDoa from '../assets/galeri/3.mp4';
import videoPayung from '../assets/galeri/4.mp4';

const galleryItems = [
  { type: 'video', src: videoTawaf, alt: 'Suasana Tawaf di sekitar Kabah' },
  { type: 'video', src: videoHajarAswad, alt: 'Jamaah mencoba menyentuh Hajar Aswad' },
  { type: 'video', src: videoDoa, alt: 'Jamaah berdoa di depan Kabah' },
  { type: 'video', src: videoPayung, alt: 'Pemandangan pelataran Masjidil Haram dengan payung' },
];

const Galeri: React.FC = () => {
  return (
    <section id="galeri" className="py-20 bg-brand-pink-light overflow-hidden">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Galeri Perjalanan Kami
          </h2>
          <p className="text-gray-600 mb-12 max-w-lg mx-auto text-center">
            Lihat momen-momen berharga dan penuh spiritualitas 
            bersama jamaah UmrohBahagia.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {galleryItems.map((item, index) => (
            <ScrollReveal delay={index * 0.1} key={index}>
              
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  controls 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto rounded-lg shadow-xl bg-black"
                  aria-label={item.alt}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto rounded-lg shadow-xl" 
                />
              )}

            </ScrollReveal>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Galeri;