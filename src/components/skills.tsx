"use client"
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Skills() {
    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: false,
      });
    }, []);
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center my-30 text-center" data-aos = "fade-up"
    >
      <h1 className="text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6">
        My Abilities👩‍💻
      </h1>
      <div className="grid grid-cols-5 items-center gap-10 px-4 sm:px-8 lg:px-16">
        <div className="col-span-1 flex justify-center">
          <Image
            src="flower-green-transparent.png"
            alt="Flower left"
            className="w-full max-w-xs h-auto animate-float"
          />
        </div>

        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12 mt-30">
          <div className="relative flex justify-center items-center mt-15">
            <div className="relative bg-[#FFD166] rounded-3xl w-64 h-64 p-6 pt-15 border border-black">
              <ul className="space-y-2 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.3px_black]">
                    <li>HTML</li>
                <li>Java Script</li>
                <li>CSS</li>
                <li>React JS</li>
              </ul>
            </div>
            <div className="absolute -top-4 -left-8 bg-[coral] rounded-xl px-12 py-4 rotate-[-15deg] shadow-md border border-black">
              <span className="text-3xl font-bold text-[#2E4057] mb-4">Front End</span>
            </div>
          </div>
              <div className="relative flex justify-center items-center ">
            <div className="relative bg-[#FFD166] rounded-3xl w-64 h-64 p-6 pt-15 border border-black">
              <ul className="space-y-2 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.3px_black]">
                  <li>NextJS</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="absolute -top-4 -left-8 bg-[coral] rounded-xl px-12 py-4 rotate-[-15deg] shadow-md border border-black">
              <span className="text-3xl font-bold text-[#2E4057] mb-4">Back End</span>
            </div>
          </div>
              <div className="relative flex justify-center items-center mt-15">
            <div className="relative bg-[#FFD166] rounded-3xl w-64 h-64 p-6 pt-15 border border-black">
              <ul className="space-y-2 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.3px_black]">
                <li>Git</li>
              </ul>
            </div>
            <div className="absolute -top-4 -left-8 bg-[coral] rounded-xl px-12 py-4 rotate-[-15deg] shadow-md border border-black">
              <span className="text-3xl font-bold text-[#2E4057] mb-4">Dev ops</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center">
          <Image
            src="flower-red-transparent.png"
            alt="Flower right"
            className="w-full max-w-xs h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
}
