import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Services() {
    return (
        <div className="w-full px-24 mx-auto max-[500px]:px-7">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Custom Software Development",
        description:
            "We build tailor-made software solutions for businesses, ensuring scalability, security, and efficiency.",
        link: "",
    },
    {
        title: "Web & Mobile App Development",
        description:
            "From dynamic web applications to feature-rich mobile apps, we deliver high-performance solutions across platforms.",
        link: "",
    },
    {
        title: "AI & Machine Learning Solutions",
        description:
            "Leverage the power of AI with our intelligent solutions for automation, predictive analytics, and deep learning applications.",
        link: "",
    },
    {
        title: "Blockchain & Web3 Development",
        description:
            "Decentralized applications, smart contracts, and blockchain solutions for secure and transparent transactions.",
        link: "",
    },
    {
        title: "Cloud & DevOps Consulting",
        description:
            "Optimize your infrastructure with cloud migration, automation, and DevOps best practices for seamless deployment.",
        link: "",
    },
    {
        title: "Cybersecurity & Ethical Hacking",
        description:
            "Protect your digital assets with our cutting-edge cybersecurity solutions and penetration testing services.",
        link: "",
    },
];

