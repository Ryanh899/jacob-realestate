"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home, TrendingUp, Camera, Users, Award, Clock, CheckCircle, Star, ArrowRight, Waves, MapPin, Eye } from 'lucide-react';
import Footer from '../footer';
import ScrollToValuation from '../scrollButton2';
import Navigation from '../navbar';
import MarketingSection from './marketing';
import SellPastSlide from '../sellpastslideshow';

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
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'About', href: '/about' },
        // { label: 'Testimonials', href: '/testimonials' },
    ];

    const [isSubmitted, setIsSubmitted] = useState(false);

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

    useEffect(() => {
        const hash = sessionStorage.getItem('scrollTarget');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            sessionStorage.removeItem('scrollTarget'); // prevent repeat scrolling
        }
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="property-valuation" >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/ameno2.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-blue-900/70"></div>

                    {/* Navigation - Keep as requested */}
                    <Navigation />
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

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-50 pb-0 md:py-25">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center md:pt-20">
                        {/* Left Side - Content */}
                        <div className="text-white">
                            <div className="mb-8  hidden lg:block">
                                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-4 border border-white/10 ">
                                    <MapPin className="h-5 w-5 text-blue-400" />
                                    <span className="text-sm font-medium tracking-[0.15em] uppercase">Expert Real Estate Service</span>
                                </div>
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-extralight leading-[0.85] mb-8 tracking-tight">
                                EXCEPTIONAL
                                <span className="block font-light text-blue-400 italic">
                                    SERVICE
                                </span>
                                <span className="block text-4xl lg:text-5xl font-thin tracking-wider text-gray-300">
                                    EVERY PROPERTY
                                </span>
                            </h1>

                            <div className="w-24 h-px bg-gradient-to-r from-blue-100 to-transparent mb-8"></div>

                            <p className="text-xl text-gray-200 leading-relaxed mb-12 font-light max-w-lg">
                                Where personalized attention meets strategic market expertise. Discover your property&apos;s true potential through comprehensive analysis and proven results.
                            </p>
                            <div className="grid grid-cols-3 gap-8 mb-12">
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium font-normal text-blue-400 mb-1">Tailored Strategy</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Custom marketing for every home</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium font-normal text-blue-400 mb-1">Design Expertise</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Renovations that maximize value</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium font-normal text-blue-400 mb-1">Trusted Network</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Contractors, stagers, and designers</div>
                                </div>
                            </div>
                        </div>

                        <ScrollToValuation />

                        {/* Right Side - Form */}
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
                                        Receive your comprehensive market analysis within 24 hours
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
                                                    <option value="">Select property type</option>
                                                    <option value="single-family">Single-Family Home</option>
                                                    <option value="condo">Condominium</option>
                                                    <option value="townhouse">Townhouse</option>
                                                    <option value="multi-family">Multi-Family Property</option>
                                                    <option value="vacant-land">Vacant Land / Lot</option>
                                                    <option value="farm-ranch">Farm / Ranch</option>
                                                    <option value="luxury">Luxury Estate</option>
                                                    <option value="historic">Historic / Character Home</option>
                                                    <option value="new-construction">New Construction</option>
                                                    <option value="investment">Investment Property</option>
                                                    <option value="other">Other</option>
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
                                            Confidential consultation. Jacob personally reviews every property to deliver precise market insights within 24 hours.
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
                                            Your property analysis is in motion. Expect comprehensive market insights and strategic recommendations within 24 hours.
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
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="text-5xl font-extralight text-blue-400 mb-6">24-Hour Professional Valuation</div>
                        <div className="text-xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
                            Get an accurate, comprehensive property assessment from licensed real estate professionals—not automated estimates
                        </div>
                    </div>
                </div>
            </section>
            <MarketingSection />
            {/* Properties Showcase */}
            <SellPastSlide />
            {/* CTA Section */}
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
                        YOUR PROPERTY
                        <span className="block text-blue-400 italic font-light">DESERVES MORE</span>
                    </h2>

                    <div className="w-24 h-px bg-blue-400 mx-auto mb-12"></div>

                    <p className="text-xl font-light text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed">
                        Whether you&apos;re selling your first home or a luxury estate, experience the difference that dedicated expertise and personalized service make in today&apos;s market.
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
                            <span className="text-lg uppercase tracking-wider">Get Started</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white/30 text-white px-12 py-5 font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                        >
                            <span className="text-lg uppercase tracking-wider">Schedule Consultation</span>
                        </a>
                    </div>
                </div>

                {/* Floating elements */}
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