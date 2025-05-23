import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans  } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/shared/Header";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "The LINK Project | AI English Lessons for Migrant Workers",
  description:
    "English learning resources for migrant workers in Singapore through a personalized AI voice assistant",
  keywords: [
    "learn English",
    "AI tutor",
    "practical English",
    "migrant workers",
    "Singapore",
    "ESL",
    "conversational English",
    "real-world English lessons",
  ],
  authors: [{ name: "The LINK Project" }],
  openGraph: {
    title: "The LINK Project | AI English Lessons for Migrant Workers",
    description:
      "English learning resources for migrant workers in Singapore through a personalized AI voice assistant",
    url: "https://thelinkproject.org",
    siteName: "The LINK Project",
    images: [
      {
        url: "/assets/link_blue.png", 
        width: 600,
        height: 600,
        alt: "The LINK Project Logo",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div>
    <Header></Header>
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
        >
        {children}
        <Analytics/>
      </body>
    </html>
    </div>
  );
}
