"use client";


import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Limit the offset effect
      const scrollTop = window.scrollY;
      const maxOffset = 30; // max 30px shift
      const newOffset = Math.min(scrollTop * 0.3, maxOffset);
      setOffsetY(newOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left side image with scroll-over transform */}
      <div
        className="relative w-full lg:w-3/5 h-[40vh] lg:h-[40vh] overflow-hidden"
        style={{ transform: `translateY(${offsetY}px)`, transition: 'transform 0.1s ease-out' }}
      >
        <Image
          src="/cordoba1.jpeg"
          alt="Jacob Hazzard"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Optional dark overlay for contrast on small screens */}
        <div className="lg:hidden absolute inset-0 bg-black/40" />
      </div>

      {/* Right side content */}
      <div className="w-full lg:w-2/5 flex items-center justify-center px-6 py-20 bg-white z-10">
        <div className="max-w-md text-left">
          <h2 className="text-4xl font-heading mb-6 text-center f1">Meet Jacob Hazzard</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-body text-center f2">
            With years of experience in high-end real estate and a sharp eye for profitable renovations,
            Jacob delivers tailored service and stunning results. From strategic upgrades to record-breaking sales,
            his client-first approach ensures luxury with impact.
          </p>
        </div>
      </div>
    </section>
  );
}
