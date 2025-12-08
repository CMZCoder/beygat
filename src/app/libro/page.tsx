import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Il Libro | Le Cronache di Beygat",
    description: "Scopri la trama, i personaggi e il mondo de Le Cronache di Beygat: Fuga dal Regno Centrale.",
};

export default function LibroPage() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero */}
            <section className="py-16 px-6 text-center">
                <h1 className="section-title">Il Libro</h1>
                <p className="section-subtitle">
                    Un'avventura epica tra distopia e magia
                </p>
            </section>

            {/* Book Cover + Synopsis */}
            <section className="py-16 px-6 bg-bronze-900/30">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Book Cover */}
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                            <div className="book-cover-shadow rounded-sm overflow-hidden">
                                <Image
                                    src="/book-cover.jpg"
                                    alt="Le Cronache di Beygat - Book Cover"
                                    width={280}
                                    height={420}
                                    className="w-56 md:w-64 h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div>
                            <h2 className="text-2xl font-semibold text-bronze-100 mb-8">La Trama</h2>
                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="text-bronze-300 leading-relaxed mb-6">
                                    In un mondo dove l'algoritmo determina chi sarai per il resto della vita,
                                    <strong className="text-bronze-100"> Tobias Cruz</strong> riceve la sua Investitura a diciotto anni.
                                    Ma qualcosa va storto: il Macchinario segnala una "risonanza ignota".
                                </p>
                                <p className="text-bronze-300 leading-relaxed mb-6">
                                    Quando sua madre viene arrestata per alto tradimento e scopre i diari segreti del padre scomparso,
                                    Tobias capisce di essere molto più di un semplice soldato. È un <strong className="text-omnis-glow">Magus</strong> —
                                    un utente dell'Omnis, la forza proibita che il Regno ha cercato di cancellare.
                                </p>
                                <p className="text-bronze-300 leading-relaxed mb-6">
                                    Con la sua migliore amica <strong className="text-bronze-100">Crystal</strong> al suo fianco e
                                    il Regno alle calcagna, Tobias intraprende un viaggio verso <strong className="text-omnis-glow">Beygat</strong>,
                                    la città fantasma dove l'Omnis vive ancora. Ma il comandante <strong className="text-bronze-100">Bayern Morruen</strong>
                                    non si fermerà davanti a nulla per catturarlo.
                                </p>
                                <p className="text-bronze-300 leading-relaxed">
                                    E il suo migliore amico <strong className="text-bronze-100">Kael</strong> è costretto a scegliere
                                    tra la lealtà alla famiglia e l'amicizia di una vita.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Characters */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold text-bronze-100 mb-12 text-center">I Personaggi</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Tobias */}
                        <div className="card">
                            <div className="w-16 h-16 rounded-full bg-omnis-cherry/20 flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl font-bold text-omnis-cherry">T</span>
                            </div>
                            <h3 className="text-xl font-semibold text-bronze-100 text-center mb-2">Tobias Cruz</h3>
                            <p className="text-omnis-cherry text-sm text-center mb-4">Protagonista • Magus Fisico</p>
                            <p className="text-bronze-400 text-sm leading-relaxed">
                                Diciottenne testardo e coraggioso. Scopre di poter manipolare l'Omnis e deve imparare a controllare
                                un potere che non sapeva di avere.
                            </p>
                        </div>

                        {/* Crystal */}
                        <div className="card">
                            <div className="w-16 h-16 rounded-full bg-omnis-lavender/20 flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl font-bold text-omnis-lavender">C</span>
                            </div>
                            <h3 className="text-xl font-semibold text-bronze-100 text-center mb-2">Crystal Arwen</h3>
                            <p className="text-omnis-lavender text-sm text-center mb-4">Co-protagonista • Arcanotecnica</p>
                            <p className="text-bronze-400 text-sm leading-relaxed">
                                Brillante e razionale, è la migliore amica di Tobias fin dall'infanzia.
                                Potrebbe nascondere anche lei un legame con l'Omnis.
                            </p>
                        </div>

                        {/* Elian */}
                        <div className="card">
                            <div className="w-16 h-16 rounded-full bg-omnis-lemon/20 flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl font-bold text-omnis-lemon">E</span>
                            </div>
                            <h3 className="text-xl font-semibold text-bronze-100 text-center mb-2">Elian Cruz</h3>
                            <p className="text-omnis-lemon text-sm text-center mb-4">Mentore • Magus Esperto</p>
                            <p className="text-bronze-400 text-sm leading-relaxed">
                                Lo zio di Tobias, membro della Resistenza. Conosce i segreti dell'Omnis
                                e guiderà il nipote nel suo risveglio.
                            </p>
                        </div>

                        {/* Bayern */}
                        <div className="card">
                            <div className="w-16 h-16 rounded-full bg-bronze-600/20 flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl font-bold text-bronze-400">B</span>
                            </div>
                            <h3 className="text-xl font-semibold text-bronze-100 text-center mb-2">Bayern Morruen</h3>
                            <p className="text-bronze-500 text-sm text-center mb-4">Antagonista • Comandante</p>
                            <p className="text-bronze-400 text-sm leading-relaxed">
                                Comandante spietato con un passato tragico. Non si fermerà davanti a nulla
                                per catturare i Magus fuggitivi.
                            </p>
                        </div>

                        {/* Kael */}
                        <div className="card">
                            <div className="w-16 h-16 rounded-full bg-omnis-glow/20 flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl font-bold text-omnis-glow">K</span>
                            </div>
                            <h3 className="text-xl font-semibold text-bronze-100 text-center mb-2">Kael Morruen</h3>
                            <p className="text-omnis-glow text-sm text-center mb-4">Amico/Nemico • Soldato</p>
                            <p className="text-bronze-400 text-sm leading-relaxed">
                                Fratello minore di Bayern e migliore amico di Tobias.
                                Costretto a scegliere tra dovere e amicizia.
                            </p>
                        </div>

                        {/* Lyra */}
                        <div className="card">
                            <div className="w-16 h-16 rounded-full bg-omnis-amber/20 flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl font-bold text-omnis-amber">L</span>
                            </div>
                            <h3 className="text-xl font-semibold text-bronze-100 text-center mb-2">Lyra Cruz</h3>
                            <p className="text-omnis-amber text-sm text-center mb-4">Madre • Magus Spia</p>
                            <p className="text-bronze-400 text-sm leading-relaxed">
                                Una delle Magus più potenti della Resistenza, ha nascosto la verità
                                a Tobias per proteggerlo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 text-center">
                <Link href="/estratto" className="btn-secondary mr-4">
                    Leggi un Estratto
                </Link>
                <Link href="/acquista" className="btn-primary">
                    Acquista Ora
                </Link>
            </section>
        </div>
    );
}
