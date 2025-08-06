'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const listings = [
  {
    image: "/cordoba4.jpeg",
    address: "123 Ocean View Blvd",
    specs: "4 Bed • 3 Bath",
    price: "$2.4M",
  },
  {
    image: "/luxh2.jpg",
    address: "456 Hillside Drive",
    specs: "5 Bed • 4 Bath",
    price: "$3.1M",
  },
];

export default function FeaturedListings() {
  return (
    <section id="listings" className="bg-black">
      {/* Heading */}
      <div className="text-center text-gray-200 px-4 pt-15 pb-10 md:pt-20 pb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight f1" data-aos="fade-up">
          Featured Listings
        </h2>
        <p className="text-base md:text-lg font-light mt-3 f1">
          Explore our current listings and discover your dream home in San Clemente and beyond.
        </p>
      </div>

      {/* DESKTOP GRID VIEW */}
      <div className="hidden md:grid grid-cols-2 gap-0">
        {listings.map((listing, i) => (
          <div
            key={i}
            className="relative h-[55vh] w-full overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <Image
              src={listing.image}
              alt={listing.address}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 z-10" />

            <div className="absolute bottom-0 left-0 right-0 z-20 p-10 text-white bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-3xl font-semibold f2 mb-2">{listing.address}</h3>
              <div className="flex justify-between items-center text-sm md:text-base font-light tracking-wide">
                <span>{listing.specs}</span>
                <span className="font-medium text-lg md:text-xl">{listing.price}</span>
              </div>
              <a
                href="#"
                className="mt-4 inline-block border border-white px-5 py-2 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE SLIDER VIEW */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          spaceBetween={0}
          slidesPerView={1}
          className="relative"
        >
          {listings.map((listing, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[70vh] w-full overflow-hidden group">
                <Image
                  src={listing.image}
                  alt={listing.address}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold f2 mb-2">{listing.address}</h3>
                  <div className="flex justify-between items-center text-sm font-light tracking-wide">
                    <span>{listing.specs}</span>
                    <span className="font-medium text-lg">{listing.price}</span>
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-block border border-white px-4 py-2 uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
