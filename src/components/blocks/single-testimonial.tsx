"use client";

import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

type TestimonialVariant = 1 | 2 | 3;

type TestimonialContent = {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  ctaLabel: string;
  ctaHref: string;
};

const CONTENT_MAP: Record<TestimonialVariant, TestimonialContent> = {
  1: {
    quote:
      "I don’t think a day goes by without incorporating what I learned. I love being able to prompt AI to write a simple introduction or suggest improvements to awkward sentences. It also helps with organizing information and brainstorming ideas.",
    name: "Caroline G.",
    title: "Google Prompting Essentials • Graduate",
    avatarSrc: "/testimonials/amy-chase.webp",
    ctaLabel: "Book a call",
    ctaHref: "/contact",
  },
  2: {
    quote:
      "Working together transformed our product direction. Clear strategy, faster delivery, and a UI our customers love.",
    name: "Michael R.",
    title: "VP Product • SaaS Platform",
    avatarSrc: "/testimonials/kevin-yam.webp",
    ctaLabel: "Start your project",
    ctaHref: "/contact",
  },
  3: {
    quote:
      "From rough concept to production app in weeks. Communication was sharp, design thoughtful, and delivery dependable.",
    name: "Sofia L.",
    title: "Founder • Mobile Startup",
    avatarSrc: "/testimonials/kundo-marta.webp",
    ctaLabel: "Book a call",
    ctaHref: "/contact",
  },
};

export function SingleTestimonial({ variant = 1 }: { variant?: TestimonialVariant }) {
  const content = CONTENT_MAP[variant];

  return (
    <section className="mx-auto max-w-5xl py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
        {/* Quote block (restored) */}
        <div>
          <Image
            src="/qtz.png"
            alt="decorative quote"
            width={40}
            height={40}
            className="size-8 sm:size-10 object-contain"
            priority
          />
          <p className="mt-4 text-xl sm:text-xl md:text-2xl leading-relaxed text-balance">
            {content.quote}
          </p>
        </div>

        {/* Row: Avatar + Name/Title + CTA (kept) */}
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-18 sm:w-18 md:h-20 md:w-20">
              <Image
                src={content.avatarSrc}
                alt={content.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-semibold leading-tight">
                {content.name}
              </div>
              <div className="text-muted-foreground text-base sm:text-lg leading-snug">
                {content.title}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={content.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-black/90"
            >
              {content.ctaLabel}
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


