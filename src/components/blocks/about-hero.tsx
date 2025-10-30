import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "$150M",
    label: "Raised",
  },
  {
    value: "20K",
    label: "Companies",
  },
  {
    value: "1.3B",
    label: "Monthly transactions",
  },
  {
    value: "1.5K",
    label: "Connections per minute",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 flex max-w-5xl flex-col justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-20 lg:flex-row lg:items-center xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Democratising quality software
          </h1>

          <p className="text-muted-foreground mt-3 sm:mt-4 md:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Mainline is bringing modern software to life with AI magic.
          </p>

          <p className="text-muted-foreground mt-6 sm:mt-8 hidden max-w-lg space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-balance md:block lg:mt-12">
            At Mainline, we are dedicated to transforming the way teams plan,
            execute, and deliver projects. Our mission is to provide our
            customers with an unbeatable edge over delays, inefficiencies, and
            disorganisation through actionable insights and seamless
            collaboration. We’ll stop at nothing to give you the tools you need
            to get every project across the finish line.
            <br />
            <br />
            We’re customer-obsessed — investing the time to understand every
            aspect of your workflow so that we can help you operate better than
            ever before. We’re all in this together because your success is our
            success. In our history as a company, we’ve never lost a customer,
            because when your projects succeed, so do we.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
