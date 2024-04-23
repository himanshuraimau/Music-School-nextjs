import React from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Welcome to our musical academy, where passion meets proficiency. Our experienced instructors are dedicated to nurturing talent and fostering creativity. Join us on a journey of musical discovery and excellence`;

function About() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-25 relative flex justify-center items-center text-center">
            <div className="max-w-4xl">
                <TextGenerateEffect words={words} />
            </div>
        </div>
    );
}

export default About;
