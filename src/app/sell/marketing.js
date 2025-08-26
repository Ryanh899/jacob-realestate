import React from 'react';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

const MarketingSection = () => {
    const digitalPlatforms = [
        { name: "Multiple Listing Services (MLS)", category: "Core" },
        { name: "Zillow", category: "Premier" },
        { name: "realtor.com", category: "Premier" },
        { name: "Trulia", category: "Premier" },
        { name: "luxre realty", category: "Exclusive" },
        { name: "WSJ Real Estate", category: "Luxury" },
        { name: "Yahoo! Real Estate", category: "Premier" },
        { name: "MSN Real Estate", category: "Premier" },
        { name: "AOL Real Estate", category: "Premier" },
        { name: "homes.com", category: "Premier" },
        { name: "homefinder.com", category: "Premier" },
        { name: "frontdoor.com", category: "Premier" },
        { name: "estately.com", category: "Premier" },
        { name: "openhouse.com", category: "Premier" },
        { name: "cbview.com", category: "Premier" },
        { name: "PropGo", category: "Premier" },
        { name: "Luxury", category: "Exclusive" },
        { name: "ListHub", category: "Core" },
    ];

    const socialPlatforms = [
        "Instagram", "Facebook", "LinkedIn", "YouTube", "TikTok"
    ];

    const photographyServices = [
        "High-resolution architectural photography",
        "Aerial drone cinematography",
        "Twilight and golden hour captures",
        "Virtual staging and enhancement",
        "360° immersive virtual tours",
        "Professional video walkthrough"
    ];

    const printServices = [
        "Luxury property brochures",
        "Premium magazine placements",
        "Targeted direct mail campaigns",
        "Custom property books",
        "High-end promotional materials"
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-3 bg-slate-50 px-8 py-4 border border-gray-200">
                            <MapPin className="h-5 w-5 text-blue-400" />
                            <span className="text-sm font-medium tracking-[0.15em] uppercase">Strategic Marketing Excellence</span>
                        </div>
                    </div>

                    <h2 className="text-6xl lg:text-8xl font-extralight leading-[0.85] mb-8 tracking-tight text-gray-900">
                        COMPREHENSIVE
                        <span className="block font-light text-blue-400 italic">
                            EXPOSURE
                        </span>
                        <span className="block text-4xl lg:text-5xl font-thin tracking-wider text-gray-600">
                            MAXIMUM RESULTS
                        </span>
                    </h2>

                    <div className="w-24 h-px bg-gradient-to-r from-blue-100 to-transparent mb-8"></div>

                    <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
                        Strategic placement across premium channels designed to attract discerning buyers
                        and achieve exceptional results for your property through proven marketing methodology.
                    </p>
                </div>

                {/* Digital Marketing Platforms */}
                <section className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h3 className="text-3xl font-light text-gray-900 mb-6">Digital Marketing Network</h3>
                            <div className="w-16 h-px bg-slate-900 mb-8"></div>
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
                                Strategic placement across 18 premier real estate platforms ensuring maximum visibility
                                to qualified buyers nationwide through targeted syndication.
                            </p>

                            <div className="grid grid-cols-3 gap-8">
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium text-blue-400 mb-1">Premier Listings</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Top-tier placement</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium text-blue-400 mb-1">National Reach</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Coast to coast exposure</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium text-blue-400 mb-1">Luxury Channels</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">High-end buyer focus</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl relative">
                            <div className="p-10">
                                <div className="grid gap-4 max-h-96 overflow-y-auto">
                                    {digitalPlatforms.map((platform, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-4 px-1 border-b border-gray-100 last:border-b-0"
                                        >
                                            <span className="text-gray-900 font-light">{platform.name}</span>
                                            <span className={`text-xs font-medium px-3 py-1 uppercase tracking-[0.1em] ${platform.category === 'Exclusive'
                                                    ? 'bg-slate-900 text-white'
                                                    : platform.category === 'Luxury'
                                                        ? 'bg-slate-700 text-white'
                                                        : platform.category === 'Premier'
                                                            ? 'bg-slate-500 text-white'
                                                            : 'bg-slate-300 text-slate-800'
                                                }`}>
                                                {platform.category}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20"></div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-slate-900/10"></div>
                        </div>
                    </div>
                </section>

                {/* Social Media Marketing */}
                <section className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="bg-slate-900 text-white relative">
                            <div className="p-12">
                                <h3 className="text-3xl font-light mb-6">Social Media Amplification</h3>
                                <div className="w-16 h-px bg-white mb-8"></div>
                                <p className="text-gray-300 font-light mb-8 leading-relaxed text-lg">
                                    Targeted campaigns across all major social platforms with professional content creation,
                                    strategic optimization, and demographic targeting to reach your ideal buyer profile.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    {socialPlatforms.map((platform, index) => (
                                        <div key={index} className="flex items-center gap-3 py-2">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="text-gray-200 font-light">{platform}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20"></div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10"></div>
                        </div>

                        <div>
                            <h4 className="text-3xl font-light text-gray-900 mb-6">Custom Property Website</h4>
                            <div className="w-16 h-px bg-slate-900 mb-8"></div>
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
                                A dedicated, SEO-optimized website featuring interactive galleries,
                                virtual tours, neighborhood insights, and sophisticated lead capture systems
                                designed to engage qualified prospects.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium text-blue-400 mb-1">Custom Design</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Tailored to you</div>
                                </div>
                                <div className="border-l-2 border-blue-400 pl-4">
                                    <div className="text-lg font-medium text-blue-400 mb-1">Immersive Media</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Photos & Tours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Photography */}
                <section className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h3 className="text-3xl font-light text-gray-900 mb-6">Professional Photography</h3>
                            <div className="w-16 h-px bg-slate-900 mb-8"></div>
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
                                Award-winning visual storytelling that captures your property's architectural details
                                and emotional appeal through expert composition and lighting techniques.
                            </p>

                            <div className="space-y-6">
                                {photographyServices.map((service, index) => (
                                    <div key={index} className="flex items-start gap-4 py-2">
                                        <CheckCircle className="h-5 w-5 text-slate-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 font-light">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl p-10 relative">
                                <h4 className="text-2xl font-light text-gray-900 mb-4">Visual Impact</h4>
                                <div className="w-12 h-px bg-blue-500 mb-6"></div>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Professional photography creates immediate emotional connection with potential buyers,
                                    showcasing your property's unique character and lifestyle potential.
                                </p>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20"></div>
                                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-slate-900/10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Print Marketing */}
                <section className="mb-20">
                    <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-blue-900/70 text-white relative overflow-hidden">
                        <div className="p-16">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h3 className="text-3xl font-light mb-6">Premium Print Materials</h3>
                                    <div className="w-16 h-px bg-white mb-8"></div>
                                    <p className="text-gray-300 font-light mb-12 leading-relaxed text-lg">
                                        Sophisticated print collateral designed to impress high-net-worth prospects
                                        with premium materials and exceptional attention to detail.
                                    </p>

                                    <div className="space-y-4">
                                        {printServices.map((service, index) => (
                                            <div key={index} className="flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-200 font-light">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="inline-block bg-white/10 backdrop-blur-sm p-10 border border-white/10 relative">
                                        <div className="text-5xl font-extralight mb-3 text-blue-400">100%</div>
                                        <div className="text-gray-300 font-light">Custom-designed materials</div>
                                        <div className="text-gray-300 font-light">for each property</div>
                                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20"></div>
                                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-light text-gray-900 mb-6">Ready to Begin?</h3>
                        <div className="w-16 h-px bg-blue-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
                            Experience the difference comprehensive marketing makes for your property's success.
                        </p>
                        <Link href="/contact" >
                        <button className="bg-slate-900 text-white py-5 px-8 font-medium hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-4 group shadow-lg transform hover:scale-[1.02] mx-auto">
                            <span className="text-lg uppercase tracking-wider">Schedule Consultation</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        </Link >
                    </div>
                </section>

            </div>
        </div>
    );
};

export default MarketingSection;