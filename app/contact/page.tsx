'use client';

import React, { useActionState, useEffect, useRef, useState } from 'react';
import { submitContactForm } from './actions';
import type { ActionResult } from '@/lib/validation';

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronDown = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const CheckCircle = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#044b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const AlertCircle = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
);

const Spinner = () => (
    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
);

// ─── Logo data ───────────────────────────────────────────────────────────────

const logos = [
    { name: "Harvest", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" /></svg> },
    { name: "Flash Farm", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10" /><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
    { name: "World Corp", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
    { name: "Solar Tech", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 14l6-8h10l-6 8H4z" /><path d="M10 22l6-8h4l-6 8h-4z" /></svg> },
    { name: "Wave Valley", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M2 12c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" /><path d="M2 18c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" /></svg> },
    { name: "Bear Route", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 3c-1.5 0-3 1.5-3 3 0 1.5-1.5 3-3 3-1.5 0-3 1.5-3 3v3c0 3 2 3 3 3h12c1 0 3 0 3-3v-3c0-1.5-1.5-1.5-3-3-1.5-1.5-3-3-3-3 0-1.5-1.5-3-3-3z" /><circle cx="9" cy="11" r="1" /><circle cx="15" cy="11" r="1" /><path d="M11 16h2" /></svg> },
];

// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqs = [
    { q: "What types of organic agricultural commodities do you supply?", a: "We supply a wide range of certified organic commodities including desiccated coconut, cashew nuts, sesame seeds, hibiscus, ginger, and various organic grains, spices, and herbs sourced directly from trusted farms." },
    { q: "Do you handle international shipping and export documentation?", a: "Yes, we handle end-to-end logistics including export documentation, phytosanitary certificates, and customs clearance. We have established partnerships with reliable freight forwarders worldwide." },
    { q: "What certifications do your products carry?", a: "Our products carry internationally recognised certifications including USDA Organic, EU Organic, and where applicable, Fairtrade and Rainforest Alliance certifications." },
    { q: "What is your minimum order quantity for bulk commodities?", a: "Minimum order quantities vary by product. For most commodities, we start from 1 metric tonne. For general supplies such as packaging materials and chemicals, MOQs are product-specific. Contact us for a detailed quote." },
];

// ─── Field error helper ──────────────────────────────────────────────────────

function FieldError({ messages }: { messages?: string[] }) {
    if (!messages?.length) return null;
    return (
        <p id={`err-${Math.random()}`} role="alert" className="text-[13px] text-red-600 font-semibold mt-1.5 flex items-center gap-1">
            <span aria-hidden>↑</span> {messages[0]}
        </p>
    );
}

// ─── Input class helper ──────────────────────────────────────────────────────

function inputCls(hasError: boolean) {
    return `w-full bg-[#fcfaf7] border ${hasError ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#044b3c]'} rounded-lg px-5 py-4 text-[15px] text-[#334155] placeholder-gray-400 outline-none shadow-sm transition-all`;
}

// ─── Pre-seeded initial state ────────────────────────────────────────────────

const initialState: ActionResult = { success: false, message: '' };

// ─── FAQ Accordion item ──────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-[#fcfaf7] hover:bg-white transition-colors rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left gap-4"
            >
                <h3 className="text-[#334155] font-bold text-[15px] md:text-[16px]">{question}</h3>
                <span className={`text-gray-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                    <ChevronDown />
                </span>
            </button>
            {open && (
                <div className="px-5 pb-6 md:px-6 text-[#4b5563] text-[14px] md:text-[15px] leading-relaxed border-t border-gray-100 pt-4">
                    {answer}
                </div>
            )}
        </div>
    );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    // Clear form on success
    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state.success]);

    const fe = state.fieldErrors ?? {};

    return (
        <div className="w-full bg-[#f4f2e9] font-sans min-h-screen pt-16 md:pt-24 pb-24">

            

            {/* ── CONTACT FORM ── */}
            <section className="max-w-[800px] mx-auto px-6 mb-24 md:mb-32" aria-label="Contact form">
                <div className="text-center mb-10">
                    <h2 className="text-[#044b3c] text-[40px] md:text-[48px] font-extrabold tracking-tight mb-4">Get in touch</h2>
                    <p className="text-[#4b5563] text-[16px] md:text-[18px] max-w-[650px] mx-auto leading-relaxed">
                        Whether you have inquiries about our organic commodities or want to explore partnership opportunities, we're here to hear from you.
                    </p>
                </div>

                {/* ── Global success banner ── */}
                {state.success && (
                    <div role="status" aria-live="polite" className="flex items-start gap-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5 mb-8">
                        <CheckCircle />
                        <p className="text-[#166534] font-semibold text-[15px]">{state.message}</p>
                    </div>
                )}

                {/* ── Global error banner (non-field level) ── */}
                {!state.success && state.message && !state.fieldErrors && (
                    <div role="alert" aria-live="assertive" className="flex items-start gap-3 bg-[#fef2f2] border border-[#fecaca] rounded-xl p-5 mb-8">
                        <AlertCircle />
                        <p className="text-red-700 font-semibold text-[15px]">{state.message}</p>
                    </div>
                )}

                <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">

                    {/* Honeypot — visually hidden, never touched by real users */}
                    <div aria-hidden="true" className="hidden">
                        <label htmlFor="website">Website</label>
                        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Name + Email row */}
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex-1">
                            <label htmlFor="contact-name" className="block text-[13px] font-bold text-[#334155] mb-2 uppercase tracking-wide">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                autoComplete="name"
                                aria-required="true"
                                aria-describedby={fe.name ? 'err-name' : undefined}
                                className={inputCls(!!fe.name)}
                            />
                            <FieldError messages={fe.name} />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="contact-email" className="block text-[13px] font-bold text-[#334155] mb-2 uppercase tracking-wide">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                aria-required="true"
                                aria-describedby={fe.email ? 'err-email' : undefined}
                                className={inputCls(!!fe.email)}
                            />
                            <FieldError messages={fe.email} />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="contact-message" className="block text-[13px] font-bold text-[#334155] mb-2 uppercase tracking-wide">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            placeholder="Tell us about your requirements, products of interest, or any questions you have…"
                            rows={6}
                            aria-required="true"
                            aria-describedby={fe.message ? 'err-message' : undefined}
                            className={`${inputCls(!!fe.message)} resize-y min-h-[140px]`}
                        ></textarea>
                        <FieldError messages={fe.message} />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isPending}
                        aria-disabled={isPending}
                        className="w-full bg-[#044b3c] hover:bg-[#033a2e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-[16px] py-4 rounded-lg transition-colors mt-1 flex items-center justify-center gap-3"
                    >
                        {isPending ? (
                            <>
                                <Spinner /> Sending…
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </section>


            {/* ── FAQ ── */}
            <section className="max-w-[800px] mx-auto px-6 mb-24 md:mb-32" aria-label="Frequently asked questions">
                <div className="text-center mb-12">
                    <h1 className="text-[#044b3c] text-[40px] md:text-[48px] font-extrabold tracking-tight mb-4">FAQ</h1>
                    <p className="text-[#4b5563] text-[16px] md:text-[18px] max-w-[500px] mx-auto leading-relaxed">
                        Answers to the most common questions about our products and services.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {faqs.map((faq) => (
                        <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </section>

            

        </div>
    );
}
