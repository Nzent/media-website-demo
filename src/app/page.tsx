import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import FeedbackSction from "@/components/Home/Sections/FeedbackSction";
import IntroSection from "@/components/Home/Sections/IntroSection";
import PortfolioSection from "@/components/Home/Sections/PortfolioSection";
import ProjectsNumbersSections from "@/components/Home/Sections/ProjectsNumbersSections";
import ServicesSection from "@/components/Home/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <section className="pb-20 w-full" id="intro">
        <IntroSection />
      </section>
      <section className="pb-20 w-full container mx-auto" id="about-us">
        <AboutUsSection />
      </section>
      <section className="pb-20 max-md:h-screen w-full container mx-auto" id="services">
        <ServicesSection />
      </section>
      <section className="pb-20 max-md:mt-96 w-full mx-auto" id="projects">
        <ProjectsNumbersSections />
      </section>
      <section className="mb-0 w-full container mx-auto" id="feedbacks">
        <FeedbackSction />
      </section>
      <section className="pb-20 w-full container mx-auto" id="portfolios">
        <PortfolioSection />
      </section>
    </main>
  );
}
