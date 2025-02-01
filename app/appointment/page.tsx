




"use client";

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { supabase } from '@/lib/supabaseClient';
import { toast } from '@/components/ui/toast';
import { Calendar } from '@/components/Calender';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function AppointmentPage() {
    const { user } = useUser();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedBarber, setSelectedBarber] = useState<string>('');
    const [selectedService, setSelectedService] = useState<string>('');
    const [barbers, setBarbers] = useState<any[]>([]);
    const [services, setServices] = useState<any[]>([]);

    // Fetch barbers and services on component mount
    useState(() => {
        const fetchData = async () => {
            const { data: barbersData } = await supabase.from('barbers').select('*');
            const { data: servicesData } = await supabase.from('services').select('*');
            setBarbers(barbersData || []);
            setServices(servicesData || []);
        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        if (!user) {
            toast.error('You must be logged in to book an appointment.');
            return;
        }

        if (!selectedDate || !selectedBarber || !selectedService) {
            toast.error('Please fill out all fields.');
            return;
        }

        const { error } = await supabase.from('appointments').insert([
            {
                user_id: user.id,
                barber_id: selectedBarber,
                service_id: selectedService,
                appointment_date: selectedDate.toISOString(),
                status: 'pending',
            },
        ]);

        if (error) {
            toast.error('Failed to book appointment. Please try again.');
        } else {
            toast.success('Appointment booked successfully!');
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Select Date</h2>
                    <Calendar selected={selectedDate}  onSelect={setSelectedDate} />


                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Select Barber</h2>
                    <Select onValueChange={setSelectedBarber}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a barber" />
                        </SelectTrigger>
                        <SelectContent>
                            {barbers.map((barber) => (
                                <SelectItem key={barber.id} value={barber.id}>
                                    {barber.name} - {barber.specialization}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Select Service</h2>
                    <Select onValueChange={setSelectedService}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                    {service.name} - £{service.price}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button onClick={handleSubmit} className="w-full">
                    Book Appointment
                </Button>
            </div>
        </div>
    );
}