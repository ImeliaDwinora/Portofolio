"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className="hidden sm:flex flex-row gap-7 flex-wrap justify-center items-center
        bg-[#FFF8DC] border-2 border-black mb-20
        w-[80%] h-[50px]
        absolute top-0 z-20 mt-10 rounded-4xl
        left-1/2 transform -translate-x-1/2"
      >
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#home"
        >
          Home
        </a>
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#aboutme"
        >
          About me
        </a>
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#skills"
        >
          Skills
        </a>
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#portofolio"
        >
          Portofolio
        </a>
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#testimoni"
        >
          Testimonials
        </a>
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#experience"
        >
          Experience
        </a>
        <a
          style={{
            fontWeight: "bold",
            color: "#A679B4",
            WebkitTextStroke: "0.3px black",
            fontSize: 20,
          }}
          href="#contactme"
        >
          Contact Me
        </a>
      </header>

      <header
        className="sm:hidden fixed top-2 left-2 z-20 
    bg-[#FFF8DC] border-2 border-black 
    w-[75vw] max-w-[220px] 
    rounded-3xl px-4 py-2 flex items-center justify-between"
      >
        <h1 className="text-[#A679B4] font-bold text-lg">Menu</h1>

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
            {[
              "home",
              "aboutme",
              "skills",
              "portofolio",
              "testi",
              "contactme",
            ].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="py-2 text-[#A679B4] font-semibold text-sm hover:underline"
              >
                {id.charAt(0).toUpperCase() +
                  id.slice(1).replace(/([A-Z])/g, " $1")}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

{
  /* <header style={{display:"flex", gap:10, justifyContent:"space-evenly", alignItems:"center", backgroundColor: "cornsilk", borderRadius: 40, marginBottom:20, width:"80%", height: 50, border:" 2px solid black",  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", position:"absolute", top:0, zIndex:2, marginTop:10, alignContent:"center", left:"50%",transform: "translateX(-50%)"}}>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#home">Home</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#aboutme">About me</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#skills">Skills</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#portofolio">Portofolio</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#testi">Testimonials</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#contactme">Contact Me</a>
    </header> */
}
