import { Quote, Star } from "lucide-react";

export function ReviewSection() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by entrepreneurs and businesses worldwide
          </p>
        </div>

        {/* Review Carousel */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <Quote className="h-12 w-12 text-blue-100 mx-auto mb-6" />
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              It was a very good experience
            </h3>
            
            <p className="text-gray-600 text-lg italic max-w-2xl mx-auto">
              "Setting up my company in Dubai felt overwhelming at first, but Plan My Firm made it simple and stress-free. Their team guided me at every step and the AI tool helped me choose the right license in minutes."
            </p>
            
            <div className="mt-8">
              <div className="bg-blue-100 rounded-full p-2 inline-block">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold text-xl mx-auto">
                  L
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mt-4">Leo Business</h4>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            <button className="w-3 h-3 rounded-full bg-orange-500"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-orange-500">500+</p>
            <p className="text-gray-600">Businesses Supported</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">24h</p>
            <p className="text-gray-600">Average Setup Time</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </div>
  );
}