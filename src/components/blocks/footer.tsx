import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Services", href: "/#feature-modern-teams" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/#resource-allocation" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Twitter", href: "https://twitter.com/yourusername" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { name: "GitHub", href: "https://github.com/yourusername" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 pt-12 py-8 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-32">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 space-y-3 sm:space-y-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
          Ready to build your product?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl text-sm sm:text-base leading-snug text-balance">
          I'm Muhammed. Let's discuss your UI/UX design and development project. From concept to launch, I'll help bring your vision to life.
        </p>
        <div>
          <Button size="lg" className="mt-4 bg-red-500 hover:bg-red-600 text-white" asChild>
            <a href="/contact">
              Book a Meeting
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-colors hover:text-red-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-colors hover:text-red-500"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-sm mt-6">
          © {new Date().getFullYear()} Muhammed. All rights reserved.
        </p>
      </nav>

    </footer>
  );
}
