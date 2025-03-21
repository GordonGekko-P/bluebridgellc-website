import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetallicNavbar } from "@/components/ui/metallic-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueBridge LLC - Building Bridges to Your Technological Future",
  description: "BlueBridge LLC provides innovative technology solutions that empower businesses through digital transformation.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MetallicNavbar />
        {children}
      </body>
    </html>
  );
} 