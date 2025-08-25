import { Calendar } from "lucide-react";

export default function BookingCalender() {
    return (
        <div className="bg-transparent p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2 text-lg font-semibold text-yellow-600">
                <Calendar className="w-6 h-6" />
                <span>Book a Free Consultation</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
                Schedule a personalized meeting with our experts to discuss your company formation needs.
            </p>

            {/* Calendar mockup */}
            <div className="text-gray-800">
                <p className="font-semibold mb-2">October 2020</p>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                        <div key={day} className="font-semibold text-gray-600">
                            {day}
                        </div>
                    ))}
                    {[...Array(31)].map((_, i) => {
                        const date = i + 1;
                        return (
                            <div
                                key={date}
                                className={`p-2 rounded-full cursor-pointer ${date === 8
                                    ? "bg-yellow-400 text-white font-semibold"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                {date}
                            </div>
                        );
                    })}
                </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
                Our specialists are ready to guide you through every step. Secure your slot today!
            </p>

            <button className="btn-gold mt-4 w-full">
                Schedule Now
            </button>
        </div>
    );
}