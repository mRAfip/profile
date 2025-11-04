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

export default function ProductStrategyPage() {
  return (
    <>
      <Background>
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 w-full">
          <div className="absolute inset-0 w-full h-full z-[1]">
            <div className="relative w-full h-full">
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

          <div className="relative z-[2] w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
              <div className="max-w-7xl mx-auto">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-base sm:text-lg font-normal text-gray-700">
                    Product Strategy Services
                  </h2>
                </div>

                <div className="mb-6 sm:mb-8 md:mb-10 space-y-1 sm:space-y-1 md:space-y-2">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Strategic Planning.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Market Research.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Product Roadmap.
                  </h1>
                </div>

                <div className="max-w-3xl">
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    I help define product vision, conduct market research, and create actionable roadmaps. From ideation to launch, I guide you through strategic decisions that align product development with business goals and user needs.
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
              <div>
                <h2 className="text-lg sm:text-xl font-normal text-gray-700 mb-8 lg:mb-0">
                  How we work
                </h2>
              </div>

              <div className="space-y-8 sm:space-y-10">
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                  Strategy that drives product success.
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-normal">
                  <p>
                    I begin with{" "}
                    <Highlighter action="highlight" color="#FFB6C1" isView={true}>
                      market research
                    </Highlighter>{" "}
                    and{" "}
                    <Highlighter action="highlight" color="#87CEEB" isView={true}>
                      competitive analysis
                    </Highlighter>{" "}
                    to understand your market position. Through user interviews and data analysis, I identify opportunities and define clear product goals.
                  </p>
                  <p>
                    I create{" "}
                    <Highlighter action="highlight" color="#FFE4B5" isView={true}>
                      product roadmaps
                    </Highlighter>{" "}
                    that align{" "}
                    <Highlighter action="highlight" color="#DDA0DD" isView={true}>
                      business objectives
                    </Highlighter>{" "}
                    with user needs. Every feature is prioritized based on impact, effort, and strategic value to ensure efficient resource allocation.
                  </p>
                  <p>
                    I provide{" "}
                    <Highlighter action="highlight" color="#98D8C8" isView={true}>
                      ongoing guidance
                    </Highlighter>{" "}
                    throughout the product lifecycle, from{" "}
                    <Highlighter action="highlight" color="#FFB6C1" isView={true}>
                      concept validation
                    </Highlighter>{" "}
                    to post-launch optimization. My strategic approach ensures your product evolves based on user feedback and market changes.
                  </p>
                </div>

                <div className="bg-[#F5F3F0] rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
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

      <PreviousWorkSection />

      <SubServicesSection />
    </>
  );
}

const previousWorkItems = [
  {
    name: "SaaS Product Launch",
    description: "End-to-end product strategy for a B2B SaaS platform, from market research to go-to-market plan.",
    image: "/web-ui/1.webp",
  },
  {
    name: "Mobile App Strategy",
    description: "Product roadmap and feature prioritization for a consumer mobile application with 100K+ users.",
    image: "/apps-ui/1.jpg",
  },
  {
    name: "E-commerce Platform",
    description: "Strategic planning and market positioning for a multi-vendor e-commerce marketplace.",
    image: "/web-ui/2.webp",
  },
  {
    name: "Healthcare Product",
    description: "Product strategy for a patient management system with compliance and regulatory considerations.",
    image: "/apps-ui/2.jpg",
  },
  {
    name: "Fintech Solution",
    description: "Market entry strategy and product roadmap for a digital banking platform targeting millennials.",
    image: "/apps-ui/3.jpg",
  },
  {
    name: "EdTech Platform",
    description: "Product vision and feature roadmap for an online learning platform with personalized curriculum.",
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
                Explore my portfolio of product strategy projects that transformed ideas into successful products.
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

function SubServicesSection() {
  const subServices = [
    {
      title: "Market Research",
      description: "Conducting comprehensive market analysis, competitor research, and identifying opportunities for growth.",
    },
    {
      title: "Product Vision",
      description: "Defining clear product vision, mission, and long-term strategy aligned with business objectives.",
    },
    {
      title: "Roadmap Planning",
      description: "Creating detailed product roadmaps with prioritized features and realistic timelines for execution.",
    },
    {
      title: "User Research",
      description: "Gathering user insights through interviews, surveys, and usability testing to inform product decisions.",
    },
    {
      title: "Feature Prioritization",
      description: "Using frameworks like RICE and MoSCoW to prioritize features based on impact, effort, and strategic value.",
    },
    {
      title: "Go-to-Market Strategy",
      description: "Developing comprehensive launch plans, positioning strategies, and marketing approaches for product releases.",
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
              Comprehensive product strategy services covering research, planning, and execution guidance.
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

