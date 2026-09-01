import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spanotic - Digital Infrastructure",
  description: "Spanotic builds high-performance digital systems and web architecture.",
  openGraph: {
    title: "Spanotic - Digital Infrastructure",
    description: "Spanotic builds high-performance digital systems and web architecture.",
    images: [{ url: "/og-image.jpg" }],
    url: "https://spanotic.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanotic - Digital Infrastructure",
    description: "Spanotic builds high-performance digital systems and web architecture.",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
