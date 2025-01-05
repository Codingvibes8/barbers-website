import { Suspense } from 'react';
import { getServices, getServiceCategories } from '../services/serviceApi';
import ServicesClient from './ServicesClient';
import { ServicesSkeleton } from './ServicesSkeleton';

export default async function ServicesWrapper() {
    const servicesPromise = getServices();
    const categoriesPromise = getServiceCategories();

    const [services, categories] = await Promise.all([servicesPromise, categoriesPromise]);

    return (
        <Suspense fallback={<ServicesSkeleton />}>
            <ServicesClient initialServices={services} categories={categories} />
        </Suspense>
    );
}

