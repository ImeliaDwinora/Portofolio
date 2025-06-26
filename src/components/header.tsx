"use client"

import { useState } from "react"


export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
    return(
      <>
      
    <header className="hidden sm:flex flex-row gap-7 flex-wrap justify-center items-center
        bg-[#FFF8DC] border-2 border-black mb-20
        w-[80%] h-[50px]
        absolute top-0 z-20 mt-10 rounded-4xl
        left-1/2 transform -translate-x-1/2">
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#home">Home</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#aboutme">About me</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#skills">Skills</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#portofolio">Portofolio</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#testimoni">Testimonials</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#experience">Experience</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#contactme">Contact Me</a>
    </header>
     
    <header className="flex sm:hidden
  bg-[#FFF8DC] border-2 border-black
  w-3/12 max-w-screen-sm mx-auto h-auto px-10 p-4
  fixed top-0 z-20  rounded-4xl left-2 mt-1">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="block w-6 h-0.5 bg-[#A679B4] transition-transform duration-300"
        style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <span className={`block w-6 h-0.5 bg-[#A679B4] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className="block w-6 h-0.5 bg-[#A679B4] transition-transform duration-300"
        style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} /> 
      </button>
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#FFF8DC] border border-black flex flex-col items-center py-4 sm:hidden">
          {['home','aboutme','skills','portofolio','testi','contactme'].map(id => (
            <a key={id} href={`#${id}`} className="py-2 text-[#A679B4] font-bold text-lg">
              {id.charAt(0).toUpperCase() + id.slice(1).replace(/([A-Z])/g, ' $1')}
            </a>
          ))}
        </nav>
      )}
      </header>
  
      </>
    )
}

{/* <header style={{display:"flex", gap:10, justifyContent:"space-evenly", alignItems:"center", backgroundColor: "cornsilk", borderRadius: 40, marginBottom:20, width:"80%", height: 50, border:" 2px solid black",  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", position:"absolute", top:0, zIndex:2, marginTop:10, alignContent:"center", left:"50%",transform: "translateX(-50%)"}}>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#home">Home</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#aboutme">About me</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#skills">Skills</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#portofolio">Portofolio</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#testi">Testimonials</a>
      <a style={{fontWeight: "bold", color: "#A679B4", WebkitTextStroke: "0.3px black", fontSize: 20}} href="#contactme">Contact Me</a>
    </header> */}