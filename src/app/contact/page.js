'use client';

import { useState } from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

config.autoAddCss = false;

export default function ContactPage() {
    const [status, setStatus] = useState('idle');

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
                <title>Contact Jacob Hazzard</title>
            </Head>

            {/* Navbar */}
            <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
                <Link href="/" className="hover:text-gray-400 hover:underline text-gray-600 f2">Home</Link>
                <Link href="/listings" className="hover:text-gray-400 hover:underline text-gray-600 f2">Listings</Link>
                <Link href="/about" className="hover:text-gray-400 hover:underline text-gray-600 f2">About</Link>
                <Link href="/testimonials" className="hover:text-gray-400 hover:underline text-gray-600 f2">Testimonials</Link>
                <Link href="/contact" className="hover:text-gray-400 hover:underline text-gray-600 f2"><u>Contact</u></Link>
            </nav>

            {/* Hero */}
            <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/cordoba7.jpeg')" }}>
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>Let’s Connect</h1>
                    <p className="mt-2 text-lg font-light text-gray-200">Reach out for showings, listings, or renovation consulting.</p>
                </div>
            </section>

            {/* Direct Contact */}
            <section className="bg-white py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-6 f1">Direct Contact</h2>
                <div className="space-y-3 text-gray-700 f2">
                    <p>✉️ Email: <Link href="mailto:jacob.hazzard@cbrealty.com" className="text-blue-600 hover:underline">jacob.hazzard@cbrealty.com</Link></p>
                    <p>📞 Phone: <Link href="tel:+9492919395" className="text-blue-600 hover:underline">(949) 291-9395</Link></p>
                    <div className="flex justify-center space-x-6 mt-4 text-2xl text-gray-600">
                        <Link href="https://www.instagram.com/jacobhazzardrealestate/" className="hover:text-black" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jacob-hazzard-ocrealtor" className="hover:text-black" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-[#f9f7f4] py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {status === 'success' ? (
                        <div className="text-center bg-white p-10 rounded-xl shadow">
                            <h3 className="text-2xl font-semibold mb-4 text-black-700 f1">Message Sent!</h3>
                            <p className="text-lg text-gray-700 f2 mb-6">Thank you for reaching out. Jacob will be in touch soon.</p>
                            <Link href="/">
                                <button className="bg-[#3b5d7d] text-white px-6 py-3 rounded hover:bg-[#2d4a65] transition">Return to Homepage</button>
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
                            <h2 className="text-3xl font-semibold text-center mb-8 f1">Send a Message</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="name" placeholder="Your Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded" />
                                <input type="email" name="email" placeholder="Your Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded" />
                            </div>

                            <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded" />

                            <input type="text" name="address" placeholder="Property Address (if applicable)" className="w-full px-4 py-3 border border-gray-300 rounded" />

                            <select
                                name="category"
                                required
                                defaultValue=""
                                className="w-full px-4 py-3 border border-gray-300 rounded bg-white text-gray-700"
                            >
                                <option value="" disabled>Reason for Contact</option>
                                <option value="buying">Find a Home</option>
                                <option value="selling">Looking to Sell</option>
                                <option value="renovate">Renovate to Sell</option>
                                <option value="valuation">Home Valuation</option>
                                <option value="investment">Investment Opportunities</option>
                                <option value="general">General Inquiry</option>
                            </select>

                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Write your message here..."
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded"
                            ></textarea>

                            {status === 'error' && (
                                <p className="text-red-500 f2">Something went wrong. Please try again later.</p>
                            )}

                            <button type="submit" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Footer */}
<footer className="bg-[#1a1a1a] text-gray-300 py-12 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
                        {/* Left Column - Brand */}
                        <div>
                            <h2 className="text-xl font-semibold tracking-widest mb-4">
                                YOUR NAME <span className="font-light">REAL ESTATE GROUP</span>
                            </h2>
                            <p className="text-sm text-gray-400">
                                Delivering excellence in every transaction, from first-time buyers to luxury estates.
                            </p>
                        </div>

                        {/* Middle Column - Contact Info */}
                        <div>
                            <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-4">
                                Contact Us
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12H8m8-4H8m8 8H8m13 2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14z" />
                                    </svg>
                                    <a href="mailto:info@yourgroup.com" className="hover:text-white transition">info@yourgroup.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m13-9l2 9m-5-6h.01" />
                                    </svg>
                                    (949) 478-2295
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                                    </svg>
                                    840 Newport Center Drive, Suite 100 <br /> Newport Beach, CA 92660
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Branding */}
                        <div className="flex flex-col items-start md:items-end">
                            <img src="/coldwell-banker-logo.svg" alt="Coldwell Banker Realty" className="h-12 mb-4" />
                            <p className="text-xs text-gray-400">
                                Your Name | CA DRE# 01346878 <br />
                                Coldwell Banker Realty | CA DRE# 00616212
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Your Name Real Estate Group. All rights reserved.</p>
                        <div className="flex gap-5 mt-3 md:mt-0">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Terms of Use</a>
                        </div>
                    </div>
                </footer>
        </>
    );
}
