'use client';

import React, { useState, useEffect } from 'react';
import { Home, MapPin, Calculator, CheckCircle, ArrowRight, DollarSign, TrendingUp, Shield, Clock, Users, Award, Search, Heart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../footer';
import Link from 'next/link';
import Image from 'next/image';

const BuyingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeGuideSection, setActiveGuideSection] = useState(0);
    const [mortgageData, setMortgageData] = useState({
        homePrice: '',
        downPayment: '',
        interestRate: '7.2',
        loanTerm: '30',
        annualIncome: '',
        monthlyDebts: ''
    });
    const [calculatorResults, setCalculatorResults] = useState(null);
    const [expandedStep, setExpandedStep] = useState(null);

    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'Testimonials', href: '/testimonials' },
    ];

    const buyersGuideSteps = [
        {
            title: "Pre-Approval Process",
            icon: <CheckCircle className="h-6 w-6" />,
            description: "Secure your financing and understand your buying power before viewing properties.",
            details: [
                "Gather financial documents (pay stubs, tax returns, bank statements)",
                "Check and optimize your credit score (aim for 740+ for best rates)",
                "Calculate your debt-to-income ratio",
                "Get pre-approved with multiple lenders to compare rates",
                "Understand different loan types (Conventional, FHA, VA, Jumbo)"
            ]
        },
        {
            title: "Property Search & Selection",
            icon: <Search className="h-6 w-6" />,
            description: "Identify your dream coastal property with strategic market insights.",
            details: [
                "Define your must-haves vs nice-to-haves",
                "Research neighborhoods and school districts",
                "Consider future resale value and market trends",
                "Evaluate proximity to amenities and transportation",
                "Schedule private showings with your agent"
            ]
        },
        {
            title: "Making Competitive Offers",
            icon: <TrendingUp className="h-6 w-6" />,
            description: "Navigate coastal market competition with winning offer strategies.",
            details: [
                "Analyze comparable sales and market conditions",
                "Structure competitive offers with favorable terms",
                "Include escalation clauses when appropriate",
                "Waive contingencies strategically",
                "Present strong pre-approval letters"
            ]
        },
        {
            title: "Due Diligence & Inspections",
            icon: <Shield className="h-6 w-6" />,
            description: "Protect your investment with thorough property evaluation.",
            details: [
                "Professional home inspection (structure, systems, safety)",
                "Pest and termite inspection",
                "Coastal-specific inspections (flood zones, erosion, salt damage)",
                "Title search and insurance review",
                "HOA document review and approval"
            ]
        },
        {
            title: "Closing Process",
            icon: <Award className="h-6 w-6" />,
            description: "Complete your coastal property purchase with confidence.",
            details: [
                "Final loan approval and documentation",
                "Final walk-through inspection",
                "Review all closing documents carefully",
                "Wire transfer of closing funds",
                "Key handover and possession"
            ]
        }
    ];

    const calculateMortgage = () => {
        const price = parseFloat(mortgageData.homePrice) || 0;
        const down = parseFloat(mortgageData.downPayment) || 0;
        const rate = parseFloat(mortgageData.interestRate) || 0;
        const term = parseFloat(mortgageData.loanTerm) || 30;
        const income = parseFloat(mortgageData.annualIncome) || 0;
        const debts = parseFloat(mortgageData.monthlyDebts) || 0;

        if (price > 0 && down >= 0 && rate > 0 && term > 0) {
            const loanAmount = price - down;
            const monthlyRate = rate / 100 / 12;
            const numPayments = term * 12;

            const monthlyPayment = loanAmount *
                (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                (Math.pow(1 + monthlyRate, numPayments) - 1);

            const totalInterest = (monthlyPayment * numPayments) - loanAmount;
            const monthlyIncome = income / 12;
            const totalMonthlyDebt = debts + monthlyPayment;
            const debtToIncomeRatio = (totalMonthlyDebt / monthlyIncome) * 100;

            setCalculatorResults({
                monthlyPayment: monthlyPayment,
                totalInterest: totalInterest,
                totalCost: price + totalInterest,
                loanAmount: loanAmount,
                debtToIncomeRatio: debtToIncomeRatio,
                affordable: debtToIncomeRatio <= 43
            });
        }
    };

    useEffect(() => {
        calculateMortgage();
    }, [mortgageData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMortgageData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    const handleScroll = () => {
        const section = document.getElementById("mort-calc");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/65 to-blue-900/75"></div>
                    <nav className="absolute top-0 left-0 right-0 z-40 px-8 justify-between items-center text-sm bg-transparent text-white tracking-wide uppercase hidden md:flex">
                        <Image
                            src="/white-transparent-bigger.png"
                            alt="Logo"
                            width={400}
                            height={250}
                            className="w-full max-w-[200px] object-contain"
                        />

                        <div className="space-x-6 flex items-center">
                            {navItems.map(({ label, href }) => (
                                <Link key={label} href={href} className="group relative">
                                    <span className="relative inline-block after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 group-hover:after:w-full after:transition-all after:duration-300 f2 font-light py-4" style={{ fontSize: '16px' }}>
                                        {label}
                                    </span>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="font-montserrat font-light border border-white text-white bg-transparent px-7 py-3 text-lg tracking-wider transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Nav - Keep as requested */}
                    <div className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center md:hidden">
                        <Image
                            src="/white-transparent-bigger.png"
                            alt="Logo"
                            width={130}
                            height={70}
                            className="object-contain"
                        />

                        <button
                            className="focus:outline-none z-50"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? (
                                <svg
                                    className="w-6 h-6 text-white mb-8 mr-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <div className="space-y-1 mr-5">
                                    <span className="block w-6 h-0.5 bg-white" />
                                    <span className="block w-6 h-0.5 bg-white" />
                                    <span className="block w-6 h-0.5 bg-white" />
                                </div>
                            )}
                        </button>
                    </div>

                    {menuOpen && (
                        <div
                            className="absolute top-[88px] left-45 right-11 z-40 bg-black/70 backdrop-blur-md text-white py-6 px-6 shadow-lg md:hidden animate-slideDown opacity-0 animate-fadeIn"
                            style={{ animation: 'fadeIn 0.3s ease forwards, slideDown 0.4s ease forwards' }}
                        >
                            {navItems.map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-base uppercase tracking-wider font-light hover:text-gray-300 py-2 transition"
                                >
                                    {label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="item-center mt-1 inline-block font-montserrat border border-white text-white bg-transparent px-12 py-2 text-base tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
                            >
                                Contact
                            </Link>
                        </div>
                    )}
                </div>
                {/* Floating Elements */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${4 + Math.random() * 2}s`
                            }}
                        >
                            <Home className="h-4 w-4 text-blue-300 transform rotate-12" />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-4 border border-white/10">
                                <MapPin className="h-5 w-5 text-blue-400" />
                                <span className="text-sm font-medium tracking-[0.15em] uppercase">Coastal Property Acquisition</span>
                            </div>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-extralight leading-[0.85] mb-8 tracking-tight">
                            DISCOVER
                            <span className="block font-light text-blue-400 italic">
                                YOUR
                            </span>
                            <span className="block text-4xl lg:text-5xl font-thin tracking-wider text-gray-300">
                                COASTAL HOME
                            </span>
                        </h1>

                        <div className="w-24 h-px bg-gradient-to-r from-blue-100 to-transparent mb-8 mx-auto"></div>

                        <p className="text-xl text-gray-200 leading-relaxed mb-12 font-light max-w-2xl mx-auto">
                            Navigate the luxury coastal market with expert guidance. From oceanfront estates to marina residences, find your perfect waterfront sanctuary.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
                            <div className="border-l-2 border-blue-400 pl-4 text-left">
                                <div className="text-3xl font-extralight text-blue-400 mb-1">150+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Homes Sold</div>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-4 text-left">
                                <div className="text-3xl font-extralight text-blue-400 mb-1">$850M</div>
                                <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Total Sales</div>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-4 text-left">
                                <div className="text-3xl font-extralight text-blue-400 mb-1">95%</div>
                                <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Client Satisfaction</div>
                            </div>
                            <div className="border-l-2 border-blue-400 pl-4 text-left">
                                <div className="text-3xl font-extralight text-blue-400 mb-1">24H</div>
                                <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">Response Time</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button onClick={handleScroll} className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-4 group">
                                <span className="text-lg uppercase tracking-wider">Mortgage Calculator</span>
                            </button>
                            <Link href="/contact" >
                                <button className="bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-4 group">
                                    <span className="text-lg uppercase tracking-wider">Start Your Search</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Buyer's Guide Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 mb-6">
                            <Users className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium tracking-[0.15em] uppercase text-blue-900">Buyer's Guide</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6">
                            YOUR PATH TO
                            <span className="block font-light text-blue-600 italic">COASTAL OWNERSHIP</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Navigate the luxury coastal real estate market with confidence. Our comprehensive guide ensures you make informed decisions at every step.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Steps Navigation */}
                        <div className="space-y-4">
                            {buyersGuideSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`p-6 border-2 cursor-pointer transition-all duration-300 ${expandedStep === index
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                        }`}
                                    onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 ${expandedStep === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                                                } transition-all duration-300`}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                                                <div className="w-12 h-px bg-blue-500 mt-1"></div>
                                            </div>
                                        </div>
                                        {expandedStep === index ?
                                            <ChevronUp className="h-6 w-6 text-blue-600" /> :
                                            <ChevronDown className="h-6 w-6 text-gray-400" />
                                        }
                                    </div>
                                    <p className="text-gray-600 font-light mb-4">{step.description}</p>

                                    {expandedStep === index && (
                                        <div className="space-y-3 pt-4 border-t border-gray-200">
                                            {step.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-start gap-3">
                                                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700 font-light text-sm">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Featured Content */}
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                                        <Star className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-light text-gray-900">Expert Insights</h3>
                                        <div className="w-16 h-px bg-blue-500 mt-2"></div>
                                    </div>
                                </div>
                                <p className="text-gray-600 font-light leading-relaxed mb-6">
                                    Leverage decades of coastal market expertise to secure your dream property at the best possible terms.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <TrendingUp className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Market Timing Strategy</h4>
                                        <p className="text-gray-600 font-light text-sm">
                                            Understand seasonal patterns and market cycles to optimize your purchase timing and negotiation power.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Shield className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Coastal Property Considerations</h4>
                                        <p className="text-gray-600 font-light text-sm">
                                            Navigate unique coastal factors including flood zones, insurance requirements, and environmental regulations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Award className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Investment Potential</h4>
                                        <p className="text-gray-600 font-light text-sm">
                                            Evaluate long-term appreciation trends and rental income opportunities in prime coastal locations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-slate-900 text-white py-4 px-6 font-medium hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 group mt-8">
                                <span className="uppercase tracking-wider">Schedule Consultation</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mortgage Calculator Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 mb-6" id='mort-calc' >
                            <Calculator className="h-5 w-5 text-green-600" />
                            <span className="text-sm font-medium tracking-[0.15em] uppercase text-green-900">Mortgage Calculator</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6">
                            CALCULATE YOUR
                            <span className="block font-light text-green-600 italic">BUYING POWER</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Understand your financial capabilities and monthly payments for your coastal property investment.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Calculator Form */}
                        <div className="bg-gray-50 p-8 border border-gray-200">
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-600 flex items-center justify-center">
                                        <Calculator className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-light text-gray-900">Mortgage Calculator</h3>
                                        <div className="w-16 h-px bg-green-500 mt-2"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                        Home Price
                                    </label>
                                    <input
                                        type="number"
                                        name="homePrice"
                                        value={mortgageData.homePrice}
                                        onChange={handleInputChange}
                                        placeholder="1,500,000"
                                        className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-green-500 transition-all font-light text-lg bg-transparent focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                        Down Payment
                                    </label>
                                    <input
                                        type="number"
                                        name="downPayment"
                                        value={mortgageData.downPayment}
                                        onChange={handleInputChange}
                                        placeholder="300,000"
                                        className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-green-500 transition-all font-light text-lg bg-transparent focus:outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                            Interest Rate (%)
                                        </label>
                                        <input
                                            type="number"
                                            name="interestRate"
                                            value={mortgageData.interestRate}
                                            onChange={handleInputChange}
                                            step="0.1"
                                            className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-green-500 transition-all font-light bg-transparent focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                            Loan Term (Years)
                                        </label>
                                        <select
                                            name="loanTerm"
                                            value={mortgageData.loanTerm}
                                            onChange={handleInputChange}
                                            className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-green-500 transition-all font-light bg-transparent focus:outline-none"
                                        >
                                            <option value="15">15 Years</option>
                                            <option value="20">20 Years</option>
                                            <option value="30">30 Years</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                        Annual Income
                                    </label>
                                    <input
                                        type="number"
                                        name="annualIncome"
                                        value={mortgageData.annualIncome}
                                        onChange={handleInputChange}
                                        placeholder="200,000"
                                        className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-green-500 transition-all font-light text-lg bg-transparent focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-[0.15em]">
                                        Monthly Debts
                                    </label>
                                    <input
                                        type="number"
                                        name="monthlyDebts"
                                        value={mortgageData.monthlyDebts}
                                        onChange={handleInputChange}
                                        placeholder="2,500"
                                        className="w-full px-6 py-4 border-b-2 border-gray-200 focus:border-green-500 transition-all font-light text-lg bg-transparent focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                                        <DollarSign className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-light text-gray-900">Payment Summary</h3>
                                        <div className="w-16 h-px bg-green-500 mt-2"></div>
                                    </div>
                                </div>
                            </div>

                            {calculatorResults ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-4 bg-green-50 border border-green-200">
                                            <div className="text-2xl font-light text-green-600 mb-1">
                                                {formatCurrency(calculatorResults.monthlyPayment)}
                                            </div>
                                            <div className="text-xs text-gray-600 uppercase tracking-[0.2em]">Monthly Payment</div>
                                        </div>
                                        <div className="p-4 bg-blue-50 border border-blue-200">
                                            <div className="text-2xl font-light text-blue-600 mb-1">
                                                {formatCurrency(calculatorResults.loanAmount)}
                                            </div>
                                            <div className="text-xs text-gray-600 uppercase tracking-[0.2em]">Loan Amount</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-gray-600 font-light">Total Interest</span>
                                            <span className="font-medium text-gray-900">{formatCurrency(calculatorResults.totalInterest)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-gray-600 font-light">Total Cost</span>
                                            <span className="font-medium text-gray-900">{formatCurrency(calculatorResults.totalCost)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span className="text-gray-600 font-light">Debt-to-Income Ratio</span>
                                            <span className={`font-medium ${calculatorResults.affordable ? 'text-green-600' : 'text-red-600'}`}>
                                                {calculatorResults.debtToIncomeRatio.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`p-4 border-l-4 ${calculatorResults.affordable ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                                        <div className="flex items-center gap-3">
                                            {calculatorResults.affordable ? (
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            ) : (
                                                <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                                </svg>
                                            )}
                                            <div>
                                                <h4 className={`font-medium ${calculatorResults.affordable ? 'text-green-900' : 'text-red-900'}`}>
                                                    {calculatorResults.affordable ? 'Affordable Range' : 'Above Recommended Range'}
                                                </h4>
                                                <p className={`text-sm font-light ${calculatorResults.affordable ? 'text-green-700' : 'text-red-700'}`}>
                                                    {calculatorResults.affordable
                                                        ? 'Your debt-to-income ratio is within the recommended 43% threshold.'
                                                        : 'Consider a lower purchase price or larger down payment to improve affordability.'
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-200">
                                        <button className="w-full bg-green-600 text-white py-4 px-6 font-medium hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3 group">
                                            <span className="uppercase tracking-wider">Get Pre-Approved</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500 font-light">Enter your details to calculate your monthly payment and affordability.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 border border-gray-200">
                            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3">Current Rates</h3>
                            <p className="text-gray-600 font-light text-sm mb-4">
                                Take advantage of competitive interest rates for qualified coastal property buyers.
                            </p>
                            <div className="text-2xl font-light text-blue-600">7.2% APR</div>
                        </div>

                        <div className="text-center p-6 bg-gray-50 border border-gray-200">
                            <div className="w-12 h-12 bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3">Loan Programs</h3>
                            <p className="text-gray-600 font-light text-sm mb-4">
                                Access specialized financing options for luxury coastal properties and investment homes.
                            </p>
                            <div className="text-sm text-green-600 font-medium uppercase tracking-wider">Multiple Options</div>
                        </div>

                        <div className="text-center p-6 bg-gray-50 border border-gray-200">
                            <div className="w-12 h-12 bg-purple-100 flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3">Fast Approval</h3>
                            <p className="text-gray-600 font-light text-sm mb-4">
                                Streamlined pre-approval process designed for competitive coastal markets.
                            </p>
                            <div className="text-2xl font-light text-purple-600">24 Hours</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-8 py-4 border border-white/20">
                                <Heart className="h-5 w-5 text-blue-400" />
                                <span className="text-sm font-medium tracking-[0.15em] uppercase">Ready to Begin</span>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-extralight mb-8 tracking-tight">
                            START YOUR
                            <span className="block font-light text-blue-400 italic">COASTAL JOURNEY</span>
                        </h2>

                        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
                            Connect with our coastal property specialists and discover your perfect waterfront home today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                            <Link href="/contact" >
                                <button className="bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 group flex-1">
                                    <span className="uppercase tracking-wider">Schedule Tour</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <button className="border border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 group flex-1">
                                <span className="uppercase tracking-wider">Call Now</span>
                                <svg className="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-400"></div>
                                <span className="text-sm font-light uppercase tracking-wider">Licensed Professional</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-400"></div>
                                <span className="text-sm font-light uppercase tracking-wider">Coastal Expert</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-400"></div>
                                <span className="text-sm font-light uppercase tracking-wider">Luxury Specialist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BuyingPage;