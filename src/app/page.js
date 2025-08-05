import Head from 'next/head';
import HeroSlideshow from './hero';
import Image from 'next/image';
import Link from 'next/link';

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
        {/* About Section */}
        {/* <section className="py-1 px-1 text-center bg-white" id="about"></section> */}
        <div className='py-5 bg-black/30 justify-center items-center'>
          <Image
            src="/white-transparent-bigger.png"
            alt="Logo"
            width={400}
            height={250}
            className="w-35 h-30 object-cover justify-center mx-auto"
          />
          <p className="text-lg text-white leading-relaxed font-body text-center pb-10 px-20" style={{ fontFamily: 'Montserrat' }} >
            With years of experience in high-end real estate and a sharp eye for profitable renovations, Jacob delivers tailored service and stunning results. From strategic upgrades to record-breaking sales, his client-first approach ensures luxury with impact.
          </p>
        </div>
        <section id="about" className="relative flex flex-col lg:flex-row bg-white overflow-hidden py-25">
          {/* Left side image (fixed on larger screens) */}
          <div className="relative w-full lg:w-3/5 h-[40vh] lg:h-[40vh]">
            <Image
              src="/client2.jpeg"
              alt="Jacob Hazzard"
              fill
              priority
              className="object-cover object-center lg:sticky lg:top-0 h-full w-full"
            />
            {/* Optional: dark overlay for contrast on smaller screens */}
            <div className="lg:hidden absolute inset-0 bg-black/40" />
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
              <div className="flex text-2xl text-gray-600">
                <button href='/contact' className="font-montserrat font-light border border-black text-black bg-transparent px-20 py-3 text-lg tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                  Work with Jacob
                </button>
              </div>
            </div>
          </div>

        </section>
        {/* Mission Statement */}
        <section className="py-20 bg-[#f0eeea] text-center px-4">
          <h2 className="text-xl font-light tracking-widest uppercase mb-6 f1">A Modern Real Estate Philosophy</h2>
          <p className="max-w-xl mx-auto text-lg f2">
            Jacob&apos;s approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
          </p>
        </section>

        {/* Past Successes */}
        <section className="py-20 bg-white px-4" id="successes">
          <h2 className="text-3xl font-semibold text-center mb-10 f1">Past Listings & Renovation Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="shadow-md rounded-2xl overflow-hidden bg-[#fdfdfd]">
              <Image
                src="/cordoba1.jpeg"
                alt="Past Work"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />              <div className="p-6 text-left">
                <h3 className="text-lg font-medium mb-2 f2">$120K Over Asking</h3>
                <p className="text-sm text-gray-600 f2">Modernized kitchen and exterior staging created maximum appeal.</p>
              </div>
            </div>
            <div className="shadow-md rounded-2xl overflow-hidden bg-[#fdfdfd]">
              <Image
                src="/cordoba2.jpeg"
                alt="Past Work"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />              <div className="p-6 text-left">
                <h3 className="text-lg font-medium mb-2 f2">Sold in 48 Hours</h3>
                <p className="text-sm text-gray-600 f2">Luxury townhome fully reimagined with buyer appeal in mind.</p>
              </div>
            </div>
            <div className="shadow-md rounded-2xl overflow-hidden bg-[#fdfdfd]">
              <Image
                src="/cordoba3.jpeg"
                alt="Past Work"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />              <div className="p-6 text-left">
                <h3 className="text-lg font-medium mb-2 f2">Record Neighborhood Sale</h3>
                <p className="text-sm text-gray-600 f2">Pre-sale renovations drove ROI and buyer competition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Listings */}
        <section className="py-20 bg-[#f0eeea] px-4" id="listings">
          <h2 className="text-3xl font-semibold text-center mb-10 f1">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image
                src="/cordoba6.jpeg"
                alt="Past Work"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />               <div className="p-5">
                <h3 className="text-lg font-semibold">123 Ocean View Blvd</h3>
                <p className="text-sm text-gray-600 mb-2 f2">4 Bed • 3 Bath • $2.4M</p>
                <a href="#" className="text-blue-600 font-medium">View Details →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image
                src="/cordoba2.jpeg"
                alt="Past Work"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />               <div className="p-5">
                <h3 className="text-lg font-semibold f2">456 Hillside Drive</h3>
                <p className="text-sm text-gray-600 mb-2 f2">5 Bed • 4 Bath • $3.1M</p>
                <a href="#" className="text-blue-600 font-medium f2">View Details →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image
                src="/cordoba4.jpeg"
                alt="Past Work"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />               <div className="p-5">
                <h3 className="text-lg font-semibold f2">789 Coastal Road</h3>
                <p className="text-sm text-gray-600 mb-2 f2">3 Bed • 2 Bath • $1.9M</p>
                <a href="#" className="text-blue-600 font-medium f2">View Details →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-4 f1">Let’s Connect</h2>
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
