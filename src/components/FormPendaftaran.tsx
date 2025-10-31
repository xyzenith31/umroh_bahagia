import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal'; // Impor komponen animasi kita

const FormPendaftaran: React.FC = () => {
  return (
    <section id="daftar" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Daftarkan Diri Anda
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Amankan kursi Anda sekarang! Isi form di bawah ini dan tim kami
            akan segera menghubungi Anda.
          </p>
        </ScrollReveal>

        <form className="space-y-6">
          {/* Input Nama */}
          <ScrollReveal delay={0.1}>
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input 
                type="text" 
                id="nama" 
                placeholder="Misal: Budi Santoso"
                className="
                  w-full px-4 py-3 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink
                  transition duration-300
                " 
              />
            </div>
          </ScrollReveal>

          {/* Input WhatsApp */}
          <ScrollReveal delay={0.2}>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                Nomor WhatsApp (Aktif)
              </label>
              <input 
                type="tel" 
                id="whatsapp" 
                placeholder="Misal: 081234567890"
                className="
                  w-full px-4 py-3 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink
                  transition duration-300
                " 
              />
            </div>
          </ScrollReveal>

          {/* Input Pilihan Paket */}
          <ScrollReveal delay={0.3}>
            <div>
              <label htmlFor="paket" className="block text-sm font-medium text-gray-700 mb-1">
                Pilihan Paket
              </label>
              <select 
                id="paket"
                className="
                  w-full px-4 py-3 border border-gray-300 rounded-lg bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink
                  transition duration-300
                "
              >
                <option>Pilih Paket...</option>
                <option>Paket Hemat (9 Hari)</option>
                <option>Paket Plus (12 Hari)</option>
                <option>Belum Tahu (Butuh Konsultasi)</option>
              </select>
            </div>
          </ScrollReveal>

          {/* Tombol Submit dengan Animasi */}
          <ScrollReveal delay={0.4}>
            <motion.button
              type="submit"
              className="
                w-full px-8 py-4 bg-brand-pink text-white rounded-lg 
                font-bold text-lg shadow-lg
                hover:bg-brand-pink-dark transition duration-300
              "
              // Animasi Framer Motion
              whileHover={{ scale: 1.03 }} // Efek 'pulse' saat hover
              whileTap={{ scale: 0.98 }} // Efek 'klik'
            >
              Kirim Pendaftaran
            </motion.button>
          </ScrollReveal>

        </form>
      </div>
    </section>
  );
};

export default FormPendaftaran;