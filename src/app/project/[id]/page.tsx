/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useParams } from "next/navigation";
import { ProjectData } from "@/constants";
import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

export default function ProjectDetails() {
    const { id } = useParams();
    const projectIndex = id ? parseInt(id as string, 10) - 1 : null;
    const project = projectIndex !== null ? ProjectData[projectIndex] : null;

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-xl font-medium">
                    Loading project details...
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-[#121111] to-[#0d0d0d] text-white">
                {/* Hero Section */}
                <div className="relative py-16 bg-black/50 border-b-2">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto ">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
                                    <p className="text-xl text-white/45">{project.moto}</p>
                                </div>

                                <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{project.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Tag className="h-4 w-4" />
                                        <span>{project.type}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-6 md:p-8 bg-[#0b0b0b] text-white">
                            <div className="max-w-none">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {project.projectDescription}
                                    </p>
                                </div>

                                <Separator className="my-8" />

                                <div className="space-y-6">
                                    <div
                                        className="[&>h1]:text-2xl [&>h1]:font-semibold [&>h1]:mb-4 
                                            [&>p]:text-white/50 [&>p]:leading-relaxed [&>p]:mb-4
                                            [&>ul]:list-none [&>ul]:space-y-3 [&>ul>li]:text-white/70 [&>ul>li]:text-md
                                            [&>ul>li>p:first-child]:font-medium [&>ul>li>p:first-child]:text-foreground
                                            [&>ul>li>p]:leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: project.data }}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}