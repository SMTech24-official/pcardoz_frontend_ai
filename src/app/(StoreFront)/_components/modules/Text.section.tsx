import { Building2, Users, Target } from "lucide-react";

export function TextSection() {
    return (
        <div className="relative bg-white py-16 sm:py-16 lg:py-24">
            <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <h2 className="text-2xl font-bold text-center tracking-tight text-[#D4AF37] sm:text-3xl">
                            Where Your Business Finds Its Space.
                        </h2>
                        <div className="max-w-4xl mx-auto mt-8 text-md text-gray-900 space-y-6 text-center">
                            <p>
                                At our core, we're more than a co-working space we're a full-service partner for building and growing your business in Dubai.
                            </p>
                            <p>
                                Driven by our mission to simplify entrepreneurship, we provide modern workspaces within a vibrant community, along with all the essential services you need under one roof. From business licensing and visa processing to legal support, accounting, and even a professional podcast studio, we've designed everything to let founders focus on what matters most: growth.
                            </p>
                            <p>
                                Whether you're launching your first venture or scaling to the next level, we're here to support your journey every step of the way.
                            </p>
                        </div>
                        
                        {/* <div className="mt-10">
                            <a
                                href="#"
                                className="rounded-md bg-orange-500 px-5 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
                            >
                                Explore Our Spaces
                            </a>
                        </div> */}
                    </div>
                    
                    {/* <div className="mt-10 lg:col-span-5 lg:mt-0">
                        <div className="flex flex-col space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Building2 className="h-6 w-6 text-blue-600" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Premium Workspaces</h3>
                                    <p className="mt-2 text-gray-600">
                                        Modern, flexible environments designed for productivity and collaboration.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-green-100 rounded-lg">
                                        <Users className="h-6 w-6 text-green-600" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Vibrant Community</h3>
                                    <p className="mt-2 text-gray-600">
                                        Connect with like-minded entrepreneurs and professionals.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <Target className="h-6 w-6 text-orange-600" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Growth Focused</h3>
                                    <p className="mt-2 text-gray-600">
                                        Everything you need to focus on scaling your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
    );
}