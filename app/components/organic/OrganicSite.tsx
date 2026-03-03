import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2.5 mt-0.5 shrink-0 text-[#1dc15d]">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const productCategories = [
    {
        id: 'garri',
        title: 'Garri',
        subtitle: 'Premium quality, hygienically processed',
        accent: '#fef3c7',
        accentDark: '#92400e',
        items: [
            'White Garri (Fine)',
            'Yellow Garri (Fortified)',
            'Ijebu Garri (Extra Dry)',
            'Export-Grade Garri'
        ],
        img: 'https://plus.unsplash.com/premium_photo-1664392163836-0129faa6d5f6?q=80&w=800&auto=format&fit=crop',
        imgAlt: 'Premium garri grains',
    },
    {
        id: 'other-grains',
        title: 'Other Grains',
        subtitle: 'Nutritious, carefully sourced, export-ready',
        accent: '#d1fae5',
        accentDark: '#065f46',
        items: [
            'Brown Rice',
            'Millet',
            'Sorghum',
            'Maize (Corn)'
        ],
        img: 'https://images.unsplash.com/photo-1754294437681-4ec491072dfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0',
        imgAlt: 'Assorted whole grains',
    },
];
const whyData = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
        ),
        title: 'Healthier & Pure',
        desc: 'No synthetic chemicals. All-natural products sourced directly from certified organic farms.',
        accent: '#d1fae5',
        color: '#065f46',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ),
        title: 'Sustainable & Eco-Friendly',
        desc: 'Supports earth-friendly farming practices that protect the environment for future generations.',
        accent: '#fef3c7',
        color: '#92400e',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        title: 'Global Reach',
        desc: 'Exported to 15+ countries across Europe, Asia, North America and the Middle East.',
        accent: '#dbeafe',
        color: '#1e40af',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
        ),
        title: 'Reliable Logistics',
        desc: 'On-time delivery guaranteed through our trusted international freight and customs network.',
        accent: '#ede9fe',
        color: '#5b21b6',
    },
];

export default function OrganicSite() {
    return (
        <div className="w-full flex flex-col font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[580px] lg:min-h-[680px] border-b-2 border-black overflow-hidden flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Organic farming hands"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#022d25]/90 via-[#044b3c]/70 to-[#044b3c]/20"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full pt-12 pb-16">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 bg-[#1dc15d]/20 border border-[#1dc15d]/40 text-[#1dc15d] text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1dc15d]"></span>
                        Trusted Organic Exporter
                    </div>

                    <h1 className="text-white text-[44px] md:text-[58px] lg:text-[74px] leading-[1.02] tracking-tight mb-6 max-w-[720px] font-extrabold">
                        Your Partner in<br />
                        <span className="text-[#1dc15d]">Organic Agricultural</span><br />
                        Commodities
                    </h1>
                    <p className="text-[#c8e6df] text-[17px] md:text-[19px] leading-relaxed mb-10 max-w-[500px]">
                        Providing high-quality organic products and essential supplies worldwide — with integrity, traceability, and care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href='/products' className="bg-[#1dc15d] hover:bg-[#169c4b] text-white px-8 py-4 rounded-lg text-[16px] font-bold transition-all text-center shadow-lg hover:shadow-[#1dc15d]/30">
                            Explore Products
                        </a>
                        <a href='/contact' className="bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#044b3c] px-8 py-4 rounded-lg text-[16px] font-bold transition-all text-center backdrop-blur-sm">
                            Contact Us
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
                        {[
                            { value: '12+', label: 'Products' },
                            { value: '15+', label: 'Countries Served' },
                            { value: '100%', label: 'Quality Certified' },
                        ].map(stat => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-white text-[28px] font-extrabold leading-none">{stat.value}</span>
                                <span className="text-[#86c9b9] text-[11px] font-bold tracking-[0.12em] uppercase mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. OUR PRODUCTS SECTION */}
            <section className="w-full bg-[#f8f7f2] border-b-2 border-black py-20 lg:py-28 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col items-center mb-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-4">
                            What We Offer
                        </div>
                        <h2 className="text-[#0f172a] text-[30px] md:text-[40px] font-extrabold tracking-tight">
                            Our <span className="text-[#044b3c]">Products</span>
                        </h2>
                        <p className="text-[#64748b] text-[15px] mt-3 max-w-[500px] leading-relaxed">
                            From organic agricultural commodities to essential agri-business supplies — all sourced with care.
                        </p>
                    </div>

                    {/* Category cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {productCategories.map((cat) => (
                            <div
                                key={cat.id}
                                className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 shadow-sm"
                            >
                                {/* Image */}
                                <div className="relative h-[180px] overflow-hidden">
                                    <Image
                                        src={cat.img}
                                        alt={cat.imgAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    {/* Category badge */}
                                    <div
                                        className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                                        style={{ backgroundColor: cat.accent, color: cat.accentDark }}
                                    >
                                        {cat.subtitle}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-[#0f172a] text-[18px] font-extrabold tracking-tight mb-4">
                                        {cat.title}
                                    </h3>

                                    {/* Item list */}
                                    <ul className="flex flex-col gap-2 mb-6 flex-grow">
                                        {cat.items.map(item => (
                                            <li key={item} className="flex items-center text-[#475569] text-[13px] font-semibold">
                                                <CheckIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 text-[#044b3c] font-bold text-[13px] hover:gap-3 transition-all"
                                    >
                                        View all {cat.title}
                                        <ArrowIcon />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA link */}
                    <div className="flex justify-center mt-10">
                        <a
                            href="/products"
                            className="inline-flex items-center gap-2 bg-[#044b3c] hover:bg-[#033a2e] text-white px-8 py-4 rounded-lg text-[15px] font-bold transition-all shadow-md"
                        >
                            Browse Full Catalogue
                            <ArrowIcon />
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE ORGANIC SECTION */}
            <section className="w-full bg-white border-b-2 border-black py-16 lg:py-24 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-4">
                            Our Advantages
                        </div>
                        <h2 className="text-[#0f172a] text-[28px] md:text-[36px] font-extrabold tracking-tight">
                            Why Choose <span className="text-[#044b3c]">Organic?</span>
                        </h2>
                        <p className="text-[#64748b] text-[15px] mt-3 max-w-[460px] mx-auto leading-relaxed">
                            Organic products are better for your health, better for the planet, and better for business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyData.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col gap-4 p-6 rounded-xl border border-[#e2e8f0] bg-[#fafafa] hover:shadow-md transition-shadow duration-300"
                            >
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: item.accent, color: item.color }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-[#0f172a] font-extrabold text-[15px] mb-2">{item.title}</h4>
                                    <p className="text-[#64748b] text-[13px] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RELIABLE GLOBAL SUPPLY */}
            <section className="relative w-full min-h-[440px] lg:min-h-[500px] overflow-hidden flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2944&auto=format&fit=crop"
                        alt="Trucks logistics"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#022d25]/95 via-[#044b3c]/85 to-[#044b3c]/40"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-[560px]">
                        <div className="inline-flex items-center gap-2 bg-[#1dc15d]/20 border border-[#1dc15d]/40 text-[#1dc15d] text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1dc15d]"></span>
                            Worldwide Distribution
                        </div>
                        <h2 className="text-white text-[30px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight mb-5 font-extrabold">
                            Reliable Global Supply<br />& Distribution
                        </h2>
                        <p className="text-[#a7d8cc] text-[15px] md:text-[17px] leading-relaxed">
                            We deliver seamlessly with a robust logistics network ensuring secure and timely delivery to 15+ countries worldwide.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <a
                            href="/contact"
                            className="bg-[#1dc15d] hover:bg-[#169c4b] text-white px-8 py-4 rounded-lg text-[15px] font-bold transition-all text-center shadow-lg hover:shadow-[#1dc15d]/30"
                        >
                            Request a Quote
                        </a>
                        <a
                            href="/products"
                            className="bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#044b3c] px-8 py-4 rounded-lg text-[15px] font-bold transition-all text-center backdrop-blur-sm"
                        >
                            Browse Products
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
