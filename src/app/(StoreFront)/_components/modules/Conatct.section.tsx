export function ContactSection() {
  return (
    <div className="relative bg-white sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-black mb-4 lg:text-3xl">
            Contact Us
          </h2>
          <p className="text-gray-800 text-md max-w-2xl mx-auto">
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
        </div>

        <div className="w-full mx-auto flex flex-col md:flex-row lg:gap-16 items-start">
          {/* Left Column - Contact Form */}
          <div className="w-2/5 space-y-4">
            <div>
              <input
                type="text"
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="Name"
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <textarea
                rows={6}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                placeholder="Message"
              />
            </div>

            <button className="bg-yellow-500 text-white py-4 px-8 rounded-lg font-medium hover:bg-[#D4AF37] transition-colors">
              Send Message
            </button>
          </div>

          {/* Right Column - World Map */}
          <div className="w-3/5 mt-10 lg:mt-0 relative">
            <div className="relative bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 h-96 overflow-hidden">
              {/* World Map SVG */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified world map paths */}
                <path
                  d="M150 200 L200 180 L250 190 L300 170 L350 180 L400 160 L450 170 L500 150 L550 160 L600 140 L650 150 L700 130 L750 140 L800 120 L850 130"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 250 L150 230 L200 240 L250 220 L300 230 L350 210 L400 220 L450 200 L500 210 L550 190 L600 200 L650 180 L700 190 L750 170 L800 180 L850 160 L900 170"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M50 300 L100 280 L150 290 L200 270 L250 280 L300 260 L350 270 L400 250 L450 260 L500 240 L550 250 L600 230 L650 240 L700 220 L750 230 L800 210 L850 220 L900 200 L950 210"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Add more continent outlines */}
                <circle cx="200" cy="200" r="30" fill="#e2e8f0" opacity="0.5" />
                <circle cx="400" cy="180" r="40" fill="#e2e8f0" opacity="0.5" />
                <circle cx="600" cy="220" r="35" fill="#e2e8f0" opacity="0.5" />
                <circle cx="750" cy="160" r="25" fill="#e2e8f0" opacity="0.5" />
              </svg>

              {/* Country Flag Markers */}
              <div className="absolute inset-0">
                {/* Australia */}
                <div className="absolute top-16 right-16 flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                  <div className="w-6 h-4 bg-blue-600 rounded-sm mr-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-3 h-2 bg-blue-800"></div>
                    <div className="absolute top-1 left-1 text-white text-xs">★</div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Australia</span>
                </div>

                {/* Germany */}
                <div className="absolute top-24 left-1/3 flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                  <div className="w-6 h-4 rounded-sm mr-2 relative overflow-hidden">
                    <div className="h-1.5 bg-black"></div>
                    <div className="h-1 bg-red-600"></div>
                    <div className="h-1.5 bg-yellow-400"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Germany</span>
                </div>

                {/* Pakistan */}
                <div className="absolute bottom-20 right-1/3 flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                  <div className="w-6 h-4 bg-green-600 rounded-sm mr-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-4 bg-white"></div>
                    <div className="absolute top-1 left-0.5 text-green-600 text-xs">☪</div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Pakistan</span>
                </div>

                {/* Brazil */}
                <div className="absolute bottom-16 left-1/4 flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                  <div className="w-6 h-4 bg-green-500 rounded-sm mr-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500"></div>
                    <div className="absolute top-1 left-1 w-4 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-1.5 left-2 w-2 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Brazil</span>
                </div>

                {/* Canada */}
                <div className="absolute bottom-8 right-20 flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                  <div className="w-6 h-4 rounded-sm mr-2 relative overflow-hidden">
                    <div className="h-4 bg-white border border-gray-200"></div>
                    <div className="absolute top-0 left-0 w-2 h-4 bg-red-600"></div>
                    <div className="absolute top-0 right-0 w-2 h-4 bg-red-600"></div>
                    <div className="absolute top-1.5 left-2.5 text-red-600 text-xs">🍁</div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Canada</span>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-12 left-20 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute top-32 right-24 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-32 left-16 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-24 right-32 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute top-20 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}