import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function PeterSection() {
  return (
    <div className="relative bg-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
          {/* Left Side - Headline */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              Focus on Your core <br />
              <span className="text-[#D4AF37]">Business</span>
            </h2>
          </div>

          {/* Middle - Image */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-96 h-96">
              <Image
                src="/images/peter.png"
                alt="Peter Cardoz"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left flex flex-col justify-between gap-8">
            <div className="text-md text-gray-900 mb-8">
              We handle operational tasks, letting entrepreneurs focus on scaling
              and innovation.
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">Peter Cardoz</h3>
              <p className="text-gray-800 text-md">Founder &amp; CEO</p>
              <div className="h-[1px] w-16 bg-[#D4AF37] mr-3 mt-1 mb-1"></div>
              <div className="h-[1px] w-14 bg-[#D4AF37] ml-12"></div>


              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37] text-white hover:opacity-80 transition"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
