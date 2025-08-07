// About.jsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
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
                <nav className="bg-white/90 backdrop-blur-sm shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
                    <Link href="/" className="hover:text-gray-500 text-gray-700 f2">Home</Link>
                    <Link href="/listings" className="hover:text-gray-500 text-gray-700 f2">Listings</Link>
                    <Link href="/about" className="text-black underline font-semibold f2">About</Link>
                    <Link href="/testimonials" className="hover:text-gray-500 text-gray-700 f2">Testimonials</Link>
                    <Link href="/contact" className="hover:text-gray-500 text-gray-700 f2">Contact</Link>
                </nav>

                {/* Hero Section */}
                <section
                    className="relative h-[80vh] bg-cover bg-center flex flex-col justify-between px-6 py-10"
                    style={{ backgroundImage: "url('/cordoba2.jpeg')" }}
                >
                    {/* Overlay: darker black with bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/75 to-black/30 z-10" />

                    {/* Title near top */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20 max-w-4xl mx-auto text-center text-white"
                    >
                        <h1 className="text-5xl md:text-6xl font-heading f1 leading-tight">
                            Meet Jacob Hazzard
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl f2 font-light max-w-xl mx-auto">
                            A real estate strategist with a builder's eye and a designer’s touch — serving San Clemente and the OC coast.
                        </p>
                    </motion.div>

                    {/* Portrait & Bio near bottom */}
                    {/* Portrait & Bio near bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 
                                    bg-white bg-opacity-90 p-8 rounded-none shadow-lg"
                        style={{ minHeight: '20rem' }}  // ensure some height so content can show
                    >
                        {/* Portrait */}
                        <div className="flex-1 relative h-64 md:h-80 min-w-[200px]">
                            <Image
                                src="/headshot1.jpg"
                                alt="Jacob Hazzard"
                                fill
                                className="object-cover object-center rounded-none"
                                priority
                            />
                        </div>

                        {/* Bio text */}
                        <div className="flex-1 text-gray-900">
                            <p className="uppercase text-sm tracking-widest text-gray-600 mb-3 f2 font-semibold">
                                Behind the Sale
                            </p>
                            <h2 className="text-3xl font-heading f1 mb-6">Experience. Vision. Results.</h2>
                            <p className="text-base f2 font-light mb-4">
                                With over a decade of experience, Jacob blends design with data to create record-setting homes and refined living spaces.
                            </p>
                            <p className="text-base f2 font-light">
                                His client-first approach transforms stress into confidence — and properties into works of art.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Portrait & Bio */}
                {/* <section className="bg-[#e9e6df] py-24 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/headshot1.jpg"
                alt="Jacob Hazzard"
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-500 mb-3 f2">Behind the Sale</p>
              <h2 className="text-3xl font-heading f1 mb-6 text-black">Experience. Vision. Results.</h2>
              <p className="text-base text-gray-700 f2 font-light mb-4">
                With over a decade of experience, Jacob blends design with data to create record-setting homes and refined living spaces.
              </p>
              <p className="text-base text-gray-700 f2 font-light">
                His client-first approach transforms stress into confidence — and properties into works of art.
              </p>
            </div>
          </motion.div>
        </section> */}

                {/* Story/Timeline Section */}
                <section className="bg-[#dcd9d1] py-24 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl uppercase tracking-widest f1 mb-10 text-gray-700"
                        >
                            A Proven Track Record
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-10 text-left">
                            {[
                                { year: '2014', title: 'First Flip Sold', desc: 'Launched his career by turning a tired duplex into a showcase home.' },
                                { year: '2018', title: 'Market Record', desc: 'Sold a coastal renovation for 23% over asking — redefining the local market.' },
                                { year: '2022–Now', title: 'Strategic Partner', desc: 'Clients trust Jacob to guide buying, selling, and upgrading their most valuable assets.' },
                            ].map((item, idx) => (
                                <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-6 shadow-md">
                                    <p className="text-sm text-gray-500 mb-1 f2">{item.year}</p>
                                    <h3 className="text-xl font-semibold mb-2 f1">{item.title}</h3>
                                    <p className="text-gray-700 font-light f2">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
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
                            “Jacob didn’t just sell our home — he elevated it.”
                        </motion.blockquote>
                        <p className="text-sm uppercase tracking-widest f2 text-gray-500">— Client in Dana Point</p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="relative bg-black py-24 px-6 text-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/cordoba4.jpeg')] opacity-10 bg-cover bg-center z-0" />
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
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-lg tracking-wide rounded-full shadow-md font-light hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            Schedule a Consultation →
                        </a>
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="bg-[#1f1f1f] text-white text-sm py-8 px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="font-light text-center md:text-left">
                            &copy; {new Date().getFullYear()} Jacob Hazzard Real Estate | CA DRE #01234567
                        </p>
                        <div className="flex space-x-6 text-gray-400">
                            <a href="/listings" className="hover:text-white transition">Listings</a>
                            <a href="/about" className="hover:text-white transition">About</a>
                            <a href="/testimonials" className="hover:text-white transition">Testimonials</a>
                            <a href="/contact" className="hover:text-white transition">Contact</a>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
