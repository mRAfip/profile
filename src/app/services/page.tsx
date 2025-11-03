import { Background } from "@/components/background";
import Link from "next/link";

const services = [
  {
    name: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences that engage and convert users.",
    href: "/services/ui-ux-design",
  },
  {
    name: "Web Development",
    description: "Building modern, scalable web applications with cutting-edge technologies.",
    href: "/services/web-development",
  },
  {
    name: "Mobile Development",
    description: "Designing and developing native and cross-platform mobile applications.",
    href: "/services/mobile-development",
  },
  {
    name: "AI Development",
    description: "Integrating artificial intelligence and machine learning into your products.",
    href: "/services/ai-development",
  },
  {
    name: "Product Strategy",
    description: "Strategic planning and consultation to bring your vision to life.",
    href: "/services/product-strategy",
  },
];

export default function ServicesPage() {
  return (
    <Background>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="block group hover:opacity-80 transition-opacity"
            >
              <div className="border-b border-gray-200 pb-6 sm:pb-8 md:pb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-red-500 transition-colors">
                  {service.name}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Ready to get started?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-red-600 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </Background>
  );
}

