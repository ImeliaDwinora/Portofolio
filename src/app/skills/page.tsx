"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguageStore } from "@/stores/useLanguage";
import { skillsContent } from "@/constants/skillsContent";

export default function Skills() {
  const { language } = useLanguageStore();
  const content = skillsContent[language];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center my-25 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-[40px] md:text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6 px-4">
        {content.title}
      </h2>

      <div className="grid grid-cols-5 items-center gap-10 px-4 sm:px-8 lg:px-16 mt-20">
        {/* Left Flower */}
        <div className="col-span-1 flex justify-center">
          <Image
            src="/properties/flower-green-transparent.png"
            alt="Flower left"
            width={200}
            height={200}
            className="w-full max-w-[150]px] h-auto animate-float"
          />
        </div>
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12 mt-5">
          <SkillCard
            title={content.sections.frontend.title}
            items={content.sections.frontend.items}
          />
          <SkillCard
            title={content.sections.backend.title}
            items={content.sections.backend.items}
          />
          <SkillCard
            title={content.sections.devops.title}
            items={content.sections.devops.items}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <Image
            src="/properties/flower-red-transparent.png"
            alt="Flower right"
            width={200}
            height={200}
            className="w-full max-w-[150px] h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative bg-[#FFD166] rounded-3xl w-64 h-64 p-6 pt-16 border border-black">
        <ul className="space-y-2 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.3px_black]">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute -top-4 -left-8 bg-[coral] rounded-xl px-12 py-4 rotate-[-15deg] shadow-md border border-black">
        <span className="text-3xl font-bold text-[#2E4057]">{title}</span>
      </div>
    </div>
  );
}
