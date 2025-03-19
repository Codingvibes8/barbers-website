"use client";


import { services, extraServices } from '@/constants/constants';
export default function ServicesPage() {
    
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
                    Our Services
                </h1>
                
                {/* Main Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div 
                            key={service.id} 
                            className="max-w-sm flex flex-col bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                        <div className="mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-600 text-xl">✦</span>
                                </div>
                            </div>
 
 
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-[1rem] dark:text-gray-400 flex-1">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Services Section */}
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mt-20 mb-12">
                    Premium Add-ons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extraServices.map((service) => (
                        <div 
                            key={service.id} 
                            className="h-full bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
                        >
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-600 text-xl">✦</span>
                                </div>
                            </div>
                            <h3 className="text-[1.4rem] font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-[0.8rem]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}