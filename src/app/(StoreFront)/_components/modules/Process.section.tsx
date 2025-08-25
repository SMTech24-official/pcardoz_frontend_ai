import { Calendar, FileText, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Consultation",
    description: "Free consultation to understand your needs",
    color: "[#D4AF37]",
  },
  {
    number: "2",
    title: "Choose Setup",
    description: "Select the best jurisdiction and license type",
    color: "[#D4AF37]",
  },
  {
    number: "3",
    title: "Documentation",
    description: "We handle all paperwork and approvals",
    color: "[#D4AF37]",
  },
  {
    number: "4",
    title: "Launch",
    description: "Your company is ready to operate",
    color: "[#D4AF37]",
  },
];

export function ProcessSection() {
  return (
    <div className="relative bg-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Simple 4-Step Process
          </h2>
          <p className="mt-4 text-md text-gray-800 max-w-3xl mx-auto">
            From consultation to company formation in just a few steps
          </p>
        </div>

        {/* Steps */}
        <div className="w-full mx-auto mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step number circle */}
                    <div
                      className={`flex items-center justify-center w-14 h-12 bg-${step.color} text-white rounded-full text-xl font-bold mb-4 relative z-10`}
                    >
                      {step.number}
                    </div>

                    {/* Icon + title */}
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-800">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting line */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="w-4/5 h-0.5 bg-gradient-to-r from-orange-200 via-blue-200 via-green-200 to-purple-200 rounded-full"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
          >
            Start Your Journey Today
          </a>
          <p className="mt-4 text-sm text-gray-600">
            No obligations, just expert guidance
          </p>
        </div>
      </div>
    </div>
  );
}
