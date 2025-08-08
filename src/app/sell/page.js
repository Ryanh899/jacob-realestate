"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home, TrendingUp, Camera, Users, Award, Clock, CheckCircle, Star, ArrowRight, Waves, MapPin, Eye } from 'lucide-react';
import Footer from '../footer';
import ScrollToValuation from '../scrollButton2';

export default function SellHomePage() {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        zipCode: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        timeframe: '',
        propertyType: '',
        additionalInfo: ''
    });

    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'Testimonials', href: '/testimonials' },
    ];

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xgvzprll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully:', formData);
                setIsSubmitted(true);

                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        address: '',
                        city: '',
                        zipCode: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        timeframe: '',
                        propertyType: '',
                        additionalInfo: ''
                    });
                }, 3000);
            } else {
                console.error('Form submission failed');
                // Handle error - you might want to show an error message to the user
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle network errors - you might want to show an error message to the user
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Coastal Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/ameno2.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-blue-900/70"></div>

                    {/* Navigation - Keep as requested */}
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
                                className="font-montserrat font-light border border-white text-white bg-transparent px-7 py-3 text-lg tracking-wider transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Nav - Keep as requested */}
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

                    {menuOpen && (
                        <div
                            className="absolute top-[88px] left-45 right-11 z-40 bg-black/70 backdrop-blur-md text-white py-6 px-6 shadow-lg md:hidden animate-slideDown opacity-0 animate-fadeIn"
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
                </div>

                {/* Floating Ocean Elements */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${4 + Math.random() * 2}s`
                            }}
                        >
                            <Waves className="h-4 w-4 text-blue-300 transform rotate-45" />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-50 pb-0 md:py-20">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
                        {/* Left Side - Coastal Luxury Content */}
                        <div className="text-white">
                            <div className="mb-8  hidden md:block">
                                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-4 border border-white/10 ">
                                    <MapPin className="h-5 w-5 text-blue-400" />
                                    <span className="text-sm font-medium tracking-[0.15em] uppercase">Coastal Properties Specialist</span>
                                </div>
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-extralight leading-[0.85] mb-8 tracking-tight">
                                COASTAL
                                <span className="block font-light text-blue-400 italic">
                                    LUXURY
                                </span>
                                <span className="block text-4xl lg:text-5xl font-thin tracking-wider text-gray-300">
                                    REDEFINED
                                </span>
                            </h1>

                            <div className="w-24 h-px bg-gradient-to-r from-blue-100 to-transparent mb-8"></div>

                            <p className="text-xl text-gray-200 leading-relaxed mb-12 font-light max-w-lg">
                                Where oceanfront elegance meets sophisticated market strategy. Discover your coastal property&apos;s true market potential through precision analysis and expert positioning.
                            </p>

                            {/* Sharp Stats */}
                            <div className="grid grid-cols-3 gap-8 mb-12">
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-3xl font-extralight text-blue-400 mb-1">$4.2M</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Average Sale</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-3xl font-extralight text-blue-400 mb-1">97%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">List Price</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-3xl font-extralight text-blue-400 mb-1">12</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Days Market</div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-12 text-gray-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-blue-400"></div>
                                    <span className="text-sm font-light uppercase tracking-wider">Complimentary</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-blue-400"></div>
                                    <span className="text-sm font-light uppercase tracking-wider">24H Response</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-blue-400"></div>
                                    <span className="text-sm font-light uppercase tracking-wider">Ocean Expert</span>
                                </div>
                            </div>
                        </div>

                        <ScrollToValuation />

                        {/* Right Side - Sharp Modern Form */}
                        <div className="relative">
                            <div className="bg-white/95 backdrop-blur-xl p-12 border border-gray-200/50 shadow-2xl">
                                {/* Form Header */}
                                <div className="mb-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-slate-900 flex items-center justify-center" id='home-valuation'  >
                                            <Home className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-light text-gray-900">
                                                Property Valuation
                                            </h2>
                                            <div className="w-16 h-px bg-blue-500 mt-2"></div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        Receive your comprehensive coastal market analysis within 24 hours
                                    </p>
                                </div>

                                {!isSubmitted ? (
                                    <div className="space-y-6">
                                        {/* Property Address */}
                                        <div className="space-y-3" >
                                            <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                Property Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your property address"
                                                className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light text-lg bg-transparent focus:outline-none"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="City"
                                                    className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                    ZIP Code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="zipCode"
                                                    value={formData.zipCode}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="ZIP"
                                                    className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="First name"
                                                    className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Last name"
                                                    className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="your.email@example.com"
                                                className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="(949) 123-4567"
                                                className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                    Timeline
                                                </label>
                                                <select
                                                    name="timeframe"
                                                    value={formData.timeframe}
                                                    onChange={handleInputChange}
                                                    className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                                >
                                                    <option value="">Select timeframe</option>
                                                    <option value="immediately">Ready to sell</option>
                                                    <option value="1-3 months">1-3 months</option>
                                                    <option value="3-6 months">3-6 months</option>
                                                    <option value="6+ months">6+ months</option>
                                                    <option value="just exploring">Exploring options</option>
                                                </select>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                                    Property Type
                                                </label>
                                                <select
                                                    name="propertyType"
                                                    value={formData.propertyType}
                                                    onChange={handleInputChange}
                                                    className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-blue-500 transition-all font-light bg-transparent focus:outline-none"
                                                >
                                                    <option value="">Select type</option>
                                                    <option value="oceanfront-estate">Oceanfront Estate</option>
                                                    <option value="beachfront-villa">Beachfront Villa</option>
                                                    <option value="coastal-condo">Coastal Condominium</option>
                                                    <option value="waterfront-home">Waterfront Home</option>
                                                    <option value="cliff-property">Cliffside Property</option>
                                                    <option value="marina-residence">Marina Residence</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-slate-900 text-white py-5 px-8 font-medium hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-4 group shadow-lg transform hover:scale-[1.02] mt-8"
                                        >
                                            <span className="text-lg uppercase tracking-wider">Request Analysis</span>
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        <p className="text-xs text-gray-500 text-center font-light leading-relaxed pt-4 border-t border-gray-100">
                                            Confidential consultation. Jacob personally reviews every coastal property to deliver precise market insights within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center py-20">
                                        <div className="w-20 h-20 bg-slate-900 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="h-10 w-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-light text-gray-900 mb-6">
                                            Analysis Request Received
                                        </h3>
                                        <div className="w-16 h-px bg-blue-500 mx-auto mb-4"></div>
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            Your coastal property analysis is in motion. Expect comprehensive market insights and strategic recommendations within 24 hours.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Sharp Geometric Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20"></div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-slate-900/10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sharp Stats Strip */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-extralight text-blue-400 mb-3 group-hover:text-white transition-colors">24hr</div>
                            <div className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">Analysis</div>
                            <div className="w-full h-px bg-blue-400/20 mt-4 group-hover:bg-blue-400/60 transition-colors"></div>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-extralight text-blue-400 mb-3 group-hover:text-white transition-colors">$75M+</div>
                            <div className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">Coastal Sales</div>
                            <div className="w-full h-px bg-blue-400/20 mt-4 group-hover:bg-blue-400/60 transition-colors"></div>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-extralight text-blue-400 mb-3 group-hover:text-white transition-colors">285+</div>
                            <div className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">Properties</div>
                            <div className="w-full h-px bg-blue-400/20 mt-4 group-hover:bg-blue-400/60 transition-colors"></div>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-extralight text-blue-400 mb-3 group-hover:text-white transition-colors">15yrs</div>
                            <div className="text-xs uppercase tracking-[0.2em] font-light text-gray-400">Coastal Focus</div>
                            <div className="w-full h-px bg-blue-400/20 mt-4 group-hover:bg-blue-400/60 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coastal Excellence Showcase */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <div className="inline-block text-xs uppercase tracking-[0.25em] text-gray-500 font-medium mb-6">
                            Coastal Real Estate Mastery
                        </div>
                        <h2 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
                            OCEANFRONT
                            <span className="block text-blue-600 italic font-light">EXPERTISE</span>
                        </h2>
                        <div className="w-24 h-px bg-blue-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                            Where coastal sophistication meets strategic precision. Every oceanfront property demands specialized knowledge, market positioning, and exclusive buyer networks.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Strategy 1 - Market Intelligence */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-10 aspect-[3/4] bg-gradient-to-br from-slate-100 to-blue-100">
                                <Image
                                    src="/ameno2.jpeg"
                                    alt="Coastal Property Analysis"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <TrendingUp className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Coastal Market Intelligence
                                </h3>
                                <div className="w-12 h-px bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
                                <p className="text-gray-600 font-light leading-relaxed text-lg">
                                    Advanced oceanfront analytics combining tide patterns, seasonal buyer behavior, and luxury coastal comparables to establish optimal market positioning.
                                </p>
                                <div className="flex items-center gap-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                                    <span className="text-sm font-medium uppercase tracking-wider">Discover More</span>
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>

                        {/* Strategy 2 - Visual Storytelling */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-10 aspect-[3/4] bg-gradient-to-br from-blue-100 to-indigo-100">
                                <Image
                                    src="/ameno2.jpeg"
                                    alt="Luxury Photography"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Eye className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Cinematic Property Stories
                                </h3>
                                <div className="w-12 h-px bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
                                <p className="text-gray-600 font-light leading-relaxed text-lg">
                                    Architectural cinematography and drone artistry that captures the emotional connection between luxury living and coastal tranquility.
                                </p>
                                <div className="flex items-center gap-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                                    <span className="text-sm font-medium uppercase tracking-wider">View Portfolio</span>
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>

                        {/* Strategy 3 - Exclusive Networks */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-10 aspect-[3/4] bg-gradient-to-br from-indigo-100 to-purple-100">
                                <Image
                                    src="/ameno2.jpeg"
                                    alt="Luxury Service"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                                    Exclusive Buyer Networks
                                </h3>
                                <div className="w-12 h-px bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
                                <p className="text-gray-600 font-light leading-relaxed text-lg">
                                    Curated relationships with international luxury buyers, private yacht owners, and coastal lifestyle connoisseurs seeking their perfect oceanfront sanctuary.
                                </p>
                                <div className="flex items-center gap-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                                    <span className="text-sm font-medium uppercase tracking-wider">Our Network</span>
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coastal Properties Showcase */}
            <section className="py-32 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 text-white">
                        <div className="inline-block text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-6">
                            Recent Coastal Sales
                        </div>
                        <h2 className="text-6xl font-extralight mb-8 leading-tight tracking-tight">
                            OCEANFRONT
                            <span className="block text-blue-400 italic font-light">SUCCESSES</span>
                        </h2>
                        <div className="w-24 h-px bg-blue-400 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <Image
                                    src="/ameno2.jpeg"
                                    alt="Sold Property 1"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 text-sm font-medium uppercase tracking-wider">
                                    SOLD
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-light">$6.8M</div>
                                    <div className="text-sm opacity-80">Malibu Oceanfront</div>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <Image
                                    src="/ameno2.jpeg"
                                    alt="Sold Property 2"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 text-sm font-medium uppercase tracking-wider">
                                    SOLD
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-light">$4.2M</div>
                                    <div className="text-sm opacity-80">Laguna Beach Villa</div>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <Image
                                    src="/ameno2.jpeg"
                                    alt="Sold Property 3"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 text-sm font-medium uppercase tracking-wider">
                                    SOLD
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-light">$8.9M</div>
                                    <div className="text-sm opacity-80">Newport Waterfront</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sharp CTA Section */}
            <section className="relative py-40 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/ameno2.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-blue-900/80"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-4 text-blue-400 mb-6">
                            <div className="w-8 h-px bg-blue-400"></div>
                            <Waves className="h-5 w-5" />
                            <div className="w-8 h-px bg-blue-400"></div>
                        </div>
                    </div>

                    <h2 className="text-6xl lg:text-7xl font-extralight mb-8 leading-tight tracking-tight">
                        YOUR COASTAL
                        <span className="block text-blue-400 italic font-light">LEGACY AWAITS</span>
                    </h2>

                    <div className="w-24 h-px bg-blue-400 mx-auto mb-12"></div>

                    <p className="text-xl font-light text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed">
                        Transform your oceanfront property into a strategic asset. Experience the precision of coastal luxury real estate mastery with Jacob&apos;s exclusive market approach.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <a
                            href="#top"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="bg-white text-slate-900 px-12 py-5 font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-4 group shadow-2xl transform hover:scale-105"
                        >
                            <span className="text-lg uppercase tracking-wider">Begin Analysis</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white/30 text-white px-12 py-5 font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                        >
                            <span className="text-lg uppercase tracking-wider">Private Meeting</span>
                        </a>
                    </div>
                </div>

                {/* Floating coastal elements */}
                <div className="absolute top-20 left-20 opacity-20">
                    <Waves className="h-8 w-8 text-blue-400 animate-pulse" />
                </div>
                <div className="absolute bottom-32 right-16 opacity-20">
                    <Waves className="h-6 w-6 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <div className="absolute top-1/2 left-12 opacity-20">
                    <Waves className="h-4 w-4 text-blue-400 animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
            </section>

            <Footer />
        </div>
    );
}