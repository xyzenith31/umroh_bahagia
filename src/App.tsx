import React from 'react';
// 1. IMPORT FRAMER MOTION (PENTING UNTUK PERFORMA)
import { LazyMotion, domAnimation } from 'framer-motion';

// --- Import Komponen ---
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import Beranda from './pages/Beranda';
import Footer from './components/Footer.jsx'; 
import ScrollReveal from './components/ScrollReveal'; // <-- IMPORT ANIMASI
import FormPendaftaran from './components/FormPendaftaran'; // <-- IMPORT FITUR BARU

// --- URL Foto ---
const paketImg1 = 'https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg';
const paketImg2 = 'https://images.pexels.com/photos/4019159/pexels-photo-4019159.jpeg';
const testimoniAvatar = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';


const App: React.FC = () => {
  return (
    // 2. BUNGKUS APLIKASI DENGAN LAZYMOTION
    <LazyMotion features={domAnimation}>
      <div className="font-sans bg-white">
        
        <Navbar />
        
        <main>
          
          {/* Bagian Beranda (Hero) */}
          {/* (Komponen Beranda.tsx tidak perlu ScrollReveal karena sudah tampil pertama) */}
          <Beranda />
          
          {/* --- Bagian Paket --- */}
          <section id="paket" className="py-20 bg-brand-pink-light overflow-hidden">
            <div className="container mx-auto px-6 text-center">
              
              {/* Judul Section (dianimasikan) */}
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Paket Umroh Pilihan
                </h2>
                <p className="text-gray-600 mb-12 max-w-lg mx-auto">
                  Kami menyediakan berbagai pilihan paket yang bisa disesuaikan 
                  dengan kenyamanan dan budget Anda.
                </p>
              </ScrollReveal>
              
              {/* Daftar Card Paket (dianimasikan satu per satu) */}
              <div className="flex flex-wrap justify-center gap-8">
                
                {/* Card 1 (delay 0.1 detik) */}
                <ScrollReveal delay={0.1}>
                  <div className="w-full sm:w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300">
                    <img src={paketImg1} alt="Paket Umroh Hemat" className="w-full h-52 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-brand-pink-dark mb-2">Paket Hemat (9 Hari)</h3>
                      <p className="text-gray-700 mb-4">Hotel bintang 4, penerbangan direct, dan bimbingan intensif.</p>
                      <a href="#daftar" className="font-bold text-brand-pink hover:text-brand-pink-dark transition">Daftar Paket Ini</a>
                    </div>
                  </div>
                </ScrollReveal>
                
                {/* Card 2 (delay 0.2 detik) */}
                <ScrollReveal delay={0.2}>
                  <div className="w-full sm:w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300">
                    <img src={paketImg2} alt="Paket Umroh Plus" className="w-full h-52 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-brand-pink-dark mb-2">Paket Plus (12 Hari)</h3>
                      <p className="text-gray-700 mb-4">Hotel bintang 5, plus city tour (Mekkah, Madinah, Jeddah).</p>
                      <a href="#daftar" className="font-bold text-brand-pink hover:text-brand-pink-dark transition">Daftar Paket Ini</a>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </section>

          {/* --- Bagian Testimoni --- */}
          <section id="testimoni" className="py-20 bg-white overflow-hidden">
             <div className="container mx-auto px-6 text-center max-w-3xl">
                {/* Animasikan seluruh blok testimoni */}
                <ScrollReveal>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Apa Kata Jamaah Kami
                  </h2>
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <img 
                      src={testimoniAvatar} 
                      alt="Testimoni Jamaah" 
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-brand-pink-light"
                    />
                    <blockquote className="text-gray-700 text-lg italic mb-4">
                      "Pelayanannya luar biasa, sangat dibantu dari awal sampai akhir.
                      Bimbingannya juga sangat jelas dan menenangkan. UmrohBahagia memang top!"
                    </blockquote>
                    <p className="font-semibold text-gray-900">- Bapak Fulan</p>
                    <p className="text-sm text-gray-500">Jamaah Umroh, Jakarta</p>
                  </div>
                </ScrollReveal>
             </div>
          </section>
          
          {/* --- 3. FITUR BARU: FORM PENDAFTARAN --- */}
          <FormPendaftaran />

        </main>
        
        {/* --- FOOTER (KONTAK) --- */}
        <Footer /> 
        
        {/* --- NAVBAR BAWAH (MOBILE) --- */}
        <BottomNavbar /> 
        
      </div>
    </LazyMotion>
  );
};

export default App;