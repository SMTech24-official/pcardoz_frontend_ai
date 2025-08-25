import { Shield, TrendingUp } from "lucide-react";

export function VisionSection() {
  return (
    <section className="relative bg-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 gap-y-10 items-start">

          {/* Left Column - Text */}
          <div>
            <div className="flex items-center mb-2">
              <div className="h-1 w-8 bg-blue-900 mr-3"></div>
              <span className="text-sm font-semibold text-blue-900 tracking-wider uppercase">
                Strategic
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#D4AF37] sm:text-4xl">
              Vision
            </h2>
            <p className="text-gray-900 text-md mt-4 mb-4">
              Our vision is to be the leading co-working and entrepreneurship hub in Dubai, empowering startups, freelancers, and small businesses to achieve their fullest potential. We provide flexible and inspiring workspaces, combined with personalized mentorship and strategic guidance, to help our members grow with confidence.
            </p>
            <p className="text-gray-900 text-md">
              By building a vibrant and collaborative community, we create opportunities for networking, skill development, and innovation. Our goal is to foster an environment where ideas turn into impactful ventures, and where every member has the tools, support, and connections to succeed in Dubai’s dynamic business landscape.
            </p>

            {/* Key features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-2 bg-gray-100 rounded-lg mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dedicated Support</p>
                  <p className="text-sm text-gray-600 mt-1">Personalized guidance for your business needs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-gray-100 rounded-lg mr-4 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Growth Focused</p>
                  <p className="text-sm text-gray-600 mt-1">Strategies to scale your venture effectively</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative flex justify-end">
            <div className="relative shadow-lg">
              <img
                src="/images/dubai.png"
                alt="Dubai Skyline"
                className="rounded-3xl w-112 h-96 object-cover"
              />
            </div>
            <div className="shadow-md absolute -bottom-14 left-14 border border-white">
              <img
                src="/images/sheikh.png"
                alt="Business Meeting"
                className="rounded-2xl w-60 h-60 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
