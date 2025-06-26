"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  PanInfo,
} from "framer-motion";

const images = ["foto-magang.jpg","aplikasi-cadober.jpg", "kegiatan-magang.jpg", "tampilan-cadober.jpg"];

export default function Experiences() {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      // swipe kanan (ke gambar sebelumnya)
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      x.set(0);
    } else if (info.offset.x < -100) {
      // swipe kiri (ke gambar berikutnya)
      setIndex((prev) => (prev + 1) % images.length);
      x.set(0);
    }
  };

  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center mt-30 text-center gap-5"
      data-aos="fade-up"
    >
      <h1 className="text-[40px] md:text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6 px-4">
        What I Have Been Up To? ⏳
      </h1>

      <div className="flex flex-col md:flex-row items-center bg-[#FFD166] rounded-2xl border border-black p-6 md:p-20 mx-5 md:mx-20 mt-10 gap-8">
        <div className="relative w-[260px] h-[360px] md:w-[300px] md:h-[400px] mt-10">
          <AnimatePresence>
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`Experience ${index}`}
              drag="x"
              onDragEnd={handleDragEnd}
              style={{
                x,
                rotate,
                top: `${index * 5}px`,
                rotateZ: `${index % 2 === 0 ? -5 : 5}deg`,
              }}
              dragConstraints={{ left: 0, right: 0 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-full h-full object-fill rounded-3xl bg-white border border-black shadow-xl absolute"
            />
          </AnimatePresence>
        </div>

        {/* TEXT DESCRIPTION */}
        <div className="flex flex-col text-left mt-10 max-w-xl px-4">
          <h2 className="text-[24px] md:text-[32px] text-[#A679B4] font-bold mb-4 [-webkit-text-stroke:0.3px_black]">
            Internship Mobile Application Developer
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#A679B4] font-semibold  mb-6">
            Aplikasi Pencatatan Arsip Dokumen Dinas Pekerjaan Umum Bina Marga
            dan Tata Ruang Provinsi Sumatera Selatan Berbasis Android
          </p>
          <ul className="list-disc text-bold pl-5 space-y-2 text-gray-700">
            <li>
              Planning and analyzing the applications requirements and user
              needs.
            </li>
            <li>
              Designing a responsive user interface that facilitates navigation
              for users.
            </li>
            <li>Back-end development for the applications logic and APIs.</li>
            <li>
              Designing and integrating the database for data storage and
              retrieval within the application.
            </li>
            <li>Performing testing and debugging.</li>
          </ul>
          <div className="flex flex-row flex-wrap gap-3 justify-start mt-6">
            <p className="bg-[coral] text-white px-4 py-2 rounded-2xl border border-black">
              Java
            </p>
            <p className="bg-[#A679B4] text-white px-4 py-2 rounded-2xl border border-black">
              MySQL
            </p>
            <p className="bg-[coral] text-white px-4 py-2 rounded-2xl border border-black">
              PHP
            </p>
            <p className="bg-[#ADE0CE] text-black px-4 py-2 rounded-2xl border border-black">
              Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
