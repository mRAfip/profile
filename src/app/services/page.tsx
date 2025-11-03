import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";

export default function ServicesPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-background">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 py-8 sm:py-10 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-6 sm:mb-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <span className="text-muted-foreground mx-2 text-sm">→</span>
              <span className="text-foreground text-sm">Services</span>
            </nav>

            {/* Header Content */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
              <div className="flex-1 space-y-4 sm:space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Services
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                  Work with an experienced product designer and developer to rethink your digital strategy, align your product with business goals, and achieve success.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors text-base sm:text-lg"
                >
                  Let's work together <ArrowRight className="size-4 sm:size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/banner.webp"
          alt="Services"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <Background>
        <div className="py-12 sm:py-16 md:py-20 lg:py-28">
          <Features />
        </div>
      </Background>
    </>
  );
}
