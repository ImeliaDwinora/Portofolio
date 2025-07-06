"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { image: "/female.png", name: "Ahmad Zaky Nadimsyah ", job:"Software Developer at Padepokan",text: "After four good years of working with Imelia, I am thankful for the amount of work that you've put in for this company. Through many challenges i have learned that Imelia has always been a positive and determined individuals contributing in solving most problems. Hope you always find the opportunity to grow, learn and follow you dream!" },
  { image: "/male.png", name: "Refaldy Bagas Riyanto", job:"Software Developer at Mekari", text: "She consistently demonstrates a proactive mindset, creative thinking, and a respectful attitude — qualities that make her an outstanding contributor in any environment." },
  { image: "/male.png", name: "Riska Fajrianti", job:"Freelance Full-Stack Developer ", text: "Working with her has been a truly rewarding experience. She is highly creative, full of innovative ideas, and shows exceptional dedication to her work. Her humility and collaborative spirit make her an excellent team member." },
  { image: "/female.png", name: "Genisshanda Nabila", job:"Freelance Full-Stack Developer" ,text: "I had the opportunity to work with Imelia on several projects during my college years. She demonstrated high professionalism, excellent communication skills, and creativity in solving the challenges at hand. Imelia is a reliable teammate, result-oriented, and always contributes to the success of the project. I highly recommend Imelia to work in any professional environment." },
  { image: "/male.png", name: "Jafar Assegaf", job:"Software Developer at abc", text: "I have worked with her, very creative, lots of new ideas, has a high work ethic, and of course humble. It is a pleasure to collaborate and be a team with her." },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div id="testimoni" className="flex flex-col items-center justify-center mt-30 mb-5 px-4 min-h-screen">
      <h1 className="text-[60px] text-[#2E4057] font-bold mb-20 text-center">
        What People Are Saying 💬
      </h1>

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
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={64}
                height={64}
                className="rounded-full mb-4 object-cover"
              />
              <h2 className="text-[26px] font-bold text-[#2E4057] mb-2">
                {testimonials[index].name}
              </h2>
              <p className="text-lg text-[coral] font-medium [-webkit-text-stroke:0.3px_black] mb-3">
                {testimonials[index].job}
              </p>
              <p className="text-lg text-[#A679B4] font-medium [-webkit-text-stroke:0.3px_black] mb-3 max-w-prose break-words text-justify">
                {testimonials[index].text}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT BUTTON */}
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
