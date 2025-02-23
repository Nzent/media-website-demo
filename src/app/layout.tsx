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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-100`}>
        <NavBar />
        {/* <Provider>{children}</Provider> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
