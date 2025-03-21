"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Language selector component
const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState('EN');
  const languages = ['EN', 'ES', 'DE', 'PT'];

  return (
    <div className="hidden lg:block" style={{ width: "150px" }}>
      <div className="flex items-center gap-2 px-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex gap-1">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLang(lang)}
              className={`px-2 py-1 text-sm font-medium rounded-md transition-colors duration-200 h-8 min-w-[32px] flex items-center justify-center ${
                currentLang === lang
                  ? 'bg-white text-primary'
                  : 'hover:bg-white/10 text-white'
              }`}
              aria-label={`Switch to ${lang}`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile menu
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
      <div className="bg-primary h-full w-4/5 max-w-sm p-6 shadow-lg flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" onClick={onClose}>
            <Image
              src="https://ext.same-assets.com/1325032747/3736915175.png"
              alt="BlueBridge Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button onClick={onClose} className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-white text-lg block py-2" onClick={onClose}>Home</Link>
            </li>
            <li>
              <Link href="/employers" className="text-white text-lg block py-2" onClick={onClose}>Employers</Link>
            </li>
            <li>
              <Link href="/candidates" className="text-white text-lg block py-2" onClick={onClose}>Candidates</Link>
            </li>
            <li>
              <Link href="/about" className="text-white text-lg block py-2" onClick={onClose}>About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white text-lg block py-2" onClick={onClose}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto pt-6 border-t border-white/20">
          <div className="flex gap-2">
            {['EN', 'ES', 'DE', 'PT'].map((lang) => (
              <button
                key={lang}
                className="px-2 py-1 text-white hover:bg-white/10 rounded"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full z-50 transition-all duration-300 bg-primary py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center mr-4 overflow-hidden h-16 -ml-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://ext.same-assets.com/1325032747/3736915175.png"
                  alt="BlueBridge Logo"
                  width={192}
                  height={48}
                  className="h-48 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2" style={{ width: "500px" }}>
              <nav className="flex items-center justify-center w-full">
                <ul className="flex items-center justify-center space-x-4 w-full">
                  <li className="flex-none">
                    <Link
                      href="/"
                      className="text-sm font-medium transition-colors duration-200 h-9 px-3 flex items-center justify-center min-w-[80px] text-white/90 hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex-none">
                    <Link
                      href="/employers"
                      className="text-sm font-medium transition-colors duration-200 h-9 px-3 flex items-center justify-center min-w-[80px] text-white/90 hover:text-white"
                    >
                      Employers
                    </Link>
                  </li>
                  <li className="flex-none">
                    <Link
                      href="/candidates"
                      className="text-sm font-medium transition-colors duration-200 h-9 px-3 flex items-center justify-center min-w-[80px] text-white/90 hover:text-white"
                    >
                      Candidates
                    </Link>
                  </li>
                  <li className="flex-none">
                    <Link
                      href="/about"
                      className="text-sm font-medium transition-colors duration-200 h-9 px-3 flex items-center justify-center min-w-[80px] text-white/90 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="flex-none">
                    <Link
                      href="/contact"
                      className="text-sm font-medium transition-colors duration-200 h-9 px-3 flex items-center justify-center min-w-[80px] text-white/90 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
