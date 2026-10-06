export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$25",
    period: "/ truck / mo",
    description: "Essential ELD tools for small fleets.",
    features: [
      "FMCSA compliant ELD",
      "Hours of Service logging",
      "Driver mobile app",
      "Real-time GPS tracking",
      "Fleet dashboard",
      "Basic reports",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$35",
    period: "/ truck / mo",
    description: "More control and visibility for growing fleets.",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced reporting",
      "IFTA mileage reports",
      "Extended data history",
      "Integrations",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Flexible solutions for larger fleet operations.",
    features: [
      "Everything in Growth",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "Fleet onboarding",
      "Custom configuration",
    ],
  },
];