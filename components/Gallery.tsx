import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { galleryItems } from '@/constants/constants'



type GalleryItem = {
    id: number;
    imageUrl: string;
    alt: string;
}


export default function BarberGallery() {
    return (
        <section className="w-full bg-gray-600 py-12 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
                <Carousel className="w-full">
                    <CarouselContent className="h-[70vh]">
                        {galleryItems.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="h-full border-none">
                                    <CardContent className="flex items-center justify-center p-0 h-full">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.alt}
                                            width={1200}
                                            height={700}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </section>
    )
}