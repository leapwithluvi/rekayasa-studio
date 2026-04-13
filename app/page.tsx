import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyMe from "@/components/WhyMe";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyMe />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
