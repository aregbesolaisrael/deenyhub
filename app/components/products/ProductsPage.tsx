'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Icons ──────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#044b3c" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 shrink-0">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const LeafIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);

const GlobeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const ShieldIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const TruckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);

const TagIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
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
        tagColor: '#f59e0b',
        description: 'Premium AAA-grade Garri. Ideal for global export buyers.',
        features: ['100% natural', 'High oil content', 'Export-grade quality'],
        img: 'https://images.unsplash.com/photo-1592518530101-c7413d0c1118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin: 'West Africa',
    },
    {
        id: 2,
        name: 'Cashew Nuts (W320)',
        category: 'foodstuffs',
        tag: 'Foodstuff',
        tagColor: '#f59e0b',
        description: 'Whole cashew kernels, grade W320. Naturally grown without chemical inputs.',
        features: ['Grade W320', 'Moisture <5%', 'Packed in vacuum foil'],
        img: 'https://plus.unsplash.com/premium_photo-1664392163836-0129faa6d5f6?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin: 'Ivory Coast',
    },
    // {
    //     id: 3,
    //     name: 'Hibiscus Flowers (Dried)',
    //     category: 'organic',
    //     tag: 'Organic',
    //     tagColor: '#1dc15d',
    //     description: 'Sun-dried hibiscus calyces, deep red colour, high in antioxidants and anthocyanins.',
    //     features: ['Deep ruby colour', 'High anthocyanin', 'Whole calyces'],
    //     img: 'https://images.unsplash.com/photo-1615486511484-92e1720dbe46?q=80&w=2800&auto=format&fit=crop',
    //     origin: 'Nigeria / Sudan',
    // },
    // {
    //     id: 4,
    //     name: 'Desiccated Coconut',
    //     category: 'organic',
    //     tag: 'Organic',
    //     tagColor: '#1dc15d',
    //     description: 'Fine/medium grade desiccated coconut, low moisture, suitable for baking & confectionery.',
    //     features: ['Low fat & high fat grades', 'Moisture <3%', 'Fine/medium cut'],
    //     img: 'https://images.unsplash.com/photo-1627993073747-d1a8c9b2d3dd?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'Sri Lanka / Philippines',
    // },
    // {
    //     id: 5,
    //     name: 'Shea Butter (Raw)',
    //     category: 'organic',
    //     tag: 'Organic',
    //     tagColor: '#1dc15d',
    //     description: 'Unrefined, raw shea butter extracted using traditional cold-press methods. Rich in fatty acids.',
    //     features: ['Unrefined grade A', 'Ivory colour', 'Cosmetic & food use'],
    //     img: 'https://images.unsplash.com/photo-1548026564-b83a13e96a4d?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'Ghana / Burkina Faso',
    // },
    // {
    //     id: 6,
    //     name: 'Moringa Leaf Powder',
    //     category: 'organic',
    //     tag: 'Organic',
    //     tagColor: '#1dc15d',
    //     description: 'Spray-dried moringa oleifera leaf powder. High in iron, vitamins A, C, and essential amino acids.',
    //     features: ['Rich in iron & vitamins', 'Spray-dried', 'Non-GMO'],
    //     img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'India / East Africa',
    // },
    // {
    //     id: 7,
    //     name: 'Organic Honey (Raw)',
    //     category: 'foodstuffs',
    //     tag: 'Foodstuff',
    //     tagColor: '#f59e0b',
    //     description: 'Wildflower raw honey, unfiltered and unheated to preserve natural enzymes and pollen.',
    //     features: ['Unfiltered', 'Cold-extracted', 'Enzyme-rich'],
    //     img: 'https://images.unsplash.com/photo-1587049352847-4b8e1f30a9fa?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'Ethiopia / Tanzania',
    // },
    // {
    //     id: 8,
    //     name: 'Spices Collection',
    //     category: 'foodstuffs',
    //     tag: 'Foodstuff',
    //     tagColor: '#f59e0b',
    //     description: 'Curated bulk spices: turmeric, ginger, black pepper, cloves and more. Direct farm sourcing.',
    //     features: ['Turmeric, Ginger, Pepper', 'Bulk & retail pack', 'Traceable origin'],
    //     img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'India / Sri Lanka',
    // },
    // {
    //     id: 9,
    //     name: 'Dried Tropical Fruits',
    //     category: 'foodstuffs',
    //     tag: 'Foodstuff',
    //     tagColor: '#f59e0b',
    //     description: 'Sun-dried mango, pineapple and banana slices with no added sugar or preservatives.',
    //     features: ['No added sugar', 'No preservatives', 'IQF & sun-dried'],
    //     img: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'Ghana / Ivory Coast',
    // },
    // {
    //     id: 10,
    //     name: 'Food-Grade Packaging',
    //     category: 'supplies',
    //     tag: 'General Supply',
    //     tagColor: '#6366f1',
    //     description: 'UN-certified food-grade packaging materials including BOPP bags, foil pouches and PP woven sacks.',
    //     features: ['UN-certified materials', 'Moisture barrier', 'Custom print available'],
    //     img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2836?q=80&w=2820&auto=format&fit=crop',
    //     origin: 'Global Supply',
    // },
    // {
    //     id: 11,
    //     name: 'Organic Fertilizers',
    //     category: 'supplies',
    //     tag: 'General Supply',
    //     tagColor: '#6366f1',
    //     description: 'Bio-based organic fertilizers to support sustainable farming. NPK blends available.',
    //     features: ['NPK blends', 'Bio-certified', 'Soil-friendly'],
    //     img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'Global Supply',
    // },
    // {
    //     id: 12,
    //     name: 'Agricultural Chemicals',
    //     category: 'supplies',
    //     tag: 'General Supply',
    //     tagColor: '#6366f1',
    //     description: 'Carefully sourced agrochemicals for pest control and crop protection, compliant with international standards.',
    //     features: ['WHO-compliant', 'Registered formulations', 'Safety-data included'],
    //     img: 'https://images.unsplash.com/photo-1567157642597-bd46ad88ce2f?q=80&w=2940&auto=format&fit=crop',
    //     origin: 'Global Supply',
    // },
];

const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Products' },
    { key: 'organic', label: 'Organic Commodities' },
    { key: 'foodstuffs', label: 'Foodstuffs' },
    { key: 'supplies', label: 'General Supplies' },
];

// ── Why Cards ─────────────────────────────────────────────────────────────────

const whyData = [
    {
        icon: <LeafIcon />,
        title: 'Certified Organic',
        desc: 'All organic products are sourced from certified farms, with full traceability from field to freight.',
    },
    {
        icon: <GlobeIcon />,
        title: 'Global Reach',
        desc: 'We export to Europe, Asia, North America and the Middle East with a trusted logistics network.',
    },
    {
        icon: <ShieldIcon />,
        title: 'Quality Assured',
        desc: 'Every consignment undergoes rigorous quality checks and meets international phytosanitary standards.',
    },
    {
        icon: <TruckIcon />,
        title: 'Reliable Shipping',
        desc: 'On-time delivery guaranteed through partnerships with leading freight and customs agencies worldwide.',
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
            <section className="relative w-full min-h-[380px] lg:min-h-[440px] border-b-2 border-black overflow-hidden flex items-center">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2832&auto=format&fit=crop"
                        alt="Organic product catalogue hero"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#044b3c]/65 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/25"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full py-16">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[#c2ddd7] text-[13px] font-bold mb-6 tracking-widest uppercase">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-white">Products</span>
                    </div>

                    <h1 className="text-white text-[40px] md:text-[54px] lg:text-[64px] leading-[1.05] tracking-tight mb-5 max-w-[720px] font-extrabold">
                        Our Product Catalogue
                    </h1>
                    <p className="text-[#eaf4f1] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[520px] font-medium opacity-90">
                        Organic agricultural commodities, natural foodstuffs, and essential general supplies — all sourced with integrity and delivered globally.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-8">
                        {[
                            { value: '2+', label: 'Products Available' },
                            { value: '3+', label: 'Countries Served' },
                            { value: '100%', label: 'Certified Quality' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-[#1dc15d] text-[28px] md:text-[32px] font-extrabold leading-none">{stat.value}</span>
                                <span className="text-[#c2ddd7] text-[12px] font-bold tracking-widest uppercase mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER TABS ─────────────────────────────────────────────────── */}
            <section className="w-full bg-[#f4f2e9] border-b-2 border-black sticky top-0 z-40">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
                    <div className="flex gap-0 overflow-x-auto scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                id={`filter-${cat.key}`}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`shrink-0 px-6 py-5 text-[14px] font-bold tracking-tight border-b-[3px] transition-all ${activeCategory === cat.key
                                    ? 'border-[#044b3c] text-[#044b3c]'
                                    : 'border-transparent text-gray-500 hover:text-[#044b3c]'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRODUCT GRID ────────────────────────────────────────────────── */}
            <section className="w-full bg-[#f4f2e9] py-16 lg:py-24 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">

                    {/* Count */}
                    <p className="text-[#64748b] text-[14px] font-bold mb-8 tracking-wide">
                        Showing <span className="text-[#044b3c]">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filtered.map((product) => (
                            <div
                                key={product.id}
                                id={`product-${product.id}`}
                                className="bg-white border-2 border-black flex flex-col group hover:-translate-y-1 transition-transform duration-300 shadow-[3px_3px_0px_#044b3c]"
                            >
                                {/* Image */}
                                <div className="relative h-[220px] border-b-2 border-black overflow-hidden bg-gray-100">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category tag */}
                                    <div
                                        className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 text-white text-[11px] font-bold tracking-widest uppercase rounded-sm"
                                        style={{ backgroundColor: product.tagColor }}
                                    >
                                        <TagIcon />
                                        {product.tag}
                                    </div>
                                    {/* Origin pill */}
                                    {product.origin && (
                                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-bold px-2.5 py-1 rounded-sm tracking-wide">
                                            {product.origin}
                                        </div>
                                    )}
                                </div>

                                {/* Body */}
                                <div className="flex flex-col flex-grow p-6">
                                    <h3 className="text-[#044b3c] text-[19px] font-extrabold tracking-tight mb-2 leading-snug">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#64748b] text-[14px] leading-relaxed mb-5">
                                        {product.description}
                                    </p>

                                    {/* Features list */}
                                    <ul className="flex flex-col gap-2 mb-6 flex-grow">
                                        {product.features.map((f) => (
                                            <li key={f} className="flex items-start text-[#3b5249] text-[13px] font-bold">
                                                <CheckIcon />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href="/contact"
                                        id={`enquire-${product.id}`}
                                        className="mt-auto inline-flex items-center justify-center gap-2 bg-[#044b3c] hover:bg-[#033a2e] text-white px-5 py-3 rounded-md text-[14px] font-bold transition-all border border-black"
                                    >
                                        Enquire Now
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
            <section className="w-full bg-[#fbfbfb] border-t-2 border-b-2 border-black py-16 lg:py-24 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">
                    <div className="flex flex-col items-center mb-14 text-center relative">
                        <div className="hidden sm:block absolute top-1/2 left-0 w-[25%] lg:w-[35%] h-[2px] bg-[#e3decf] -translate-y-1/2"></div>
                        <h2 className="text-[#044b3c] text-[30px] md:text-[38px] font-extrabold tracking-tight px-6 lg:px-10 bg-[#fbfbfb] relative z-10 w-max mx-auto">
                            Why Choose DennyGlobalHub?
                        </h2>
                        <div className="hidden sm:block absolute top-1/2 right-0 w-[25%] lg:w-[35%] h-[2px] bg-[#e3decf] -translate-y-1/2"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyData.map((item) => (
                            <div key={item.title} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center bg-[#f4f2e9] shadow-[2px_2px_0_#044b3c] text-[#044b3c] shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-[#044b3c] font-extrabold text-[17px] mb-2">{item.title}</h4>
                                    <p className="text-[#64748b] text-[14px] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
            <section className="relative w-full min-h-[360px] bg-black overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2944&auto=format&fit=crop"
                        alt="Global shipping logistics"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#044b3c]/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/35"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-[560px]">
                        <h2 className="text-white text-[30px] md:text-[44px] leading-[1.1] tracking-tight mb-4 font-extrabold">
                            Ready to Place a Bulk Order?
                        </h2>
                        <p className="text-[#eaf4f1] text-[16px] md:text-[17px] leading-relaxed opacity-90">
                            Contact our trading team for competitive pricing, product samples, and export documentation support.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <Link
                            href="/contact"
                            id="cta-request-quote"
                            className="bg-[#1dc15d] hover:bg-[#169c4b] text-white px-8 py-4 rounded-md text-[16px] font-bold transition-all text-center"
                        >
                            Request a Quote
                        </Link>
                        <Link
                            href="/contact"
                            id="cta-contact-team"
                            className="bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#044b3c] px-8 py-4 rounded-md text-[16px] font-bold transition-all text-center"
                        >
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
