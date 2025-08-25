import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column - Brand and Social */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-md leading-relaxed max-w-md">
              Launching your business in the UAE has never been easier. Experience a fast, simple, and hassle-free setup process tailored just for you.
            </p>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  <span className="text-gray-700">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  <span className="text-gray-700">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span className="text-gray-700">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Company Links */}
          <div className="lg:ml-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Start a Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Compare Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Office Spaces
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQs / Chat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Copyright © 2020. LogoIpsum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}