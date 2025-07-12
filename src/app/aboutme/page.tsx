"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguageStore } from "@/stores/useLanguage";
import { aboutmeContent } from "@/constants/aboutmeContent";


export default function AboutMe() {
  const { language } = useLanguageStore();
  const content = aboutmeContent[language]; 

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const valuesIcons = ["/icons/fast-time.png", "/icons/observation.png", "/icons/group.png", "/icons/collaboration.png"];

  return (
    <div
      id="aboutme"
      className="flex flex-col items-center justify-center my-20 text-center"
      data-aos="fade-up"
    >

      <Image
        src="/properties/bunga.png"
        alt="Bunga"
        width={957}
        height={400}
        className="w-[90%] sm:w-[700px] md:w-[800px] lg:w-[957px] h-auto mt-20 mb-7 animate-float"
      />

      {/* Judul utama */}
      <h2 className="text-[40px] md:text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6 px-4">
        {content.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16 px-6 mx-10">
        {/* Box 1: Brief Bio */}
        <div className="bg-[#FFD166] rounded-2xl border border-black p-9">
          <h3 className="text-3xl font-bold text-[#2E4057] mb-4 bg-[coral] rounded-2xl border border-black">
            {content.sections.brief.title}
          </h3>
          <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.1px_black]">
            {content.sections.brief.desc}
          </p>
        </div>

        {/* Box 2: Core Skills */}
        <div className="bg-[#FFD166] rounded-2xl border border-black p-9">
          <h3 className="text-3xl font-bold text-[#2E4057] mb-4 bg-[coral] rounded-2xl border border-black">
            {content.sections.skills.title}
          </h3>
          <ul className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] font-bold text-[#A679B4] [-webkit-text-stroke:0.1px_black] mt-6">
            <li className="flex items-center gap-2 justify-center">
              <Image src="/icons/java-script.png" alt="JS icon" width={24} height={24} /> JavaScript
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Image src="/icons/css3.png" alt="CSS icon" width={24} height={24} /> CSS
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Image src="/icons/git.png" alt="Git icon" width={24} height={24} /> Git
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Image src="/icons/python.png" alt="Python icon" width={24} height={24} /> Python
            </li>
          </ul>
        </div>

        {/* Box 3: Key Values */}
        <div className="bg-[#FFD166] rounded-2xl border border-black p-9">
          <h3 className="text-3xl font-bold text-[#2E4057] mb-4 bg-[coral] rounded-2xl border border-black">
            {content.sections.values.title}
          </h3>
          <ul className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.1px_black] mt-6">
            {content.sections.values.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 justify-center">
                <Image src={valuesIcons[index]} alt="icon" width={24} height={24} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
