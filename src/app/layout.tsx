import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ModalProvider from "../components/ModalProvider";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHS IMPEX - Precision Textile Engineering | Knitted Home Furnishings & Apparel",
  description: "KHS Impex Pvt. Ltd. - Premier OEM and export manufacturer of wholesale knitted home textiles, knitted apparel, and 3D flyknit shoe uppers based in Noida, India.",
  keywords: [
    "wholesale knitted home textiles",
    "knitted home furnishing manufacturer India",
    "custom knitted throw blankets wholesale",
    "knitted apparel manufacturer India",
    "OEM knitted garment exporter",
    "seamless knitted garments supplier",
    "knitted shoe upper manufacturer",
    "3D knit footwear factory",
    "OEM knitted sneaker uppers",
    "B2B textile manufacturing Noida",
    "precision textile engineering India",
    "sustainable knitwear manufacturer",
    "bulk knitted home decor supplier"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable} font-body text-base antialiased selection:bg-ink selection:text-white flex flex-col min-h-screen`}
      >
        <Toaster position="bottom-center" toastOptions={{ className: 'font-body text-sm font-medium border border-ink' }} />
        <Header />
        <ModalProvider>
          {children}
        </ModalProvider>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
