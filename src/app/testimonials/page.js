'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
    {
        name: "Emily & Chris",
        quote: "Jacob helped us get $150K over asking after renovating our kitchen. We couldn't believe the results!",
        location: "San Clemente, CA",
        image: "/client1.jpg",
    },
    {
        name: "Monica T.",
        quote: "As a first-time buyer, I was nervous—but Jacob made the process seamless. I love my new home!",
        location: "Dana Point, CA",
        image: "/client2.jpg",
    },
    {
        name: "Derek and Taylor",
        quote: "Jacob’s renovation advice added so much value to our sale. Professional, honest, and sharp.",
        location: "Laguna Beach, CA",
        image: "/client3.jpg",
    },
];

const pastSales = [
    { image: "/sale1.jpg", caption: "Sold $100K Over Asking • San Clemente" },
    { image: "/sale2.jpg", caption: "Renovated & Sold in 5 Days • Dana Point" },
    { image: "/sale3.jpg", caption: "Record Neighborhood Price • Laguna Niguel" },
];

export default function TestimonialsPage() {
    return (
        <>
            <Head>
                <title>Client Testimonials | Jacob Hazzard Real Estate</title>
            </Head>

            {/* Hero */}
            <div>
                <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
                    <Link href="/" className="hover:text-gray-400 hover:underline text-gray-600 f2">Home</Link>
                    <Link href="/listings" className="hover:text-gray-400 hover:underline text-gray-600 f2">Listings</Link>
                    <Link href="/about" className="hover:text-gray-400 hover:underline text-gray-600 f2"> About</Link>
                    <Link href="/testimonials" className="hover:text-gray-400 hover:underline text-gray-600 f2"><u>Testimonials</u></Link>
                    <Link href="/contact" className="hover:text-gray-400 hover:underline text-gray-600 f2">Contact</Link>
                </nav>
            </div>
            <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/cordoba6.jpeg')" }}>
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                        What Clients Are Saying
                    </h1>
                    <p className="mt-4 text-lg font-light text-gray-200">Stories of trust, transformation, and success.</p>
                </div>
            </section>

            {/* Featured Testimonials */}
            <section className="bg-[#f9f7f4] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 f1">Real Clients, Real Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow p-6 text-center"
                            >
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mx-auto mb-4 object-cover h-[100px] w-[100px]"
                                />
                                <p className="italic text-gray-700 mb-4 f2">&ldquo;{t.quote}&rdquo;</p>
                                <div className="text-sm text-gray-600 f2">
                                    <strong>{t.name}</strong> — {t.location}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Success Photos */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 f1">A Few of Our Favorite Wins</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {pastSales.map((sale, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="overflow-hidden rounded-xl shadow hover:shadow-md transition"
                            >
                                <Image
                                    src={sale.image}
                                    alt={sale.caption}
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-60"
                                />
                                <div className="p-4 text-center text-sm text-gray-700 f2">{sale.caption}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#f0eeea] py-20 text-center px-6">
                <h2 className="text-3xl font-semibold mb-4 f1">Let’s Make Your Story Next</h2>
                <p className="text-lg text-gray-700 mb-6 f2">
                    Whether you’re buying, selling, or renovating — Jacob’s process ensures results that speak for themselves.
                </p>
                <Link href="/contact">
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                        Get in Touch
                    </button>
                </Link>
            </section>

            {/* Footer */}
                <footer className="bg-[#1a1a1a] text-gray-300 py-12 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
                        {/* Left Column - Brand */}
                        <div>
                            <h2 className="text-xl font-semibold tracking-widest mb-4">
                                JACOB HAZZARD <span className="font-extralight">REAL ESTATE</span>
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
                                    222 Avenida Del Mar, <br />San Clemente, CA 92672
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Branding */}
                        <div className="flex flex-col items-start md:items-end">
                            <Image src="/coldwell-banker-logo.svg" width={60} height={60} alt="Coldwell Banker Realty" className="h-12 mb-4" />
                            <p className="text-xs text-gray-400">
                                Jacob Hazzard | CA DRE# 02222037 <br />
                                Luxre Realty | CA DRE# 01897290
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Jacob Hazzard Real Estate Group. All rights reserved.</p>
                        <div className="flex gap-5 mt-3 md:mt-0">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Terms of Use</a>
                        </div>
                    </div>
                </footer>
        </>
    );
}
