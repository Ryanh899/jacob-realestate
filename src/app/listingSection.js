'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const listings = [
  {
    id: 1,
    image: "/cordoba4.jpeg",
    address: "123 Ocean View Blvd",
    specs: "4 Bed • 3 Bath",
    price: "$2.4M",
    // Enhanced data for modal
    images: ["/cordoba4.jpeg", "/luxh2.jpg", "/cordoba4.jpeg"], // Add more images
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    lotSize: "0.25 acres",
    yearBuilt: 2018,
    propertyType: "Single Family Home",
    features: [
      "Ocean Views",
      "Gourmet Kitchen",
      "Master Suite with Walk-in Closet",
      "Hardwood Floors",
      "Private Backyard",
      "Two-Car Garage"
    ],
    description: "Stunning contemporary home with breathtaking ocean views. This meticulously designed residence features an open-concept layout perfect for modern living and entertaining.",
    additionalDescription: "The gourmet kitchen boasts high-end appliances and granite countertops, while the master suite offers a private retreat with panoramic views. Located in a prestigious neighborhood with easy access to beaches and amenities."
  },
  {
    id: 2,
    image: "/luxh2.jpg",
    address: "456 Hillside Drive",
    specs: "5 Bed • 4 Bath",
    price: "$3.1M",
    // Enhanced data for modal
    images: ["/luxh2.jpg", "/cordoba4.jpeg", "/luxh2.jpg"], // Add more images
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    lotSize: "0.35 acres",
    yearBuilt: 2020,
    propertyType: "Single Family Home",
    features: [
      "Mountain Views",
      "Wine Cellar",
      "Home Office",
      "Pool & Spa",
      "Smart Home Technology",
      "Three-Car Garage"
    ],
    description: "Luxurious hillside estate offering privacy and sophistication. This architectural masterpiece combines modern amenities with timeless elegance.",
    additionalDescription: "Featuring soaring ceilings, floor-to-ceiling windows, and premium finishes throughout. The resort-style backyard includes a sparkling pool, spa, and outdoor kitchen perfect for year-round entertaining."
  },
];

export default function FeaturedListings() {
  const [selectedListing, setSelectedListing] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = (listing) => {
    setSelectedListing(listing);
    setCurrentImageIndex(0);
    setIsModalVisible(true);
    setFormSubmitted(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalClosing(true);
    
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setSelectedListing(null);
      setCurrentImageIndex(0);
      setIsModalVisible(false);
      setIsModalClosing(false);
      setFormSubmitted(false);
      document.body.style.overflow = 'unset';
    }, 300); // Match the animation duration
  };

  const nextImage = () => {
    if (selectedListing) {
      setCurrentImageIndex((prev) => 
        prev === selectedListing.images.length - 1 ? 0 : prev + 1
      );
    }
  };
 
  const prevImage = () => {
    if (selectedListing) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedListing.images.length - 1 : prev - 1
      );
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mkgvggdq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
      } else {
        console.error('Form submission failed');
        // You could add error handling here if needed
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error handling here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedListing) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedListing]);

  return (
    <>
      <section id="listings" className="bg-[#1a1a1a]">
        {/* Heading */}
        <div className="text-center text-gray-200 px-4 pt-15 pb-10 md:pt-20 pb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight f1" data-aos="fade-up">
           <span className='font-semibold' > Featured </span> Listings
          </h2>
          <p className="text-base md:text-lg font-light mt-3 f1 text-gray-300">
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
                <button
                  onClick={() => openModal(listing)}
                  className="mt-4 inline-block border border-white px-5 py-2 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Details →
                </button>
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
                    <button
                      onClick={() => openModal(listing)}
                      className="mt-4 inline-block border border-white px-4 py-2 uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* MODAL */}
      {isModalVisible && selectedListing && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
          isModalClosing ? 'opacity-0' : 'opacity-100'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ease-out ${
              isModalClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className={`relative bg-[#1a1a1a] w-full max-w-4xl max-h-[95vh] rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 ease-out ${
            isModalClosing 
              ? 'opacity-0 scale-95 translate-y-4' 
              : 'opacity-100 scale-100 translate-y-0'
          }`}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 text-white hover:text-gray-300 transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="max-h-[95vh] overflow-y-auto">
              {/* Image Gallery - Top Section */}
              <div className="relative w-full h-[40vh] md:h-[50vh]">
                <Image
                  src={selectedListing.images[currentImageIndex]}
                  alt={selectedListing.address}
                  fill
                  className="object-cover transition-opacity duration-300"
                />
                
                {/* Image Navigation */}
                {selectedListing.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedListing.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 text-white">
                  {/* Header */}
                  <div className="mb-6 border-b border-gray-700 pb-6">
                    <h2 className="text-3xl md:text-4xl font-semibold f2 mb-3">
                      {selectedListing.address}
                    </h2>
                    <div className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                      {selectedListing.price}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      {selectedListing.propertyType}
                    </div>
                  </div>

                  {/* Specifications Grid */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4 f2">Property Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Bedrooms</span>
                        <span className="font-medium">{selectedListing.bedrooms}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Bathrooms</span>
                        <span className="font-medium">{selectedListing.bathrooms}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Square Feet</span>
                        <span className="font-medium">{selectedListing.sqft.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Lot Size</span>
                        <span className="font-medium">{selectedListing.lotSize}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">Year Built</span>
                        <span className="font-medium">{selectedListing.yearBuilt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4 f2">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedListing.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4 f2">Description</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {selectedListing.description}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedListing.additionalDescription}
                    </p>
                  </div>

                  {/* Contact Form */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-medium mb-4 f2">Schedule a Tour</h3>
                    
                    {formSubmitted ? (
                      <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-medium text-green-400 mb-2">Thank You!</h4>
                        <p className="text-gray-300 mb-4">
                          Your request has been submitted successfully. We&apos;ll get back to you within 24 hours to schedule your tour.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        {/* Hidden field for property */}
                        <input type="hidden" name="property" value={selectedListing.address} />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                          />
                        </div>
                        
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                          className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                        />
                        
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                        />
                        
                        <textarea
                          name="message"
                          rows="4"
                          placeholder="Message (optional)"
                          className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                        />
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-white text-black py-3 px-6 uppercase tracking-wider text-sm font-medium hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Request Information'}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
);
}