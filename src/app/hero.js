"use client";

import { useEffect, useState } from 'react';
import ScrollButton from './scrollButton';
import Link from 'next/link'


const heroImages = [
    '/cordoba5.jpeg',
    '/cordoba4.jpeg',
    '/cordoba7.jpeg',
];

const SLIDE_DURATION = 6000;

function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden text-white">
            {/* Background Slides */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-20" />

            {/* Centered Content */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6">
                <h1
                    className="text-6xl md:text-7xl font-bold tracking-widest mb-4 drop-shadow-lg"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                >
                    Jacob Hazzard
                </h1>
                <h2
                    className="text-lg md:text-xl tracking-wide uppercase font-light text-gray-200 max-w-xl"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Luxury Real Estate • Renovation Specialist • Client-First Approach
                </h2>
                {/* <a
                    href="#contact"
                    className="mt-10 bg-white text-black px-6 py-3 rounded-full shadow hover:bg-gray-100 transition font-medium"
                >
                    Let’s Connect →
                </a> */}

                <Link
                  href="/contact"
                  className="mt-10 bg-white text-black px-6 py-3 rounded-full shadow hover:bg-gray-100 transition font-medium"
                >
                  Let’s Connect →
                </Link>
                <ScrollButton />
            </div>
        </section>
    );
}

export default HeroSlideshow;
