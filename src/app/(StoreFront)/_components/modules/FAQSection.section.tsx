'use client';

import { useState } from 'react';
import { Bot, ChevronDown, ChevronUp, X } from 'lucide-react';

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);

  const faqs = [
    {
      question: "How long does it take to set up a company in Dubai?",
      answer: "Depending on the license type and approvals needed, it can take anywhere from 2 to 10 business days."
    },
    {
      question: "Can I own 100% of my company in the UAE?",
      answer: "Yes, in many free zones and for certain activities, 100% foreign ownership is allowed. Our experts will guide you to the best option for your business."
    },
    {
      question: "Do you help with bank account opening?",
      answer: "Absolutely! We provide complete assistance with corporate bank account opening, including documentation preparation and bank introductions."
    },
    {
      question: "What types of workspaces do you offer?",
      answer: "We offer flexible options including hot desks, dedicated desks, private offices, team suites, and virtual office solutions."
    },
    {
      question: "Can I book a tour before I commit?",
      answer: "Yes, we encourage you to book a free tour of our facilities to experience our workspace environment firsthand."
    },
    {
      question: "Is internet and utilities included?",
      answer: "Yes, all our workspace plans include high-speed internet, utilities, maintenance, and access to common areas and meeting rooms."
    },
    {
      question: "Can I upgrade from a shared desk to a private office later?",
      answer: "Certainly! We offer flexible upgrade options as your business grows and your space requirements change."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, bank transfers, and online payment platforms for your convenience."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer flexible cancellation policies depending on your membership type. Most plans require a 30-day notice for cancellation."
    }
  ];

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32" id="help-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Help Center
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Any questions or remarks? Just write us a message!
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Help</h3>
              
              {/* FAQ Button */}
              <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg mb-4 hover:bg-blue-100 transition-colors">
                <span className="font-medium text-gray-900">FAQs</span>
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              </button>
              
              {/* AI Chat Button */}
              <button 
                onClick={() => setShowChat(true)}
                className="w-full flex items-center justify-between p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <span className="font-medium text-gray-900">AI Chat</span>
                <Bot className="h-5 w-5 text-orange-500" />
              </button>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Prefer direct contact?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our team is available to answer your questions personally.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-gray-700">Hello! I'm here to help with your questions about business setup in Dubai. What would you like to know?</p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-400 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}