import React from 'react';
import Image from 'next/image';
import logoSrc from '../assets/logo.png';

const SocialIcons = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-4 ${className}`}>
        <a href="#" className="text-[#5a625e] hover:text-[#044b3c] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
        </a>
        <a href="#" className="text-[#5a625e] hover:text-[#044b3c] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        </a>
        <a href="#" className="text-[#5a625e] hover:text-[#044b3c] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>
        <a href="#" className="text-[#5a625e] hover:text-[#044b3c] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
        </a>
    </div>
);

export default function Footer() {
    return (
        <footer className="w-full bg-[#fbfbfb] font-sans border-t-2 border-black relative z-10 pt-16 md:pt-24 pb-8 md:pb-12 xl:px-8">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-24 gap-12 md:gap-8">

                    {/* Brand Col */}
                    <div className="w-full md:w-[40%] xl:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-2 mb-5 md:mb-6">
                            <Image
                                src={logoSrc}
                                alt="DeenyGlobalHub logo"
                                width={36}
                                height={45}
                                className="object-contain"
                            />
                            <span className="text-[#044b3c] text-[24px] leading-[1] font-extrabold tracking-tight">DeenyGlobalHub</span>
                        </div>
                        <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-[1.65] mb-6 md:mb-0 max-w-[320px]">
                            At DeenyGlobalHub, we connect the world with premium organic agricultural commodities, foodstuffs, and essential general supplies.
                        </p>
                        {/* Mobile Socials */}
                        <SocialIcons className="md:hidden mt-2 mb-2" />
                    </div>

                    {/* Links Section */}
                    <div className="w-full md:w-[60%] flex flex-col sm:flex-row justify-between gap-12 sm:gap-6 lg:gap-12 pl-0 md:pl-10 lg:pl-20">
                        {/* Pages Col */}
                        <div className="flex flex-col">
                            <h4 className="text-[#044b3c] font-bold text-[17px] mb-6 md:mb-7">Pages</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="/" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] border-b border-[#044b3c] pb-0.5 w-max">Home</a></li>
                                <li><a href="/products" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">Products</a></li>
                                <li><a href="/contact" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Company Col */}
                        <div className="flex flex-col">
                            <h4 className="text-[#044b3c] font-bold text-[17px] mb-6 md:mb-7">Products</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="/products" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">Organic Commodities</a></li>
                                <li><a href="/products" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">Foodstuffs</a></li>
                                <li><a href="/products" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">General Supplies</a></li>
                            </ul>
                        </div>

                        {/* Resources Col */}
                        <div className="flex flex-col">
                            <h4 className="text-[#044b3c] font-bold text-[17px] mb-6 md:mb-7">Company</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#044b3c] transition-colors text-[15px] w-max">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#64748b] text-[13px] md:text-[14px] text-center md:text-left">
                        Copyright &copy; 2025 <span className="font-bold text-[#334155]">DeenyGlobalHub</span>. All rights reserved.
                    </p>

                    {/* Desktop Socials */}
                    <SocialIcons className="hidden md:flex xl:pr-32" />
                </div>

            </div>
        </footer>
    );
}
