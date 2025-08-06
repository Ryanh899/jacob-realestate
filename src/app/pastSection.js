"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const listings = [
  {
    title: '$120K Over Asking',
    address: '123 Ocean View Blvd',
    price: '$2.1M',
    timeOnMarket: '5 days',
    highlights: [
      'Full kitchen remodel',
      'Exterior staging',
      'Drone video tour',
    ],
    image: '/cordoba1.jpeg',
  },
  {
    title: 'Sold in 48 Hours',
    address: '456 Hillside Drive',
    price: '$3.1M',
    timeOnMarket: '2 days',
    highlights: [
      'Custom wood flooring',
      'Luxury fixtures installed',
      'Pre-listing marketing campaign',
    ],
    image: '/cordoba2.jpeg',
  },
  {
    title: 'Record Neighborhood Sale',
    address: '789 Coastal Road',
    price: '$1.9M',
    timeOnMarket: '7 days',
    highlights: [
      'Bathroom + exterior upgrade',
      'Professional staging',
      'Targeted ad placement',
    ],
    image: '/cordoba3.jpeg',
  },
];

export default function PastSuccessSlideshow() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="successes" className="py-20 pb-0 bg-[#fdfaf5] text-gray-800">
      <h2
        className="text-5xl font-light text-center mb-16 f1"
        data-aos="fade-down"
      >
        Past Listings & Renovation Wins
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6500 }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-7xl mx-auto px-4 bg-[#fdfaf5]"
      >
        {listings.map((listing, i) => (
          <SwiperSlide key={i}>
            <div
              className="grid md:grid-cols-2 overflow-hidden bg-white group"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {/* Left: Image */}
              <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
              </div>

              {/* Right: Content */}
              <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-[#fffefc] to-[#f1ece3] relative z-20">
                <p
                  className="text-xs uppercase tracking-widest text-[#b29567] font-semibold mb-2"
                  data-aos="fade-right"
                >
                  {listing.address}
                </p>
                <h3
                  className="text-3xl font-semibold mb-4 text-gray-800 f2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  {listing.title}
                </h3>
                <p
                  className="text-base text-gray-700 mb-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <strong>Sold for:</strong> {listing.price} &nbsp; | &nbsp;
                  <strong>Time on market:</strong> {listing.timeOnMarket}
                </p>

                <ul
                  className="list-disc pl-5 text-gray-700 text-sm mb-5 space-y-1"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  {listing.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="inline-block self-start mt-auto border border-[#b29567] text-[#b29567] px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#b29567] hover:text-white transition duration-300"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Contact for Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #b29567;
          transition: transform 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.2);
        }

        .swiper-pagination-bullet {
          background-color: #d4c3a2;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background-color: #b29567;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
