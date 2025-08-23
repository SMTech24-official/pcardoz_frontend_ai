import { Shield, TrendingUp, HeartHandshake, Sparkles } from "lucide-react";

export function MissionSection() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-1 w-8 bg-blue-500 mr-3"></div>
              <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">
                Core
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mission
            </h2>
            
            <div className="mt-6 space-y-5 text-lg text-gray-600">
              <p>
                Plan My Firm is dedicated to providing affordable and flexible co-working spaces that adapt to the diverse needs of today's entrepreneurs, freelancers, and small businesses. Alongside our modern work environments, we offer exclusive mentorship in sales and marketing, equipping our members with the strategies, insights, and confidence to scale their ventures effectively.
              </p>
              <p>
                Our holistic approach ensures that every aspect of the workspace experience fosters productivity, sparks creativity, and supports sustainable business growth. By building a collaborative and supportive community, we aim to nurture a thriving network of innovators in Dubai, offering them the resources, guidance, and opportunities they need to achieve lasting success.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
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
            
            {/* Key features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dedicated Support</p>
                  <p className="text-sm text-gray-600 mt-1">Personalized guidance for your business needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-lg mr-4 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Growth Focused</p>
                  <p className="text-sm text-gray-600 mt-1">Strategies to scale your venture effectively</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* Image placeholder - replace with your actual image */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 h-96 lg:h-full w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <HeartHandshake className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Our Mission in Action</p>
                  <p className="text-sm text-gray-500 mt-2">Replace with your actual image</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl -z-10"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-4 max-w-xs">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">95%</p>
                    <p className="text-sm text-gray-600">Member Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}