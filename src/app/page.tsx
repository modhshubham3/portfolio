import CollegeProjects from "@/components/CollegeProjects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import AboutTemplate from "@/components/tpl/AboutTemplate";
import DockBar from "@/components/tpl/DockBar";
import HeroTemplate from "@/components/tpl/HeroTemplate";
import NavPill from "@/components/tpl/NavPill";
import StackMarquee from "@/components/tpl/StackMarquee";

export default function Home() {
  return (
    <>
      <NavPill />
      <HeroTemplate />
      <StackMarquee />
      <main id="main">
        <AboutTemplate />
        <Projects />
        <Experience />
        <Education />
        <CollegeProjects />
        <Contact />
      </main>
      <Footer />
      <DockBar />
    </>
  );
}
