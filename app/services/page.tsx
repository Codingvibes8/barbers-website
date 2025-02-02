


"use client";

import Image from 'next/image';

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: 'Hot Shave',
            description:
                'Experience the classic barbering tradition with a hot shave. Relax as we apply a steaming hot lather and use a straight razor for the closest shave possible. A therapeutic mini spa treatment for your face.',
            image: '/hotshave.jpg', // Replace with your image path
        },
        {
            id: 2,
            title: 'Beard Trimming and Styling',
            description:
                'From shaping and fading to intricate detailing, we specialize in keeping your beard sharp and stylish. A well-styled beard can transform your look and boost your confidence.',
            image: '/haircut1.jpg',
        },
        {
            id: 3,
            title: 'Hair Coloring',
            description:
                'Express yourself with our hair coloring services. Whether it’s subtle gray coverage or bold, vibrant colors, we help you achieve the perfect look.',
            image: '/haircut10.jpg',
        },
        {
            id: 4,
            title: 'Haircuts with Different Styles and Shapes',
            description:
                'From classic cuts to trendy fades, we tailor each haircut to suit your face shape, hair texture, and personal style. Your perfect cut starts here.',
            image: '/different-styles.jpg',
        },
        {
            id: 5,
            title: 'Hair Treatments',
            description:
                'Pamper your hair with deep conditioning and scalp massages. Our treatments leave your hair shiny, manageable, and healthy, while scalp massages relieve stress and improve circulation.',
            image: '/haircut4.jpg',
        },
        {
            id: 6,
            title: 'Styling for Special Occasions',
            description:
                'Whether it’s a wedding, prom, or any special event, we create the perfect look for your big day. From intricate updos to smooth blowouts, we’ve got you covered.',
            image: '/nels-6.jpg', // Replace with your image path
        },
    ];

    const extraServices = [
        {
            id: 1,
            title: 'Scalp Massages Integrated Into Haircuts',
            description:
                'Turn an ordinary haircut into a luxurious experience with a relaxing scalp massage. Leave feeling pampered and refreshed.',
        },
        {
            id: 2,
            title: 'Beard Treatments (Beyond Trimming)',
            description:
                'Elevate your beard care with oil applications and deep conditioning masks. A healthy beard is a happy beard!',
        },
        {
            id: 3,
            title: 'Personalized Hair Color Consultations',
            description:
                'Get expert advice on hair color choices tailored to your skin tone, lifestyle, and preferences. Achieve a look that enhances your natural beauty.',
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h2>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold text-center text-gray-900 mt-16 mb-8">
                    Extra Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {extraServices.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}