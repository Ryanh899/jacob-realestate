import Head from 'next/head';
import HeroSlideshow from './hero';
import Image from 'next/image';
import Link from 'next/link';
import PastSuccessSlideshow from './pastSection';
import FeaturedListings from './listingSection';
import Footer from './footer';
import { icons } from 'lucide-react';

export const metadata = {
  title: "Jacob Hazzard, Luxre Realty | San Clemente Realtor",
  description: "Local Realtor in San Clemente & Orange County. Renovations, selling, buying, rental & investment property specialists. Get a valuation or find investment opportunities.",
  openGraph: {
    title: " Jacob Hazzard | San Clemente Realtor",
    description: "Local Realtor in San Clemente & Orange County. Renovations, selling, buying, rental & investment property specialists. Get a valuation or find investment opportunities.",
    url: "https://jacobhazzardrealestate.com",
    siteName: "Jacob Hazzard Real Estate",
    images: [
      {
        url: "/white-transparent-bigger.png",
        width: 1200,
        height: 630,
        alt: "Jacob Hazzard Real Estate Logo",
      },
    ],
    icons: {
      icon: "/logo.js.ico",
    },
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Jacob Hazzard",
    "image": "https://jacobhazzardrealestate.com/profile.jpg",
    "url": "https://jacobhazzardrealestate.com",
    "telephone": "+1-949-291-9395",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "222 Avenida Del Mar, San Clemente, CA 92672",
      "addressLocality": "San Clemente",
      "addressRegion": "CA",
      "postalCode": "92672",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Orange County, California"
      },
      {
        "@type": "Place",
        "name": "San Clemente, California"
      }
    ],
    "servesCuisine": "Real Estate",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "priceRange": "$$$",
    "description": "Jacob Hazzard is a luxury real estate agent with LUXRE Realty, specializing in buying, selling, renovations, investment properties, and rentals in Orange County, CA."
  };
  return (
    <>
      <Head>
        <title>Jacob Hazzard | Luxury Real Estate in Orange County</title>
        <meta name="description" content="Work with Jacob Hazzard of LUXRE Realty for luxury real estate in Orange County. Specializing in buying, selling, renovations, and investment opportunities." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="text-gray-800 bg-[#f9f7f4]" >
        {/* Hero Section */}
        <HeroSlideshow />
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
                Jacob Hazzard combines years of market expertise with the mindset of a builder, renovator, and homeowner. Known for honest advice and impeccable execution, he helps clients navigate the market with confidence — from thoughtful upgrades to record-breaking closings.
              </p>
              <div className="flex text-md md:text-xl text-gray-600">
                <Link href='/contact'>
                  <button href='/buy' className="font-montserrat font-light border border-black text-black bg-transparent px-28 md:px-32 py-3 mr-5 tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                    Work with Jacob
                  </button>
                </Link>
                {/* <Link href='/sell'>
                  <button href='/sell' className="font-montserrat font-light border border-black text-black bg-transparent px-7 md:px-8 py-3 tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                    Sell with Jacob
                  </button>
                </Link> */}
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
          <h2 className="text-2xl font-extralight tracking-widest uppercase mb-6 f1 text-white"> <span className='font-normal' >Honest</span> Work. <br/> <span className='font-normal' >Lasting </span>Results</h2>
          <p className="max-w-xl mx-auto text-lg f2 text-white font-light">
            With experience in renovation, buying, selling, and investments, Jacob delivers real estate with honesty, precision, and a hometown touch.          </p>
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
              className="inline-block bg-gray-600 text-white px-10 py-4 text-lg tracking-wide shadow-md font-light hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Start the Conversation
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
