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
    <div
      id="contactme"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-4 min-h-screen"
    >
      <h1 className="text-[40px] md:text-[60px] text-center text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none my-20">
        Get in Touch 📞
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center  px-6 mx-10 justify-center items-center mb-6">
        {/* Gambar Kiri */}
        <div className="relative w-[300px] h-[300px] mx-auto md:w-[400px] md:h-[400px]">
          <Image
            src="/contact.png"
            alt="Contact Illustration"
            fill
            className="object-contain rotate-[-7deg] hover:rotate-7 transition-transform duration-200 animate-float"
          />
        </div>

        {/* Kontak Kanan */}
        <div className="relative w-full max-w-md mx-auto aspect-[4/3]">
          {/* Background Box */}
          <Image
            src="/box.png"
            alt="Box Background"
            fill
            className="object-contain"
          />

          {/* Kontak Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center justify-center gap-6 z-10 text-[#2E4057] font-bold">
            {/* Kontak 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
              <a
                href="https://wa.me/08117892303?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                className="hover:rotate-7 transition-transform duration-200"
              >
                <Image
                  src="/app.png"
                  alt="Phone Icon"
                  width={40}
                  height={40}
                  className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                />
              </a>

              <a
                href="https://wa.me/08117892303?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
              >
                <h1 className="text-sm md:text-2xl break-words">08117892303</h1>
              </a>
            </div>

            {/* Kontak 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
              <a
                href="https://wa.me/08117892303?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                className="hover:rotate-7 transition-transform duration-200"
              >
                <Image
                  src="/gmail.png"
                  alt="Email Icon"
                  width={40}
                  height={40}
                  className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                />
              </a>
              <a
                href="https://wa.me/08117892303?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
              >
                <h1 className="text-sm md:text-2xl break-words">
                  imeliadwinora@gmail.com
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
