'use client';

import { useState } from 'react';
import { Bot, Plus, X } from 'lucide-react';

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [activeTab, setActiveTab] = useState('faqs');

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

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="relative bg-white py-16 sm:py-16 lg:py-24" id="help-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-black mb-4 lg:text-3xl">
            Help Center
          </h2>
          <p className="text-md text-gray-800">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-1 max-w-md w-full">
            <button
              onClick={() => setActiveTab('faqs')}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${activeTab === 'faqs'
                  ? 'bg-[#D4AF37] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              FAQs
            </button>
            <button
              onClick={() => {
                setActiveTab('chat');
                setShowChat(true);
              }}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${activeTab === 'chat'
                  ? 'bg-[#D4AF37] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              AI Chat
            </button>
          </div>
        </div>

        {/* FAQs List */}
        <div className="max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-4 py-4 mb-2 bg-gray-50 rounded-xl text-left hover:bg-gray-50 transition-colors group"
              >
                <span className="font-semibold text-gray-900 text-md pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <X className="h-5 w-5 text-gray-800" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-800" />
                  )}
                </div>
              </button>
              {activeIndex === index && (
                <div className="pb-6 pr-12">
                  <p className="text-gray-600 px-4 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AI Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
              </div>
              <button
                onClick={() => {
                  setShowChat(false);
                  setActiveTab('faqs');
                }}
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
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-400 transition-colors">
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