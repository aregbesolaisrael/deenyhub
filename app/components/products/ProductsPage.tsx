'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Icons ──────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 shrink-0 text-[#1dc15d]">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);

const GlobeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const TruckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);

const TagIcon = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
);

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

// ── Product Data ───────────────────────────────────────────────────────────────

type Category = 'all' | 'organic' | 'foodstuffs' | 'supplies';

interface Product {
    id: number;
    name: string;
    category: Category;
    tag: string;
    tagColor: string;
    tagBg: string;
    description: string;
    features: string[];
    img: string;
    origin?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Garri',
        category: 'foodstuffs',
        tag: 'Foodstuff',
        tagColor: '#92400e',
        tagBg: '#fef3c7',
        description: 'Premium AAA-grade Garri. Ideal for global export buyers seeking consistent quality and high natural starch content.',
        features: ['100% natural', 'High starch content', 'Export-grade quality'],
        img: 'https://images.unsplash.com/photo-1592518530101-c7413d0c1118?q=80&w=2070&auto=format&fit=crop',
        origin: 'West Africa',
    },

    {
        id: 2,
        name: 'Premium Mixed Grains',
        category: 'foodstuffs',
        tag: 'Grains',
        tagColor: '#92400e',
        tagBg: '#fef3c7',
        description: 'Carefully selected whole grains including maize, millet, sorghum, and brown rice. Naturally cultivated, properly cleaned, and packaged to meet local and international quality standards.',
        features: ['Machine Cleaned', 'Low Moisture Content', 'Export-Ready Packaging'],
        img: 'https://images.unsplash.com/photo-1754294437681-4ec491072dfc?q=80&w=1051&auto=format&fit=crop',
        origin: 'West Africa',
    },
];

const categories: { key: Category; label: string; count: number }[] = [
    { key: 'all', label: 'All Products', count: products.length },
    { key: 'organic', label: 'Organic Commodities', count: products.filter(p => p.category === 'organic').length },
    { key: 'foodstuffs', label: 'Foodstuffs', count: products.filter(p => p.category === 'foodstuffs').length },
    { key: 'supplies', label: 'General Supplies', count: products.filter(p => p.category === 'supplies').length },
];

// ── Why Cards ─────────────────────────────────────────────────────────────────

const whyData = [
    {
        icon: <LeafIcon />,
        title: 'Certified Organic',
        desc: 'All organic products are sourced from certified farms, with full traceability from field to freight.',
        accent: '#d1fae5',
        iconColor: '#065f46',
    },
    {
        icon: <GlobeIcon />,
        title: 'Global Reach',
        desc: 'We export to Europe, Asia, North America and the Middle East with a trusted logistics network.',
        accent: '#dbeafe',
        iconColor: '#1e40af',
    },
    {
        icon: <ShieldIcon />,
        title: 'Quality Assured',
        desc: 'Every consignment undergoes rigorous quality checks and meets international phytosanitary standards.',
        accent: '#fef3c7',
        iconColor: '#92400e',
    },
    {
        icon: <TruckIcon />,
        title: 'Reliable Shipping',
        desc: 'On-time delivery guaranteed through partnerships with leading freight and customs agencies worldwide.',
        accent: '#ede9fe',
        iconColor: '#5b21b6',
    },
];

// ── Main Component ─────────────────────────────────────────────────────────────

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filtered = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="w-full flex flex-col font-sans">

            {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
            <section className="relative w-full min-h-[420px] lg:min-h-[480px] border-b-2 border-black overflow-hidden flex items-center">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2832&auto=format&fit=crop"
                        alt="Organic product catalogue hero"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#022d25]/90 via-[#044b3c]/70 to-[#044b3c]/30"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full py-16">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[#86c9b9] text-[12px] font-bold mb-6 tracking-[0.15em] uppercase">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-white">Products</span>
                    </div>

                    <h1 className="text-white text-[40px] md:text-[54px] lg:text-[66px] leading-[1.02] tracking-tight mb-5 max-w-[740px] font-extrabold">
                        Our Product<br />
                        <span className="text-[#1dc15d]">Catalogue</span>
                    </h1>
                    <p className="text-[#c8e6df] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[520px]">
                        Organic agricultural commodities, natural foodstuffs, and essential general supplies — all sourced with integrity and delivered globally.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 lg:gap-10">
                        {[
                            { value: '12+', label: 'Products Available' },
                            { value: '15+', label: 'Countries Served' },
                            { value: '100%', label: 'Certified Quality' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-[#1dc15d] text-[30px] md:text-[36px] font-extrabold leading-none">{stat.value}</span>
                                <span className="text-[#86c9b9] text-[11px] font-bold tracking-[0.15em] uppercase mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER TABS ─────────────────────────────────────────────────── */}
            <section className="w-full bg-white border-b-2 border-black sticky top-0 z-40 shadow-sm">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
                    <div className="flex gap-0 overflow-x-auto scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                id={`filter-${cat.key}`}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`shrink-0 px-5 py-4 text-[13px] font-bold tracking-wide border-b-[3px] transition-all flex items-center gap-2 ${activeCategory === cat.key
                                    ? 'border-[#044b3c] text-[#044b3c]'
                                    : 'border-transparent text-[#94a3b8] hover:text-[#044b3c] hover:border-[#044b3c]/30'
                                    }`}
                            >
                                {cat.label}
                                <span className={`text-[11px] font-extrabold px-1.5 py-0.5 rounded-full leading-none ${activeCategory === cat.key ? 'bg-[#044b3c] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                                    {cat.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ────────────────────────────────────────────────── */}
            <section className="w-full bg-[#f8f7f2] py-14 lg:py-20 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">

                    {/* Count */}
                    <p className="text-[#94a3b8] text-[13px] font-semibold mb-8 tracking-wide">
                        Showing <span className="text-[#044b3c] font-extrabold">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                        {filtered.map((product) => (
                            <div
                                key={product.id}
                                id={`product-${product.id}`}
                                className="bg-white border border-[#e2e8f0] flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden shadow-sm"
                            >
                                {/* Image */}
                                <div className="relative h-[210px] overflow-hidden bg-gray-100">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Gradient overlay at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>

                                    {/* Category tag */}
                                    <div
                                        className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full"
                                        style={{ backgroundColor: product.tagBg, color: product.tagColor }}
                                    >
                                        <TagIcon />
                                        {product.tag}
                                    </div>
                                    {/* Origin pill */}
                                    {product.origin && (
                                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#044b3c] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide border border-white/50">
                                            📍 {product.origin}
                                        </div>
                                    )}
                                </div>

                                {/* Body */}
                                <div className="flex flex-col flex-grow p-5">
                                    <h3 className="text-[#0f172a] text-[17px] font-extrabold tracking-tight mb-2 leading-snug">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#64748b] text-[13px] leading-relaxed mb-4">
                                        {product.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-[#f1f5f9] mb-4"></div>

                                    {/* Features list */}
                                    <ul className="flex flex-col gap-1.5 mb-5 flex-grow">
                                        {product.features.map((f) => (
                                            <li key={f} className="flex items-center text-[#334155] text-[12px] font-semibold">
                                                <CheckIcon />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href="/contact"
                                        id={`enquire-${product.id}`}
                                        className="mt-auto inline-flex items-center justify-center gap-2 bg-[#044b3c] hover:bg-[#033a2e] text-white px-5 py-3 rounded-lg text-[13px] font-bold transition-all"
                                    >
                                        Enquire Now
                                        <ArrowIcon />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
            <section className="w-full bg-white border-t border-[#e2e8f0] py-16 lg:py-24 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-4">
                            Our Commitment
                        </div>
                        <h2 className="text-[#0f172a] text-[28px] md:text-[36px] font-extrabold tracking-tight">
                            Why Choose <span className="text-[#044b3c]">DennyGlobalHub?</span>
                        </h2>
                        <p className="text-[#64748b] text-[15px] mt-3 max-w-[480px] mx-auto leading-relaxed">
                            We combine deep agricultural expertise with a global network to deliver excellence, every time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyData.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col gap-4 p-6 rounded-xl border border-[#e2e8f0] bg-[#fafafa] hover:shadow-md transition-shadow duration-300"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: item.accent, color: item.iconColor }}
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

            {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
            <section className="relative w-full min-h-[360px] overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2944&auto=format&fit=crop"
                        alt="Global shipping logistics"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#022d25]/95 via-[#044b3c]/85 to-[#044b3c]/50"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-[560px]">
                        <div className="inline-flex items-center gap-2 bg-[#1dc15d]/20 border border-[#1dc15d]/40 text-[#1dc15d] text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1dc15d]"></span>
                            Ready to Order?
                        </div>
                        <h2 className="text-white text-[28px] md:text-[42px] leading-[1.1] tracking-tight mb-4 font-extrabold">
                            Ready to Place a<br />Bulk Order?
                        </h2>
                        <p className="text-[#a7d8cc] text-[15px] md:text-[16px] leading-relaxed">
                            Contact our trading team for competitive pricing, product samples, and full export documentation support.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <Link
                            href="/contact"
                            id="cta-request-quote"
                            className="bg-[#1dc15d] hover:bg-[#169c4b] text-white px-8 py-4 rounded-lg text-[15px] font-bold transition-all text-center shadow-lg hover:shadow-[#1dc15d]/30"
                        >
                            Request a Quote
                        </Link>
                        <Link
                            href="/contact"
                            id="cta-contact-team"
                            className="bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#044b3c] px-8 py-4 rounded-lg text-[15px] font-bold transition-all text-center backdrop-blur-sm"
                        >
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
