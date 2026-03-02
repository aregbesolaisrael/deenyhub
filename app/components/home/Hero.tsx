import React from 'react';
import Image from 'next/image';
import heroImg from '../../assets/hero.png';

const GlobeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const TreeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-4"></path>
        <path d="M7 18h10"></path>
        <path d="M12 18l-5-7h3l-3-7h10l-3 7h3l-5 7z"></path>
    </svg>
);

const logos = [
    {
        name: "Harvest",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M6.34 17.66l-1.41 1.41"></path>
                <path d="M19.07 4.93l-1.41 1.41"></path>
            </svg>
        )
    },
    {
        name: "Flash Farm",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        )
    },
    {
        name: "World Corp",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        )
    },
    {
        name: "Solar Tech",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <path d="M4 14l6-8h10l-6 8H4z" />
                <path d="M10 22l6-8h4l-6 8h-4z" />
            </svg>
        )
    },
    {
        name: "Wave Valley",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <path d="M2 12c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
                <path d="M2 18c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
            </svg>
        )
    },
    {
        name: "Bear Route",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                <path d="M12 3c-1.5 0-3 1.5-3 3 0 1.5-1.5 3-3 3-1.5 0-3 1.5-3 3v3c0 3 2 3 3 3h12c1 0 3 0 3-3v-3c0-1.5-1.5-1.5-3-3-1.5-1.5-3-3-3-3 0-1.5-1.5-3-3-3z" />
                <circle cx="9" cy="11" r="1" />
                <circle cx="15" cy="11" r="1" />
                <path d="M11 16h2" />
            </svg>
        )
    }
];

export default function Hero() {
    return (
        <div className="w-full flex flex-col font-sans border-b-2 border-black overflow-hidden relative">
            {/* Framer UI badges (Included for Pixel Perfect representation) */}
            <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
                <button className="bg-white hover:bg-gray-50 text-[#044b3c] px-4 py-2.5 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 border border-gray-100 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Buy Template
                </button>
                <button className="bg-white hover:bg-gray-50 text-black px-4 py-2.5 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 border border-gray-100 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="none">
                        <path d="M12 0L24 12H12V24L0 12h12V0z" />
                    </svg>
                    Made in Framer
                </button>
            </div>

            {/* Main Hero Area */}
            <div className="flex flex-col lg:flex-row w-full bg-[#f4f2e9]">

                {/* Left Side Content */}
                <div className="w-full lg:w-[50%] px-6 py-16 md:py-24 lg:px-12 xl:px-20 2xl:px-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black relative z-10 bg-[#f4f2e9]">
                    <h1 className="text-[#044b3c] text-[48px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-[1.05] tracking-tight mb-6">
                        <span className="font-extrabold block">Where Innovation</span>
                        <span className="font-medium block mt-1 lg:mt-2">meets Sustainability</span>
                    </h1>

                    <p className="text-[#3b5249] text-[17px] md:text-[19px] leading-relaxed mb-10 lg:mb-14 max-w-[540px]">
                        At Deeny Global Hub, we're pioneering the fusion of technology and
                        sustainability. Our commitment lies in crafting innovative solutions
                        that not only shape the future but also nurture our planet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-14">
                        <button className="bg-[#044b3c] hover:bg-[#033a2e] text-white px-8 py-4 lg:py-4 lg:px-10 rounded-md text-[17px] font-bold transition-all text-center">
                            Get Template
                        </button>
                        <button className="bg-transparent border-[1.5px] border-[#044b3c] text-[#044b3c] hover:bg-[#044b3c] hover:text-white px-8 py-4 lg:py-4 lg:px-10 rounded-md text-[17px] font-bold transition-all text-center">
                            Our Solutions
                        </button>
                    </div>

                    <div className="flex items-center gap-6 sm:gap-8 text-[#044b3c] font-bold text-[11px] md:text-[12px] tracking-widest uppercase">
                        <div className="flex items-center gap-2.5">
                            <GlobeIcon />
                            <span>+520 Global Clients</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <TreeIcon />
                            <span>+5M Tree Saves</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-[50%] relative min-h-[450px] sm:min-h-[550px] lg:min-h-0">
                    <Image
                        src={heroImg}
                        alt="Deeny Global Hub drone in action"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Marquee Area */}
            <div className="w-full bg-[#ebe8dd] border-t-2 border-black py-7 overflow-hidden flex items-center relative z-10">
                <div className="flex w-max animate-marquee">
                    {/* Duplicate logos to create seamless scroll */}
                    {[...Array(2)].map((_, arrayIndex) => (
                        <div key={arrayIndex} className="flex shrink-0 items-center justify-around w-max">
                            {logos.map((logo, index) => (
                                <div key={`${arrayIndex}-${index}`} className="flex items-center text-[#b0ada4] px-12 xl:px-16">
                                    {logo.icon}
                                    <span className="text-[25px] font-bold tracking-tight">{logo.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
