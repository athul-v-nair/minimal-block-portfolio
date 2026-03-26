import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/types/portfolio";
import { BrandedLoadingScreen } from "@/components/ui/BrandedLoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { AboutMe } from "@/components/sections/AboutMe";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const data: PortfolioData = portfolioData as PortfolioData;

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white pb-0">
      <BrandedLoadingScreen />
      <Navbar />

      <Hero data={data.hero} />
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <AboutMe data={data.about} />
      <Projects data={data.projects} />
      <Testimonials data={data.testimonials} />
      <Contact data={data.contact} socials={data.hero.socials} />
    </main>
  );
}
