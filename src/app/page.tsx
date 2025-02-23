import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import FeedbackSction from "@/components/Home/Sections/FeedbackSction";
import IntroSection from "@/components/Home/Sections/IntroSection";
import PortfolioSection from "@/components/Home/Sections/PortfolioSection";
import ProjectsNumbersSections from "@/components/Home/Sections/ProjectsNumbersSections";
import ServicesSection from "@/components/Home/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 overflow-hidden">
      <section className="scroll-mt-32" id="intro">
        <IntroSection />
      </section>
      <section className="scroll-m-32 container mx-auto" id="about-us">
        <AboutUsSection />
      </section>
      <section className="scroll-m-32 container mx-auto" id="services">
        <ServicesSection />
      </section>
      <section className="scroll-m-32 mx-auto w-full" id="projects">
        <ProjectsNumbersSections />
      </section>
      <section className="scroll-m-32 container mx-auto" id="feedbacks">
        <FeedbackSction />
      </section>
      <section className="scroll-m-32 container mx-auto" id="portfolios">
        <PortfolioSection />
      </section>

      {/*   <section className="container mx-auto">
        <div className="h-20"></div>
      </section> */}
    </main>
  );
}
