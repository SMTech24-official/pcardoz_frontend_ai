import { Calendar, User } from "lucide-react";
import DetailsForm from "./_components/DetailsForm";
import BookingCalender from "./_components/BookingCalender";
import AiWizardFAQ from "./_components/AiWizardFAQ";

export default function StartACompanyPage() {
    return (
        <div className="relative min-h-[80vh] bg-[url('/bg.png')] bg-cover bg-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                        Start your Business Journey
                    </h1>
                    <p className="max-w-2xl mx-auto mt-6 text-base text-gray-600">
                        Embark on your entrepreneurial path with Smart Company Formation. Provide your
                        details, leverage our AI and book a free consultation to make informed
                        decisions.
                    </p>
                </div>

                {/* Two-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    <DetailsForm />

                    <BookingCalender />

                </div>

                {/* <AiWizardFAQ /> */}

            </div>

            {/* Tailwind utilities for inputs & buttons */}
            {/* <style jsx>{`
        .input-style {
          @apply w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-700;
        }
        .input-style:focus {
          @apply outline-none border-yellow-500 ring-2 ring-yellow-400/40 bg-white;
        }
        .btn-gold {
          @apply bg-yellow-500 text-white py-3 px-6 rounded-md font-semibold transition-colors hover:bg-yellow-600;
        }
      `}</style> */}
        </div>
    );
}
