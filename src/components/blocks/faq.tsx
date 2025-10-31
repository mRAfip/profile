import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Services",
    questions: [
      {
        question: "What services do you offer?",
        answer:
          "I provide UI/UX design, web development, mobile app development, and full product development services. I work on projects from initial design concepts to final deployment, including website design, mobile applications, and AI-powered features.",
      },
      {
        question: "Do you work on both web and mobile projects?",
        answer:
          "Yes, I design and develop websites and mobile applications. I can create responsive websites, iOS and Android mobile apps, and cross-platform solutions depending on your project needs.",
      },
      {
        question: "What is your design process?",
        answer:
          "My process starts with understanding your business goals and user needs. I create wireframes, design mockups, and prototypes. After design approval, I move to development, testing, and deployment. I keep you updated throughout the project.",
      },
    ],
  },
  {
    title: "Projects & Timeline",
    questions: [
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on scope. A simple website can take 2-4 weeks, while a complete product with design and development can take 8-12 weeks or more. I provide detailed timelines during our initial consultation.",
      },
      {
        question: "Do you handle the entire product development process?",
        answer:
          "Yes, I can handle the complete product development process from UI/UX design to final development and deployment. I also offer design-only or development-only services if you need specific parts of the process.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "I work with modern web technologies like React, Next.js, and TypeScript for web development. For mobile apps, I use React Native and native development. I also integrate AI features and third-party APIs as needed for your project.",
      },
    ],
  },
  {
    title: "Pricing & Getting Started",
    questions: [
      {
        question: "How do you price your projects?",
        answer:
          "Project pricing depends on scope, complexity, and timeline. I provide detailed quotes after understanding your requirements. You can book a meeting to discuss your project and get a custom estimate.",
      },
      {
        question: "Do you offer ongoing support after project completion?",
        answer:
          "Yes, I offer maintenance and support packages after project completion. This includes bug fixes, updates, and feature additions. We can discuss support options based on your needs.",
      },
      {
        question: "How do I get started?",
        answer:
          "Start by booking a meeting to discuss your project. I'll learn about your goals, requirements, and timeline. After our discussion, I'll provide a detailed proposal with pricing and timeline. You can schedule a meeting using the Book Meeting button on this page.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32", className)}>
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 max-w-5xl">
        <div className={cn("mx-auto grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-3 sm:space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
