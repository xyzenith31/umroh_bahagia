import React, { useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import Keunggulan from './components/Keunggulan';
import ScrollProgressBar from './components/ScrollProgressBar';
import Kontak from './components/Kontak';
import PromoFlyer from './components/PromoFlyer';
import PaketUmroh from './components/PaketUmroh';
import Galeri from './components/Galeri';
import PricelistModal from './components/PricelistModal';

const heroImageUrl = 'https://images.pexels.com/photos/32290180/pexels-photo-32290180.jpeg';

const testimonials = [
  {
    img: 'https://images.pexels.com/photos/11265818/pexels-photo-11265818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Bapak Rahman',
    location: 'Jamaah Umroh, Surabaya',
    quote: 'Hotelnya dekat sekali dengan masjid, jadi sangat nyaman untuk ibadah. Makanan juga cocok di lidah. Terima kasih UmrohBahagia.',
    delay: 0.2
  },
  {
    img: 'https://images.pexels.com/photos/7810313/pexels-photo-7810313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Bapak Heru',
    location: 'Jamaah Umroh, Bandung',
    quote: 'Ini umroh pertama saya. Awalnya bingung, tapi tim pembimbing sangat sabar dan profesional. Pengalaman yang tak terlupakan.',
    delay: 0.3
  },
  {
    img: 'https://images.pexels.com/photos/8139556/pexels-photo-8139556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Bapak Jaya',
    location: 'Jamaah Umroh, Medan',
    quote: 'Kami berangkat sekeluarga dan semua dilayani dengan baik, dari yang muda sampai yang tua. Fasilitasnya sangat ramah lansia.',
    delay: 0.4
  },
  {
    img: 'https://images.pexels.com/photos/10398634/pexels-photo-10398634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Bapak Abdullah',
    location: 'Jamaah Umroh, Makassar',
    quote: 'Sangat amanah travel ini. Semua yang dijanjikan di brosur sesuai dengan kenyataan. Pasti akan rekomendasi ke teman-teman.',
    delay: 0.1 
  }
];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      
      <ScrollProgressBar /> 
      
      <div className="font-sans bg-white">
        
        <Navbar />
        
        <main>
          <section 
            id="hero" 
            className="h-screen min-h-[600px] w-full flex items-center justify-center relative text-white text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="container mx-auto px-6 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
                UMROH MURAH 24JT
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
                Perjalanan spiritual yang nyaman, aman, dan penuh berkah.
              </p>
              <a 
                href="#paket"
                className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-pink-dark transition duration-300 shadow-lg transform hover:scale-105"
              >
                Lihat Paket
              </a>
            </div>
          </section>

          <PromoFlyer />
          <PaketUmroh onOpenModal={() => setIsModalOpen(true)} />

          <Keunggulan />
          <section id="testimoni" className="py-20 bg-white overflow-hidden">
             <div className="container mx-auto px-6 max-w-5xl">
                
                <ScrollReveal>
                  <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                    Apa Kata Jamaah Kami
                  </h2>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testi, index) => (
                    <ScrollReveal 
                      delay={testi.delay} 
                      key={testi.name}
                      className={index === 4 ? 'md:col-span-2' : ''}
                    >
                      <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full flex flex-col justify-center text-center">
                        <img 
                          src={testi.img} 
                          alt={`Testimoni ${testi.name}`} 
                          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-brand-pink-light object-cover"
                          onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x100/CCCCCC/FFFFFF?text=?')}
                        />
                        <blockquote className="text-gray-700 text-lg italic mb-4">
                          "{testi.quote}"
                        </blockquote>
                        <p className="font-semibold text-gray-900">- {testi.name}</p>
                        <p className="text-sm text-gray-500">{testi.location}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
             </div>
          </section>

          <Galeri /> 
          <Kontak />

        </main>
        <Footer /> 
        <BottomNavbar /> 
        
      </div>
      <PricelistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </LazyMotion>
  );
};

export default App;