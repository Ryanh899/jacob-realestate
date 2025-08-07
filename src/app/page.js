import Head from 'next/head';
import HeroSlideshow from './hero';
import Image from 'next/image';
import Link from 'next/link';
import PastSuccessSlideshow from './pastSection';
import FeaturedListings from './listingSection';

export default function Home() {
  return (
    <>
      <main className="text-gray-800 bg-[#f9f7f4]" >
        {/* Hero Section */}
        <HeroSlideshow />

        {/* Navigation Bar */}
        {/* <div>
          <nav className="bg-white shadow-sm py-4 text-sm uppercase tracking-wide text-center space-x-6 sticky top-0 z-50">
            <Link href="/listings" className="hover:text-gray-400 hover:underline text-gray-600 f2">Listings</Link>
            <Link href="/about" className="hover:text-gray-400 hover:underline text-gray-600 f2">About</Link>
            <Link href="/testimonials" className="hover:text-gray-400 hover:underline text-gray-600 f2">Testimonials</Link>
            <Link href="/contact" className="hover:text-gray-400 hover:underline text-gray-600 f2">Contact</Link>
          </nav>
        </div> */}
        <section className="py-10 text-center px-4 bg-[#f1ece3] md:hidden"></section>
        <section id="about" className="relative flex flex-col lg:flex-row bg-white overflow-hidden py-25 pt-0 pb-10 md:pt-45 md:pb-45">
          {/* Left side image (fixed on larger screens) */}
          <div className="relative w-full lg:w-3/5 h-85 lg:h-auto lg:sticky lg:top-0 xl:h-200 xl:w-3/5">
            <Image
              src="/client2.jpeg"
              alt="Jacob Hazzard"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          {/* Right side content */}
          <div className="w-full lg:w-2/5 flex items-center justify-center px-6 py-6 bg-white z-10">
            <div className="max-w-md text-left space-y-6">
              {/* Trust Layer */}
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold font-title">
                Your Trusted Advocate
              </p>

              {/* Headline Layer */}
              <h2 className="text-4xl lg:text-5xl font-heading text-black leading-tight f1">
                Real Estate with Precision, Integrity, and Vision
              </h2>

              {/* Supporting Body */}
              <p className="text-base text-gray-700 leading-relaxed font-body f2">
                Jacob Hazzard combines years of luxury market expertise with the mindset of a builder, renovator, and advocate. Known for honest advice and impeccable execution, he helps clients navigate the market with confidence — from thoughtful upgrades to record-breaking closings.
              </p>
              <div className="flex text-md md:text-xl text-gray-600">
                <button href='/buy' className="font-montserrat font-light border border-black text-black bg-transparent px-7 md:px-8 py-3 mr-5 tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                  Buy with Jacob
                </button>
                <button href='/sell' className="font-montserrat font-light border border-black text-black bg-transparent px-7 md:px-8 py-3 tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                  Sell with Jacob
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Sticky / Fixed Image Scroll Section */}
        <section className="relative">
          {/* For larger screens: fixed background */}
          <div className="hidden md:block relative h-[35vh] bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/cordoba7.jpeg')" }}>
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-white text-center max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-3 f1">
                  A Modern Real Estate Philosophy
                </h2>
                <p className="text-base lg:text-lg font-light f2">
                  Jacob&apos;s approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
                </p>
              </div>
            </div>
          </div>

          {/* For small screens: image with sticky scroll effect */}
          <div className="md:hidden relative h-[40vh]">
            <Image
              src="/cordoba7.jpeg"
              alt="Scroll Background"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-white text-center max-w-xl">
                <h2 className="text-2xl font-semibold mb-2 f1">
                  A Modern Real Estate Philosophy
                </h2>
                <p className="text-sm font-light f2">
                  Jacob&apos;s approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PastSuccessSlideshow />
        <section className="pt-20 pb-12.5 text-center px-4 bg-[#f1ece3] hidden md:block"></section>
        {/* Mission Statement */}
        <section className="pt-20 pb-12.5 text-center px-4 bg-gray-700">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-6 f1 text-white">A Modern Real Estate Philosophy</h2>
          <p className="max-w-xl mx-auto text-lg f2 text-white font-light">
            Jacob&apos;s approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
          </p>
          <div className="py-0 flex justify-center items-center ">
            <Image
              src="/white-transparent-bigger.png"
              alt="Logo"
              width={400}
              height={250}
              className="w-40 h-35 object-cover mx-auto"
            />
          </div>
        </section>
        {/* Current Listings */}
        <FeaturedListings />
        {/* Contact Section */}
        <section id="contact" className="relative bg-[#f9f7f4] py-24 px-6 text-center overflow-hidden">
          {/* Optional: Background Accent Image */}
          <div className="absolute inset-0 opacity-10 bg-[url('/cordoba5.jpeg')] bg-cover bg-center z-0 hidden md:block" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-3xl font-heading f1 text-gray-900 mb-6">
              Let’s Connect & Make Your Move Exceptional
            </h2>
            <p className="text-lg md:text-lg font-light text-gray-700 f2 mb-10">
              Whether you’re buying, selling, or transforming a property, Jacob Hazzard brings precision, vision, and proven results. Let’s talk about your goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gray-700 text-white px-10 py-4 text-lg tracking-wide shadow-md font-light hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Start the Conversation
            </a>
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

      </main>
    </>
  );
}
