  "use client";

import { useState, useEffect, useCallback, useRef } from "react";

  import Image from "next/image";

import {
  Play,
  Pause,
  ArrowRight,
} from "lucide-react";

import { ShimmerButton } from "@/components/ui/shimmer-button";

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
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const [barHeightPx, setBarHeightPx] = useState<number | null>(null);
    const [barMarginTopPx, setBarMarginTopPx] = useState<number | null>(null);

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

    // Match red bar height to a fraction of the first line height of the heading
    useEffect(() => {
      const updateBarHeight = () => {
        if (!headingRef.current) return;
        const styles = window.getComputedStyle(headingRef.current);
        const lineHeight = parseFloat(styles.lineHeight);
        if (!Number.isNaN(lineHeight)) {
          // Make the bar much shorter (e.g., ~40% of first line height)
          const targetHeight = Math.max(4, Math.round(lineHeight * 0.4));
          const marginTop = Math.max(0, Math.round((lineHeight - targetHeight) / 2));
          setBarHeightPx(targetHeight);
          setBarMarginTopPx(marginTop);
        }
      };

      updateBarHeight();
      window.addEventListener("resize", updateBarHeight);
      return () => window.removeEventListener("resize", updateBarHeight);
    }, []);

      return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 lg:pt-32 xl:pt-44">
          
          <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
            {/* Left-aligned Main Content */}
            <div className="text-left max-w-6xl pt-8 sm:pt-12 md:pt-16 lg:pt-20">
              {/* Main Headline with Red Bar */}
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              {/* Red Vertical Bar - short and vertically centered to the first line */}  
                {/* Headline */}
                <div className="flex-1">
                <h1 ref={headingRef} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold tracking-tight text-gray-900">
                UI/UX Design & Coding
                  <br className="hidden sm:block" />
                  Crafting Digital Products
                  <br className="hidden sm:block" />
                  <span className="text-red-500">That Inspire.</span>
                </h1>
                  {/* Supporting copy for better context */}
                  <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                    End-to-end UI/UX design services powered by advanced UX research and
                    behavioral analytics to craft impactful user experiences.
                  </p>

                  <div className="mt-6 sm:mt-7 md:mt-8">
                    <ShimmerButton background="#ef4444" className="w-fit rounded-full">
                      Talk to an expert
                    </ShimmerButton>
                  </div>
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
