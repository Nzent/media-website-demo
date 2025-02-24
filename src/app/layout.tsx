import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Provider/Provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Excellence Media",
  description: "Sri Lanka no 1 Media and Advertisement Agency",

  authors: [{ name: "Nisalk" }],
  creator: "Nisalk ",
  publisher: "Nisalk ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "hhttps://excellence-demo.vercel.app/",
    title: "Excellence - Professional medial agency",
    description:
      "Discover Excellence, professional team of media and advertisement agency",
    siteName: "Excellence",
    images: [
      {
        url: "/images/excellence-og.jpg",
        width: 1200,
        height: 630,
        alt: "Excellence - Professional medial agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Excellence",
    creator: "@Excellence",
    title: "Excellence - Professional medial agency",
    description:
      "Discover Excellence, professional team of media and advertisement agency",
    images: ["/images/excellence-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-100`}>
        {/* navbar */}
        <NavBar />
        {/* elements */}
        <Provider>{children}</Provider>
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
