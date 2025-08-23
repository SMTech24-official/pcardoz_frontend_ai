export function PeterSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="mb-10 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Image placeholder - replace with actual image of Peter */}
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 h-96 lg:h-full w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-24 w-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    PC
                  </div>
                  <p className="text-gray-600 font-medium">Peter Cardoz</p>
                  <p className="text-sm text-gray-500 mt-2">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-1 w-8 bg-orange-500 mr-3"></div>
              <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">
                Leadership
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Focus on Your Core Business
            </h2>
            
            <div className="mt-6 text-lg text-gray-600">
              <p>
                We handle operational tasks, letting entrepreneurs focus on scaling and innovation.
              </p>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-600 italic">
                "Our mission is to remove the complexities of business setup and management, 
                allowing you to concentrate on what you do best - growing your business."
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}