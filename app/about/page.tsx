import React from 'react';

const AboutSection = () => {
    return (
       <>
           <section className={'max-w-[1536px]'}>
            <h1 className={'text-center text-4xl bg-gray-700 text-green-100 w-full py-20 font-bold '}>About Us</h1>
            <div className="flex flex-col md:flex-row bg-gray-700 gap-6">

                <div className="md:w-1/2">
                    <div className="rounded-t-2xl bg-white">
                    <img src="/haircut10.jpg" width={200} height={200} alt="Haircut-Image"
                         className="w-full mx-auto mb-6"/>
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center p-4 mb-6">
                    <div className={'flex flex-col items-center w-full mx-auto'}>
                        <div>
                        <span className={'text-4xl text-slate-200 font-bold italic'}>
                            Our Story
                        </span>

                            <p className={'text-[1rem] text-slate-200 max-w-prose mb-6 flex items-center mt-8'}>
                                At HipStyle, we’re more than just a place to get a fresh haircut.
                                Our journey began 15 years ago] when Nelson Richards
                                decided to create a space where gentlemen could experience
                                top-notch grooming services in a relaxed and welcoming environment.
                                Since then, we’ve been committed to delivering exceptional haircuts,
                                shaves, and beard trims.
                            </p>
                        </div>
                        <div>
                        <span className={'text-4xl text-slate-200 font-bold italic'}>
                            Our Values
                        </span>

                            <ol className={' mt-8 max-w-prose flex flex-col items-center'}>
                             <li className={'text-[1rem] text-slate-200'}>Quality: We take pride in our craft.
                                 Every scissor snip and razor stroke is
                                 executed with precision and care.
                                 Your satisfaction is our priority.
                             </li>
                                <li className={'text-[1rem] text-slate-200'}>
                                    Professionalism: Our team of skilled barbers is not only talented
                                    but also professional. Expect friendly conversations,attention to detail,
                                     and a warm smile when you walk through our doors

                                </li>
                                <li className={'text-[1rem] text-slate-200'}>
                                    Customer Experience: We believe that a great haircut is
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
