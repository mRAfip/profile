import Image from "next/image";

import { ArrowRight, Calendar } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "Dashboard App",
    description: "Beautiful dashboard interface with real-time analytics and insights.",
    image: "/apps-ui/1.jpg",
  },
  {
    name: "Mobile App",
    description: "Modern mobile application with intuitive user experience and smooth navigation.",
    image: "/apps-ui/2.jpg",
  },
  {
    name: "Web Platform",
    description: "Comprehensive web platform designed for scalability and performance.",
    image: "/apps-ui/3.jpg",
  },
  {
    name: "Dashboard App",
    description: "Beautiful dashboard interface with real-time analytics and insights.",
    image: "/apps-ui/1.jpg",
  },
  {
    name: "Mobile App",
    description: "Modern mobile application with intuitive user experience and smooth navigation.",
    image: "/apps-ui/2.jpg",
  },
  {
    name: "Web Platform",
    description: "Comprehensive web platform designed for scalability and performance.",
    image: "/apps-ui/3.jpg",
  },
];

const AppCard = ({ app }: { app: (typeof items)[0] }) => {
  return (
    <Card className="bg-muted h-full overflow-hidden border-none">
      <CardContent className="flex h-full flex-col p-0">
        <div className="relative h-[288px] lg:h-[328px]">
          <Image
            src={app.image}
            alt={app.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
          <h3 className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
            {app.name}
          </h3>
          <div className="space-y-0.5">
            <div className="text-muted-foreground text-sm leading-snug">
              {app.description}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const AppShowcase = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32", className)}>
        <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4 flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                App Showcase
              </h2>
              <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-snug">
                Explore our collection of beautifully designed applications built with
                modern technologies and best practices.
              </p>
            </div>
            <div className="flex-shrink-0 gap-2 flex">
              <Button variant="outline" className="shadow-md">
                View All Apps <ArrowRight className="size-4" />
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
                {items.map((app, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <AppCard app={app} />
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
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
