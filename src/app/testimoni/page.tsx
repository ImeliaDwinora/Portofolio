"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/constants/testimoniContent";
import { useLanguageStore } from "@/stores/useLanguage";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguageStore(); 

  const testimonialList = testimonials[language] || testimonials["en"];

  const next = () => setIndex((prev) => (prev + 1) % testimonialList.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonialList.length) % testimonialList.length);

  return (
    <div id="testimoni" className="flex flex-col items-center justify-center my-20 px-4 min-h-screen">
      <h2 className="text-[40px] md:text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6 px-4 mb-30">
        {language === "id" ? "Apa Kata Mereka 💬" : "What People Are Saying 💬"}
      </h2>

      <div className="relative w-[90vw] max-w-md overflow-visible">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-[-60px] top-1/2 -translate-y-1/2 bg-white border border-black p-2 rounded-full shadow z-10 hover:scale-110 transition"
        >
          ◀
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full flex items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: [0, 1.5, -1.5, 1.5, 0],
                x: [0, 1.2, -1.2, 1.2, 0],
                scale: [1, 1.01, 1, 0.99, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-[#FFD166] border border-black rounded-2xl p-8 shadow-lg w-full h-full flex flex-col items-center justify-center text-center"
            >
              <Image
                src={testimonialList[index].image}
                alt={testimonialList[index].name}
                width={64}
                height={64}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-[26px] font-bold text-[#2E4057] mb-2">
                {testimonialList[index].name}
              </h3>
              <p className="text-lg text-[coral] font-medium [-webkit-text-stroke:0.3px_black] mb-3">
                {testimonialList[index].job}
              </p>
              <p className="text-lg text-[#A679B4] font-medium [-webkit-text-stroke:0.3px_black] mb-3 max-w-prose break-words text-justify">
                {testimonialList[index].text}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="absolute right-2 sm:right-[-60px] top-1/2 -translate-y-1/2 bg-white border border-black p-2 rounded-full shadow z-10 hover:scale-110 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
