import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.tirupatimovers.in"),

  title: {
    default: "Tirupati Packers & Movers | Best House Shifting Services in Tirupati",
    template: "%s | Tirupati Packers & Movers",
  },

  description:
    "Trusted Packers and Movers in Tirupati offering house shifting, office relocation, vehicle transport, loading & unloading, and local moving services at affordable prices.",

  keywords: [
    "Packers and Movers Tirupati",
    "House Shifting Tirupati",
    "Office Relocation Tirupati",
    "Local Packers and Movers",
    "Vehicle Transport Tirupati",
    "Loading and Unloading Services",
    "Home Relocation",
    "Moving Company Tirupati",
    "Packers Movers Andhra Pradesh",
  ],

  authors: [
    {
      name: "Tirupati Packers & Movers",
    },
  ],

  creator: "Tirupati Packers & Movers",

  publisher: "Tirupati Packers & Movers",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.tirupatimovers.in",
  },

  openGraph: {
    title: "Tirupati Packers & Movers",
    description:
      "Professional Packers and Movers in Tirupati for House Shifting, Office Relocation, Vehicle Transport and Local Moving Services.",

    url: "https://www.tirupatimovers.in",

    siteName: "Tirupati Packers & Movers",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tirupati Packers and Movers",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tirupati Packers & Movers",
    description:
      "Affordable Packers and Movers in Tirupati for Home and Office Relocation.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "@id": "https://www.tirupatimovers.in/#business",
      name: "Tirupati Packers & Movers",
      image: "https://www.tirupatimovers.in/images/og-image.jpg",
      url: "https://www.tirupatimovers.in",
      telephone: "+91-7993522059",
      email: "support@tirupatimovers.in",
      priceRange: "₹₹",
      description:
        "Professional Packers and Movers in Tirupati providing house shifting, office relocation, vehicle transportation, loading and unloading services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tirupati",
        addressLocality: "Tirupati",
        addressRegion: "Andhra Pradesh",
        postalCode: "517501",
        addressCountry: "IN",
      },
      areaServed: [
        "Tirupati",
        "Nellore",
        "Chittoor",
        "Kadapa",
        "Bangalore",
        "Hyderabad",
      ],
      openingHours: "Mo-Su 08:00-21:00",
      sameAs: [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage",
        "https://www.linkedin.com/company/yourpage",
      ],
    }),
  }}
/>

<Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Tirupati Packers & Movers",
      url: "https://www.tirupatimovers.in",
      logo: "https://www.tirupatimovers.in/logo.png",
      email: "support@tirupatimovers.in",
      telephone: "+91-7993522059",
    }),
  }}
/>

<Script
  id="website-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://www.tirupatimovers.in",
      name: "Tirupati Packers & Movers",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.tirupatimovers.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>
      </body>
    </html>
  );
}