// About.jsx
'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState  } from 'react';

export default function About() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'Testimonials', href: '/testimonials' },
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
                    <nav className="absolute top-0 left-0 right-0 z-40 px-8 justify-between items-center text-sm bg-transparent text-white tracking-wide uppercase hidden md:flex">
                        <Link href='/' >
                            <Image
                                src="/white-transparent-bigger.png"
                                alt="Logo"
                                width={400}
                                height={250}
                                className="w-full max-w-[200px] object-contain"
                            />
                        </Link>
                        <div className="space-x-6 flex items-center">
                            {navItems.map(({ label, href }) => (
                                <Link key={label} href={href} className="group relative">
                                    <span className="relative inline-block after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 group-hover:after:w-full after:transition-all after:duration-300 f2 font-light py-4" style={{ fontSize: '14px' }}>
                                        {label}
                                    </span>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="font-montserrat font-light border border-white text-white bg-transparent px-7 py-3 text-md tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>

                    <div className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center md:hidden">
                        <Image
                            src="/white-transparent-bigger.png"
                            alt="Logo"
                            width={130}
                            height={70}
                            className="object-contain"
                        />
                        {/* Toggle Button */}
                        <button
                            className="focus:outline-none z-50"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? (
                                // Close icon (X)
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
                                // Hamburger icon
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
                            className="absolute top-[88px] left-45 right-11 z-40 bg-black/70 backdrop-blur-md text-white rounded-xl py-6 px-6 shadow-lg md:hidden animate-slideDown opacity-0 animate-fadeIn"
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

                    {/* Animated Title and Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20 text-white text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold f1 mb-4 mt-50 2xl:mt-75">
                            Meet Jacob Hazzard
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

            </main>
        </>
    );
}
