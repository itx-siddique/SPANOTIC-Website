"use client";

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// 1. The Form Component that handles URL reading
function ContactFormContent() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Extract all selections passed from the pricing estimator
    const projectType = searchParams.get('type');
    const complexity = searchParams.get('complexity');
    const timeline = searchParams.get('timeline');
    const tier = searchParams.get('tier');

    // True if the user arrived from the interactive estimator
    const hasSelections = projectType || complexity || timeline || tier;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget; // grab this NOW, before any await
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                form.reset(); // use the saved reference, not e.currentTarget
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Fetch threw an error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="w-16 h-16 bg-[#00F0FF]/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#A1A1AA] max-w-[300px]">
                    Thank you for reaching out. We will get back to you shortly to discuss your custom digital architecture.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-[#00F0FF] hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* READ-ONLY SELECTION SUMMARY */}
            {/* Renders only when query params are present (arriving from estimator) */}
            {hasSelections && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                    {tier && (
                        <div>
                            <label className="text-xs text-[#00F0FF] uppercase tracking-wider font-bold mb-1.5 block">
                                Tier
                            </label>
                            <input
                                type="text"
                                name="tier"
                                readOnly
                                value={tier}
                                className="w-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-lg p-3 text-[#00F0FF] font-semibold text-sm focus:outline-none cursor-not-allowed truncate"
                            />
                        </div>
                    )}
                    {projectType && (
                        <div>
                            <label className="text-xs text-[#00F0FF] uppercase tracking-wider font-bold mb-1.5 block">
                                Project Type
                            </label>
                            <input
                                type="text"
                                name="project_type"
                                readOnly
                                value={projectType}
                                className="w-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-lg p-3 text-[#00F0FF] font-semibold text-sm focus:outline-none cursor-not-allowed truncate"
                            />
                        </div>
                    )}
                    {complexity && (
                        <div>
                            <label className="text-xs text-[#00F0FF] uppercase tracking-wider font-bold mb-1.5 block">
                                Complexity
                            </label>
                            <input
                                type="text"
                                name="complexity"
                                readOnly
                                value={complexity}
                                className="w-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-lg p-3 text-[#00F0FF] font-semibold text-sm focus:outline-none cursor-not-allowed truncate"
                            />
                        </div>
                    )}
                    {timeline && (
                        <div>
                            <label className="text-xs text-[#00F0FF] uppercase tracking-wider font-bold mb-1.5 block">
                                Timeline
                            </label>
                            <input
                                type="text"
                                name="timeline"
                                readOnly
                                value={timeline}
                                className="w-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-lg p-3 text-[#00F0FF] font-semibold text-sm focus:outline-none cursor-not-allowed truncate"
                            />
                        </div>
                    )}
                </div>
            )}

            {/* STANDARD USER INPUTS (Always visible) */}
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-black/40 border border-[#2A2A38] rounded-lg p-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors mt-2"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-black/40 border border-[#2A2A38] rounded-lg p-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                required
            />

            {/* Clean, empty text area for the user's specific message */}
            <textarea
                name="message"
                placeholder="Tell us about your project goals and requirements..."
                rows={5}
                className="w-full bg-black/40 border border-[#2A2A38] rounded-lg p-3 text-white focus:outline-none focus:border-[#00F0FF] resize-none transition-colors"
                required
            ></textarea>

            {status === 'error' && (
                <div className="text-red-400 text-sm mt-1">
                    Failed to send message. Please try again or contact us directly.
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#00F0FF] text-[#0B0B0E] font-bold py-3.5 rounded-lg hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-[#0B0B0E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </div>
                ) : (
                    'Submit Inquiry'
                )}
            </button>
        </form>
    );
}

// 2. The Main Page Layout
export default function ContactForm() {
    return (
        <main className="relative overflow-hidden min-h-screen pt-12 px-6">
            {/* Ambient Lighting */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00F0FF]/15 blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8A2BE2]/15 blur-[120px] pointer-events-none z-0"></div>

            {/* Header Section */}
            <h1 className="text-white text-4xl font-bold relative z-10 text-center">
                Let's Build Your System
            </h1>
            <p className="text-[#A1A1AA] text-center mt-4 mb-16 relative z-10">
                Schedule a consultation to discuss your operational bottlenecks and custom digital architecture.
            </p>

            {/* The Grid Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1100px] mx-auto relative z-10 pb-24">

                {/* Left Column: The Contact Form */}
                <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 backdrop-blur-sm">
                    <Suspense fallback={<div className="text-[#00F0FF] animate-pulse">Loading secure form...</div>}>
                        <ContactFormContent />
                    </Suspense>
                </div>

                {/* Right Column: Contact Details */}
                <div className="bg-[#16161D]/50 border border-[#2A2A38] rounded-2xl p-8 flex flex-col justify-center backdrop-blur-sm">
                    <div className="mb-8">
                        <span className="text-[#00F0FF] text-sm font-bold uppercase tracking-wider block mb-2">Email</span>
                        <p className="text-white text-lg break-words">afnanahmed.pro@gmail.com</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-[#00F0FF] text-sm font-bold uppercase tracking-wider block mb-2">Phone</span>
                        <p className="text-white text-lg">+92 323 5225493</p>
                    </div>
                    <div>
                        <span className="text-[#00F0FF] text-sm font-bold uppercase tracking-wider block mb-2">Location</span>
                        <p className="text-white text-lg leading-relaxed">Rawalpindi, Punjab, Pakistan<br /><span className="text-[#A1A1AA] text-base">(Remote-First Global Operations)</span></p>
                    </div>
                </div>

            </div>
        </main>
    );
}