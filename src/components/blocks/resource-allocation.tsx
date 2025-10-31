import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Highlighter } from "@/components/ui/highlighter";

import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "E-commerce Platform Redesign",
    titleColor: "#FFB6C1",
    description:
      "A complete UX overhaul that increased conversion rates by 45% through intuitive navigation and streamlined checkout flow.",
    images: [
      {
        src: "/resource-allocation/templates.webp",
        alt: "E-commerce platform redesign case study",
        width: 495,
        height: 186,
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/case-studies/ecommerce",
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Mobile Banking App",
    titleColor: "#87CEEB",
    description: "Designing secure, user-friendly financial management tools that make banking accessible and intuitive.",
    images: [
      { src: "/logos/jira.svg", alt: "Mobile banking interface", width: 48, height: 48 },
      { src: "/logos/excel.svg", alt: "Mobile banking interface", width: 48, height: 48 },
      {
        src: "/logos/notion.svg",
        alt: "Mobile banking interface",
        width: 48,
        height: 48,
      },
      { src: "/logos/word.svg", alt: "Mobile banking interface", width: 48, height: 48 },
      {
        src: "/logos/monday.svg",
        alt: "Mobile banking interface",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/drive.svg",
        alt: "Mobile banking interface",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/jira.svg",
        alt: "Mobile banking interface",
        width: 48,
        height: 48,
      },
      { src: "/logos/asana.svg", alt: "Mobile banking interface", width: 48, height: 48 },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/case-studies/banking",
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems = [
  {
    title: "Healthcare Appointment System",
    titleColor: "#FFE4B5",
    description:
      "Simplifying patient scheduling with an elegant, accessible design that reduced booking time by 60%.",
    images: [
      {
        src: "/resource-allocation/graveyard.webp",
        alt: "Healthcare appointment system interface",
        width: 305,
        height: 280,
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/case-studies/healthcare",
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "SaaS Dashboard Interface",
    titleColor: "#DDA0DD",
    description:
      "Creating powerful analytics dashboards that make complex data accessible and actionable for business teams.",
    images: [
      {
        src: "/resource-allocation/discussions.webp",
        alt: "SaaS dashboard interface",
        width: 320,
        height: 103,
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/case-studies/saas",
    className:
      "justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
    fade: [""],
  },
  {
    title: "Travel Booking Platform",
    titleColor: "#98D8C8",
    description:
      "Crafting seamless travel experiences from discovery to booking, increasing user engagement by 52%.",
    images: [
      {
        src: "/resource-allocation/notifications.webp",
        alt: "Travel booking platform interface",
        width: 305,
        height: 280,
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/case-studies/travel",
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-20 sm:pb-24 md:pb-28 lg:pb-32"
    >
      <div className="">
        <h2 className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-balance">
          Case Studies
        </h2>

        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

interface ItemProps {
  item: ((typeof topItems)[number] | (typeof bottomItems)[number]) & {
    ctaLabel?: string;
    ctaHref?: string;
    titleColor?: string;
  };
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-4 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 lg:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">
          <Highlighter
            action="highlight"
            color={item.titleColor || "#ffd1dc"}
            isView={true}
          >
            {item.title}
          </Highlighter>
        </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((image, j) => (
            <Image
              key={j}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-contain object-left-top"
            />
          ))}
        </div>
      )}

      {item.ctaLabel && item.ctaHref && (
        <div className="mt-4">
          <Link
            href={item.ctaHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline group"
          >
            {item.ctaLabel}
            <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
