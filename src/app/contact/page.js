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
            <footer className="bg-[#f0eeea] text-center py-6 text-sm text-gray-600 f2">
                <p>&copy; {new Date().getFullYear()} Jacob Hazzard Real Estate. CA DRE #01234567</p>
            </footer>
        </>
    );
}
