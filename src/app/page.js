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
        <section className="relative h-[35vh] bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/cordoba7.jpeg')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 z-0" />
          {/* Foreground Content */}
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
        </section>
        <PastSuccessSlideshow />
        <section className="pt-20 pb-12.5 text-center px-4 bg-[#f1ece3]"></section>
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
        <section id="contact" className="py-24 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-4 f1">Let&apos;s Connect</h2>
          <p className="mb-6 text-lg text-gray-600 f2">Thinking of buying, selling, or renovating? Reach out to Jacob directly.</p>
          <a href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">Contact Jacob</a>
        </section>

        {/* Footer */}
        <footer className="bg-[#f0eeea] text-center py-6 text-sm text-gray-600 f2">
          <p>&copy; {new Date().getFullYear()} Jacob Hazzard Real Estate. CA DRE #01234567</p>
        </footer>
      </main>
    </>
  );
}
