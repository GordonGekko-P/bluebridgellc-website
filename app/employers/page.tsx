"use client"

import React from "react"
import { StarBorderButton } from "../../components/ui/star-border-button"
import { NavBar } from "../../components/ui/tubelight-navbar"
import { SparklesBackground } from "../../components/ui/sparkles-background"
import { Footer } from "../../components/ui/footer"
import { Building2, Briefcase, Users, Phone, ChevronRight, Globe, BarChart3, CheckCircle, Shield, Database } from "lucide-react"
import Link from "next/link"

export default function EmployersPage() {
  // Navigation items
  const navItems = [
    { name: 'Home', url: '/', icon: Globe },
    { name: 'Employers', url: '/employers', icon: Briefcase },
    { name: 'Candidates', url: '/candidates', icon: Users },
    { name: 'About Us', url: '/about', icon: Building2 },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]

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
      
      {/* Navigation Bar - enhanced with subtle shadow effect */}
      <header className="w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-zinc-900/50 flex justify-center items-center z-50 py-5 px-6 sticky top-0">
        <div className="container max-w-7xl flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold tracking-tight">
              <Link href="/" className="transition-transform hover:scale-105">
                <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">blue</span><span className="text-white">bridge</span>
              </Link>
            </h1>
          </div>
          <NavBar items={navItems} position="top" className="z-50 w-auto" />
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-xs font-medium text-white border border-zinc-700 rounded-md bg-zinc-800/70 hover:bg-zinc-800 transition shadow-sm shadow-zinc-800/50">EN</button>
            <button className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">ES</button>
            <button className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">DE</button>
            <button className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">PT</button>
          </div>
        </div>
      </header>

      {/* Hero Section - enhanced with better typography and spacing */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto flex flex-col items-center justify-center mt-24 sm:mt-32 mb-16 sm:mb-24 text-center">
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter max-w-4xl text-balance">
          <span className="text-white">Workforce Management</span>
          <span className="block mt-2 bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 bg-clip-text text-transparent drop-shadow-sm">Solutions for Employers</span>
        </h1>
        <p className="my-8 max-w-3xl text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          BlueBridge helps you access international talent efficiently while ensuring compliance with migration regulations. Our platform streamlines workforce management and provides valuable insights.
        </p>
        <Link href="/contact">
          <StarBorderButton 
            className="px-8 py-4 text-base font-medium glow-effect shadow-xl shadow-zinc-900/50"
            shimmerColor="#a1a1aa"
            shimmerThickness={0.5}
            shimmerBlur={70}
            background="rgba(24, 24, 27, 0.8)"
          >
            Get Started <ChevronRight className="ml-2 w-5 h-5" />
          </StarBorderButton>
        </Link>
      </section>

      {/* Solutions Section - enhanced with better card styling and hover effects */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-10 backdrop-blur-lg shadow-xl shadow-black/30">
          <h2 className="text-3xl font-bold text-white mb-8">Employer Solutions</h2>
          <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
            Our comprehensive suite of tools helps you manage your global workforce effectively:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6 inline-block shadow-md shadow-black/30">
                <BarChart3 className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Workforce Dashboard</h3>
              <p className="text-zinc-400">Comprehensive analytics and reporting tools to monitor your international workforce and optimize performance.</p>
            </div>
            
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6 inline-block shadow-md shadow-black/30">
                <Database className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Talent Pool</h3>
              <p className="text-zinc-400">Access to a curated database of pre-vetted international professionals ready to fill your skill gaps.</p>
            </div>
            
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6 inline-block shadow-md shadow-black/30">
                <Shield className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Management</h3>
              <p className="text-zinc-400">End-to-end assistance with migration regulations, work permits, and legal requirements across multiple jurisdictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - enhanced with better styling and interactive elements */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Platform Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 h-full group-hover:bg-zinc-900/60">
              <div className="flex items-center mb-6">
                <div className="bg-zinc-800 p-3 rounded-lg mr-4 shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                  <CheckCircle className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Streamlined Recruitment</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Simplify the hiring process with our AI-powered candidate matching, automated screening, and integrated interview scheduling.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 h-full group-hover:bg-zinc-900/60">
              <div className="flex items-center mb-6">
                <div className="bg-zinc-800 p-3 rounded-lg mr-4 shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                  <CheckCircle className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Visa Processing Support</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                End-to-end assistance with work permits and visas, including document preparation, submission, and tracking.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 h-full group-hover:bg-zinc-900/60">
              <div className="flex items-center mb-6">
                <div className="bg-zinc-800 p-3 rounded-lg mr-4 shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                  <CheckCircle className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Onboarding & Integration</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Comprehensive onboarding tools and resources to help new hires integrate smoothly into your organization and local culture.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 h-full group-hover:bg-zinc-900/60">
              <div className="flex items-center mb-6">
                <div className="bg-zinc-800 p-3 rounded-lg mr-4 shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                  <CheckCircle className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Ongoing Support</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Continuous assistance with workforce management, compliance updates, and employee retention strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - enhanced with better visual hierarchy */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16 mb-16">
        <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 p-10 backdrop-blur-lg shadow-xl shadow-black/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Workforce?</h2>
          <p className="text-zinc-300 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Contact us today to learn how BlueBridge can help you access global talent and streamline your international workforce management.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <StarBorderButton 
                className="px-8 py-4 text-base font-medium glow-effect shadow-lg shadow-zinc-900/50"
                shimmerColor="#a1a1aa"
                shimmerThickness={0.5}
                shimmerBlur={70}
                background="rgba(39, 39, 42, 0.7)"
              >
                Schedule a Demo <ChevronRight className="ml-2 w-5 h-5" />
              </StarBorderButton>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 text-base font-medium text-zinc-300 border border-zinc-700 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/80 transition-colors shadow-lg shadow-zinc-900/30 flex items-center">
                Download Brochure <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

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