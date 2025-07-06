"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/aplikasi-cadober.jpg",
  "/soongket.jpg",
  "/basic-ghibli.png",
  "/ternakmoo.png",
  "/yelodoremii.png",
];

const descriptions = [
  "📝 Instansi pemerintah membutuhkan aplikasi untuk pencatatan berkas, saya dan team membangun aplikasi Android pengelolaan dokumen menggunakan Java dan Firebase yang meningkatkan efisiensi kerja hingga 40%.",
  "🔍 Pecinta Songket seringkali sulit membedakan pola pada songket, saya membangun aplikasi android berbasis deep learning untuk mengidentifikasi jenis motif songket, aplikasi ini mampu mendeteksi sebesar 95%",
  "🎬 Pecinta kartun ghibli acap kali gemar membaca trivia tentang ghibli, saya membuat web sederhana untuk info sederhana terkait ghibli",
  "🐄 Aplikasi untuk jual beli perlengkapan kebutuhan hewan ternak, saya dan team membuat aplikasi berbasis android yang dapat digunakan untuk jual-beli kebutuhan ternak",
  "🎶 Aplikasi untuk mendengar musik berbasis android, aplikasi mampu memutar musik yang ingin diputar oleh pengguna",
];

export default function Portfolio() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      id="portofolio"
      className="flex flex-col items-center justify-center my-30 text-center px-4 sm:px-6 md:px-8 lg:px-10"
      data-aos="fade-up"
    >
      <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#2E4057] font-extrabold [-webkit-text-stroke:0.5px_black] leading-tight">
        Things I’ve Built 🧩
      </h1>

      {/* Image carousel */}
      <div className="relative w-full flex items-center justify-center mt-10">
        <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px]">
          {images.map((src, i) => {
            const offset = i - index;
            const x = offset * 220;
            const scale = offset === 0 ? 1 : 0.85;
            const rotateY = offset * 15;
            const zIndex = -Math.abs(offset);
            const opacity = Math.abs(offset) > 2 ? 0 : 1;

            return (
              <motion.img
                key={i}
                src={src}
                alt={`Portfolio ${i}`}
                drag={i === index ? "x" : false}
                onDragEnd={(event, info) => {
                  const offsetX = info.offset.x;
                  const velocity = info.velocity.x;
                  if (offsetX < -100 || velocity < -500) next();
                  else if (offsetX > 100 || velocity > 500) prev();
                }}
                animate={{ x, scale, rotateY, zIndex, opacity }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-full h-full object-cover rounded-2xl border border-black shadow-xl bg-white cursor-grab active:cursor-grabbing"
                style={{ transformStyle: "preserve-3d" }}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-row mt-8" >
        <div className="flex gap-4 mb-4">
          <button
            onClick={prev}
            className="px-4 py-2 bg-[coral] text-white rounded hover:bg-[#1c2d3f] transition"
          >
            ◀ Prev
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-[coral] text-white rounded hover:bg-[#1c2d3f] transition"
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* Deskripsi */}
      <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#A679B4] font-semibold text-justify mt-10 max-w-2xl bg-[#FFD166] p-5 sm:p-6 md:p-8 rounded-3xl border border-black shadow">
        {descriptions[index]}
      </p>
    </div>
  );
}
