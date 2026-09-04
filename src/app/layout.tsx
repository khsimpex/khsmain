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
  metadataBase: new URL("https://www.khsimpex.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KHS IMPEX - Precision Textile Engineering",
    description: "KHS Impex Pvt. Ltd. - Premier OEM and export manufacturer of wholesale knitted home textiles, knitted apparel, and 3D flyknit shoe uppers based in Noida, India.",
    url: "/",
    siteName: "KHS Impex",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "KHS Impex Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness"],
                name: "KHS Impex",
                url: "https://www.khsimpex.com",
                logo: "https://www.khsimpex.com/logo.png",
                description: "Premier OEM and export manufacturer of wholesale knitted home textiles, knitted apparel, and 3D flyknit shoe uppers based in Noida, India.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "A-4/E, Sector-80",
                  addressLocality: "Noida",
                  addressRegion: "UP",
                  postalCode: "201305",
                  addressCountry: "IN"
                },
                email: "info@khsimpex.com",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    email: "info@khsimpex.com",
                    contactType: "customer service"
                  },
                  {
                    "@type": "ContactPoint",
                    email: "khsimpex@gmail.com",
                    contactType: "general inquiries"
                  }
                ],
                sameAs: [
                  "https://www.linkedin.com/company/khsimpex"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "KHS Impex",
                url: "https://www.khsimpex.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.khsimpex.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
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
