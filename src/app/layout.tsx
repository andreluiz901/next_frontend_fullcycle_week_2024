import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "FCTube",
  description: "A  YouTube clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
