"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div id="contactme" data-aos="fade-up">
      <h1 className="text-[40px] md:text-[60px] text-center text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none my-20">
        Get in Touch 📞
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-16 px-6 mx-10 justify-center items-center mb-6">
        {/* Gambar Kiri */}
        <div>
          <Image
            src="contact.png"
            alt=""
            className="rotate-[-7deg] hover:rotate-7 transition-transform duration-200 animate-float"
          />
        </div>

        {/* Kontak Kanan */}
        <div className="relative w-full max-w-md mx-auto">
          <Image src="box.png" alt="" className="w-full h-auto" />

          {/* Kontak 1 */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 z-10 text-[#2E4057] font-bold text-center ">
            <Image
              src="app.png"
              alt=""
              className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
            />
            <h1 className="text-sm md:text-2xl break-words">08117892303</h1>
          </div>

          {/* Kontak 2 */}
          <div className="absolute top-[58%] left-1/2 -translate-x-1/2 w-full px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 z-10 text-[#2E4057] font-bold text-center">
            <Image
              src="gmail.png"
              alt=""
              className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
            />
            <h1 className="text-sm md:text-2xl break-words">imeliadwinora@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
