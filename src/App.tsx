import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

<<<<<<< HEAD
const App = () => {
  return (
    <div className="app-shell">
      <Analytics />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
=======
const App = () => (
  <BrowserRouter>
    <Analytics />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Analytics />
  </BrowserRouter>
);
>>>>>>> c7d6d0110b70dc0ae718586cbfc865669158fafe

export default App;
