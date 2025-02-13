"use client";

import { MoveLeft, Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#111010] flex items-center justify-center p-4 text-gray-500">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="relative">
                    <Ghost className="h-32 w-32 mx-auto animate-bounce text-white/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-8xl font-bold text-primary text-white">404</h1>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-[#e2dfdf]">Page Not Found</h2>
                    <p className="text-[#e2dfdf]">
                        Oops! It seems you&apos;ve ventured into uncharted territory. The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}