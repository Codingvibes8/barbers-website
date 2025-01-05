'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Service, ServiceCategory } from '../types/service';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ServicesClientProps {
    initialServices: Service[];
    categories: ServiceCategory[];
}

export default function ServicesClient({ initialServices, categories }: ServicesClientProps) {
    const [services, setServices] = useState(initialServices);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'price' | 'duration'>('price');
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 4;

    const filteredServices = services
        .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
        .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a[sortBy] - b[sortBy]);

    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                    <Select onValueChange={(value) => setSelectedCategory(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        placeholder="Search services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-auto"
                    />
                    <Select onValueChange={(value) => setSortBy(value as 'price' | 'duration')}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="price">Price</SelectItem>
                            <SelectItem value="duration">Duration</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentServices.map((service) => (
                        <Card key={service.id} className="flex flex-col">
                            <CardHeader>
                                <Image src={service.image} alt={service.name} width={300} height={200} className="rounded-t-lg" />
                                <CardTitle>{service.name}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-lg font-semibold">${service.price}</p>
                                <p className="text-sm text-gray-500">{service.duration} minutes</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Book Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {Array.from({ length: Math.ceil(filteredServices.length / servicesPerPage) }, (_, i) => (
                        <Button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            variant={currentPage === i + 1 ? 'default' : 'outline'}
                            className="mx-1"
                        >
                            {i + 1}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}

