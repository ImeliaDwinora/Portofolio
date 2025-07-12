import AboutMe from "./aboutme/page";
import Header from "./header/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import Portfolio from "./portofolio/page";
import Experiences from "./experience/page";
import TestimonialSlider from "./testimoni/page";
import Contact from "./contact/page";



export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-evenly items-center z-0 w-full relative min-h-screen" >
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Experiences/>
        <TestimonialSlider/>
        <Contact/>
      </main>
    </>
  );
}
