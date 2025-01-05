import Image from 'next/image'
import {Button} from './ui/button'

export default function HeroSection() {
    return (
        <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
            <Image
                src="/haircut1.jpg"
                alt="Barber shop interior"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                    Experience the Art of Grooming
                </h1>
                <p className="mb-8 text-xl md:text-2xl">
                    Where style meets tradition in every cut
                </p>
                <Button size={'lg'} className="bg-blue-700 text-white font-bold text-2xl hover:bg-yellow-600">
                    Book Now
                </Button>
            </div>
        </div>
    )



}

