import { Background } from "@/components/background";
import { AppShowcase } from "@/components/blocks/app-showcase";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { SingleTestimonial } from "@/components/blocks/single-testimonial";
import { WebShowcase } from "@/components/blocks/web-showcase";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Logos />
        <Features />
        <ResourceAllocation />
      </Background>
      <AppShowcase />
      <SingleTestimonial variant={1} />
      <WebShowcase />
      <SingleTestimonial variant={1} />



      <Background variant="bottom">
        <FAQ />
      </Background>
    </>
  );
}
