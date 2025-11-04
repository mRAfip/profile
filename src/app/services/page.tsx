import Image from "next/image";

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

      {/* Services Grid Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Service Card 1 - UI/UX Design */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UX</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">UI/UX Design</h3>
                    <p className="text-xs text-gray-500">Service</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 mb-6">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Creating intuitive interfaces that users love to interact with.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>User research and persona development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Wireframing and prototyping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Visual design and design systems</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Focus on user experience and visual aesthetics to create engaging digital products.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
                    <span>✓</span> Learn More
                  </button>
                  <button className="px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    View Work
                  </button>
                </div>
              </div>

              {/* Service Card 2 - Web Development */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">WD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Web Development</h3>
                    <p className="text-xs text-gray-500">Service</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 mb-6">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Building modern, scalable web applications with cutting-edge technologies.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>React, Next.js, and TypeScript</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Responsive and accessible design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Full-stack solutions from frontend to backend deployment.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
                    <span>✓</span> Learn More
                  </button>
                  <button className="px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    View Work
                  </button>
                </div>
              </div>

              {/* Service Card 3 - Mobile Development */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile Development</h3>
                    <p className="text-xs text-gray-500">Service</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 mb-6">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Native and cross-platform mobile apps that deliver exceptional user experiences.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>iOS and Android development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>React Native for cross-platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>App store optimization</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Mobile-first design with smooth performance across devices.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
                    <span>✓</span> Learn More
                  </button>
                  <button className="px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    View Work
                  </button>
                </div>
              </div>

              {/* Service Card 4 - AI Development */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Development</h3>
                    <p className="text-xs text-gray-500">Service</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 mb-6">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Integrating artificial intelligence to enhance your products and automate workflows.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>AI-powered features and integrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Machine learning model integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Automation and intelligent systems</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Smart solutions that adapt and improve over time.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
                    <span>✓</span> Learn More
                  </button>
                  <button className="px-4 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    View Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

