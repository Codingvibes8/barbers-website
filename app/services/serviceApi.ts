import { Service, ServiceCategory } from '../types/service';

// In a real application, this would be an API call
export async function getServices(): Promise<Service[]> {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return [
        { id: '1', name: 'Classic Haircut', description: 'Traditional barbering techniques for a timeless look.', price: 30, duration: 30, category: 'haircuts', image: '/placeholder.svg?height=200&width=300' },
        { id: '2', name: 'Beard Trim', description: 'Expert shaping and grooming for your facial hair.', price: 20, duration: 20, category: 'facial-hair', image: '/placeholder.svg?height=200&width=300' },
        { id: '3', name: 'Hot Towel Shave', description: 'Luxurious straight razor shave with hot towel treatment.', price: 35, duration: 45, category: 'shaving', image: '/placeholder.svg?height=200&width=300' },
        { id: '4', name: 'Hair Coloring', description: 'Professional color services to enhance or change your look.', price: 60, duration: 90, category: 'color', image: '/placeholder.svg?height=200&width=300' },
        { id: '5', name: 'Kids Haircut', description: 'Gentle and fun haircuts for the little ones.', price: 20, duration: 30, category: 'haircuts', image: '/placeholder.svg?height=200&width=300' },
    ];
}

export async function getServiceCategories(): Promise<ServiceCategory[]> {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        { id: 'haircuts', name: 'Haircuts' },
        { id: 'facial-hair', name: 'Facial Hair' },
        { id: 'shaving', name: 'Shaving' },
        { id: 'color', name: 'Color Services' },
    ];
}
