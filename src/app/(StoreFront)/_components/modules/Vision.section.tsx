import { Target, Lightbulb, Users, Rocket } from "lucide-react";

export function VisionSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* Image placeholder - replace with your actual image */}
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 h-96 lg:h-full w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Target className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Strategic Vision Image</p>
                  <p className="text-sm text-gray-500 mt-2">Replace with your actual image</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl -z-10"></div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-1 w-8 bg-orange-500 mr-3"></div>
              <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
                Strategic
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vision
            </h2>
            
            <div className="mt-6 space-y-5 text-lg text-gray-600">
              <p>
                Our vision is to be the leading co-working and entrepreneurship hub in Dubai, 
                empowering startups, freelancers, and small businesses to achieve their fullest 
                potential. We provide flexible and inspiring workspaces, combined with personalized 
                mentorship and strategic guidance, to help our members grow with confidence.
              </p>
              <p>
                By building a vibrant and collaborative community, we create opportunities for 
                networking, skill development, and innovation. Our goal is to foster an environment 
                where ideas turn into impactful ventures, and where every member has the tools, 
                support, and connections to succeed in Dubai's dynamic business landscape.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
              >
                Join Our Community
                <Rocket className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
            
            {/* Stats or features section */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Members</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">200+</p>
                  <p className="text-sm text-gray-600">Startups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}