import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MetallicNavbar } from "@/components/ui/metallic-navbar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueBridge LLC",
  description: "BlueBridge LLC - Connecting talent across the globe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
} 