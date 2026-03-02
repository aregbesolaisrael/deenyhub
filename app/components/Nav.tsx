'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoSrc from '../assets/logo.png';


const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
];

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <div className="w-full flex flex-col font-sans">
            {/* Top Banner */}
            <div className="w-full bg-black text-white py-3 px-4 flex justify-center items-center gap-2">
                <div className="flex items-center text-[10px] md:text-sm font-bold tracking-wide max-w-7xl mx-auto w-full justify-center">
                    <span className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mb-0.5 hidden xs:block">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5-4 5-4"></path>
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 4-5 4-5"></path>
                        </svg>
                        <span className="hidden sm:inline uppercase">Global supplier of organic commodities, foodstuffs & general supplies.</span>
                        <span className="sm:hidden uppercase tracking-wider text-[9px] min-[380px]:text-[10px]">Organic commodities & global supplies.</span>
                    </span>
                    <button className="flex items-center gap-1 font-bold ml-1 md:ml-2 hover:underline shrink-0 text-gray-200">
                        Get a Quote
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="w-full bg-[#fbfbfb] border-b border-gray-200 relative z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src={logoSrc}
                            alt="DennyGlobalHub logo"
                            width={40}
                            height={50}
                            priority
                            className="object-contain"
                        />
                        <span className="text-[#044b3c] text-[26px] leading-[1] font-extrabold tracking-tight">DennyGlobalHub</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className={`font-bold text-[15px] relative transition-colors ${isActive(href)
                                    ? "text-[#044B3C] after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2.5px] after:bg-[#044B3C]"
                                    : 'text-gray-600 hover:text-[#044B3C]'
                                    }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Side Base Controls */}
                    <div className="hidden lg:flex items-center gap-8">
                        <button className="flex items-center gap-1.5 text-black hover:text-[#044B3C] transition-colors group">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <span className="text-[14px] font-bold ml-1">EN</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-[#044B3C]">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <a href="/contact" className="bg-[#044b3c] hover:bg-[#033a2e] text-white px-6 py-3 rounded-md text-[15px] font-bold transition-all shadow-sm">
                            Request a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 -mr-2 outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#044b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8H14" stroke="#044b3c" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M5 13H19" stroke="#044b3c" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M10 18H19" stroke="#044b3c" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Wrapper */}
                <div
                    className={`lg:hidden shadow-lg absolute top-full left-0 w-full bg-[#fbfbfb] border-t border-gray-100 flex flex-col transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col gap-6 p-6">
                        {navLinks.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className={`font-bold text-lg ${isActive(href)
                                    ? 'text-[#044B3C] underline underline-offset-4 decoration-2'
                                    : 'text-gray-700 hover:text-[#044B3C]'
                                    }`}
                            >
                                {label}
                            </a>
                        ))}

                        <div className="pt-6 border-t border-gray-200 flex flex-col gap-5">
                            <button className="flex items-center gap-2 text-black font-bold text-lg group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                English
                            </button>
                            <a href="/contact" className="bg-[#044b3c] hover:bg-[#033a2e] transition-colors text-white px-5 py-3.5 rounded-md font-bold text-[15px] w-full mt-2 shadow-sm text-center block">
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
