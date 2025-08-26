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
        title: 'Sold Over Asking',
        subtitle: 'Strategic Full Remodel Success',
        address: '433 E Avenida Cordoba, San Clemente',
        price: '$2,600,000',
        netGain: '$400,000+',
        highlights: [
            'Seller netted an additional $400,000+ from strategic upgrades',
            'Full remodel through white glove services',
            'Renovation and transition funds fronted upfront',
            'Successfully transitioned seller into new home',
            'Complete turnkey process management'
        ],
        image: '/cordoba4.jpeg',
        badge: 'PREMIUM SERVICE'
    },
    {
        title: 'Off-Market Victory',
        subtitle: 'Exclusive Access & Fast Close',
        address: '24041 Lapwing Ln, Laguna Niguel',
        price: '$1,720,000',
        timeframe: 'Closed in 21 Days',
        highlights: [
            'Exclusive off-market opportunity secured',
            'Beat out multiple competing buyers',
            'Lightning-fast 21-day close process',
            'Negotiated favorable terms for buyer',
            'Seamless transaction coordination'
        ],
        image: '/ameno4.jpeg',
        badge: 'EXCLUSIVE ACCESS'
    }
];

export default function PastSuccessSlideshow() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="successes" className="py-20 pb-0 bg-slate-900 text-gray-800">
            <div className="text-center mb-20 text-white">
                <div className="inline-block text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-6">
                    Recent Success Stories
                </div>
                <h2 className="text-6xl font-extralight mb-8 leading-tight tracking-tight">
                    PROVEN
                    <span className="block text-blue-400 italic font-light">RESULTS</span>
                </h2>
                <div className="w-24 h-px bg-blue-400 mx-auto"></div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                loop
                autoplay={{ delay: 7000 }}
                pagination={{ clickable: true }}
                navigation
                className="max-w-7xl mx-auto px-4 bg-white"
            >
                {listings.map((listing, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="grid md:grid-cols-2 overflow-hidden bg-white group shadow-lg"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {/* Left: Image */}
                            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                                <Image
                                    src={listing.image}
                                    alt={listing.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10" />

                                {/* Badge */}
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="bg-blue-400 text-white px-4 py-2 text-xs uppercase tracking-widest font-semibold">
                                        {listing.badge}
                                    </span>
                                </div>

                                {/* Price overlay */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="text-white">
                                        <p className="text-3xl font-bold">{listing.price}</p>
                                        {listing.netGain && (
                                            <p className="text-lg text-green-300 font-semibold">
                                                +{listing.netGain} Net Gain
                                            </p>
                                        )}
                                        {listing.timeframe && (
                                            <p className="text-lg text-blue-300 font-semibold">
                                                {listing.timeframe}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-12 flex flex-col justify-center bg-white relative z-20">
                                <p
                                    className="text-sm uppercase tracking-widest text-[#b29567] font-semibold mb-3"
                                    data-aos="fade-right"
                                >
                                    {listing.address}
                                </p>

                                <h3
                                    className="text-4xl font-bold mb-2 text-gray-900"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                >
                                    {listing.title}
                                </h3>

                                <h4
                                    className="text-xl font-medium mb-6 text-[#b29567]"
                                    data-aos="fade-right"
                                    data-aos-delay="150"
                                >
                                    {listing.subtitle}
                                </h4>

                                <div
                                    className="mb-8"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                >
                                    <h5 className="font-semibold text-gray-800 mb-4 text-lg uppercase tracking-wide">
                                        Key Achievements
                                    </h5>
                                    <ul className="space-y-3 text-gray-700">
                                        {listing.highlights.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="w-2 h-2 bg-[#b29567] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-base leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center px-8 py-3 border-2 border-[#b29567] text-[#b29567] text-lg font-semibold uppercase tracking-wider hover:bg-[#b29567] hover:text-white transition duration-300 group"
                                        data-aos="fade-right"
                                        data-aos-delay="400"
                                    >
                                        Get Similar Results
                                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
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
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background-color: #b29567;
          opacity: 1;
        }
      `}</style>
        </section>
    );
}