
import React from 'react';
import Image from "next/image";
import {ServiceItems} from '@/constants/constants';

type Props={
    imgUrl:string;
    title:string;
    desc:string;
    price:string;
}


const ServiceSection = () => {
    return (
        <section className='max-w-7xl relative'>
            <div className={'w-full mx-auto'}>
                <h1 className='text-3xl flex items-center justify-center
            text-gray-800 font-serif py-5'>
                    Services
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 items-center  bg-gray-700">

                {ServiceItems.map((service, idx) => (
                    <div key={idx}
                         className="border border-gray-200 p-4 rounded shadow hover:shadow-md h transition-shadow">

                        <h3 className="mt-4 text-lg font-semibold text-white tracking-wider">{service.title}</h3>
                        <p className="mt-2 text-sm text-white tracking-wider">{service.desc}</p>
                        <p className={'mt-4 text-[1rem] text-white font-bold'}>{service.price}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default ServiceSection;

