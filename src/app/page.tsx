import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dystopia" />
        <div className="absolute inset-0 bg-gradient-radial from-omnis-glow/5 via-transparent to-transparent" />

        {/* Animated particles - bronze themed */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-omnis-glow/30 rounded-full animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-omnis-bronze/40 rounded-full animate-pulse-slow delay-500" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-omnis-amber/30 rounded-full animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-omnis-lemon/20 rounded-full animate-pulse-slow delay-700" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Book Cover */}
            <div className="relative flex-shrink-0 animate-float">
              <div className="book-cover-shadow rounded-sm overflow-hidden">
                <Image
                  src="/book-cover.jpg"
                  alt="Le Cronache di Beygat - Book Cover"
                  width={320}
                  height={480}
                  className="w-64 md:w-80 h-auto object-cover"
                  priority
                />
              </div>
              {/* Glow effect behind book */}
              <div className="absolute -inset-4 bg-gradient-radial from-omnis-glow/20 via-transparent to-transparent -z-10 blur-2xl" />
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
                Un romanzo di Cristian Sanchez
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
                <span className="text-bronze-100">LE CRONACHE DI</span>
                <br />
                <span className="glow-text">BEYGAT</span>
              </h1>

              <p className="text-xl md:text-2xl text-bronze-300 font-light tracking-wide mb-8">
                Fuga dal Regno Centrale
              </p>

              <p className="text-lg text-bronze-400 max-w-xl mb-12 leading-relaxed">
                In un mondo dove la magia è proibita e l'algoritmo determina il tuo destino,
                un ragazzo scopre di essere ciò che il Regno teme di più.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/acquista" className="btn-primary">
                  Acquista Ora
                </Link>
                <Link href="/estratto" className="btn-secondary">
                  Leggi un Estratto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-bronze-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl text-bronze-200 font-light italic leading-relaxed">
            «Non mentire con il cuore, Tobias. Nemmeno a te stesso.»
          </blockquote>
          <cite className="block mt-6 text-bronze-400">— Lyra Cruz</cite>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Il Mondo di Beygat</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card group hover:border-omnis-glow/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-omnis-cherry/20 flex items-center justify-center mb-6 group-hover:bg-omnis-cherry/30 transition-colors">
                <svg className="w-6 h-6 text-omnis-cherry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-bronze-100 mb-3">L'Omnis</h3>
              <p className="text-bronze-400 leading-relaxed">
                Un'energia invisibile che scorre in ogni cosa vivente. Solo pochi eletti possono percepirla e usarla.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card group hover:border-omnis-glow/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-omnis-glow/20 flex items-center justify-center mb-6 group-hover:bg-omnis-glow/30 transition-colors">
                <svg className="w-6 h-6 text-omnis-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-bronze-100 mb-3">Nova City</h3>
              <p className="text-bronze-400 leading-relaxed">
                La Città Soldato, dove il cielo è sempre grigio e l'algoritmo decide chi sarai per il resto della vita.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card group hover:border-omnis-glow/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-omnis-lavender/20 flex items-center justify-center mb-6 group-hover:bg-omnis-lavender/30 transition-colors">
                <svg className="w-6 h-6 text-omnis-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-bronze-100 mb-3">Beygat</h3>
              <p className="text-bronze-400 leading-relaxed">
                La città fantasma dove l'Omnis vive ancora. Un rifugio o una trappola? Solo chi è degno lo scoprirà.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-bronze-900/50 to-bronze-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Inizia il Viaggio</h2>
          <p className="section-subtitle mb-12">
            Unisciti a Tobias nella sua fuga dal Regno Centrale. Scopri i segreti dell'Omnis e il vero significato della libertà.
          </p>
          <Link href="/acquista" className="btn-primary inline-block">
            Acquista il Libro
          </Link>
        </div>
      </section>
    </div>
  );
}
