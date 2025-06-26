import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import Experiences from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portofolio from "@/components/portofolio";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimoni";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-evenly items-center z-0 w-full relative h-[100vh]" >
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Portofolio/>
        <Experiences/>
        <Testimonial/>
        <Contact/>
      </main>
    </>
  );
}
