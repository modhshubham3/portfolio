import About from "@/components/About";
import CollegeProjects from "@/components/CollegeProjects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="main">
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <CollegeProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
