import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "I start by understanding your business goals, target audience, and project requirements. We discuss your vision and define the project scope.",
  },
  {
    number: "02",
    title: "Design & Wireframing",
    description:
      "I create wireframes and design mockups to visualize the product. We iterate on designs until we achieve the perfect user experience.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Once designs are approved, I build your product using modern technologies. I write clean, maintainable code and follow best practices.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "I thoroughly test the product across devices and browsers. After testing, we launch your product and ensure everything works smoothly.",
  },
  {
    number: "05",
    title: "Support & Maintenance",
    description:
      "I provide ongoing support and maintenance. I fix bugs, add new features, and help your product grow over time.",
  },
];

export default function ProcessPage() {
  return (
    <Background>
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 lg:pt-32 xl:pt-44">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
          <div className="mx-auto max-w-4xl text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              My Process
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-snug max-w-2xl mx-auto">
              A structured approach to delivering high-quality digital products from start to finish.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            {processSteps.map((step, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mt-8 sm:mt-10">
                    <DashedLine orientation="horizontal" className="max-w-2xl mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
}
