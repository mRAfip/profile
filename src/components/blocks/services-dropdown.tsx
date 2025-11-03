import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    name: "Web Development",
    href: "/services/web-development",
  },
  {
    name: "Mobile Development",
    href: "/services/mobile-development",
  },
  {
    name: "AI Development",
    href: "/services/ai-development",
  },
  {
    name: "Product Strategy",
    href: "/services/product-strategy",
  },
];

const featuredServices = [
  {
    title: "Web Development",
    description: "Build modern, scalable web applications",
    image: "/web-ui/1.webp",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Design",
    description: "Design beautiful mobile experiences",
    image: "/apps-ui/1.jpg",
    link: "/services/mobile-development",
  },
];

export const ServicesDropdown = () => {
  return (
    <section className="w-full bg-background border-y border-border">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 sm:py-10 md:py-12">
          {/* Left Section - Services List */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-muted-foreground mb-6 sm:mb-8">
              Our services
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight hover:text-red-500 transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Featured Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-muted rounded-2xl overflow-hidden block transition-transform hover:scale-[1.02]"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                    {service.title}
                  </h4>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-red-500 transition-colors">
                    <span className="text-sm sm:text-base">{service.description}</span>
                    <ArrowRight className="size-4 sm:size-5 flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
