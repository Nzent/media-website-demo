import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import FeedbackSction from "@/components/Home/Sections/FeedbackSction";
import IntroSection from "@/components/Home/Sections/IntroSection";
import PortfolioSection from "@/components/Home/Sections/PortfolioSection";
import ProjectsNumbersSections from "@/components/Home/Sections/ProjectsNumbersSections";
import ServicesSection from "@/components/Home/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <section className="w-full mb-10" id="intro">
        <IntroSection />
      </section>

      <section className="w-full mb-10 container mx-auto" id="about-us">
        <AboutUsSection />
      </section>

      <section
        className=" max-md:h-full mb-10 w-full container mx-auto"
        id="services"
      >
        <ServicesSection />
      </section>

      <section className="mb-10  w-full mx-auto" id="projects">
        <ProjectsNumbersSections />
      </section>

      <section className="mb-0 w-full container mx-auto" id="feedbacks">
        <FeedbackSction />
      </section>

      <section className=" w-full container mx-auto" id="portfolios">
        <PortfolioSection />
      </section>
    </main>
  );
}
