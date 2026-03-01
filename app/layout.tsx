import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { withBasePath } from "@/lib/basePath";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://multiversehotels.com'),
  title: "Multiverse Hotels | Luxury Accommodation Beyond the Ordinary",
  description: "Experience luxury redefined at Multiverse Hotels. Discover unparalleled comfort and elegance with world-class amenities and personalized service.",
  keywords: [
    "Multiverse Hotels",
    "luxury hotels",
    "Hyderabad hotels",
    "Clarion Hotel Hyderabad",
    "Click Hotels Gachibowli",
    "business hotels",
    "premium accommodation",
    "hotel booking",
    "hospitality",
    "Kavuri Hills hotels",
    "Madhapur hotels"
  ],
  authors: [{ name: "Multiverse Hotels" }],
  creator: "Multiverse Hotels",
  publisher: "Multiverse Hotels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: withBasePath('/logo-bg.svg'),
    apple: withBasePath('/logo-bg.svg'),
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://multiversehotels.com',
    title: 'Multiverse Hotels | Luxury Accommodation Beyond the Ordinary',
    description: 'Experience luxury redefined at Multiverse Hotels. Discover unparalleled comfort and elegance with world-class amenities and personalized service.',
    siteName: 'Multiverse Hotels',
    images: [
      {
        url: withBasePath('/logo-bg.svg'),
        width: 1080,
        height: 1080,
        alt: 'Multiverse Hotels Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiverse Hotels | Luxury Accommodation Beyond the Ordinary',
    description: 'Experience luxury redefined at Multiverse Hotels. Discover unparalleled comfort and elegance with world-class amenities and personalized service.',
    images: [withBasePath('/logo-bg.svg')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
