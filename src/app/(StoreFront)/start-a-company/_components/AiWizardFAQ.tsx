"use client";

import { useState } from "react";
import { ChevronDown, Lightbulb } from "lucide-react";

const faqs = [
  "What industry will your business operate in?",
  "Do you require a physical office space or can you work remotely?",
  "How many visas do you anticipate needing?",
  "What is your long-term growth strategy?",
];

export default function AiWizardFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-2 text-yellow-600">
          <Lightbulb className="w-6 h-6" />
          <h2 className="text-lg font-semibold">
            Help me decide (AI Wizard)
          </h2>
        </div>
        <p className="text-sm text-gray-600 mb-10">
          Answer a few questions and our AI will suggest the best company structure for you.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md bg-gray-50"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-yellow-600" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {/* Placeholder for answer/input field */}
                  <p>Answer goes here...</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="btn-gold mt-10 px-6 py-3 rounded-md font-semibold shadow hover:shadow-lg transition-shadow">
          Get Personalized Recommendation
        </button>
      </div>
    </div>
  );
}
