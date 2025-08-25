import {
  CheckCircle,
  Rocket,
  Globe,
  HeadsetIcon,
  Scale,
  Crown,
} from "lucide-react";

const features = [
  {
    title: "Complete Business Setup",
    description:
      "End-to-end business formation services for Mainland, Free Zone, and Offshore companies.",
    icon: CheckCircle,
    iconColor: "text-[#D4AF37]",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Fast Processing",
    description: "Quick turnaround times with our streamlined processes.",
    icon: Rocket,
    iconColor: "text-[#D4AF37]",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Global Reach",
    description:
      "Access to international markets with UAE as your business hub.",
    icon: Globe,
    iconColor: "text-[#D4AF37]",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Expert Support",
    description: "24/7 dedicated support from business setup specialists.",
    icon: HeadsetIcon,
    iconColor: "text-[#D4AF37]",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Legal Compliance",
    description:
      "Full regulatory compliance and legal documentation support.",
    icon: Scale,
    iconColor: "text-[#D4AF37]",
    bgColor: "bg-[#ffffff]",
  },
  {
    title: "Premium Services",
    description:
      "Additional services including visa, banking, and office solutions.",
    icon: Crown,
    iconColor: "text-[#D4AF37]",
    bgColor: "bg-[#ffffff]",
  },
];

export function Features() {
  return (
    <div className="relative bg-white py-16 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Why Choose UAE Business Hub?
          </h2>
          <p className="mt-4 text-md text-gray-800 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with expert human guidance to
            make business setup effortless.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#EFF1F5] p-6 rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col items-start ml-2">
                <div className="flex-shrink-0">
                  <div className={`p-2 rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
