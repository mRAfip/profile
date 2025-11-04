import React from "react";

import Link from "next/link";

import { Instagram, Linkedin, Twitter } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Location",
    content: (
      <p className="text-muted-foreground mt-3">
        Kozhikode, Kerala
        <br />
        Available for remote work
      </p>
    ),
  },
  {
    title: "Email me",
    content: (
      <div className="mt-3">
        <div>
          <p className="text-muted-foreground text-sm">Work opportunities</p>
          <Link
            href="mailto:work.rafipmkm@gmail.com"
            className="text-muted-foreground hover:text-red-500 transition-colors"
          >
            work.rafipmkm@gmail.com
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Follow me",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link
          href="https://x.com/ux_rafi"
          className="text-muted-foreground hover:text-red-500 transition-colors"
        >
          <Twitter className="size-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/uxrafi/" className="text-muted-foreground hover:text-red-500 transition-colors">
          <Linkedin className="size-5" />
        </Link>
        <Link href="https://www.instagram.com/mrafi.me/" className="text-muted-foreground hover:text-red-500 transition-colors">
          <Instagram className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 lg:pt-32 xl:pt-44">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 max-w-2xl">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          Get in Touch
        </h1>
        <p className="text-muted-foreground mt-3 sm:mt-4 text-center text-sm sm:text-base leading-snug font-medium lg:mx-auto">
          Let's discuss your project or answer any questions you may have.
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 xl:mt-20 flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-8 sm:my-10 md:my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Inquiries</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
