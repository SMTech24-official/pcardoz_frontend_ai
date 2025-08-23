import { Globe, Rocket, User, Users } from "lucide-react";

export function WhoIsItForSection() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Who Is It For?
            </h2>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Rocket className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Startups</h3>
                  <p className="mt-1 text-gray-600">looking for cost-effective workspace</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Freelancers</h3>
                  <p className="mt-1 text-gray-600">needing a professional setup</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Growing Teams</h3>
                  <p className="mt-1 text-gray-600">needing privacy and scalability</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Entrepreneurs</h3>
                  <p className="mt-1 text-gray-600">launching in the UAE</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
              >
                Find Your Space
              </a>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="mt-10 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              {/* Image placeholder - replace with your actual image */}
              <div className="bg-gradient-to-br from-gray-100 to-blue-100 h-96 lg:h-full w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Our Diverse Community</p>
                  <p className="text-sm text-gray-500 mt-2">Replace with your actual image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}