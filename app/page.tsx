import Image from "next/image";
import Hero from "./ui/home/hero/hero";
import VisualFeatures from "./ui/home/visualfeatures/visualfeatures";
import Features from "./ui/home/features/features"
import CTA from "./ui/home/cta/cta";
import Testimonial from "./ui/home/testimonials/testimonials";
import Pricing from "./ui/home/pricing/pricing";
import FAQs from "./ui/home/faqs/faqs";
import Partners from "./ui/home/partners/partners";



export default function Home() {
  return (
    <>
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Partners />
      <Pricing />
      <FAQs />
    </>
  );
}
