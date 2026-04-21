import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Staynex — Conciergerie Airbnb Premium à Paris",
    template: "%s | Staynex",
  },
  description:
    "Staynex, votre conciergerie Airbnb premium à Paris. Gestion complète de votre bien et expérience voyageur exceptionnelle.",
  keywords: [
    "conciergerie airbnb",
    "conciergerie airbnb paris",
    "gestion locative courte durée",
    "co-host airbnb",
    "gestion airbnb paris",
  ],
  openGraph: {
    title: "Staynex — Conciergerie Airbnb Premium à Paris",
    description:
      "Gestion complète de votre bien Airbnb à Paris par une conciergerie premium.",
    url: "https://staynex.fr",
    siteName: "Staynex",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
