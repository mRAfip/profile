"use client";

import { useState, useEffect, useCallback } from "react";

import Image from "next/image";

import {
  Play,
  Pause,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";


  const heroImages = [
    {
      src: "/4.webp",
      alt: "Hero Image 1",
    },
    {
      src: "/3.webp",
      alt: "Hero Image 2",
    },
    {
      src: "/2.webp",
      alt: "Hero Image 3",
    },
    {
      src: "/1.webp",
      alt: "Hero Image 4",
    },
  ];

  export const Hero = () => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
      if (!api) {
        return;
      }

      setCurrent(api.selectedScrollSnap());

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    // Auto-sliding functionality
    useEffect(() => {
      if (!api || !isPlaying) {
        return;
      }

      const interval = setInterval(() => {
        api.scrollNext();
      }, 4000); // Auto-slide every 4 seconds

      return () => clearInterval(interval);
    }, [api, isPlaying]);

    const togglePlayPause = useCallback(() => {
      setIsPlaying(!isPlaying);
    }, [isPlaying]);

    const goToSlide = useCallback((index: number) => {
      api?.scrollTo(index);
    }, [api]);

    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 lg:pt-32 xl:pt-44">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          {/* Left-aligned Main Content */}
          <div className="text-left max-w-6xl pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            {/* Main Headline with Red Bar */}
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              {/* Red Vertical Bar */}
              <div className="w-0.5 sm:w-1 bg-red-500 h-12 sm:h-16 md:h-20 lg:h-24 mt-1 sm:mt-2 flex-shrink-0"></div>
              
              {/* Headline */}
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-gray-900">
                  I'm a Creative Developer Building Digital Experiences That
                  <br className="hidden sm:block" />
                  <span className="text-red-500">inspire and engage</span>
                </h1>
              </div>
            </div>

            {/* Statistics Section - Horizontal on all screens */}
            <div className="flex flex-wrap items-start justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-8 mt-8 sm:mt-12 md:mt-14 lg:mt-16">
              <div className="flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 lg:mt-24 relative">
          <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-0 lg:container mx-auto">
            <Carousel 
              className="w-full" 
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[593px] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="rounded-2xl sm:rounded-3xl lg:rounded-4xl object-cover object-left-top shadow-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Carousel Controls - Floating at Center Bottom */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 z-10">
              {/* Control Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-red-500/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 h-10 sm:h-11 md:h-13">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      current === index
                        ? "bg-red-500 w-6 sm:w-7 md:w-8 h-1.5 sm:h-2"
                        : "bg-red-300 hover:bg-red-400 w-1.5 sm:w-2 h-1.5 sm:h-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 bg-red-500/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-red-500/20"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                ) : (
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
