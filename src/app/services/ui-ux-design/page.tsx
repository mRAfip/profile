"use client";

import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

import { Background } from "@/components/background";
import { Ripple } from "@/components/ui/ripple";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";

export default function UIUXDesignPage() {
  return (
    <>
      {/* Header Section with Ripple */}
      <Background>
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 w-full">
          {/* Bottom Container - Ripple Background (z-index 1) */}
          <div className="absolute inset-0 w-full h-full z-[1]">
            <div className="relative w-full h-full">
              {/* Ripple Effect - Right Bottom Corner, Top Half Visible */}
              <div className="absolute right-0 bottom-0 w-[800px] h-[400px] overflow-hidden pointer-events-none">
                <Ripple
                  mainCircleSize={180}
                  mainCircleOpacity={0.4}
                  numCircles={8}
                  className="[mask-image:linear-gradient(to_bottom,white,white_60%,transparent)] [&>div]:border-red-500/60 [&>div]:border-2 [&>div]:bg-red-500/10"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "800px",
                    height: "800px",
                    top: "auto",
                    left: "auto",
                    transform: "translate(50%, 50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Top Container - Content (z-index 2) */}
          <div className="relative z-[2] w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
              <div className="max-w-7xl mx-auto">
                {/* Category/Service Title */}
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-base sm:text-lg font-normal text-gray-700">
                    UI/UX Design Services
                  </h2>
                </div>

                {/* Main Headline */}
                <div className="mb-6 sm:mb-8 md:mb-10 space-y-1 sm:space-y-1 md:space-y-2">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    User Research & Insights.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Intuitive Design.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Delightful Experiences.
                  </h1>
                </div>

                {/* Descriptive Paragraph */}
                <div className="max-w-3xl">
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    I create user-centered designs that combine research, strategy, and beautiful aesthetics. From wireframes to high-fidelity prototypes, I craft intuitive interfaces that users love and businesses trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Background>

      <div className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
              {/* Left Side - How we work */}
              <div>
                <h2 className="text-lg sm:text-xl font-normal text-gray-700 mb-8 lg:mb-0">
                  How we work
                </h2>
              </div>

              {/* Right Side - Main Content */}
              <div className="space-y-8 sm:space-y-10">
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                  User-centered design that drives results.
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-normal">
                  <p>
                    I start every project with{" "}
                    <Highlighter action="highlight" color="#FFB6C1" isView={true}>
                      deep user research
                    </Highlighter>{" "}
                    to understand your audience, their needs, and pain points. This foundation ensures every design decision is backed by{" "}
                    <Highlighter action="highlight" color="#87CEEB" isView={true}>
                      real insights
                    </Highlighter>.
                  </p>
                  <p>
                    Through{" "}
                    <Highlighter action="highlight" color="#FFE4B5" isView={true}>
                      strategic wireframing and prototyping
                    </Highlighter>
                    , I map out{" "}
                    <Highlighter action="highlight" color="#DDA0DD" isView={true}>
                      user journeys
                    </Highlighter>{" "}
                    and validate concepts before investing in high-fidelity designs. This iterative process saves time and ensures the final product truly serves users.
                  </p>
                  <p>
                    I combine{" "}
                    <Highlighter action="highlight" color="#98D8C8" isView={true}>
                      user-centered design principles
                    </Highlighter>{" "}
                    with modern aesthetics to create interfaces that are both{" "}
                    <Highlighter action="highlight" color="#FFB6C1" isView={true}>
                      beautiful and functional
                    </Highlighter>
                    . Every pixel is intentional, every interaction is crafted for delight.
                  </p>
                </div>

                {/* Contact Box */}
                <div className="bg-[#F5F3F0] rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    {/* Portrait Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg overflow-hidden">
                        <Image
                          src="/rafi.jpg"
                          alt="Muhammed"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Got questions?
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600">
                        I'm here to help—just send me an email.
                      </p>
                      <a
                        href="mailto:work.rafipmkm@gmail.com"
                        className="text-base sm:text-lg text-gray-900 hover:text-red-500 transition-colors block"
                      >
                        work.rafipmkm@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Work Section - Using App Showcase Design */}
      <PreviousWorkSection />

      {/* Sub-Services Section */}
      <SubServicesSection />
    </>
  );
}

// Previous Work Section - Exact App Showcase Design
const previousWorkItems = [
  {
    name: "E-commerce Dashboard",
    description: "Modern e-commerce platform with intuitive user experience and streamlined checkout flow.",
    image: "/apps-ui/1.jpg",
  },
  {
    name: "Mobile Banking App",
    description: "User-friendly financial management tools designed for accessibility and security.",
    image: "/apps-ui/2.jpg",
  },
  {
    name: "Healthcare Platform",
    description: "Patient scheduling system with elegant design that reduced booking time significantly.",
    image: "/apps-ui/3.jpg",
  },
  {
    name: "SaaS Dashboard",
    description: "Analytics dashboard that makes complex data accessible and actionable.",
    image: "/web-ui/1.webp",
  },
  {
    name: "Travel Booking App",
    description: "Seamless travel experience from discovery to booking with engaging design.",
    image: "/web-ui/2.webp",
  },
  {
    name: "Portfolio Website",
    description: "Creative portfolio showcasing work with clean and elegant design.",
    image: "/web-ui/3.webp",
  },
];

const WorkCard = ({ work }: { work: (typeof previousWorkItems)[0] }) => {
  return (
    <Card className="bg-muted h-full overflow-hidden border-none">
      <CardContent className="flex h-full flex-col p-0">
        <div className="relative h-[288px] lg:h-[328px]">
          <Image
            src={work.image}
            alt={work.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
          <h3 className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
            {work.name}
          </h3>
          <div className="space-y-0.5">
            <div className="text-muted-foreground text-sm leading-snug">
              {work.description}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function PreviousWorkSection() {
  return (
    <>
      <section className={cn("overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32")}>
        <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4 flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                Previous Work
              </h2>
              <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-snug">
                Explore my collection of UX/UI design projects that combine beautiful aesthetics with user-centered solutions.
              </p>
            </div>
            <div className="flex-shrink-0 gap-2 flex">
              <Button variant="outline" className="shadow-md">
                View All Projects <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" className="shadow-md">
                <Calendar className="size-4" /> Book Meeting
              </Button>
            </div>
          </div>

          <div className="relative mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 -mr-4 sm:-mr-6 md:-mr-[max(3rem,calc((100vw-80rem)/2+3rem))]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {previousWorkItems.map((work, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <WorkCard work={work} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]")}
      />
    </>
  );
}

// Sub-Services Section
function SubServicesSection() {
  const subServices = [
    {
      title: "User Research",
      description: "Conducting interviews, surveys, and usability testing to understand user needs, behaviors, and pain points.",
    },
    {
      title: "Wireframing & Prototyping",
      description: "Creating low and high-fidelity wireframes and interactive prototypes to validate concepts before development.",
    },
    {
      title: "Visual Design",
      description: "Crafting beautiful, modern interfaces with attention to typography, color, spacing, and visual hierarchy.",
    },
    {
      title: "Design Systems",
      description: "Building scalable design systems and component libraries to ensure consistency across products.",
    },
    {
      title: "Usability Testing",
      description: "Testing designs with real users to identify issues and validate design decisions before launch.",
    },
    {
      title: "UI/UX Audit",
      description: "Reviewing existing products to identify usability issues and provide recommendations for improvement.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4 sm:mb-6">
              What I Offer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Comprehensive UI/UX design services covering every stage of the design process, from research to final implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {subServices.map((service, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

