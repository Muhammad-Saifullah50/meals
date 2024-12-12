import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['100']
})

export const metadata: Metadata = {
  title: "Meals",
  description: "Get to know what to cook today!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased max-w-7xl mx-auto`}
      >
        <Navbar />
        <main className="p-10 z-10 relative ">
          {children}
        </main>
      </body>
    </html>
  );
}
