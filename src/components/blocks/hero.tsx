"use client";

  import Image from "next/image";
  import { useState, useEffect, useCallback } from "react";

  import {
    ArrowRight,
    Blend,
    ChartNoAxesColumn,
    CircleDot,
    Diamond,
    Play,
    Pause,
  } from "lucide-react";

  import { DashedLine } from "@/components/dashed-line";
  import { Button } from "@/components/ui/button";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

  const features = [
    {
      title: "Tailored workflows",
      description: "Track progress across custom issue flows for your team.",
      icon: CircleDot,
    },
    {
      title: "Cross-team projects",
      description: "Collaborate across teams and departments.",
      icon: Blend,
    },
    {
      title: "Milestones",
      description: "Break projects down into concrete phases.",
      icon: Diamond,
    },
    {
      title: "Progress insights",
      description: "Track scope, velocity, and progress over time.",
      icon: ChartNoAxesColumn,
    },
  ];

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
    const [api, setApi] = useState<any>(null);
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
      <section className="py-28 lg:py-32 lg:pt-44">
        <div className="container">
          {/* Left-aligned Main Content */}
          <div className="text-left max-w-6xl pt-20">
            {/* Main Headline with Red Bar */}
            <div className="flex items-start gap-4 mb-12">
              {/* Red Vertical Bar */}
              <div className="w-1 bg-red-500 h-24 mt-2"></div>
              
              {/* Headline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight text-gray-900">
                  We're a Global UI UX Design Agency Curating User Experiences That
                  <br />
                  <span className="text-red-500">win hearts and awards</span>
                </h1>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-2xl  font-bold text-gray-900 mb-2">Two Billion+</div>
                <div className="text-sm text-gray-600">Lives Touched</div>
              </div>
              <div>
                <div className="text-2xl  font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Global Awards</div>
              </div>
              <div>
                <div className="text-2xl  font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-lg:ml-6 max-lg:h-[400px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
          <Carousel 
            className="w-full" 
            setApi={setApi}
            opts={{
              align: "center",
            }}
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[593px] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="rounded-4xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {/* Control Dots */}
            <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-3 h-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-white w-8 h-2"
                      : "bg-gray-500 hover:bg-gray-400 w-2 h-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </section>
    );
  };
