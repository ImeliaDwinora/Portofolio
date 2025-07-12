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
  title: "Imelia | Personal Website",
  description: "Explore Imelia's personal projects, blog articles, and more. Built with modern web technologies like Next.js and Tailwind CSS.",
  keywords: [
    "Imelia",
    "Personal Website",
    "Web Developer",
    "Frontend Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "React Developer",
    "Indonesia Web Developer"
  ],
  authors: [{ name: "Imelia", url: "https://imelia-portofolio.vercel.app" }],
  creator: "Imelia",
  publisher: "Imelia",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Imelia | Web Developer & Designer",
    description: "Welcome to my personal website. Explore my projects, blogs, and more.",
    url: "https://imelia-portofolio.vercel.app",
    siteName: "Imelia Website",
    images: [
      {
        url: "https://imelia-portofolio.vercel.app/og_image.png", 
        width: 1200,
        height: 630,
        alt: "Imelia Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imelia | Web Developer & Designer",
    description: "Explore my projects, blog posts, and developer journey.",
    images: "https://imelia-portofolio.vercel.app/og_image.png",
  },
  icons: {
    icon: "/pinkeu-flower.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
