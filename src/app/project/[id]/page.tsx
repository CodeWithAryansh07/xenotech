"use client"

// pages/project/[id].tsx
import { useParams } from "next/navigation";
import { ProjectData } from "@/constants";

export default function ProjectDetails() {
    const { id } = useParams(); // The project id from the URL

    // Optional: Convert id to a number if necessary
    const projectIndex = id ? parseInt(id as string, 10) - 1 : null;
    const project = projectIndex !== null ? ProjectData[projectIndex] : null;

    if (!project) {
        return <div className="text-white">Loading project details...</div>;
    }

    return (
        <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-white">{project.projectDescription}</p>
            {/* Add any additional project details you want to show */}
        </div>
    );
}
