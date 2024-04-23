import React from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from '@/components/ui/background-beams';
const words = `Welcome to our musical academy, where passion meets proficiency. Our experienced instructors are dedicated to nurturing talent and fostering creativity. Join us on a journey of musical discovery and excellence`;

function About() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-36 relative flex justify-center items-center text-center">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="max-w-4xl">
                <TextGenerateEffect words={words} />
            </div>
        </div>
    );
}

export default About;
