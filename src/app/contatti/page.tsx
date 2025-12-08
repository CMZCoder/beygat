"use client";

import { useState } from "react";

export default function ContattiPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to an API
        console.log("Form submitted:", formState);
        setSubmitted(true);
    };

    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="py-16 px-6 text-center">
                <h1 className="section-title">Contatti</h1>
                <p className="section-subtitle">
                    Hai domande, suggerimenti o vuoi collaborare?
                </p>
            </section>

            {/* Contact Form */}
            <section className="py-8 px-6">
                <div className="max-w-2xl mx-auto">
                    {submitted ? (
                        <div className="card text-center">
                            <div className="w-16 h-16 rounded-full bg-omnis-glow/20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-omnis-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-bronze-100 mb-4">Messaggio Inviato!</h2>
                            <p className="text-bronze-400">
                                Grazie per avermi contattato. Ti risponderò il prima possibile.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="card space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-bronze-300 mb-2">
                                    Nome *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-bronze-800/50 border border-bronze-600/50 rounded px-4 py-3 text-bronze-100 
                           focus:outline-none focus:border-omnis-glow transition-colors placeholder:text-bronze-500"
                                    placeholder="Il tuo nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-bronze-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-bronze-800/50 border border-bronze-600/50 rounded px-4 py-3 text-bronze-100 
                           focus:outline-none focus:border-omnis-glow transition-colors placeholder:text-bronze-500"
                                    placeholder="la@tua.email"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-bronze-300 mb-2">
                                    Oggetto *
                                </label>
                                <select
                                    id="subject"
                                    required
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full bg-bronze-800/50 border border-bronze-600/50 rounded px-4 py-3 text-bronze-100 
                           focus:outline-none focus:border-omnis-glow transition-colors"
                                >
                                    <option value="" className="bg-bronze-900">Seleziona un oggetto</option>
                                    <option value="general" className="bg-bronze-900">Domanda generale</option>
                                    <option value="feedback" className="bg-bronze-900">Feedback sul libro</option>
                                    <option value="collaboration" className="bg-bronze-900">Proposta di collaborazione</option>
                                    <option value="press" className="bg-bronze-900">Stampa / Media</option>
                                    <option value="other" className="bg-bronze-900">Altro</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-bronze-300 mb-2">
                                    Messaggio *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-bronze-800/50 border border-bronze-600/50 rounded px-4 py-3 text-bronze-100 
                           focus:outline-none focus:border-omnis-glow transition-colors resize-none placeholder:text-bronze-500"
                                    placeholder="Scrivi il tuo messaggio..."
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full">
                                Invia Messaggio
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Alternative Contact */}
            <section className="py-16 px-6 bg-bronze-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-bronze-100 mb-4">Oppure scrivimi direttamente</h2>
                    <a
                        href="mailto:cristiacri.sanchez@gmail.com"
                        className="text-omnis-glow hover:text-omnis-bronze transition-colors text-lg"
                    >
                        cristiacri.sanchez@gmail.com
                    </a>

                    <div className="mt-8 flex justify-center gap-6">
                        <a href="https://www.instagram.com/cris_kalel/" target="_blank" rel="noopener noreferrer" className="text-bronze-400 hover:text-omnis-glow transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@criskalel5521" target="_blank" rel="noopener noreferrer" className="text-bronze-400 hover:text-omnis-glow transition-colors">
                            <span className="sr-only">YouTube</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
