import { Scissors, BeakerIcon as Beard, SprayCanIcon, Brush } from 'lucide-react'
import React from 'react'
   
interface Service {
    title: string
    description: string
    price: number
    icon: React.ReactNode
}

const services: Service[] = [
    {
        title: "CLASSIC HAIRCUT",
        description: "Precision cut and style with attention to detail",
        price: 35.99,
        icon: <Scissors className="w-6 h-6" />
    },
    {
        title: "BEARD TRIM",
        description: "Professional beard shaping and grooming",
        price: 25.99,
        icon: <Beard className="w-6 h-6" />
    },
    {
        title: "HAIR COLORING",
        description: "Premium hair coloring and highlighting services",
        price: 65.99,
        icon: <SprayCanIcon className="w-6 h-6" />
    },
    {
        title: "HOT TOWEL SHAVE",
        description: "Traditional hot towel shave experience",
        price: 29.99,
        icon: <Brush className="w-6 h-6" />
    }
]

export default function ServicesSection() {
    return (
        <section className="py-16 relative min-h-screen max-w-[1536px] ">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold dark:text-white mb-4">Our Services</h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-gray-800/50 p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 ring-4 ring-amber-500"
                        >
                            <div className="mb-4 flex items-center justify-center text-primary">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  £{service.price.toFixed(2)}
                </span>
                                <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                                    Book Now
                                </button>
                            </div>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

