'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        { 
            label: 'Sell', 
            href: '/sell',
            dropdownItems: [
                { label: 'Property Valuation', href: '/sell#property-valuation' },
                { label: 'Past Successes', href: '/sell#past-successes' }
            ]
        },
        { 
            label: 'Buy', 
            href: '/buy',
            dropdownItems: [
                { label: 'Buyers Guide', href: '/buy#buyers-guide' },
                { label: 'Mortgage Calculator', href: '/buy#mortgage-calculator' }
            ]
        },
        { label: 'About', href: '/about' }
    ];

    const handleSmoothScroll = (href) => {
        if (href.includes('#')) {
            const [path, hash] = href.split('#');
            
            if (window.location.pathname === path) {
                // If already on the page, just scroll to the section
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // Navigate to the page first
                window.location.href = path;
                
                // Wait for page to load, then scroll to section
                setTimeout(() => {
                    const checkElement = () => {
                        const element = document.getElementById(hash);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                            // If element not found, try again after a short delay
                            setTimeout(checkElement, 100);
                        }
                    };
                    checkElement();
                }, 500);
            }
        } else {
            // If no hash, just navigate normally
            window.location.href = href;
        }
    };

    return (
        <div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
            {/* Desktop Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-40 px-8 justify-between items-center text-sm bg-transparent text-white tracking-wide uppercase hidden md:flex">
                <Link href='/'>
                    <Image
                        src="/white-transparent-bigger.png"
                        alt="Logo"
                        width={400}
                        height={250}
                        className="w-full max-w-[200px] object-contain"
                    />
                </Link>

                <div className="space-x-6 flex items-center">
                    {navItems.map(({ label, href, dropdownItems }) => (
                        <div 
                            key={label} 
                            className="relative group"
                            onMouseEnter={() => dropdownItems && setActiveDropdown(label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <div className="flex items-center">
                                <Link 
                                    href={href} 
                                    className="group relative"
                                >
                                    <span className="relative inline-block after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 group-hover:after:w-full after:transition-all after:duration-300 f2 font-light py-4" style={{ fontSize: '16px' }}>
                                        {label}
                                    </span>
                                </Link>
                                {dropdownItems && (
                                    <button
                                        className="ml-2 p-1 rounded-full hover:bg-white/10 transition-all duration-200"
                                        onClick={() => setActiveDropdown(activeDropdown === label ? null : label)}
                                    >
                                        <svg 
                                            className={`w-3.5 h-3.5 transition-all duration-300 ${activeDropdown === label ? 'rotate-180 scale-110' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Dropdown Menu */}
                            {dropdownItems && activeDropdown === label && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border-0 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
                                    <div className="py-2">
                                        {dropdownItems.map(({ label: itemLabel, href: itemHref }, index) => (
                                            <button
                                                key={itemLabel}
                                                onClick={() => {
                                                    handleSmoothScroll(itemHref);
                                                    setActiveDropdown(null);
                                                }}
                                                className="group relative w-full text-left px-6 py-3 text-sm text-gray-800 hover:text-black hover:bg-gray-50/80 transition-all duration-300 normal-case font-medium tracking-wide flex items-center justify-between"
                                            >
                                                <span className="relative">
                                                    {itemLabel}
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                                                </span>
                                                <svg 
                                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="font-montserrat font-light border border-white text-white bg-transparent px-7 py-3 text-lg tracking-wider transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105"
                    >
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center md:hidden">
                <Image
                    src="/white-transparent-bigger.png"
                    alt="Logo"
                    width={130}
                    height={70}
                    className="object-contain"
                />

                <button
                    className="focus:outline-none z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
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
                        <div className="space-y-1 mr-5">
                            <span className="block w-6 h-0.5 bg-white" />
                            <span className="block w-6 h-0.5 bg-white" />
                            <span className="block w-6 h-0.5 bg-white" />
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="absolute top-[88px] left-45 right-11 z-40 bg-black/70 backdrop-blur-md text-white py-6 px-6 shadow-lg md:hidden animate-slideDown opacity-0 animate-fadeIn"
                    style={{ animation: 'fadeIn 0.3s ease forwards, slideDown 0.4s ease forwards' }}
                >
                    {/* Main navigation items */}
                    {navItems.map(({ label, href, dropdownItems }) => (
                        <div key={label}>
                            <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="block text-base uppercase tracking-wider font-light hover:text-gray-300 py-2 transition"
                            >
                                {label}
                            </Link>
                            
                            {/* Mobile sub-items (no dropdown, just listed) */}
                            {dropdownItems && (
                                <div className="ml-4 mb-2">
                                    {dropdownItems.map(({ label: itemLabel, href: itemHref }) => (
                                        <button
                                            key={itemLabel}
                                            onClick={() => {
                                                handleSmoothScroll(itemHref);
                                                setMenuOpen(false);
                                            }}
                                            className="block text-sm text-gray-300 hover:text-white py-1 transition normal-case font-light tracking-wide"
                                        >
                                            • {itemLabel}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="item-center mt-4 inline-block font-montserrat border border-white text-white bg-transparent px-12 py-2 text-base tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navigation;