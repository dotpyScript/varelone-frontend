import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/layout/providers";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Varelon Energy | Solar Cold Chain & Energy Infrastructure in Nigeria",
    template: "%s | Varelon Energy",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Varelon Energy NG LTD",
    "energy solutions Nigeria",
    "cold chain infrastructure Nigeria",
    "solar cold rooms Nigeria",
    "solar refrigeration Nigeria",
    "cold-chain logistics Nigeria",
    "energy infrastructure Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.legalName,
    title: "Varelon Energy | Solar Cold Chain & Energy Infrastructure",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0b0f0d",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  areaServed: { "@type": "Country", name: "Nigeria" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      suppressHydrationWarning
      className={`${archivo.variable} ${geist.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Marks JS as available so reveal styles only hide content that will be revealed. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <RevealObserver />
        </Providers>
      </body>
    </html>
  );
}
