import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acquista | Le Cronache di Beygat",
  description:
    "Acquista Le Cronache di Beygat: Fuga dal Regno Centrale in formato Kindle o Paperback.",
};

export default function AcquistaPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <h1 className="section-title">Acquista il Libro</h1>
        <p className="section-subtitle">
          Disponibile in formato digitale e cartaceo
        </p>
      </section>

      {/* Book Display + Purchase Options */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Book Cover Showcase */}
          <div className="flex justify-center mb-16">
            <div className="book-cover-shadow rounded-sm overflow-hidden">
              <Image
                src="/book-cover.jpg"
                alt="Le Cronache di Beygat - Book Cover"
                width={300}
                height={450}
                className="w-60 md:w-72 h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kindle */}
            <div className="card group hover:border-omnis-glow/50 transition-all duration-500 text-center">
              <div className="w-20 h-20 rounded-full bg-omnis-glow/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-omnis-glow/30 transition-colors">
                <svg
                  className="w-10 h-10 text-omnis-glow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-bronze-100 mb-2">
                Kindle eBook
              </h2>
              <p className="text-bronze-400 text-sm mb-4">
                Formato digitale per tutti i dispositivi
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-omnis-glow">
                  €3.99
                </span>
              </div>

              <ul className="text-left text-bronze-400 text-sm space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-omnis-glow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Lettura immediata su Kindle, smartphone, tablet, PC
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-omnis-glow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Disponibile anche su Kindle Unlimited
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-omnis-glow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Segnalibri e note sincronizzate
                </li>
              </ul>

              <a
                href="https://amzn.eu/d/0bq0LCkC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full"
              >
                Acquista su Amazon
              </a>
            </div>

            {/* Paperback */}
            <div className="card group hover:border-bronze-500/50 transition-all duration-500 text-center">
              <div className="w-20 h-20 rounded-full bg-bronze-600/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-bronze-600/30 transition-colors">
                <svg
                  className="w-10 h-10 text-bronze-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-bronze-100 mb-2">
                Paperback
              </h2>
              <p className="text-bronze-400 text-sm mb-4">
                Edizione cartacea da collezione
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-bronze-300">
                  €14.99
                </span>
              </div>

              <ul className="text-left text-bronze-400 text-sm space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-omnis-glow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Formato 13.97 × 21.59 cm (Trade Paperback)
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-omnis-glow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Carta di alta qualità
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-omnis-glow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copertina matte premium
                </li>
              </ul>

              <a
                href="https://amzn.eu/d/0bq0LCkC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block w-full"
              >
                Acquista su Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book Info */}
      <section className="py-16 px-6 bg-bronze-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-bronze-100 mb-8 text-center">
            Dettagli del Libro
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Titolo</span>
                <span className="text-bronze-200">Le Cronache di Beygat</span>
              </div>
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Sottotitolo</span>
                <span className="text-bronze-200">Fuga dal Regno Centrale</span>
              </div>
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Autore</span>
                <span className="text-bronze-200">Cristian Sanchez</span>
              </div>
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Genere</span>
                <span className="text-bronze-200">Fantasy / Distopia YA</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Pagine</span>
                <span className="text-bronze-200">~300</span>
              </div>
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Lingua</span>
                <span className="text-bronze-200">Italiano</span>
              </div>
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Editore</span>
                <span className="text-bronze-200">Self-published (KDP)</span>
              </div>
              <div className="flex justify-between border-b border-bronze-700/50 pb-2">
                <span className="text-bronze-400">Serie</span>
                <span className="text-bronze-200">
                  Le Cronache di Beygat #1
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-bronze-100 mb-8">
            Cosa Dicono i Lettori
          </h2>

          <div className="card">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-omnis-lemon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-bronze-200 italic mb-4">
              «Un esordio travolgente. Non vedevo l'ora di scoprire cosa sarebbe
              successo dopo. Il mondo dell'Omnis è affascinante e i personaggi
              sono indimenticabili.»
            </blockquote>
            <cite className="text-bronze-400">— Recensione in arrivo</cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-6 text-center">
        <p className="text-bronze-400 mb-6">
          Non sei ancora sicuro? Leggi prima l'estratto gratuito!
        </p>
        <Link href="/estratto" className="btn-secondary">
          Leggi il Primo Capitolo
        </Link>
      </section>
    </div>
  );
}
