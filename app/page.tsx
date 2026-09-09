import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Marquee from "@/components/ui/Marquee";
import About from "@/components/ui/About";
import Expertise from "@/components/ui/Expertise";
import TechStack from "@/components/ui/TechStack";
import Projects from "@/components/ui/Projects";
import Faq from "@/components/ui/Faq";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <TechStack />
      <Projects />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
