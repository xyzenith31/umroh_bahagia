import React from 'react';
import ScrollReveal from './ScrollReveal'; 

// 1. Mengimpor 7 file gambar
import foto1 from '../assets/galeri/1.jpg';
import foto2 from '../assets/galeri/2.jpg';
import foto3 from '../assets/galeri/3.jpg';
import foto4 from '../assets/galeri/4.jpg';
import foto5 from '../assets/galeri/5.jpg';
import foto6 from '../assets/galeri/6.jpg';
import foto7 from '../assets/galeri/7.jpg';

// 2. Membuat daftar gambar baru
const imageList = [
  { src: foto1, alt: 'Galeri foto jamaah 1' },
  { src: foto2, alt: 'Galeri foto jamaah 2' },
  { src: foto3, alt: 'Galeri foto jamaah 3' },
  { src: foto4, alt: 'Galeri foto jamaah 4' },
  { src: foto5, alt: 'Galeri foto jamaah 5' },
  { src: foto6, alt: 'Galeri foto jamaah 6' },
  { src: foto7, alt: 'Galeri foto jamaah 7' },
];

const Galeri: React.FC = () => {
  return (
    <section id="galeri" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
          {/* 3. Mengganti judul dari "Video" menjadi "Foto" */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Galeri Foto Jamaah
          </h2>
          <p className="text-gray-600 mb-12 max-w-lg mx-auto text-center">
            Lihat momen-momen berkesan dari perjalanan ibadah jamaah kami.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* 4. Melakukan map/looping pada imageList */}
            {imageList.map((image, index) => (
              <div 
                key={index} 
                className="
                  w-full bg-white rounded-xl shadow-lg overflow-hidden 
                  transform hover:-translate-y-1 transition duration-300
                  border border-gray-200 p-2 sm:p-3 
                "
              >
                {/* 5. Mengganti <video> menjadi <img> dan mengubah rasio aspek */}
                <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden"> 
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Judul <p> di bawah gambar dihapus */}
              </div>
            ))}

          </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
};

export default Galeri;