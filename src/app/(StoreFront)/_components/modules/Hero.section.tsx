import { Building2, BarChart3, Users } from "lucide-react";

export function Hero() {
    return (
        <div
            className="relative min-h-2/3 bg-[url('/bg.png')] bg-cover bg-center pt-42 pb-64 px-4 sm:px-6 lg:px-8"
        // style={{
        //     backgroundImage: `url('/bg.png')`
        // background: 
        // `
        // radial-gradient(ellipse at left 40% top 40%, #515DEE66 0%, #ffffff 80%)
        // `,
        // radial-gradient(ellipse at left 40% bottom 40%, #515DEE66 0%, #ffffff 80%),
        // radial-gradient(ellipse at left 40% top 40%, #D4AF3766 0%, #ffffff 80%),
        // radial-gradient(ellipse at right 40% top 40%, #7A00DA66 0%, #ffffff 80%),
        // radial-gradient(ellipse at right 40% bottm 40%, #0A1F4466 0%, #ffffff 80%)
        // }}
        >
            <div className="container mx-auto text-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                        HI, I'm Peter. How can I help you today?
                    </h1>
                    <p className="max-w-2xl mx-auto mt-8 text-md text-gray-800">
                        Launching your business in the UAE has never been easier. Experience a fast, simple, and hassle-free setup process tailored just for you.
                    </p>
                </div>

                <div className="mt-42 grid gap-12 sm:grid-cols-1 md:grid-cols-3">
                    {/* Card 1: Start a business */}
                    <div className="bg-transparent border border-gray-200 px-4 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-gray-50 rounded-full">
                                <Building2 className="h-6 w-6 text-gray-800" />
                            </div>
                            <h3 className="mt-4 text-md font-semibold text-gray-900">
                                I want to start a business in Dubai
                            </h3>
                        </div>
                    </div>

                    {/* Card 2: Manage business */}
                    <div className="bg-transparent border border-gray-200 px-4 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-gray-50 rounded-full">
                                <BarChart3 className="h-6 w-6 text-gray-800" />
                            </div>
                            <h3 className="mt-4 text-md font-semibold text-gray-900">
                                I want to manage my existing business
                            </h3>
                        </div>
                    </div>

                    {/* Card 3: Co-working space */}
                    <div className="bg-transparent border border-gray-200 px-4 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-gray-50 rounded-full">
                                <Users className="h-8 w-6 text-gray-800" />
                            </div>
                            <h3 className="mt-4 text-md font-semibold text-gray-900">
                                I'm looking for a co-working space
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}