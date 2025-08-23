import { Building2, BarChart3, Users } from "lucide-react";

export function Hero() {
    return (
        <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    HI, I'm Peter. How can I help you today?
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Launching your business in the UAE has never been easier. Experience a fast, simple, and hassle-free setup process tailored just for you.
                </p>
                
                <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                    {/* Card 1: Start a business */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-blue-50 rounded-full">
                                <Building2 className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                I want to start a business in Dubai
                            </h3>
                        </div>
                    </div>
                    
                    {/* Card 2: Manage business */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-green-50 rounded-full">
                                <BarChart3 className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                I want to manage my existing business
                            </h3>
                        </div>
                    </div>
                    
                    {/* Card 3: Co-working space */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-orange-50 rounded-full">
                                <Users className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                I'm looking for a co-working space
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}