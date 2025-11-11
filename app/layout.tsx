import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileWelcomePopup from "@/components/mobileWelcomePopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOKUTANI - Repoussez vos limites, entrez dans l'arène",
  description: "BOKUTANI, le leader des jeux VR en équipe. Une immersion totale en réalité virtuelle sur 500m². Jeux exclusifs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'Gotham, sans-serif' }}
      >
        <MobileWelcomePopup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
