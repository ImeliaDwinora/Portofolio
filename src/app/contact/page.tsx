"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { contactContent } from "@/constants/contactContent";
import { useLanguageStore } from "@/stores/useLanguage";
import ContactFormModal from "../component/contactform";


export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const [showModal, setShowModal] = useState(false); // state modal

  const lang = useLanguageStore((state) => state.language);
  const content = contactContent[lang];

  const whatsappLink = `https://wa.me/${content.phone}?text=${encodeURIComponent(
    content.whatsappText
  )}`;

  return (
    <main className="min-h-screen">
      <div
        id="contactme"
        data-aos="fade-up"
        className="flex flex-col items-center justify-center px-4 min-h-screen"
      >
        <section>
          <h2 className="text-[40px] md:text-[60px] text-[#2E4057] [-webkit-text-stroke:0.5px_black] leading-none mt-6 px-4 text-center">
            {content.title}
          </h2>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center justify-center items-center mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="relative w-[300px] h-[300px] mx-auto md:w-[400px] md:h-[400px]"
          >
            <Image
              src="/properties/contactme.png"
              alt="Contact Illustration"
              fill
              className="object-contain rotate-[-7deg] hover:rotate-7 transition-transform duration-200 animate-float cursor-pointer"
            />
          </button>

          <div className="relative w-full max-w-md mx-auto aspect-[4/3]">
            <Image
              src="/properties/box.png"
              alt="Box Background"
              fill
              className="object-contain"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center justify-center gap-6 z-10 text-[#2E4057] font-bold">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="hover:rotate-7 transition-transform duration-200"
                >
                  <Image
                    src="/icons/app.png"
                    alt="Phone Icon"
                    width={40}
                    height={40}
                    className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                  />
                </a>
                <a href={whatsappLink} target="_blank">
                  <h3 className="text-sm md:text-2xl break-words">
                    {content.phone}
                  </h3>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                <a
                  href={`mailto:${content.email}`}
                  className="hover:rotate-7 transition-transform duration-200"
                >
                  <Image
                    src="/icons/gmail.png"
                    alt="Email Icon"
                    width={40}
                    height={40}
                    className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                  />
                </a>
                <a href={`mailto:${content.email}`}>
                  <h3 className="text-sm md:text-2xl break-words">
                    {content.email}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </main>
  );
}
