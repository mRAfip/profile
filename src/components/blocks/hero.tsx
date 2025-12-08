"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { ShimmerButton } from "@/components/ui/shimmer-button";

const workImages = [
  { src: "/web-ui/1.webp", alt: "Work 1" },
  { src: "/web-ui/2.webp", alt: "Work 2" },
  { src: "/web-ui/3.webp", alt: "Work 3" },
  { src: "/web-ui/4.webp", alt: "Work 4" },
  { src: "/web-ui/5.webp", alt: "Work 5" },
  { src: "/web-ui/6.webp", alt: "Work 6" },
];

export const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 lg:pt-32 xl:pt-44 relative">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
        <div className="text-center max-w-6xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
                I'm muhammed,
                <br className="hidden sm:block" />
                Building products
                <br className="hidden sm:block" />
                That{" "}
                <span 
                  className="inline-block px-2 sm:px-3 md:px-4 rounded-lg sm:rounded-xl"
                  style={{
                    backgroundColor: '#F06250',
                    color: '#FDF5E6',
                    boxShadow: '0 4px 6px -1px rgba(240, 98, 80, 0.3), 0 2px 4px -1px rgba(240, 98, 80, 0.2)'
                  }}
                >
                  Work
                </span>
                {" — and "}
                <span 
                  className="inline-block px-2 sm:px-3 md:px-4 rounded-lg sm:rounded-xl"
                  style={{
                    backgroundColor: '#F06250',
                    color: '#FDF5E6',
                    boxShadow: '0 4px 6px -1px rgba(240, 98, 80, 0.3), 0 2px 4px -1px rgba(240, 98, 80, 0.2)'
                  }}
                >
                  Wow
                </span>
                .
              </h1>

            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Ticker Animation */}
      <div className="mt-12 md:mt-20 lg:mt-24 flex items-center overflow-hidden relative">
        <div className="flex animate-scroll gap-4 will-change-transform">
          {/* First set of images */}
          {workImages.map((image, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={`first-${index}`} 
                className="flex-shrink-0 flex items-center"
                style={{ 
                  transform: isEven ? 'translateY(-20px)' : 'translateY(20px)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="w-[240px] md:w-[280px] h-[280px] md:h-[340px] relative rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
          {/* Second set for seamless loop */}
          {workImages.map((image, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={`second-${index}`} 
                className="flex-shrink-0 flex items-center"
                style={{ 
                  transform: isEven ? 'translateY(-20px)' : 'translateY(20px)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="w-[240px] md:w-[280px] h-[280px] md:h-[340px] relative rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
          {/* Third set to ensure seamless transition */}
          {workImages.map((image, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={`third-${index}`} 
                className="flex-shrink-0 flex items-center"
                style={{ 
                  transform: isEven ? 'translateY(-20px)' : 'translateY(20px)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className="w-[240px] md:w-[280px] h-[280px] md:h-[340px] relative rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Video Player */}
      {isVideoVisible && (
        <div className="fixed bottom-6 right-6 z-50 w-[80px] sm:w-[100px] md:w-[160px] lg:w-[200px]">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoVisible(false)}
              className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            
            {/* Video Element */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/personal-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Caption/Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-4 py-3">
              <p className="text-white text-sm sm:text-base font-medium">
                Hear from Trust
              </p>
              <p className="text-white/80 text-xs sm:text-sm">
                Keith founder, Rory
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
