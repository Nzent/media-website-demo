import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import FeedbackSction from "@/components/Home/Sections/FeedbackSction";
import IntroSection from "@/components/Home/Sections/IntroSection";
import PortfolioSection from "@/components/Home/Sections/PortfolioSection";
import ProjectsNumbersSections from "@/components/Home/Sections/ProjectsNumbersSections";
import ServicesSection from "@/components/Home/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 overflow-hidden">
      <section>
        <IntroSection />
      </section>
      <section className="container mx-auto">
        <AboutUsSection />
      </section>
      <section className="container mx-auto">
        <ServicesSection />
      </section>
      <section className="mx-auto w-full">
        <ProjectsNumbersSections />
      </section>
      <section className="container mx-auto">
        <FeedbackSction />
      </section>
     <section className="container mx-auto">
        <PortfolioSection />
      </section>

     {/*   <section className="container mx-auto">
        <div className="h-20"></div>
      </section> */}
    </main>
  );
}
