"use client"

import React, { useEffect, useState } from "react"
import { SparklesBackground } from "./ui/sparkles-background"
import { Footer } from "./ui/footer"
import { HeaderSection } from "./home/HeaderSection"
import HeroSection from "./home/HeroSection"
import { StatsSection } from "./home/StatsSection"
import { ServicesSection } from "./home/ServicesSection"
import { WhyChooseSection } from "./home/WhyChooseSection"
import { EmployersSection } from "./home/EmployersSection"
import { CompetitiveEdgeSection } from "./home/CompetitiveEdgeSection"
import { CTASection } from "./home/CTASection"

// Define highlighted countries
const HIGHLIGHTED_COUNTRIES = ['DE', 'CO', 'BR']; // Germany, Colombia, Brazil

export function BlueBridgeHome() {
  const [highlightedCountry, setHighlightedCountry] = useState<string | null>(null);
  
  // Rotate through highlighted countries
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedCountry(prev => {
        const currentIndex = HIGHLIGHTED_COUNTRIES.indexOf(prev || '');
        return HIGHLIGHTED_COUNTRIES[(currentIndex + 1) % HIGHLIGHTED_COUNTRIES.length];
      });
    }, 3000);
    
    // Set initial country
    setHighlightedCountry(HIGHLIGHTED_COUNTRIES[0]);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-black">
      {/* Sparkles background */}
      <SparklesBackground 
        background="black"
        particleColor="#FFFFFF"
        particleDensity={180}
        minSize={0.4}
        maxSize={1.5}
        speed={0.7}
        className="fixed inset-0 z-0 h-full w-full"
      />
      
      {/* Header/Navigation */}
      <HeaderSection />
      
      {/* Hero Section */}
      <HeroSection highlightedCountry={highlightedCountry} highlightedCountries={HIGHLIGHTED_COUNTRIES} />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Employers Section */}
      <EmployersSection />
      
      {/* Competitive Edge Section */}
      <CompetitiveEdgeSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer 
        name="BlueBridge" 
        links={[
          { title: 'Home', href: '/' },
          { title: 'Employers', href: '/employers' },
          { title: 'Candidates', href: '/candidates' },
          { title: 'About Us', href: '/about' },
          { title: 'Contact', href: '/contact' },
          { title: 'Privacy Policy', href: '#' },
          { title: 'Terms of Service', href: '#' }
        ]}
        socials={{
          twitter: "https://twitter.com",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          email: "mailto:info@bluebridgellc.org",
        }}
      />
    </div>
  )
}

// Custom border styles for triangle
const borderStyles = {
  borderTopWidth: '10px',
  borderBottomWidth: '10px',
  borderLeftWidth: '16px',
} 