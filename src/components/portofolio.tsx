"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "aplikasi-cadober.jpg",
  "soongket.jpg",
  "basic-ghibli.png",
  "ternakmoo.png",
  "yelodoremii.png",
];
const descriptions = [
  "📝 Instansi pemerintah membutuhkan aplikasi untuk pencatatan berkas,saya dan team membangun aplikasi Android pengelolaan dokumen menggunakan Java dan Firebase yang meningkatkan efisiensi kerja hingga 40%.",
  "🔍 Pecinta Songket seringkali sulit membedakan pola pada songket, saya membangun aplikasi android berbasis deep learning untuk mengidentifikasi jenis motif songket, aplikasi ini mampu mendeteksi sebesar 95%",
  "🎬 Pecinta kartun ghibli acap kali gemar membaca trivia tentang ghibli, saya membuat web sederhana untuk info sederhana terkait ghibli",
  "🐄 Aplikasi untuk jual beli perlengkapan kebutuhan hewan ternak, saya dan team membuat aplikasi berbasis android yang dapat digunakan untuk jual-beli kebutuhan ternak",
  "🎶 Aplikasi untuk mendengar musik berbasis android, aplikasi mampu memutar musik yang ingin diputar oleh pengguna",
];

export default function Portfolio() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      id="portofolio"
      className="flex flex-col items-center justify-center mt-5 text-center"
      data-aos="fade-up"
    >
      <h1 className="text-[60px] text-center text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6">
        Things I’ve Built 🧩
      </h1>

      <div className="relative w-full flex items-center justify-center mt-10">
        <div className="relative w-[300px] h-[400px] flex items-center justify-center">
          {images.map((src, i) => {
            const offset = i - index;
            const x = offset * 200;
            const scale = offset === 0 ? 1 : 0.8;
            const rotateY = offset * 20;
            const zIndex = -Math.abs(offset);
            const opacity = Math.abs(offset) > 2 ? 0 : 1;

            return (
              <motion.img
                key={i}
                src={src}
                alt={`Portfolio ${i}`}
                drag={i === index ? "x" : false} // hanya gambar utama bisa digeser
                onDragEnd={(event, info) => {
                  const offsetX = info.offset.x;
                  const velocity = info.velocity.x;

                  if (offsetX < -100 || velocity < -500) {
                    next(); // geser ke kiri
                  } else if (offsetX > 100 || velocity > 500) {
                    prev(); // geser ke kanan
                  }
                }}
                animate={{ x, scale, rotateY, zIndex, opacity }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-[300px] h-[400px] object-cover rounded-2xl border border-black shadow-xl bg-white cursor-grab active:cursor-grabbing"
                style={{ transformStyle: "preserve-3d" }}
              />
            );
          })}
        </div>
      </div>

      <p className="text-[18px] [-webkit-text-stroke:0.1px_black] text-[#A679B4] font-bold text-left md:text-justify mt-15 max-w-xl px-6 bg-[#FFD166] p-3 rounded-3xl border border-black">
        {descriptions[index]}
      </p>
    </div>
  );
}
