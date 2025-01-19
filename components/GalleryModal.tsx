'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GalleryItem } from "@/type/gallery"

interface GalleryModalProps {
    isOpen: boolean
    onClose: () => void
    currentImage: GalleryItem | null
    onPrevious: () => void
    onNext: () => void
    hasNext: boolean
    hasPrevious: boolean
}

export function GalleryModal({
                                 isOpen,
                                 onClose,
                                 currentImage,
                                 onPrevious,
                                 onNext,
                                 hasNext,
                                 hasPrevious,
                             }: GalleryModalProps) {
    if (!currentImage) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[90vw] h-[90vh] p-0">
                <div className="relative h-full w-full">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 z-50"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    <div className="relative h-full w-full">
                        <Image
                            src={currentImage.imageUrl || "/placeholder.svg"}
                            alt={currentImage.alt}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onPrevious}
                            disabled={!hasPrevious}
                            className="bg-background/80 backdrop-blur-sm"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onNext}
                            disabled={!hasNext}
                            className="bg-background/80 backdrop-blur-sm"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

