"use client";

import Image from 'next/image'
import React from 'react'
import Terminal from '@/assets/terminal.png'
import ArrowUp from '@/assets/arrow-up.png'

const Contact = () => {
    return (
        <div className='w-full h-full md:px-20 py-2 px-1 flex flex-col'>
            <div className='relative h-full rounded-3xl w-full '>

                <Image src={Terminal} alt="Loading..." className="z-3 w-full h-full object-center" priority />
                <div className='z-5 top-0 left-0 px-16 py-20 w-full h-full absolute text-white'>
                    <div className='z-5 xl:px-80 md:px-10 '>
                        <h1 className='text-4xl font-extrabold mb-2'>Let&lsquo;s talk</h1>
                        <h1 className='text-xl font-medium mb-2'>Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</h1>
                        <div className='flex flex-col gap-y-4 mt-5'>
                            <label className='text-xl font-medium xl:my-2'>Full Name</label>
                            <input type='text' placeholder='Ex. John Doe' className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' />
                            <label className='text-xl font-medium xl:my-2'>Email</label>
                            <input type='email' placeholder='Ex. john@example.com' className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' />
                            <label className='text-xl font-medium xl:my-2'>Your Message</label>
                            <textarea placeholder='Ex. John Doe' className='bg-transparent border-b-2 border-white py-2 px-4 focus:outline-none focus:border-blue-500' />
                            <button className='flex flex-row items-center justify-center gap-2 bg-white text-black py-2 text-2xl font-semibold px-4 rounded-lg xl:mt-5'>Send Message<Image src={ArrowUp} alt="Loading..." className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
