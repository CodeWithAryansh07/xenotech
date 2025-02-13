"use client"

import React from 'react'
import { RetroGrid } from './magicui/retro-grid'
import { HyperText } from './magicui/hyper-text'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import { BrainCircuit as Circuit, Cpu, Database } from 'lucide-react'

const Hero = () => {
    return (
        <div className="bg-[#070707] relative flex h-[calc(100vh-96px)] w-full flex-col overflow-hidden select-none">
            <div className="relative z-3 flex flex-col items-center justify-center h-full px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white md:mb-6 mb-1">
                        Pioneering the Future of
                        <span className="block mt-2">
                            <HyperText>Digital Innovation</HyperText>
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mb-8 mb-2">
                        We transform visionary ideas into groundbreaking technological solutions, pushing the boundaries of what&apos;s possible.
                    </p>
                    
                    <div>
                    <InteractiveHoverButton className='px-8 py-4 font-bold text-lg flex items-center gap-2 mx-auto bg-white/80 text-black'>Explore Our Solutions</InteractiveHoverButton>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-12 flex gap-8 md:gap-16 mt-10"
                >
                    <div className="flex flex-col items-center text-white">
                        <Circuit className="w-8 h-8 mb-2" />
                        <span className="text-sm">AI Solutions</span>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <Cpu className="w-8 h-8 mb-2" />
                        <span className="text-sm">Cloud Computing</span>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <Database className="w-8 h-8 mb-2" />
                        <span className="text-sm">Data Analytics</span>
                    </div>
                </motion.div>
            </div>

            {/* Animated background grid */}
            <RetroGrid 
                className='bg-[#070707]' 
                opacity={0.125} 
                darkLineColor='white' 
                lightLineColor='white' 
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E]/80" />
        </div>
    )
}

export default Hero