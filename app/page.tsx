import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills"
import AboutMe from "./components/sections/AboutMe"
import HeroSection from "./components/sections/HeroSection"

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Work />
    </main>
  );
}
