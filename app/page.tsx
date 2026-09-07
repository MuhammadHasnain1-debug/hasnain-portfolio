import Preloader from "@/components/ui/Preloader";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import BioCard from "@/components/ui/BioCard";
import Expertise from "@/components/ui/Expertise";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <Header />
      <Hero />
      <div className="relative z-10 bg-ink">
        <BioCard />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
