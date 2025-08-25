import { Globe, Rocket, User, Users } from "lucide-react";

export function WhoIsItForSection() {
  const items = [
    {
      icon: Rocket,
      text: "Startups looking for cost-effective workspace",
    },
    {
      icon: User,
      text: "Freelancers needing a professional setup",
    },
    {
      icon: Users,
      text: "Growing teams needing privacy and scalability",
    },
    {
      icon: Globe,
      text: "Entrepreneurs launching in Dubai, UAE",
    },
  ];

  return (
    <div className="relative bg-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl font-bold tracking-tight text-center text-[#D4AF37] sm:text-3xl">
          Who Is it For?
        </h2>

        {/* Grid Items */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-xl shadow-sm px-2 py-6 bg-white border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-left">
                <item.icon className="h-12 w-12 text-[#D4AF37]" />
                <p className="mt-4 text-base font-medium text-gray-700">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
