import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectHolder from "./components/ProjectHolder";
import SkillsHolder from "./components/SkillsHolder";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectHolder />
      <SkillsHolder />
      <Footer />
    </main>
  );
}
