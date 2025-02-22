import AboutUsSection from "@/components/Home/Sections/AboutUsSection";
import IntroSection from "@/components/Home/Sections/IntroSection";
import ServicesSection from "@/components/Home/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20">
      <section>
        <IntroSection />
      </section>
      <section className="container mx-auto">
        <AboutUsSection />
      </section>
      <section className="container mx-auto">
        <ServicesSection />
      </section>
      <section className="container mx-auto">
        <div className="h-screen"></div>
      </section>
    </main>
  );
}
