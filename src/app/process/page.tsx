"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Background } from "@/components/background";
import { Ripple } from "@/components/ui/ripple";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Roca",
    description: "A UX transformation for Roca that streamlined legal notice tracking and improved compliance visibility across departments.",
    image: "/web-ui/1.webp",
    link: "/projects/roca",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with secure payment integration, inventory management, and customer analytics dashboard.",
    image: "/web-ui/2.webp",
    link: "/projects/ecommerce",
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine integration.",
    image: "/apps-ui/1.jpg",
    link: "/projects/healthcare",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure banking application with biometric authentication, transaction management, and investment tracking.",
    image: "/apps-ui/2.jpg",
    link: "/projects/banking",
  },
  {
    id: 5,
    title: "SaaS Analytics Platform",
    description: "Real-time analytics dashboard with data visualization, custom reporting, and team collaboration features.",
    image: "/apps-ui/3.jpg",
    link: "/projects/saas",
  },
  {
    id: 6,
    title: "Travel Booking System",
    description: "Comprehensive travel platform with flight booking, hotel reservations, and itinerary management.",
    image: "/web-ui/3.webp",
    link: "/projects/travel",
  },
  {
    id: 7,
    title: "Fitness Tracking App",
    description: "Native mobile app with workout tracking, progress analytics, and social sharing features.",
    image: "/web-ui/4.webp",
    link: "/projects/fitness",
  },
  {
    id: 8,
    title: "Food Delivery Platform",
    description: "On-demand delivery app with GPS tracking, real-time order updates, and restaurant management.",
    image: "/web-ui/1.webp",
    link: "/projects/food-delivery",
  },
  {
    id: 9,
    title: "Portfolio Website",
    description: "Creative portfolio site with smooth animations, responsive design, and CMS integration.",
    image: "/web-ui/2.webp",
    link: "/projects/portfolio",
  },
];

export default function ProjectsPage() {
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
                    Projects
                  </h2>
                </div>

                <div className="mb-6 sm:mb-8 md:mb-10 space-y-1 sm:space-y-1 md:space-y-2">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Featured Projects.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Design & Development.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Real Results.
                  </h1>
                </div>

                <div className="max-w-3xl">
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    Explore my portfolio of design and development projects. Each project represents a unique challenge solved through user-centered design and modern technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Background>

      {/* Projects Grid */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  {/* Project Image */}
                  <div className="relative w-full aspect-[4/3] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-900 hover:text-red-500 transition-colors group/link"
                  >
                    View project
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
