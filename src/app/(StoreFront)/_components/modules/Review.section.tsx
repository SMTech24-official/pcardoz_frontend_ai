"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Emma T",
    role: "Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 4,
    title: "It was a very good experience",
    description: "The co-working space is modern, comfortable, and full of like-minded entrepreneurs. I've made valuable connections here that have directly helped my business grow.",
  },
  {
    id: 2,
    name: "Leo",
    role: "Business",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 4,
    title: "It was a very good experience",
    description: "Setting up my company in Dubai felt overwhelming at first, but Plan My Firm made it simple and stress-free. Their team guided me at every step and the AI tool helped me choose the right license in minutes.",
  },
  {
    id: 3,
    name: "Ravi K",
    role: "Owner",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 4,
    title: "It was a very good experience",
    description: "I booked my free consultation online and within a week my company was registered. The added visa assistance and bank account support saved me so much time.",
  },
  {
    id: 4,
    name: "Sophia M",
    role: "Entrepreneur",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    title: "Highly recommended!",
    description: "The professionalism and guidance exceeded my expectations. The process was smooth and transparent, I felt supported at every stage.",
  },
];

export function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative bg-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-black">
            Trusted by entrepreneurs and businesses worldwide
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center">
              {reviews.map((review, index) => {
                // style center vs side cards
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={review.id}
                    className="flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] px-4 transition-transform duration-500"
                  >
                    <div
                      className={`bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 ${isSelected
                        ? "scale-105 opacity-100 z-20 shadow-xl"
                        : "scale-90 opacity-50"
                        }`}
                    >
                      <div className="flex justify-between items-end gap-8">
                        <div className="flex flex-row items-center space-x-2">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900 text-lg">{review.name}</h4>
                            <p className="text-sm text-gray-800">{review.role}</p>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating
                                ? "fill-orange-400 text-orange-400"
                                : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{review.title}</h3>
                        <p className="text-gray-600 text-sm">{review.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
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
