import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import FeedbackSction from "@/components/Home/Sections/FeedbackSction";
import IntroSection from "@/components/Home/Sections/IntroSection";
import PortfolioSection from "@/components/Home/Sections/PortfolioSection";
import ProjectsNumbersSections from "@/components/Home/Sections/ProjectsNumbersSections";
import ServicesSection from "@/components/Home/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* intro section */}
      <section className="w-full mb-10" id="intro">
        <IntroSection />
      </section>

      {/* about section */}
      <section className="w-full mb-20 container mx-auto" id="about-us">
        <AboutUsSection />
      </section>

      {/* services card secrion */}
      <section
        className=" max-md:h-full mb-20 w-full container mx-auto"
        id="services"
      >
        <ServicesSection />
      </section>

      {/* agency's stats numbers indicators section */}
      <section className="mb-20  w-full mx-auto" id="projects">
        <ProjectsNumbersSections />
      </section>

      {/* testimonials feedbacks section */}
      <section className="mb-10 w-full container mx-auto" id="feedbacks">
        <FeedbackSction />
      </section>

      {/* agency portfolios section */}
      <section className=" w-full mb-20 container mx-auto" id="portfolios">
        <PortfolioSection />
      </section>
    </main>
  );
}
