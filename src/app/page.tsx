import CTA from '@/components/home/cta';
import FAQ from '@/components/home/faq';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import React from 'react';
// import Testimonials from '@/app/demo/Testimonials';
// import Pricing from '@/app/demo/Pricing';
// import HighlightFeature from "@/app/demo/HighlightFeature";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/*<HighlightFeature />*/}
      <Features />
      {/*<Testimonials />*/}
      {/*keeping this section hidden for now. will use this portion later. */}
      {/*<Pricing /> */}
      <FAQ />
      <CTA />
    </div>
  );
}
