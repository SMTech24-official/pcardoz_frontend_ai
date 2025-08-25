import { Building2, BarChart3, Users } from "lucide-react";

export function Hero() {
    return (
        <div
            className="relative min-h-2/3 bg-[url('/bg.png')] bg-cover bg-center pt-42 pb-64 px-4 sm:px-6 lg:px-8"
        >
            <div className="container mx-auto text-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                        Start your Business Journey
                    </h1>
                    <p className="max-w-2xl mx-auto mt-8 text-md text-gray-800">
                        Embark on your entrepreneurial path with Smart Company Formation. Provide your
                        details, leverage uor AI and book a free consultation to make information
                        decisions.
                    </p>
                </div>
            </div>
        </div>
    );
}