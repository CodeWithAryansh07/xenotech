"use client"

import React from 'react';
import crossStatic from '@/assets/cross.png';
import Image from 'next/image';
import { HyperText } from '@/components/magicui/hyper-text';
import { MagneticText } from './MagneticText';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/Store';

const Navbar = () => {

    const { open, setOpen } = useStore();

    const handleClick = () => {
        setOpen();
    };

    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0,
            transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
            }
        },
        exit: {
            y: "-100%",
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className='flex flex-row justify-between items-center select-none p-4 bg-[#1E1E1E] h-24 w-full text-white px-14 tracking-widest'>
            <div className='font-bold text-3xl'>XenoTech</div>
            <div className='flex font-bold text-2xl hover:underline cursor-pointer' onClick={handleClick}>
                Menu
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className='absolute z-10 select-none w-full h-full top-0 left-0 text-white bg-[#1E1E1E] flex flex-col'
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className='flex items-center justify-end px-10 h-16 text-white w-full pt-5'>
                            <Image src={crossStatic} alt="Loading..." className="w-14 h-14 object-contain cursor-pointer" onClick={handleClick} />
                        </div>
                        <div className='flex flex-col justify-center items-center flex-grow'>
                            <ul className='flex flex-col w-full h-full justify-center items-center space-y-4 text-2xl'>
                                <li className='hover:underline cursor-pointer'>
                                    <MagneticText>
                                        <HyperText>Home</HyperText>
                                    </MagneticText>
                                </li>
                                <li className='hover:underline cursor-pointer'>
                                    <MagneticText>
                                        <HyperText>Our Projects</HyperText>
                                    </MagneticText>
                                </li>
                                <li className='hover:underline cursor-pointer'>
                                    <MagneticText>
                                        <HyperText>Our Team</HyperText>
                                    </MagneticText>
                                </li>
                                <li className='hover:underline cursor-pointer'>
                                    <MagneticText>
                                        <HyperText>Contact</HyperText>
                                    </MagneticText>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
