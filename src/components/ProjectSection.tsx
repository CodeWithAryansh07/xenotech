/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { useEffect } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ProjectData } from "@/constants";

export function ProjectSection() {
    const router = useRouter();

    useEffect(() => {
        document.body.style.backgroundColor = "#070707";
    })

    const handleSeeMore = (index: number) => {
        // Navigate to a dynamic route passing the project index as a parameter
        router.push(`/project/${index + 1}`);
    };

    return (
        <div className="w-full h-auto bg-[#070707] flex flex-col items-center justify-center select-none">
            <div className="grid grid-cols-3 gap-4 px-12 py-16 bg-[#090909] max-[1250px]:grid-cols-2 max-[900px]:grid-cols-1">
                {ProjectData.map((project, index) => {
                    const previewText = project.projectDescription.slice(0, 100);
                    return (
                        <CardSpotlight
                            key={index}
                            className="h-[400px] max-[1250px]:w-[400px] w-96 text-white p-5"
                        >
                            <div className="flex min-h-[250px] max-h-[250px] mb-2">
                                <img
                                    src={`https://picsum.photos/200/300?random=${index}`}
                                    alt="Project"
                                    className="w-full z-20 h-[250px] object-cover"
                                />
                            </div>
                            <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                                Project Section {index + 1}
                            </h1>
                            <p className="text-neutral-200 mt-4 relative z-20">
                                {`${previewText}...`}
                                <button
                                    onClick={() => handleSeeMore(index)}
                                    className="text-blue-500 ml-2"
                                >
                                    See more
                                </button>
                            </p>
                        </CardSpotlight>
                    );
                })}
            </div>
        </div>
    );
}
