import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CustomCursor from "./components/CustomCursor";
import Experience from "./components/Experience";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Services />
        <Projects />
        <Experience />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />

      {/* Hero section ke niche aane par floating Scroll-To-Top button */}
      <ScrollToTop />
    </div>
  );
}