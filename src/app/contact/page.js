'use client';

import { useState } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../footer';
import Navigation from '../navbar';

config.autoAddCss = false;

export default function ContactPage() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [status, setStatus] = useState('idle');

    const navItems = [
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'About', href: '/about' },
        // { label: 'Testimonials', href: '/testimonials' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const res = await fetch('https://formspree.io/f/xdkdldna', {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        });

        if (res.ok) {
            setStatus('success');
            form.reset();
        } else {
            setStatus('error');
        }
    };

    return (
        <>
            <Head>
                <title>Contact Jacob Hazzard | San Clemente Real Estate</title>
                <meta
                    name="description"
                    content="Get in touch with Jacob Hazzard for all your San Clemente real estate needs. Schedule a consultation today."
                />
            </Head>
            <main className="text-gray-900 bg-[#f1f0eb] font-sans">
                {/* Hero Section */}
                <section
                    className="relative min-h-screen h-[135vh] md:h-[100vh] bg-cover bg-center flex flex-col justify-start px-0"
                    style={{ backgroundImage: "url('/cordoba7.jpeg')" }}
                    key={`contact-hero-${pathname}`}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/20 z-10" />

                    {/* Desktop Navigation */}
                    <Navigation />

                    {/* Hero Content Container */}
                    <div className="relative z-20 flex flex-col justify-between h-full pt-32 pb-20">
                        {/* Hero Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-center max-w-4xl mx-auto px-6 pt-15 md:pt-50 md:mb-0"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold f1 mb-4">
                                Let&apos;s Connect
                            </h1>
                            <p className="text-lg md:text-2xl font-light f2 text-white/90 max-w-2xl mx-auto mb-12">
                                Ready to make your next move? Reach out for consultations, property showings, or renovation strategies.
                            </p>

                            {/* CTA Button to Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mb-16"
                            >
                                <button
                                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center gap-3 text-white border-2 border-white px-12 py-4 text-lg tracking-wide font-light hover:bg-white hover:text-black transition-all duration-300 animate-pulse"
                                >
                                    Send Me a Message →
                                </button>

                            </motion.div>
                        </motion.div>

                        {/* Contact Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full mx-auto px-6"
                        >
                            {/* Phone Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center text-white hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m13-9l2 9m-5-6h.01" />
                                </svg>
                                <h3 className="text-xl font-semibold f1 mb-2">Call Direct</h3>
                                <Link href="tel:+9492919395" className="text-lg f2 hover:text-white/80 transition">
                                    (949) 291-9395
                                </Link>
                                <p className="text-sm f2 text-white/60 mt-2">Available 7 days a week</p>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center text-white hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12H8m8-4H8m8 8H8m13 2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14z" />
                                </svg>
                                <h3 className="text-xl font-semibold f1 mb-2">Send Email</h3>
                                <Link href="mailto:jacob.hazzard@cbrealty.com" className="text-lg f2 hover:text-white/80 transition break-all">
                                    jacob.hazzard@cbrealty.com
                                </Link>
                                <p className="text-sm f2 text-white/60 mt-2">Quick response guaranteed</p>
                            </div>

                            {/* Social Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center text-white hover:scale-105 transition-transform duration-300 w-full md:w-1/3 hidden md:block">
                                <div className="flex justify-center space-x-4 mb-4">
                                    <Link href="https://www.instagram.com/jacobhazzardrealestate/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white/80 transition">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/jacob-hazzard-ocrealtor" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white/80 transition">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                </div>
                                <h3 className="text-xl font-semibold f1 mb-2">Follow Along</h3>
                                <p className="text-lg f2">Stay updated with listings</p>
                                <p className="text-sm f2 text-white/60 mt-2">Market insights & tours</p>
                            </div>
                            <div className="flex justify-center space-x-4 mb-4 md:hidden">
                                <Link href="https://www.instagram.com/jacobhazzardrealestate/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white/100 transition">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/jacob-hazzard-ocrealtor" target="_blank" rel="noopener noreferrer" className="text-2xl text-white/100 transition">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="contact-form" className="relative bg-[#2e2b28] px-6 py-24 text-white border-t-4 border-white">
                    <div className="max-w-4xl mx-auto">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center bg-[#242220] p-16 border border-gray-700"
                            >
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-semibold mb-4 f1">Message Sent Successfully</h3>
                                <p className="text-lg text-gray-300 f2 mb-8 max-w-2xl mx-auto">
                                    Thank you for reaching out. Jacob will review your message and get back to you within 24 hours.
                                </p>
                                <Link href="/" className="inline-flex items-center gap-3 text-white border border-white px-10 py-4 text-lg tracking-wide font-light hover:bg-white hover:text-black transition-all duration-300">
                                    Return to Homepage →
                                </Link>
                            </motion.div>
                        ) : (
                            <>
                                <div className="text-center mb-16">
                                    <div className="w-20 h-20 flex items-center justify-center mx-auto mb-15">
                                        <Image
                                            src="/white-transparent-bigger.png"
                                            alt="Logo"
                                            width={200}
                                            height={200}
                                            className="max-w-[200] max-h-[200] object-contain"
                                        />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 f1">
                                        Send a Detailed Message
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-300 font-light f2 max-w-2xl mx-auto">
                                        Share your real estate goals and Jacob will craft a personalized strategy for your success. All inquiries receive a response within 24 hours.
                                    </p>
                                </div>

                                <motion.form
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    onSubmit={handleSubmit}
                                    className="bg-[#242220] p-12 border border-gray-700 space-y-8 shadow-2xl"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 f2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors f2 text-lg"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 f2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors f2 text-lg"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 f2">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors f2 text-lg"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 f2">Property Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors f2 text-lg"
                                                placeholder="Property address (if applicable)"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 f2">Reason for Contact *</label>
                                        <select
                                            name="category"
                                            required
                                            defaultValue=""
                                            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white focus:border-white focus:outline-none transition-colors f2 text-lg"
                                        >
                                            <option value="" disabled className="bg-[#242220] text-gray-400">Select a reason</option>
                                            <option value="buying" className="bg-[#242220] text-white">Find a Home</option>
                                            <option value="selling" className="bg-[#242220] text-white">Looking to Sell</option>
                                            <option value="renovate" className="bg-[#242220] text-white">Renovate to Sell</option>
                                            <option value="valuation" className="bg-[#242220] text-white">Home Valuation</option>
                                            <option value="investment" className="bg-[#242220] text-white">Investment Opportunities</option>
                                            <option value="general" className="bg-[#242220] text-white">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3 f2">Message *</label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            required
                                            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none f2 text-lg"
                                            placeholder="Tell Jacob about your real estate goals..."
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded">
                                            <p className="text-red-400 f2">Something went wrong. Please try again or contact Jacob directly.</p>
                                        </div>
                                    )}

                                    <div className="text-center pt-8">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="inline-flex items-center gap-3 text-white border border-white px-12 py-4 text-lg tracking-wide font-light hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? 'Sending...' : 'Send Message →'}
                                        </button>
                                    </div>
                                </motion.form >
                            </>
                        )}
                    </div>
                </section>

                {/* Location Section */}
                <section className="relative bg-[#242220] px-6 py-24 text-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="uppercase text-sm tracking-widest text-gray-400 mb-3 f2">
                            Visit Our Office
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 f1">
                            San Clemente Location
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg f2 text-gray-300 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                            </svg>
                            <span>222 Avenida Del Mar, San Clemente, CA 92672</span>
                        </div>
                        <p className="text-gray-400 f2 max-w-2xl mx-auto">
                            Located in the heart of San Clemente, Jacob&apos;s office provides easy access for clients throughout Orange County&apos;s coastal communities.
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}