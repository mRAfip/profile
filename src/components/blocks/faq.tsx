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
    title: "Support",
    questions: [
      {
        question: "How do I update my account without breaking my laptop?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
      },
      {
        question: "Is support free, or do I need to Google everything?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
      },
      {
        question: "Are you going to be subsumed by AI?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
      },
    ],
  },
  {
    title: "Your account",
    questions: [
      {
        question: "Is support free, or do I need to Google everything?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
      },
      {
        question: "Are you going to be subsumed by AI?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
      },
    ],
  },
  {
    title: "Other questions",
    questions: [
      {
        question: "Is support free, or do I need to Google everything?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
      },
      {
        question: "Are you going to be subsumed by AI?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
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
