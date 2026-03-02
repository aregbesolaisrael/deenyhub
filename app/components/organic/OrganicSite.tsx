import React from 'react';

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#044b3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-0.5 shrink-0">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export default function OrganicSite() {
    return (
        <div className="w-full flex flex-col font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[550px] lg:min-h-[650px] border-b-2 border-black overflow-hidden flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Organic farming hands"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Green Overlay to match Deeny Global Hub dark brand color roughly */}
                    <div className="absolute inset-0 bg-[#044b3c]/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full pt-10">
                    <h1 className="text-white text-[44px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight mb-6 max-w-[700px] font-extrabold">
                        Your Partner in Organic Agricultural Commodities
                    </h1>
                    <p className="text-[#f4f2e9] text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-[500px] font-medium opacity-90">
                        Providing high-quality organic products and essential supplies worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#1dc15d] hover:bg-[#169c4b] text-white px-8 py-4 rounded-md text-[17px] font-bold transition-all text-center">
                            Explore Products
                        </button>
                        <button className="bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#044b3c] px-8 py-4 rounded-md text-[17px] font-bold transition-all text-center shadow-sm">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. OUR PRODUCTS SECTION */}
            <section className="w-full bg-[#f4f2e9] border-b-2 border-black py-20 lg:py-28 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col items-center mb-16 text-center relative w-full">
                        <div className="hidden sm:block absolute top-1/2 left-0 w-[20%] lg:w-[35%] h-[2px] bg-[#e3decf] -translate-y-1/2"></div>
                        <h2 className="text-[#044b3c] text-[32px] md:text-[40px] font-extrabold tracking-tight px-6 lg:px-10 bg-[#f4f2e9] relative z-10 w-max mx-auto">
                            Our Products
                        </h2>
                        <div className="hidden sm:block absolute top-1/2 right-0 w-[20%] lg:w-[35%] h-[2px] bg-[#e3decf] -translate-y-1/2"></div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Card 1 */}
                        <div className="bg-[#fbfbfb] border-2 border-black p-8 md:p-10 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-[#044b3c] text-[24px] md:text-[28px] font-extrabold tracking-tight mb-8">
                                General Essential Supplies
                            </h3>
                            {/* Card Images */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                <div className="h-[140px] bg-gray-200 border border-black overflow-hidden relative">
                                    <img src="https://plus.unsplash.com/premium_photo-1725467479101-556af13a7220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Garri" className="w-full h-full object-cover" />
                                </div>
                                <div className="h-[140px] bg-gray-200 border border-black overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1536153635972-1fc2e818f642?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Grains" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                <div className="flex items-start text-[#3b5249] font-bold text-[15px]"><CheckIcon /> Garri</div>
                                <div className="flex items-start text-[#3b5249] font-bold text-[15px]"><CheckIcon /> Chemical free</div>
                                <div className="flex items-start text-[#3b5249] font-bold text-[15px]"><CheckIcon /> Organic</div>
                                <div className="flex items-start text-[#3b5249] font-bold text-[15px]"><CheckIcon /> Spices</div>
                                <div className="flex items-start text-[#3b5249] font-bold text-[15px]"><CheckIcon /> Herbs</div>
                                <div className="flex items-start text-[#3b5249] font-bold text-[15px]"><CheckIcon /> Fruits/Vegetables</div>
                            </div>
                            {/* Button */}
                            <a 
                                href="https://api.whatsapp.com/send/?phone=2348033363741&text=Hello%21+I%27d+like+to+order+Garri.&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#044b3c] hover:bg-[#033a2e] text-white px-8 py-3.5 rounded-md text-[16px] font-bold transition-all w-max self-start border border-black shadow-sm"
                                >
                                Contact Us
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE ORGANIC SECTION */}
            <section className="w-full bg-[#fbfbfb] border-b-2 border-black py-16 lg:py-24 px-6 lg:px-12">
                <div className="max-w-[1240px] mx-auto flex flex-col items-center">
                    <h2 className="text-[#044b3c] text-[32px] md:text-[36px] font-extrabold tracking-tight mb-12 lg:mb-16 text-center">
                        Why Choose Organic?
                    </h2>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-center justify-center">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-5 max-w-[400px]">
                            <div className="w-[72px] h-[72px] lg:w-20 lg:h-20 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-[#f4f2e9] shadow-[2px_2px_0_#044b3c]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#044b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                    <path d="M3 3v5h5"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#044b3c] font-extrabold text-[18px] lg:text-[19px] mb-1">Healthier & Pure -</h4>
                                <p className="text-[#64748b] text-[14px]">No chemicals, all-natural products</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-5 max-w-[400px]">
                            <div className="w-[72px] h-[72px] lg:w-20 lg:h-20 rounded-full border-2 border-black flex items-center justify-center shrink-0 bg-[#f4f2e9] shadow-[2px_2px_0_#044b3c]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#044b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-[#044b3c] font-extrabold text-[18px] lg:text-[19px] mb-1">Sustainable & Eco-Friendly</h4>
                                <p className="text-[#64748b] text-[14px]">Supports earth-friendly farming practices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURED COMMODITIES */}
            {/* <section className="w-full bg-[#f4f2e9] border-b-2 border-black py-20 lg:py-28 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
                    <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2871&auto=format&fit=crop" className="w-full h-full object-cover" alt="texture" />
                </div>

                <div className="max-w-[1240px] mx-auto relative z-10">
                    <h2 className="text-[#044b3c] text-[32px] md:text-[36px] font-extrabold tracking-tight mb-12 text-center lg:text-left flex items-center justify-center lg:justify-start gap-6">
                        Featured Organic Commodities
                        <div className="hidden lg:block h-[2px] bg-[#e3decf] flex-grow mt-2"></div>
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                        {[
                            { name: "Desiccated Coconut", img: "https://images.unsplash.com/photo-1627993073747-d1a8c9b2d3dd?q=80&w=2940&auto=format&fit=crop" },
                            { name: "Cashew Nuts", img: "https://images.unsplash.com/photo-1616260273010-388f614457fb?q=80&w=2834&auto=format&fit=crop" },
                            { name: "Control Facilities", img: "https://images.unsplash.com/photo-1606132626920-ab6eaffd454a?q=80&w=2940&auto=format&fit=crop" },
                            { name: "Hibiscus", img: "https://images.unsplash.com/photo-1615486511484-92e1720dbe46?q=80&w=2800&auto=format&fit=crop" },
                            { name: "Logistics", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2944&auto=format&fit=crop" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col border-2 border-black bg-white group hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                                <div className="h-[160px] lg:h-[180px] w-full border-b-2 border-black bg-gray-200 overflow-hidden relative">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-3 lg:p-4 flex items-center justify-center text-center h-[60px] lg:h-[70px]">
                                    <h4 className="text-[#044b3c] font-bold text-[13px] lg:text-[14px] tracking-tight">{item.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 5. RELIABLE GLOBAL SUPPLY */}
            <section className="relative w-full min-h-[450px] lg:min-h-[500px] bg-black overflow-hidden flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2944&auto=format&fit=crop"
                        alt="Trucks logistics"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark green overlay to match branding */}
                    <div className="absolute inset-0 bg-[#044b3c]/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 w-full pt-10 pb-10">
                    <h2 className="text-white text-[32px] md:text-[44px] lg:text-[50px] leading-[1.1] tracking-tight mb-6 max-w-[650px] font-extrabold">
                        Reliable Global Supply & Distribution
                    </h2>
                    <p className="text-[#f4f2e9] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-[500px] font-medium opacity-90">
                        We deliver seamlessly with a robust logistic network ensuring secure and timely delivery worldwide.
                    </p>
                    <button className="bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#044b3c] px-8 py-3.5 rounded-md text-[16px] font-bold transition-all text-center">
                        Request a Quote
                    </button>
                </div>
            </section>

        </div>
    );
}
