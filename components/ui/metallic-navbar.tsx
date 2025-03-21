"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MetallicButton } from "./metallic-button";

interface NavLink {
  href: string;
  label: string;
}

interface MetallicNavbarProps {
  className?: string;
  logo?: React.ReactNode;
  navLinks?: NavLink[];
  ctaButton?: {
    href: string;
    label: string;
  };
}

export function MetallicNavbar({
  className,
  logo,
  navLinks = [
    { href: "/", label: "Home" },
    { href: "/employers", label: "Employers" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
    { href: "/components", label: "UI Components" },
    { href: "/showcase", label: "Showcase" },
  ],
  ctaButton = {
    href: "/contact",
    label: "Contact Us",
  },
}: MetallicNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-lg border-b border-blue-900/20 shadow-lg shadow-blue-900/5"
          : "py-5 bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {logo || (
            <Link 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-200 hover:from-blue-300 hover:to-blue-500"
              prefetch={true}
            >
              BlueBridge
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                pathname === link.href 
                  ? "text-blue-400 bg-blue-900/10" 
                  : "text-zinc-400 hover:text-white hover:bg-blue-900/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <MetallicButton variant="metallic" size="sm" shimmer={true}>
            <Link href={ctaButton.href} prefetch={true}>
              {ctaButton.label}
            </Link>
          </MetallicButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-blue-900/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={cn(
                    "py-2 px-4 rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-blue-900/20 text-white font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-blue-900/10"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <MetallicButton variant="metallic" className="w-full">
                  <Link href={ctaButton.href} prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>
                    {ctaButton.label}
                  </Link>
                </MetallicButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 