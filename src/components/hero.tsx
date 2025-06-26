"use client"

import { useEffect, useState } from "react";
import Image from "next/image";


export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 5000); 

    return () => clearTimeout(timeout);
  }, []);

  const name = "Imelia Dwinora Cahyati";
  const waveText = name.split("").map((char, i) => (
    <span
      key={i}
      className={`inline-block ${isAnimating ? "animate-wave" : ""}`}
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
  return (
    <div
      id="home"
      className="relative flex flex-col justify-center items-center z-0 w-full "
    >
      <Image src="bg-hero.png" alt="" className="h-[730px] w-[1440px]" />

      <div
        id="container-home"
        className="absolute inset-0 flex flex-col lg:flex-row justify-center lg:justify-around items-center z-10 gap-10 text-center text-white 
            m-4 sm:m-6 md:m-10 lg:m-30 
            p-4 sm:p-6 md:p-10 lg:p-20 
            bg-[#FFD166] h-auto lg:h-[530px] rounded-4xl border border-amber-950"
      >
        <Image
          src="profile-pict.png"
          alt=""
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] 
              h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] 
              ml-0 hover:scale-90 transition-transform duration-1000 animate-float"
        />

        <div className="flex flex-col">
          <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-bold text-[#A679B4] [-webkit-text-stroke:0.3px_black]">
            Get to know me better 💁‍♀️!
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold text-center text-[#2E4057] [-webkit-text-stroke:1px_black] leading-none mt-6">
            {waveText}
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#A679B4] [-webkit-text-stroke:0.3px_black] mt-8">
            Turning designs into interactive, accessible, and pixel-perfect web
            experiences
          </p>

          <div className="flex flex-wrap overflow-visible sm:flex-row flex-col space-y-2 sm:space-y-0 items-center justify-center gap-3 mt-7 text-center">
            <a href="https://www.linkedin.com/…">
              <Image
                src="linkedin.png"
                alt="LinkedIn"
                className="w-[30px] flex-shrink-0 hover:scale-120 transition-transform duration-1000"
              />
            </a>
            <p className="bg-[coral] px-4 py-2 border border-black rounded-[10px] text-[#2E4057] text-center max-w-full">
              imeliadwinora
            </p>
            <a href="mailto:imeliadwinora@gmail.com/">
              <Image
                src="gmail.png"
                alt="Gmail"
                className="w-[30px] flex-shrink-0 hover:scale-120 transition-transform duration-1000"
              />
            </a>
            <p className="bg-[coral] px-4 py-2 border border-black rounded-[10px] text-[#2E4057] text-center max-w-full">
              imeliadwinora@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
