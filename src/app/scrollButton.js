"use client";

import React from 'react';

const ScrollButton = () => {
  const handleScroll = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
    const scrollAmount = pageHeight * (isMobile ? 0.19 : 0.23);

    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
<div
  className="absolute bottom-24 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce text-white cursor-pointer"
  onClick={handleScroll}
  role="button"
  aria-label="Scroll down"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>

  );
};

export default ScrollButton;
