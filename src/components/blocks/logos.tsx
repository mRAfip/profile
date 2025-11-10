import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "OpenedX",
      logo: "/logos/openedx.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Blended",
      logo: "/logos/blended.svg",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Cyra",
      logo: "/logos/cyra.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "X and Y Learnings",
      logo: "/logos/xandy.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "HireYouSoon",
      logo: "/logos/hireyousoon.png",
      width: 120,
      height: 40,
      href: "#",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Amaala",
      logo: "/logos/amaala.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Phonix",
      logo: "/logos/phonix.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Rahmania",
      logo: "/logos/rahmania.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Relish",
      logo: "/logos/relish.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Retrofit",
      logo: "/logos/retrofit.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "SNGC",
      logo: "/logos/sngc.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Traveleo",
      logo: "/logos/traveleo.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Ftric",
      logo: "/logos/ftric.png",
      width: 120,
      height: 40,
      href: "#",
    },
  ];

  return (
    <section className="pb-20 sm:pb-24 md:pb-28 lg:pb-32 overflow-x-hidden">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-balance">
            Powering the world's best product teams.
            <br className="max-md:hidden" />
            <span className="text-black/50">
              From next-gen startups to established enterprises.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 5 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-5" />

          {/* Bottom row - 8 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-8"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <Link href={company.href} target="_blank" key={index}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain grayscale transition-all duration-300 hover:grayscale-0 dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden w-full overflow-hidden px-4">
        <Marquee direction={direction} pauseOnHover gradient={false} speed={40}>
          {companies.map((company, index) => (
            <Link
              href={company.href}
              target="_blank"
              key={index}
              className="mx-6 sm:mx-8 inline-block"
              aria-label={company.name}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain grayscale transition-all duration-300 hover:grayscale-0 dark:invert"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};
