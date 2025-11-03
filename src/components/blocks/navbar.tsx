  "use client";

  import { useState, useEffect, useRef } from "react";

  import Image from "next/image";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  import { Menu, X, ArrowRight } from "lucide-react";

  import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
  import { cn } from "@/lib/utils";

  const ITEMS = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  const MAIN_NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  const SERVICES = [
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Product Strategy", href: "/services/product-strategy" },
  ];

  const FEATURED_SERVICES = [
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

  export const Navbar = () => {
    const [isFullPageMenuOpen, setIsFullPageMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const pathname = usePathname();
    const servicesDropdownRef = useRef<HTMLDivElement>(null);
    const servicesLinkRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Prevent body scroll when full-page menu is open
    useEffect(() => {
      if (isFullPageMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [isFullPageMenuOpen]);

    // Handle click outside to close services dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          servicesDropdownRef.current &&
          servicesLinkRef.current &&
          !servicesDropdownRef.current.contains(event.target as Node) &&
          !servicesLinkRef.current.contains(event.target as Node)
        ) {
          setIsServicesDropdownOpen(false);
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
        }
      };

      if (isServicesDropdownOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isServicesDropdownOpen]);

    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
      };
    }, []);

    return (
      <>
      <section
        className={cn(
          "bg-transparent absolute left-0 right-0 z-50 w-full transition-all duration-300",
          "top-0",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 py-3 sm:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Logo Image */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full overflow-hidden">
              <Image
                src="/rafi.jpg"
                alt="logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Brand Text */}
            <div className="flex items-center gap-2">
              {/* <span className="text-gray-800 font-medium text-lg">Designer & Developer</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="max-lg:hidden [&>div:last-child]:hidden [&_*[data-radix-navigation-menu-viewport]]:hidden [&_*[class*='viewport']]:hidden">
            <NavigationMenuList>
              {ITEMS.map((link) => (
                <NavigationMenuItem key={link.label} className="relative">
                  {link.label === "Services" ? (
                    <div
                      ref={servicesLinkRef}
                      className="relative"
                      onMouseEnter={() => {
                        // Cancel any pending close timeout
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                        setIsServicesDropdownOpen(true);
                      }}
                      onMouseLeave={(e) => {
                        // Check if moving to dropdown
                        const relatedTarget = e.relatedTarget as Node;
                        const movingToDropdown = servicesDropdownRef.current?.contains(relatedTarget);
                        
                        // Only close if not moving to dropdown
                        if (!movingToDropdown) {
                          // Small delay to allow smooth transition
                          closeTimeoutRef.current = setTimeout(() => {
                            setIsServicesDropdownOpen(false);
                            closeTimeoutRef.current = null;
                          }, 200);
                        }
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "relative bg-transparent px-1.5 text-xs sm:text-sm font-medium text-gray-800 transition-colors hover:text-red-500",
                          pathname === link.href && "text-red-500",
                        )}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "relative bg-transparent px-1.5 text-xs sm:text-sm font-medium text-gray-800 transition-colors hover:text-red-500",
                        pathname === link.href && "text-red-500",
                      )}
                      onMouseEnter={() => {
                        // Close dropdown when hovering other links
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            {/* Let's Talk Button */}
            <Link href="/contact" className="max-lg:hidden">
              <span className="text-red-500 font-medium text-xs sm:text-sm hover:underline decoration-red-500 underline-offset-4">
                Let's Talk
              </span>
            </Link>
            
            {/* Hamburger Menu Button - Right End */}
            <button
              className="text-red-500 relative flex size-7 sm:size-8 z-50 transition-opacity hover:opacity-80"
              onClick={() => setIsFullPageMenuOpen(!isFullPageMenuOpen)}
              aria-label="Open main menu"
            >
              {isFullPageMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              )}
            </button>
          </div>
        </div>

        {/* Full-Page Overlay Menu */}
        <div
          className={cn(
            "fixed top-0 left-0 w-screen h-screen z-[100] transition-all duration-300 ease-in-out overflow-hidden",
            isFullPageMenuOpen
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col lg:flex-row h-screen w-screen">
            {/* Left Section - Red Background */}
            <div
              className={cn(
                "bg-red-500 flex flex-col items-center transition-all duration-300 ease-in-out",
                "w-screen h-screen lg:w-2/3",
                isFullPageMenuOpen
                  ? "translate-y-0 lg:translate-x-0 opacity-100"
                  : "-translate-y-full lg:-translate-x-full opacity-0",
              )}
            >
              <div className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 relative">
                {/* Close Button - Mobile Only (top left) */}
                <button
                  onClick={() => setIsFullPageMenuOpen(false)}
                  className="absolute top-4 left-4 lg:hidden text-white hover:opacity-80 transition-opacity z-10"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Main Navigation Links - Centered */}
                <nav className="w-full flex flex-col items-center">
                  <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 w-full flex flex-col items-center">
                    {MAIN_NAV_ITEMS.map((item) => (
                      <li key={item.label} className="w-full text-center">
                        <Link
                          href={item.href}
                          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold hover:opacity-80 transition-opacity block"
                          onClick={() => setIsFullPageMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right Section - Dark Background */}
            <div
              className={cn(
                "bg-gray-900 flex flex-col items-center justify-center transition-all duration-300 ease-in-out relative",
                "w-screen h-screen lg:w-1/3",
                "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-12",
                isFullPageMenuOpen
                  ? "translate-y-0 lg:translate-x-0 opacity-100"
                  : "translate-y-full lg:translate-x-full opacity-0",
              )}
            >
              {/* Close Button - Desktop Only (top right) */}
              <button
                onClick={() => setIsFullPageMenuOpen(false)}
                className="hidden lg:block absolute top-6 right-6 xl:top-8 xl:right-8 text-white hover:opacity-80 transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 lg:w-8 lg:h-8" />
              </button>

              {/* Call to Action */}
              <div className="text-center mb-6 sm:mb-7 md:mb-8 w-full px-2">
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-base mb-1.5 sm:mb-2">
                  Got An Idea?
                </p>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  Let's craft brilliance together!
                </h2>
              </div>

              {/* Get In Touch Button */}
              <Link
                href="/contact"
                className="bg-white border-2 border-red-500 text-red-500 px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-2.5 sm:py-3 md:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-base lg:text-lg hover:bg-red-50 transition-colors text-center"
                onClick={() => setIsFullPageMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Dropdown */}
      {isServicesDropdownOpen && (
        <div
          ref={servicesDropdownRef}
          className="fixed left-0 right-0 z-40 max-w-7xl mx-auto bg-background rounded-2xl border-border"
          style={{ top: '73px' }}
          onMouseEnter={() => {
            // Cancel any pending close timeout
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
            setIsServicesDropdownOpen(true);
          }}
          onMouseLeave={(e) => {
            // Check if moving back to services link
            const relatedTarget = e.relatedTarget as Node;
            const movingToLink = servicesLinkRef.current?.contains(relatedTarget);
            
            // Only close if not moving to services link
            if (!movingToLink) {
              closeTimeoutRef.current = setTimeout(() => {
                setIsServicesDropdownOpen(false);
                closeTimeoutRef.current = null;
              }, 200);
            }
          }}
        >
          <div className="container mx-auto px-6 sm:px-6 md:px-8 lg:px-6 xl:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 sm:py-10 md:py-12">
              {/* Left Section - Services List */}
              <div className="flex flex-col">
                <h3 className="text-sm font-medium text-muted-foreground mb-6 sm:mb-8">
                  Our services
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {SERVICES.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight hover:text-red-500 transition-colors block"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Section - Featured Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                {FEATURED_SERVICES.map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    className="group relative bg-muted rounded-2xl overflow-hidden block transition-transform hover:scale-[1.02]"
                    onClick={() => setIsServicesDropdownOpen(false)}
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
        </div>
      )}
      </>
    );
  };
