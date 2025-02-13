/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from 'react';
import { useStore } from '@/store/Store';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import Footer from '@/components/Footer';

// Define the form schema using Zod
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const Page = () => {
    const { open, setOpen } = useStore();

    // Initialize the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    // Close the navbar if it's open
    React.useEffect(() => {
        if (open) {
            setOpen();
        }
    }, [open, setOpen]);

    // Handle form submission
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // Send the form data to the API route
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            // Handle the response
            if (response.ok) {
                toast.success("Message sent successfully! We'll get back to you soon.");
                form.reset(); // Reset the form
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to send message.');
            }
        } catch (error) {
            toast.error('An error occurred while sending the message.');
        }
    };

    return (
        <>
            <div className="min-h-screen bg-[#090909] text-white">
                {/* Hero Section */}
                <div className="relative h-[180px] bg-gradient-to-r from-primary to-primary/80">
                    <div className="absolute inset-0 bg-[#0d0c0c]" />
                    <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Contact XenoTech</h1>
                            <p className="text-lg text-white/90">We&lsquo;d love to hear from you. Get in touch with us.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Information and Form */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
                                <p className="text-muted-foreground mb-8">
                                    Have questions? We&lsquo;re here to help. Send us a message and we&lsquo;ll respond as soon as possible.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-white mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-white">Email</h3>
                                        <p className="text-muted-foreground">infoxenotech@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-white mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-white">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-white mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-muted-foreground">
                                            123 Innovation Drive<br />
                                            Tech Valley, CA 94025
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-white mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Business Hours</h3>
                                        <p className="text-muted-foreground">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday - Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8 rounded-lg shadow-lg bg-[#070707] text-[#070707]">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-white text-xl'>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-white text-xl'>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="your.email@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-white text-xl'>Subject</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="How can we help?" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='text-white text-xl'>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us more about your inquiry..."
                                                        className="min-h-[120px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full">
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282867255813!2d-122.08374688439792!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sPalo%20Alto%2C%20CA%2094301!5e0!3m2!1sen!2sus!4v1647293911316!5w200!5h200"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;