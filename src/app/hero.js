"use client";

import { useEffect, useState } from 'react';
import ScrollButton from './scrollButton';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [
    '/cordoba5.jpeg',
    '/cordoba4.jpeg',
    '/cordoba7.jpeg',
];

const SLIDE_DURATION = 6000;

function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'About', href: '/about' },
        // { label: 'Testimonials', href: '/testimonials' },
    ];

    return (
        <section className="relative h-screen overflow-hidden text-white">
            {/* Background Slides */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-20" />

            {/* Desktop Nav */}
            <nav className="absolute top-0 left-0 right-0 z-40 px-8 justify-between items-center text-sm bg-transparent text-white tracking-wide uppercase hidden md:flex">
                <Image
                    src="/white-transparent-bigger.png"
                    alt="Logo"
                    width={400}
                    height={250}
                    className="w-full max-w-[200px] object-contain"
                />

                <div className="space-x-6 flex items-center">
                    {navItems.map(({ label, href }) => (
                        <Link key={label} href={href} className="group relative">
                            <span className="relative inline-block after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 group-hover:after:w-full after:transition-all after:duration-300 f2 font-light py-4" style={{ fontSize: '16px' }}>
                                {label}
                            </span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="font-montserrat font-light border border-white text-white bg-transparent px-7 py-3 text-lg tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105"
                    >
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Mobile Nav Toggle */}
            {/* Mobile Nav Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center md:hidden">
                <Image
                    src="/white-transparent-bigger.png"
                    alt="Logo"
                    width={130}
                    height={70}
                    className="object-contain"
                />

                {/* Toggle Button */}
                <button
                    className="focus:outline-none z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
                        // Close icon (X)
                        <svg
                            className="w-6 h-6 text-white mb-8 mr-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <div className="space-y-1 mr-5">
                            <span className="block w-6 h-0.5 bg-white" />
                            <span className="block w-6 h-0.5 bg-white" />
                            <span className="block w-6 h-0.5 bg-white" />
                        </div>
                    )}
                </button>
            </div>

            {menuOpen && (
                <div
                    className="absolute top-[88px] left-45 right-11 z-40 bg-black/70 backdrop-blur-md text-white rounded-xl py-6 px-6 shadow-lg md:hidden animate-slideDown opacity-0 animate-fadeIn"
                    style={{ animation: 'fadeIn 0.3s ease forwards, slideDown 0.4s ease forwards' }}
                >
                    {navItems.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-base uppercase tracking-wider font-light hover:text-gray-300 py-2 transition"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="item-center mt-1 inline-block font-montserrat border border-white text-white bg-transparent px-12 py-2 text-base tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        Contact
                    </Link>
                </div>
            )}


            {/* Hero Content */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-6xl md:text-7xl font-bold tracking-widest mb-4 drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Jacob Hazzard
                </h1>
                <h2 className="text-lg md:text-xl tracking-wide uppercase font-light text-gray-200 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Luxury Real Estate • Renovation Specialist • Client-First Approach
                </h2>
                <Link
                    href="/contact"
                    className="mt-10 inline-flex items-center gap-2 text-white text-lg tracking-wider group transition-all duration-300"
                >
                    <span className="relative after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 group-hover:after:w-full after:transition-all after:duration-300">
                        Let&apos;s Connect
                    </span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        →
                    </span>
                </Link>
                <ScrollButton />
            </div>
        </section>
    );
}

export default HeroSlideshow;
