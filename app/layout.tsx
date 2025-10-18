import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Mostafa | E-commerce Marketing Manager",
  description: "Professional portfolio of Ahmed Mostafa - E-commerce Marketing Manager at BEYMEN GROUP. Specializing in growth strategies, digital marketing, and e-commerce website development.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Ahmed Mostafa | E-commerce Marketing Manager",
    description: "Professional portfolio showcasing e-commerce expertise and marketing leadership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mostafa | E-commerce Marketing Manager",
    description: "Professional portfolio showcasing e-commerce expertise and marketing leadership.",
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
        {children}
      </body>
    </html>
  );
}
