import Image from "next/image";

import { ArrowRight, Calendar } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const websites = [
  {
    name: "Monify - Finance SaaS",
    image: "/web-ui/1.webp",
  },
  {
    name: "Genius - SaaS Template",
    image: "/web-ui/2.webp",
  },
  {
    name: "E-commerce Platform",
    image: "/web-ui/3.webp",
  },
  {
    name: "Business Dashboard",
    image: "/web-ui/4.webp",
  },
];

const WebsiteCard = ({ website }: { website: (typeof websites)[0] }) => {
  return (
    <Card className="bg-muted overflow-hidden border-none group cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-[16/18] overflow-hidden">
          <Image
            src={website.image}
            alt={website.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export const WebShowcase = ({
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
                Website Showcase
              </h2>
              <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-snug">
                Explore our portfolio of beautifully designed websites built with
                modern technologies and best practices.
              </p>
            </div>
            <div className="flex-shrink-0 gap-2 flex">
              <Button variant="outline" className="shadow-md">
                View All Websites <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" className="shadow-md">
                <Calendar className="size-4" /> Book Meeting
              </Button>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {websites.map((website, index) => (
                <WebsiteCard key={index} website={website} />
              ))}
            </div>
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
