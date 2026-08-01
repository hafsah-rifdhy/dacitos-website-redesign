import MouseGlow from "@/components/animations/MouseGlow";
import FloatingParticles from "@/components/animations/FloatingParticles";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <FloatingParticles />

      <Navbar />

      <Hero />
      <TrustedBy />
      <Services />
      <WhyChoose />
      <Process />
      <Projects />
      <Technologies />
      <Testimonials />
      <CTA />

      <Footer />
    </>
  );
}