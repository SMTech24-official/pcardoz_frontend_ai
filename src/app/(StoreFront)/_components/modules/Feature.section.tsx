import { CheckCircle, Rocket, Globe, HeadsetIcon, Scale, Crown } from "lucide-react";

export function Features() {
    return (
        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Choose UAE Business Hub?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We combine cutting-edge AI technology with expert human guidance to make business setup effortless.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Complete Business Setup */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <CheckCircle className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Complete Business Setup</h3>
                                <p className="mt-2 text-gray-600">
                                    End-to-end business formation services for Mainland, Free Zone, and Offshore companies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fast Processing */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <Rocket className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Fast Processing</h3>
                                <p className="mt-2 text-gray-600">
                                    Quick turnaround times with our streamlined processes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Global Reach */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <Globe className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Global Reach</h3>
                                <p className="mt-2 text-gray-600">
                                    Access to international markets with UAE as your business hub.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Expert Support */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <HeadsetIcon className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Expert Support</h3>
                                <p className="mt-2 text-gray-600">
                                    24/7 dedicated support from business setup specialists.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Compliance */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <Scale className="h-6 w-6 text-red-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Legal Compliance</h3>
                                <p className="mt-2 text-gray-600">
                                    Full regulatory compliance and legal documentation support.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Services */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-yellow-100 rounded-lg">
                                    <Crown className="h-6 w-6 text-yellow-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Premium Services</h3>
                                <p className="mt-2 text-gray-600">
                                    Additional services including visa, banking, and office solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}