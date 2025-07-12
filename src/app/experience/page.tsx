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
import { experiencesContent } from "@/constants/experienceContent";
import { useLanguageStore } from "@/stores/useLanguage";

const images = [
  "/experience/foto-magang.jpg",
  "/experience/aplikasi-cadober.jpg",
  "/experience/kegiatan-magang.jpg",
  "/experience/tampilan-cadober.jpg",
];

export default function Experiences() {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const { language } = useLanguageStore();
  const content = experiencesContent[language];

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      x.set(0);
    } else if (info.offset.x < -100) {
      setIndex((prev) => (prev + 1) % images.length);
      x.set(0);
    }
  };

  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center my-20 text-center gap-5"
      data-aos="fade-up"
    >
      <section>
      <h2 className="text-[40px] md:text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6 px-4">
        {content.title}
      </h2>
      </section>

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

        <div className="flex flex-col text-left mt-10 max-w-xl px-4">
          <h3 className="text-[24px] md:text-[32px] text-[#A679B4] font-bold mb-4 [-webkit-text-stroke:0.3px_black]">
            {content.internship.position}
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#A679B4] font-semibold mb-6">
            {content.internship.app}
          </p>
          <ul className="list-disc text-bold pl-5 space-y-2 text-gray-700">
            {content.internship.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-row flex-wrap gap-3 justify-start mt-6">
            {content.tech.map((tech, idx) => (
              <p
                key={idx}
                className="bg-[coral] text-white px-4 py-2 rounded-2xl border border-black"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
