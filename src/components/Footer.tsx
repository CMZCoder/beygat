import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-bronze-950 border-t border-bronze-800/50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold tracking-widest text-bronze-100 mb-4">
                            LE CRONACHE DI BEYGAT
                        </h3>
                        <p className="text-bronze-400 text-sm leading-relaxed">
                            Un viaggio epico attraverso un mondo dove la magia è proibita e la verità è l'unica arma.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-bronze-300 mb-4">
                            Navigazione
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/libro" className="text-bronze-400 hover:text-omnis-glow transition-colors text-sm">
                                    Il Libro
                                </Link>
                            </li>
                            <li>
                                <Link href="/autore" className="text-bronze-400 hover:text-omnis-glow transition-colors text-sm">
                                    L'Autore
                                </Link>
                            </li>
                            <li>
                                <Link href="/estratto" className="text-bronze-400 hover:text-omnis-glow transition-colors text-sm">
                                    Estratto Gratuito
                                </Link>
                            </li>
                            <li>
                                <Link href="/acquista" className="text-bronze-400 hover:text-omnis-glow transition-colors text-sm">
                                    Acquista
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-bronze-300 mb-4">
                            Contatti
                        </h4>
                        <p className="text-bronze-400 text-sm mb-2">
                            Per collaborazioni e richieste:
                        </p>
                        <a
                            href="mailto:cristiacri.sanchez@gmail.com"
                            className="text-omnis-glow hover:text-omnis-bronze transition-colors text-sm"
                        >
                            cristiacri.sanchez@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-bronze-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-bronze-500 text-sm">
                        © 2025 Cristian Sanchez. Tutti i diritti riservati.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/cris_kalel/" target="_blank" rel="noopener noreferrer" className="text-bronze-500 hover:text-omnis-glow transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@criskalel5521" target="_blank" rel="noopener noreferrer" className="text-bronze-500 hover:text-omnis-glow transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
