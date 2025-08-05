"use client";

import React from 'react';

const ScrollButton = () => {
    const handleScroll = () => {
        const pageHeight = document.documentElement.scrollHeight;
        const scrollAmount = pageHeight * 0.23; // 3/4 of the page height
        window.scrollTo({
            top: scrollAmount,
            behavior: 'smooth' // For a smooth scrolling animation
        });
    };

    return (
        <div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce text-white cursor-pointer"
            onClick={handleScroll}
            role="button" // Improve accessibility
            aria-label="Scroll down" // Improve accessibility
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    );
};

export default ScrollButton;