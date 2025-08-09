// About.jsx
'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from '../footer';
import Navigation from '../navbar';


export default function About() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'About', href: '/about' },
        // { label: 'Testimonials', href: '/testimonials' },
    ];

    return (
        <>
            <Head>
                <title>About Jacob Hazzard | San Clemente Real Estate</title>
                <meta
                    name="description"
                    content="Learn more about Jacob Hazzard, a real estate expert based in San Clemente, CA. Specializing in renovations and high-value sales."
                />
            </Head>
            <main className="text-gray-900 bg-[#f1f0eb] font-sans">
                {/* Navigation */}

                {/* Hero Section */}
                <section
                    className="relative min-h-screen h-[130h] md:h-[100vh] bg-cover bg-center flex flex-col justify-start px-0 "
                    style={{ backgroundImage: "url('/ameno3.jpeg')" }}
                    key={`about-hero-${pathname}`}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/20 z-10" />

                    <Navigation />

                    {/* Animated Title and Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20 text-white text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold f1 mb-4 mt-50 2xl:mt-75 font-extralight leading-[0.85] mb-8 tracking-tight">
                            Meet <span className="text-6xl md:text-7xl font-medium f1 tracking-tight">
                                Jacob Hazzard
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl font-light f2 text-white/90">
                            A real estate strategist with a builder&apos;s eye and a designer&apos;s touch — serving San Clemente and the OC coast.
                        </p>
                    </motion.div>

                    {/* Headshot and Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative z-20 mt-0 md:mt-auto mb-20 pb-12 flex flex-col md:flex-row items-center md:items-end gap-10 max-w-[1600px] w-full mx-auto px-0 "
                    >
                        {/* Headshot flush left and wide */}
                        <div className="relative w-full h-[350px] mt-15 md:mt-0 md:w-1/2 aspect-[3/4] md:h-[500px]">
                            <Image
                                src="/headshot1.jpg"
                                alt="Jacob Hazzard"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>

                        {/* Bio content */}
                        <div className="text-white max-w-xl px-6 md:px-0 md:pr-12 self-center">
                            <p className="uppercase text-xl tracking-widest mb-2 f2 text-white/70">
                                Behind the Sale
                            </p>
                            <h2 className="text-4xl font-semibold f1 mb-4">
                                Experience. Vision. Results.
                            </h2>
                            <p className="text-xl f2 font-light mb-3 text-white/90">
                                Clients choose Jacob for more than just his local knowledge—they value his ability to listen, tailor strategies to their goals, and deliver results that feel both seamless and personal. Whether navigating a high-stakes coastal sale, helping a buyer land the perfect home, or guiding an investor toward the right opportunity, Jacob brings sharp market insight, consistent communication, and hands-on support from start to finish.
                            </p>

                        </div>
                    </motion.div>

                </section>

                {/* Quote/Testimonial Section */}
                <section className="relative py-24 px-6 bg-[#e2ded4] text-center">
                    <div className="max-w-3xl mx-auto">
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl italic font-light f2 text-gray-700 mb-6"
                        >
                            “Jacob didn&apos;t just sell our home — he elevated it.”
                        </motion.blockquote>
                        <p className="text-sm uppercase tracking-widest f2 text-gray-500">— Client in Dana Point</p>
                    </div>
                </section>
                <section className="relative bg-[#2e2b28] px-6 py-24 text-white">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 text-left">
                            <p className="uppercase text-sm tracking-widest text-gray-400 mb-3 f2">
                                A Personal Note
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 f1">
                                More Than Just Real Estate
                            </h2>
                            <p className="text-lg md:text-md text-gray-300 font-light f2 leading-relaxed">
                                Jacob Hazzard is a lifelong San Clemente resident who brings a deep personal connection to Orange County and a client-first approach to every real estate transaction. As an Eagle Scout and a graduate of Westmont College with a degree in Economics and Business, Jacob&apos;s foundation is built on trust, discipline, and service—values that show up in every detail of his work.
                            </p>
                            <br></br>

                        </div>
                        {/* Image on the Right */}
                        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden">
                            <Image
                                src="/headshot1.jpg" // Replace with your actual image path
                                alt="Jacob Hazzard candid"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </div>
                </section>
                {/* Values / Philosophy Section */}
                <section className="relative bg-[#242220] text-white py-24 px-6">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <p className="uppercase text-sm tracking-widest text-gray-400 mb-3 f2">
                            My Philosophy
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 f1">
                            What Drives My Work
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 font-light f2 max-w-3xl mx-auto">
                            Every decision, every detail, and every client relationship is guided by a clear set of values that ensure excellence and trust.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-[#2e2b28] p-8 text-left hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/design.jpg" // swap for relevant image
                                alt="Design Focus"
                                width={60}
                                height={60}
                                className="mb-6 object-contain"
                            />
                            <h3 className="text-2xl font-semibold mb-4 f1">Design-Driven Approach</h3>
                            <p className="text-gray-300 font-light f2">
                                I believe great design transforms properties and maximizes value. From layout to lighting, no detail is overlooked.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#2e2b28] p-8 text-left hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/trust.jpg"
                                alt="Trust"
                                width={60}
                                height={60}
                                className="mb-6 object-contain"
                            />
                            <h3 className="text-2xl font-semibold mb-4 f1">Client-First Mindset</h3>
                            <p className="text-gray-300 font-light f2">
                                Your goals guide my every move. I listen, adapt, and act with your best interests at the forefront.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#2e2b28] p-8 text-left hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/results.jpg"
                                alt="Results"
                                width={60}
                                height={60}
                                className="mb-6 object-contain"
                            />
                            <h3 className="text-2xl font-semibold mb-4 f1">Results That Last</h3>
                            <p className="text-gray-300 font-light f2">
                                From record-breaking sales to lasting relationships, my work leaves a mark long after closing day.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg md:text-md text-gray-300 font-light text-center f2 leading-relaxed p-10">
                            Having spent his entire life in the area, Jacob understands the nuances of each neighborhood—from blufftop estates to off-market opportunities—and uses that insight to benefit every client he serves. Backed by a top-tier luxury brokerage, he offers a refined, relationship-driven experience grounded in integrity and performance.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="relative bg-black py-24 px-6 text-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/cordoba4.jpeg')] opacity-40 bg-cover bg-center z-0" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading f1 mb-6">Ready to Make a Move?</h2>
                        <p className="text-lg md:text-xl f2 font-light mb-10">
                            Whether buying, selling, or renovating — Jacob brings vision, clarity, and market mastery.
                        </p>
                        <button
                            className="inline-flex items-center gap-3 text-white border border-white px-10 py-4 text-lg tracking-wide shadow-md font-light hover:shadow-xl hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                        >
                            <Link href="/contact" >
                                Schedule a Consultation →
                            </Link>
                        </button>
                    </motion.div>
                </section>
                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}
