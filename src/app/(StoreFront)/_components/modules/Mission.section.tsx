import { Shield, TrendingUp, HeartHandshake, Sparkles } from "lucide-react";

export function MissionSection() {
  return (
    <>
      <section className="relative bg-white sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 gap-y-10 items-start">

            {/* Right Column - Images */}
            <div className="relative flex justify-start">
              <div className="relative shadow-lg">
                <img
                  src="/images/dubai2.png"
                  alt="Dubai Skyline"
                  className="rounded-3xl w-112 h-96 object-cover"
                />
              </div>
              <div className="shadow-md absolute -bottom-14 right-14 border border-white">
                <img
                  src="/images/sheikh2.png"
                  alt="Business Meeting"
                  className="rounded-2xl w-60 h-60 object-cover"
                />
              </div>
            </div>

            {/* Left Column - Text */}
            <div>
              <div className="flex items-center mb-2">
                <div className="h-1 w-8 bg-blue-900 mr-3"></div>
                <span className="text-sm font-semibold text-blue-900 tracking-wider uppercase">
                  Core
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#D4AF37] sm:text-4xl">
                Mission
              </h2>
              <p className="text-gray-900 text-md mt-4 mb-4">
                Plan My Firm is dedicated to providing affordable and flexible co-working spaces that adapt to the diverse needs of today's entrepreneurs, freelancers, and small businesses. Alongside our modern work environments, we offer exclusive mentorship in sales and marketing, equipping our members with the strategies, insights, and confidence to scale their ventures effectively.
              </p>
              <p className="text-gray-900 text-md">
                Our holistic approach ensures that every aspect of the workspace experience fosters productivity, sparks creativity, and supports sustainable business growth. By building a collaborative and supportive community, we aim to nurture a thriving network of innovators in Dubai, offering them the resources, guidance, and opportunities they need to achieve lasting success.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-400 transition-colors"
                >
                  Explore Membership
                  <Sparkles className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-white px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Book a Tour
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}