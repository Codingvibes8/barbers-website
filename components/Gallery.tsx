'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GalleryModal } from '@/components/GalleryModal'
import { galleryItems } from '@/constants/gallery-items'
import { GalleryItem } from '@/type/gallery'
import { cn } from '@/lib/utils'

const categories = ['all', 'haircut', 'beard', 'styling'] as const

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
    const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all')

    const filteredItems = galleryItems.filter(
        item => activeCategory === 'all' || item.category === activeCategory
    )

    const currentIndex = selectedImage ? filteredItems.findIndex(item => item.id === selectedImage.id) : -1

    return (
        <section className="w-full bg-gray-900 py-16">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Gallery</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                )}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            <Image
                                src={item.imageUrl || "/placeholder.svg"}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-medium">{item.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <GalleryModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    currentImage={selectedImage}
                    onPrevious={() => {
                        if (currentIndex > 0) {
                            setSelectedImage(filteredItems[currentIndex - 1])
                        }
                    }}
                    onNext={() => {
                        if (currentIndex < filteredItems.length - 1) {
                            setSelectedImage(filteredItems[currentIndex + 1])
                        }
                    }}
                    hasPrevious={currentIndex > 0}
                    hasNext={currentIndex < filteredItems.length - 1}
                />
            </div>
        </section>
    )
}

