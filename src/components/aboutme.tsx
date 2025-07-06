"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div
      id="aboutme"
      className="flex flex-col items-center justify-center my-30 text-center"
      data-aos="fade-up"
    >
      {/* Gambar bunga tanpa 'fill', ukuran responsif */}
      <Image
        src="/bunga.png" // tambahkan slash di depan untuk memastikan path dari public/
        alt="Bunga"
        width={957}
        height={400}
        className="w-[90%] sm:w-[700px] md:w-[800px] lg:w-[957px] h-auto mt-20 mb-7 animate-float"
      />

      <h1 className="text-[60px] text-center text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16 px-6 mx-10">
        {/* Box 1: Brief Bio */}
        <div className="bg-[#FFD166] rounded-2xl border border-black p-9">
          <h2 className="text-3xl font-bold text-[#2E4057] mb-4 bg-[coral] rounded-2xl border border-black">
            Brief Bio
          </h2>
          <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.1px_black]">
            A passionate front-end developer with a background in Computer
            Science. Interested in creating responsive, accessible, and
            interactive user experiences. Previously worked on freelance and
            team-based projects.
          </p>
        </div>

        {/* Box 2: Core Skills */}
        <div className="bg-[#FFD166] rounded-2xl border border-black p-9">
          <h2 className="text-3xl font-bold text-[#2E4057] mb-4 bg-[coral] rounded-2xl border border-black">
            Core Skills
          </h2>
          <ul className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] font-bold text-[#A679B4] [-webkit-text-stroke:0.1px_black] mt-6">
            <li className="flex items-center gap-2 justify-center">  <Image src="/java-script.png" alt="JS icon" width={24} height={24} /> JavaScript</li>
            <li className="flex items-center gap-2 justify-center">  <Image src="/css3.png" alt="css icon" width={24} height={24} /> CSS</li>
            <li className="flex items-center gap-2 justify-center">  <Image src="/git.png" alt="Git icon" width={24} height={24} /> Git</li>
            <li className="flex items-center gap-2 justify-center">  <Image src="/python.png" alt="Python icon" width={24} height={24} /> Python </li>
            <li className="flex items-center gap-2 justify-center">  <Image src="/python.png" alt="Python icon" width={24} height={24} /> Python </li>
            <li className="flex items-center gap-2 justify-center">  <Image src="/python.png" alt="Python icon" width={24} height={24} /> Python </li>
          </ul>
        </div>

        {/* Box 3: Key Values */}
        <div className="bg-[#FFD166] rounded-2xl border border-black p-9">
          <h2 className="text-3xl font-bold text-[#2E4057] mb-4 bg-[coral] rounded-2xl border border-black">
            Key Values
          </h2>
          <ul className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.1px_black] mt-15">
            <li className="flex items-center gap-2 justify-center">  <Image src="/fast-time.png" alt="time" width={24} height={24} /> On-time delivery </li>
            <li className="flex items-center gap-2 justify-center" > <Image src="/observation.png" alt="time" width={24} height={24} /> Attention to detail </li>
            <li className="flex items-center gap-2 justify-center" > <Image src="/group.png" alt="time" width={24} height={24} /> Clear communication </li>
            <li className="flex items-center gap-2 justify-center" > <Image src="/collaboration.png" alt="time" width={24} height={24} /> Collaborative mindset </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
