"use client";

import React from 'react';
import { useStore } from '@/store/Store';
import { TeamMembers } from '@/constants';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import User from '@/assets/user.png';

const Page = () => {
    const { open, setOpen } = useStore();

    React.useEffect(() => {
        if (open) {
            setOpen();
        }
    }, [open, setOpen]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Meet Our Team
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        We&apos;re a diverse group of passionate individuals working together to create amazing solutions.
                    </p>
                </motion.div>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {TeamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={item}
                            whileHover={{ scale: 1.02 }}
                            className="h-full"
                        >
                            <Card className="overflow-hidden h-full bg-gray-900 border-gray-800 hover:border-green-500 transition-all duration-300">
                                <div className="relative p-6 flex flex-col items-center">
                                    <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 p-1">
                                        <div className="rounded-full overflow-hidden w-full h-full bg-gray-900">
                                            <Image
                                                src={User}
                                                alt={member.name}
                                                width={192}
                                                height={192}
                                                className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-2 text-center">
                                        {member.name}
                                    </h3>
                                    <Badge 
                                        variant="secondary" 
                                        className="mb-4 bg-gradient-to-r from-green-400/10 to-blue-500/10 text-green-400 border-green-500/20"
                                    >
                                        {member.role}
                                    </Badge>
                                    <p className="text-gray-400 mb-6 text-center leading-relaxed">
                                        Passionate about creating innovative solutions and pushing the boundaries of technology.
                                    </p>
                                    <div className="flex space-x-4 mt-auto">
                                        {[
                                            { icon: Github, title: "GitHub", color: "hover:text-green-400" },
                                            { icon: Linkedin, title: "LinkedIn", color: "hover:text-blue-400" },
                                            { icon: Twitter, title: "Twitter", color: "hover:text-sky-400" },
                                            { icon: Mail, title: "Email", color: "hover:text-purple-400" }
                                        ].map(({ icon: Icon, title, color }) => (
                                            <button
                                                key={title}
                                                className={`text-gray-400 ${color} transition-colors duration-300 transform hover:scale-110`}
                                                title={title}
                                            >
                                                <Icon className="h-6 w-6" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Page;