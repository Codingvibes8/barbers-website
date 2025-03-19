import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
       <>
           <section className={'max-w-[1536px] min-h-screen py-16 px-8 md:px-12 lg:px-20 xl:px-40 '}>
            <h1 className={'text-center text-4xl  text-green-900 dark:text-white font-bold mb-6'}>About Us</h1>
            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/2">
                    <div className="rounded-t-2xl bg-white">
                    <Image src="/haircut10.jpg" width={200} height={200} alt="Haircut-Image"
                         className="w-full mx-auto mb-6 aspect-square"/>
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center px-10 py-10 mb-6">
                    <div className={'flex flex-col items-center w-full mx-auto'}>
                        <div>
                        <span className={'text-3xl text-slate-800 dark:text-white font-bold italic mb-4'}>
                            Our Story
                        </span>

                            <p className={'text-[0.8rem] text-slate-100 max-w-prose mb-6 flex items-center'}>
                                At HipStyle, we’re more than just a place to get a fresh haircut.
                                Our journey began 15 years ago] when Nelson Richards
                                decided to create a space where gentlemen could experience
                                top-notch grooming services in a relaxed and welcoming environment.
                                Since then, we’ve been committed to delivering exceptional haircuts,
                                shaves, and beard trims.
                            </p>
                        </div>
                        <div>
                        <span className={'text-3xl text-gray-700 dark:text-white font-bold italic'}>
                            Our Values
                        </span>

                            <ol className={' mt-4 max-w-prose flex flex-col items-center text-gray-700 dark:text-white '}>
                             <li className={'text-[0.8rem] '}>
                             
                             <span className='font-bold'>Quality</span> : We take pride in our craft.
                                 Every scissor snip and razor stroke is
                                 executed with precision and care.
                                 Your satisfaction is our priority.
                             </li>
                                <li className={'text-[0.8rem]'}>
                                <span className='font-bold'>Professionalism</span>: Our team of skilled barbers is not only talented
                                    but also professional. Expect friendly conversations,attention to detail,
                                     and a warm smile when you walk through our doors

                                </li>
                                <li className={'text-[0.8rem] '}>
                                <span className='font-bold'>Customer Experience</span> : We believe that a great haircut is
                                    more than just aesthetics— it’s an experience.From the moment you step in,
                                    we want you to feel comfortable, pampered, and confident.

                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
           </section>
       </>

    );
};

export default AboutSection;
