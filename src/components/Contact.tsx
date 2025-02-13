/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from 'next/image';
import React from 'react';
import Terminal from '@/assets/terminal.png';
import ArrowUp from '@/assets/arrow-up.png';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formSchema = z.object({
    name: z.string().min(1, 'Full Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
});

const Contact = () => {
    const { register, handleSubmit, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success("Message sent successfully! We'll get back to you soon.");
                reset();
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to send message.');
            }
        } catch (error) {
            toast.error('An error occurred while sending the message.');
        }
    };

    return (
        <div className='w-full h-full md:px-20 py-2 px-1 flex flex-col'>
            <div className='relative h-full rounded-3xl w-full '>
                <Image src={Terminal} alt="Loading..." className="z-3 w-full h-full object-center" priority />
                <div className='z-5 top-0 left-0 px-16 py-16 w-full h-full absolute text-white sm:py-20'>
                    <div className='z-5 xl:px-80 md:px-10 '>
                        <h1 className='text-2xl font-extrabold mb-2 sm:text-4xl'>Let&lsquo;s talk</h1>
                        <h1 className='text-lg font-medium mb-2 sm:text-xl'>Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 mt-5'>
                            <label className='text-xl font-medium xl:my-2'>Name</label>
                            <input type='text' placeholder='Ex. John Doe' {...register('name')} className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' />
                            <label className='text-xl font-medium xl:my-2'>Email</label>
                            <input type='email' placeholder='Ex. john@example.com' {...register('email')} className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' />
                            {/* <label className='text-xl font-medium xl:my-2'>Subject</label>
                            <input type='text' placeholder='Ex. Project Inquiry' {...register('subject')} className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' /> */}
                            <label className='text-xl font-medium xl:my-2'>Your Message</label>
                            <textarea placeholder='Your message' {...register('message')} className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' />
                            <button type='submit' className='flex flex-row items-center justify-center gap-2 bg-white text-black py-2 text-2xl font-semibold px-4 rounded-lg xl:mt-5'>Send Message<Image src={ArrowUp} alt="Loading..." className="w-4 h-4" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
