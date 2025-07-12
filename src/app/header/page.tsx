"use client";

import { useLanguageStore } from "@/stores/useLanguage";
import { useState } from "react";
import { navItems } from "@/constants/navItems";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <>
      <header
        className="hidden sm:flex flex-row gap-7 flex-wrap justify-center items-center
        bg-[#FFF8DC] border-2 border-black mb-20
        w-[80%] h-[50px]
        absolute top-0 z-20 mt-10 rounded-4xl
        left-1/2 transform -translate-x-1/2"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              fontWeight: "bold",
              color: "#A679B4",
              WebkitTextStroke: "0.3px black",
              fontSize: 20,
            }}
          >
            {item.label[language]}
          </a>
        ))}
        <button
          onClick={toggleLanguage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-300 px-3 py-1 rounded-full text-sm hover:bg-purple-400"
        >
          {language === "id" ? "EN" : "ID"}
        </button>
      </header>
      <header
        className="sm:hidden fixed top-2 left-2 z-20 
        bg-[#FFF8DC] border-2 border-black 
        w-[75vw] max-w-[220px] 
        rounded-3xl px-4 py-2 flex items-center justify-between"
      >
        <h2 className="text-[#A679B4] font-bold text-lg">Menu</h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`block w-6 h-0.5 bg-[#A679B4] transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#A679B4] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#A679B4] transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {isOpen && (
          <nav
            className="absolute top-full left-0 mt-2 w-full 
            bg-[#FFF8DC] border border-black 
            rounded-xl py-4 flex flex-col items-center shadow-md"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-2 text-[#A679B4] font-semibold text-sm hover:underline"
              >
                {item.label[language]}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="mt-2 text-xs bg-purple-300 text-white px-2 py-1 rounded hover:bg-purple-400"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
