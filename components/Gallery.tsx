



import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { galleryData } from '@/constants/galleryData';



type GalleryItem = {
    imageLink: string;
    src: { [key: string]: string };
};



const GallerySlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="w-full h-[70vh] bg-gray-100">
            <Slider {...settings} className="h-full">
                {galleryData.map((item: GalleryItem, index: number) => (
                    <div key={index} className="h-[70vh] relative">
                        <Image
                            src={Object.values(item.src)[0]}
                            alt={`Gallery image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority={index === 0}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default GallerySlider;

