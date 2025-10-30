import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Investors } from "@/components/blocks/investors";
import { DashedLine } from "@/components/dashed-line";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 lg:pt-32 xl:pt-44">
        <AboutHero />

        <About />
        <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <Investors />
        </div>
      </div>
    </Background>
  );
}
