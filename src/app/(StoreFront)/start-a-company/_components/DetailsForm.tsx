import { User } from "lucide-react";

export default function DetailsForm() {
    return (

        <form className="space-y-6 bg-transparent p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2 text-lg font-semibold text-yellow-600">
                <User className="w-6 h-6" />
                <span>Your Details</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
                Please fill out form below to help us understand your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your full name" className="input-style" />
                <input type="email" placeholder="Enter your email" className="input-style" />
                <input type="tel" placeholder="+1 (555) 123-4567" className="input-style" />
                <select className="input-style">
                    <option>Select your nationality</option>
                </select>
                <select className="input-style">
                    <option>Select your budget range</option>
                </select>
                <select className="input-style">
                    <option>Select business type</option>
                </select>
            </div>

            <textarea
                placeholder="Tell us more about your business idea or specific requirements"
                className="input-style h-24 mt-2 resize-none"
            />

            <button type="submit" className="btn-gold w-full mt-4">
                Submit your Inquiry
            </button>
        </form>
    );
}