import Hero from "@/components/ui/Hero";
import Marquee from "@/components/ui/Marquee";
import About from "@/components/ui/About";
import Expertise from "@/components/ui/Expertise";
import TechStack from "@/components/ui/TechStack";
import Projects from "@/components/ui/Projects";
import Testimonials from "@/components/ui/Testimonials";
import Faq from "@/components/ui/Faq";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <TechStack />
      <Projects />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
