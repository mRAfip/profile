"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Free for everyone",
    features: [
      "Unlimited members",
      "2 teams",
      "500 issues",
      "Slack and Github integrations",
    ],
  },
  {
    name: "Startup",
    monthlyPrice: "$8",
    yearlyPrice: "$6",
    features: [
      "All free plan features and...",
      "Mainline AI",
      "Unlimited teams",
      "Unlimited issues and file uploads",
      "Mainline Insights",
      "Admin roles",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$8",
    yearlyPrice: "$6",
    features: [
      "All free plan features and...",
      "Mainline AI",
      "Supermainline AGI",
      "Free daily catered lunch",
      "random HIPPA audits",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32", className)}>
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 max-w-5xl">
        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-sm sm:text-base leading-snug text-balance">
            Use Mainline for free with your whole team. Upgrade to enable
            unlimited issues, enhanced security controls, and additional
            features.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 grid items-start gap-4 sm:gap-5 text-start md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Startup"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Free" && (
                        <span className="text-muted-foreground">
                          per user/
                          {isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Free" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">Billed annually</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Startup" ? "default" : "outline"}
                >
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
