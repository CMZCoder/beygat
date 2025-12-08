import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Cronache di Beygat | Fuga dal Regno Centrale",
  description: "Un romanzo fantasy YA di Cristian Sanchez. Scopri il mondo di Nova City, l'Omnis e il viaggio di Tobias verso Beygat.",
  keywords: ["fantasy italiano", "YA", "distopia", "Omnis", "Beygat", "romanzo", "Cristian Sanchez"],
  authors: [{ name: "Cristian Sanchez" }],
  openGraph: {
    title: "Le Cronache di Beygat | Fuga dal Regno Centrale",
    description: "Un romanzo fantasy YA ambientato in una distopia dove la magia è proibita.",
    type: "book",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={cinzel.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
