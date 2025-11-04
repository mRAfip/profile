  "use client";

  import { useRef, useState } from "react";
  import Image from "next/image";
  import { useInView } from "motion/react";

  import { Background } from "@/components/background";
  import { Ripple } from "@/components/ui/ripple";

  export default function ServicesPage() {
    return (
      <>
        {/* Header Section with Ripple */}

        {/* Additional Content Sections - Outside Background */}


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
                    Services
                  </h2>
                </div>

                {/* Main Headline */}
                <div className="mb-6 sm:mb-8 md:mb-10 space-y-1 sm:space-y-1 md:space-y-2">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Research for Insights.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Design for Users.
                  </h1>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    Build for future.
                  </h1>
                </div>

                {/* Descriptive Paragraph */}
                <div className="max-w-3xl">
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    I thrive at the intersection of design and development through my comprehensive services and craft beautiful and functional experiences that can be launched quickly.
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
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  tracking-tight text-gray-900 leading-tight">
                    Change is inevitable. Growth is a choice.
                  </h2>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-normal">
                    <p>
                      Most clients come to me when things feel a bit off. Not broken — just slower, messier, harder than they used to be.
                    </p>
                    <p>
                      The business has grown, but how you work hasn't quite kept up. People wear too many hats. Decisions take longer. Energy goes into the wrong things.
                    </p>
                    <p>
                      I help you step back, spot what's getting in the way, and build a setup that actually fits how you work now.
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

        {/* Services Section - Redesigned Layout */}
        <ServicesSection />
      </>
    );
  }

  // Services Section with Scroll Animations
  function ServicesSection() {
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);

    // Use higher threshold and margin to ensure only one card is active at a time
    const card1InView = useInView(card1Ref, { amount: 0.5, once: false, margin: "-20% 0px -20% 0px" });
    const card2InView = useInView(card2Ref, { amount: 0.5, once: false, margin: "-20% 0px -20% 0px" });
    const card3InView = useInView(card3Ref, { amount: 0.5, once: false, margin: "-20% 0px -20% 0px" });
    const card4InView = useInView(card4Ref, { amount: 0.5, once: false, margin: "-20% 0px -20% 0px" });

    // Determine which service should be active - only one at a time
    // Check which card is most visible (priority: card 1 > 2 > 3 > 4 if multiple are visible)
    // This ensures only one card is active at a time
    const activeCard = card1InView ? 1 : card2InView ? 2 : card3InView ? 3 : card4InView ? 4 : 0;

    const services = [
      { name: "UI/UX Design", isActive: activeCard === 1 },
      { name: "Web Development", isActive: activeCard === 2 },
      { name: "Mobile Development", isActive: activeCard === 3 },
      { name: "AI Development", isActive: activeCard === 4 },
    ];

    return (
      <div className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="max-w-7xl mx-auto">
            {/* Top Row - Services Content */}
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4 sm:mb-6">
                  Our services are built for professional engineers.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  Each equipped with an isolated development environment, securely deployed in our cloud or your VPC, and with the full context of your codebase for immediate, autonomous productivity.
                </p>
              </div>
            </div>

            {/* Bottom Row - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20">
              {/* Left Column - Services List (Sticky) - 25% */}
              <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start space-y-4 sm:space-y-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      service.isActive
                        ? "inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm sm:text-base transition-colors duration-300 ${
                        service.isActive ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column - Service Cards - 75% */}
              <div className="lg:col-span-3 space-y-8 sm:space-y-12 md:space-y-16">
                {/* Service Card 1 - UI/UX Design */}
                <div
                  ref={card1Ref}
                  className="bg-gray-100 border border-gray-300 rounded-xl h-[65vh] flex flex-col overflow-hidden pb-0"
                >
                  <div className="p-6 sm:p-8 flex flex-col">
                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      UI/UX Design
                    </h3>
                    {/* Detailed Text */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3">
                      Creating intuitive interfaces that users love to interact with. Focus on user experience and visual aesthetics to create engaging digital products that delight users and drive business results.
                    </p>
                    {/* Visit More Detail Link */}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium inline-flex items-center gap-1"
                    >
                      Visit more detail
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  {/* Screenshot on Bottom */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/web-ui/1.webp"
                      alt="UI/UX Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Service Card 2 - Web Development */}
                <div
                  ref={card2Ref}
                  className="bg-gray-100 border border-gray-300 rounded-xl h-[65vh] flex flex-col overflow-hidden pb-0"
                >
                  <div className="p-6 sm:p-8 flex flex-col">
                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      Web Development
                    </h3>
                    {/* Detailed Text */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3">
                      Building modern, scalable web applications with cutting-edge technologies. Full-stack solutions from frontend to backend deployment, ensuring optimal performance and user experience.
                    </p>
                    {/* Visit More Detail Link */}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium inline-flex items-center gap-1"
                    >
                      Visit more detail
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  {/* Screenshot on Bottom */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/web-ui/2.webp"
                      alt="Web Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Service Card 3 - Mobile Development */}
                <div
                  ref={card3Ref}
                  className="bg-gray-100 border border-gray-300 rounded-xl h-[65vh] flex flex-col overflow-hidden pb-0"
                >
                  <div className="p-6 sm:p-8 flex flex-col">
                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      Mobile Development
                    </h3>
                    {/* Detailed Text */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3">
                      Native and cross-platform mobile apps that deliver exceptional user experiences. Mobile-first design with smooth performance across all devices and platforms, ensuring your app stands out.
                    </p>
                    {/* Visit More Detail Link */}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium inline-flex items-center gap-1"
                    >
                      Visit more detail
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  {/* Screenshot on Bottom */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/apps-ui/1.jpg"
                      alt="Mobile Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Service Card 4 - AI Development */}
                <div
                  ref={card4Ref}
                  className="bg-gray-100 border border-gray-300 rounded-xl h-[65vh] flex flex-col overflow-hidden pb-0"
                >
                  <div className="p-6 sm:p-8 flex flex-col">
                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      AI Development
                    </h3>
                    {/* Detailed Text */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3">
                      Integrating artificial intelligence to enhance your products and automate workflows. Smart solutions that adapt and improve over time with machine learning capabilities and advanced AI technologies.
                    </p>
                    {/* Visit More Detail Link */}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium inline-flex items-center gap-1"
                    >
                      Visit more detail
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  {/* Screenshot on Bottom */}
                  <div className="relative w-full h-64 sm:h-80 md:h-96 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/apps-ui/2.jpg"
                      alt="AI Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

