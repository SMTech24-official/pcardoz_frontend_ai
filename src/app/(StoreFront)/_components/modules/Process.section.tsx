import { Calendar, FileText, CheckCircle, Rocket } from "lucide-react";

export function ProcessSection() {
    return (
        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Simple 4-Step Process
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        From consultation to company formation in just a few steps
                    </p>
                </div>

                <div className="mt-16 lg:mt-20">
                    {/* Process Steps */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Step 1: Consultation */}
                        <div className="relative">
                            <div className="absolute -left-4 top-0 hidden md:flex items-center justify-center h-full">
                                <div className="h-full w-0.5 bg-orange-200"></div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-xl font-bold mb-4 relative z-10">
                                    1
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="p-3 bg-orange-100 rounded-full mb-0">
                                        <Calendar className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Consultation</h3>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    Free consultation to understand your needs
                                </p>
                            </div>
                        </div>

                        {/* Step 2: Choose Setup */}
                        <div className="relative">
                            <div className="absolute -left-4 top-0 hidden md:flex items-center justify-center h-full">
                                <div className="h-full w-0.5 bg-blue-200"></div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-xl font-bold mb-4 relative z-10">
                                    2
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 rounded-full mb-0">
                                        <FileText className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Choose Setup</h3>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    Select the best jurisdiction and license type
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Documentation */}
                        <div className="relative">
                            <div className="absolute -left-4 top-0 hidden md:flex items-center justify-center h-full">
                                <div className="h-full w-0.5 bg-green-200"></div>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full text-xl font-bold mb-4 relative z-10">
                                    3
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 rounded-full mb-0">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Documentation</h3>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    We handle all paperwork and approvals
                                </p>
                            </div>
                        </div>

                        {/* Step 4: Launch */}
                        <div className="relative">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full text-xl font-bold mb-4 relative z-10">
                                    4
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-100 rounded-full mb-0">
                                        <Rocket className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Launch</h3>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    Your company is ready to operate
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connecting line for larger screens */}
                    <div className="hidden md:flex justify-center mt-8">
                        <div className="w-4/5 h-0.5 bg-gradient-to-r from-orange-200 via-blue-200 via-green-200 to-purple-200 rounded-full"></div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-white hover:bg-orange-400 transition-colors"
                    >
                        Start Your Journey Today
                    </a>
                    <p className="mt-4 text-sm text-gray-600">
                        No obligations, just expert guidance
                    </p>
                </div>
            </div>
        </div>
    );
}