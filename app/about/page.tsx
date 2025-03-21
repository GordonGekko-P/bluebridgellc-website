"use client"

import React from "react"
import { StarBorderButton } from "../../components/ui/star-border-button"
import { NavBar } from "../../components/ui/tubelight-navbar"
import { SparklesBackground } from "../../components/ui/sparkles-background"
import { Footer } from "../../components/ui/footer"
import { Building2, Briefcase, Users, Phone, ChevronRight, Globe, Target, Star, Award, Heart, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { 
  BainIcon, 
  EnpalIcon, 
  JPMorganIcon, 
  GlobantIcon, 
  GoogleIcon, 
  LinkedInIcon, 
  IBMIcon, 
  SalesforceIcon 
} from "../../components/icons"

export default function AboutPage() {
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
        particleDensity={200}
        minSize={0.3}
        maxSize={1.8}
        speed={0.6}
        className="fixed inset-0 z-0 h-full w-full"
      />
      
      {/* Navigation Bar - with titanium aesthetic */}
      <header className="w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 flex justify-center items-center z-50 py-5 px-6 sticky top-0 shadow-lg shadow-black/30">
        <div className="container max-w-7xl flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold tracking-tight">
              <Link href="/" className="transition-transform hover:scale-105 duration-300">
                <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">blue</span><span className="text-white">bridge</span>
              </Link>
            </h1>
          </div>
          <NavBar items={navItems} position="top" className="z-50 w-auto" />
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 text-xs font-medium text-white border border-zinc-700 rounded-md bg-zinc-800/50 hover:bg-zinc-800 transition shadow-md shadow-black/20">EN</button>
            <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">ES</button>
            <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">DE</button>
            <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">PT</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center mt-24 sm:mt-32 mb-16 sm:mb-24 text-center">
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter max-w-4xl">
          <span className="text-white">About </span>
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 bg-clip-text text-transparent drop-shadow-md">Blue Bridge</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full mb-6"></div>
        <p className="my-8 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          We're a team of passionate experts dedicated to connecting global talent with exceptional opportunities.
        </p>
        
        {/* New: Adding pulsing circles animation for visual interest */}
        <div className="absolute opacity-70 -z-10">
          <div className="absolute rounded-full w-72 h-72 bg-zinc-700/5 animate-ping-slow"></div>
          <div className="absolute rounded-full w-96 h-96 bg-zinc-700/5 animate-ping-slower"></div>
          <div className="absolute rounded-full w-120 h-120 bg-zinc-700/5 animate-ping-slowest"></div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-[400px] flex items-center justify-center overflow-hidden backdrop-blur-lg relative group hover:border-zinc-700 transition-all duration-500 shadow-xl shadow-black/30">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-zinc-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="text-zinc-500 text-lg">Blue Bridge Team Photo</div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-zinc-400 text-sm font-semibold tracking-widest uppercase mb-2">OUR TEAM</span>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
              Passionate Experts in Global Recruitment
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Our dedicated team combines years of experience in international recruitment with innovative technology to bridge global talent gaps and create lasting connections.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-zinc-300" />
                </div>
                <span className="text-zinc-300">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Users className="w-5 h-5 text-zinc-300" />
                </div>
                <span className="text-zinc-300">Global Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Heart className="w-5 h-5 text-zinc-300" />
                </div>
                <span className="text-zinc-300">Personalized Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Zap className="w-5 h-5 text-zinc-300" />
                </div>
                <span className="text-zinc-300">Innovative Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-16">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-2 tracking-tight uppercase">
          Built by experts from
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full mb-10 mx-auto"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <BainIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bain & Company</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <EnpalIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Enpal</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <JPMorganIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">JPMorgan</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <GlobantIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Globant</div>
          </div>
        </div>
        
        {/* Additional Partners Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <GoogleIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Google</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <SalesforceIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Salesforce</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <IBMIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">IBM</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-24 flex items-center justify-center backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="w-32 h-16 flex items-center justify-center">
              <LinkedInIcon />
            </div>
            <div className="absolute text-zinc-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-12">
        <div className="max-w-4xl mx-auto text-center relative p-10 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-lg shadow-xl shadow-black/30 hover:border-zinc-700 transition-all duration-500">
          <div className="text-zinc-500 text-6xl opacity-20 absolute top-2 left-6 transform rotate-6">"</div>
          <div className="text-zinc-500 text-6xl opacity-20 absolute bottom-2 right-6 transform rotate-180 -translate-y-2">"</div>
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed italic px-8">
            "We are extremely happy with the BlueBridge system. Our new colleagues have integrated rapidly and are outperforming our expectations."
          </blockquote>
          <div className="mt-4">
            <p className="text-zinc-300 font-semibold mb-1">Cofounder & C-level executive</p>
            <p className="text-zinc-400">from a solar energy unicorn in Germany</p>
          </div>
          
          {/* Rating Stars */}
          <div className="flex justify-center mt-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-10 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 shadow-lg shadow-black/20">
          <div className="bg-zinc-800 p-4 rounded-xl inline-block mb-5 shadow-lg shadow-black/30">
            <Target className="w-8 h-8 text-zinc-300" />
          </div>
          <span className="text-zinc-400 text-sm font-semibold tracking-widest uppercase mb-4 block">OUR MISSION</span>
          <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
            Bridge Global Talent Gaps
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To provide exceptional migration services with integrity and professionalism, ensuring a smooth and successful transition for our clients.
          </p>
          
          {/* Adding a subtle decorative element */}
          <div className="w-full h-1 mt-8 rounded-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        </div>
        
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-10 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 shadow-lg shadow-black/20">
          <div className="bg-zinc-800 p-4 rounded-xl inline-block mb-5 shadow-lg shadow-black/30">
            <Star className="w-8 h-8 text-zinc-300" />
          </div>
          <span className="text-zinc-400 text-sm font-semibold tracking-widest uppercase mb-4 block">OUR VISION</span>
          <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
            Global Leadership in Migration Services
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            To be the leading migration consulting firm, recognized for our expertise, reliability, and commitment to client success.
          </p>
          
          {/* Adding a subtle decorative element */}
          <div className="w-full h-1 mt-8 rounded-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Our Values</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full mb-12 mx-auto"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 text-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="bg-zinc-800 p-4 rounded-full inline-block mb-5 w-16 h-16 flex items-center justify-center shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors duration-300">
              <Award className="w-7 h-7 text-zinc-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
            <p className="text-zinc-400 text-base leading-relaxed">We strive for excellence in every service we provide, ensuring the highest quality experience for our clients.</p>
            
            {/* Adding a hover indicator */}
            <div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mt-6 group-hover:bg-gradient-to-r group-hover:from-zinc-600 group-hover:to-zinc-400 transition-all duration-300"></div>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 text-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="bg-zinc-800 p-4 rounded-full inline-block mb-5 w-16 h-16 flex items-center justify-center shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors duration-300">
              <Users className="w-7 h-7 text-zinc-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
            <p className="text-zinc-400 text-base leading-relaxed">We work closely with our clients and partners to create seamless migration experiences.</p>
            
            {/* Adding a hover indicator */}
            <div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mt-6 group-hover:bg-gradient-to-r group-hover:from-zinc-600 group-hover:to-zinc-400 transition-all duration-300"></div>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 text-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 group">
            <div className="bg-zinc-800 p-4 rounded-full inline-block mb-5 w-16 h-16 flex items-center justify-center shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors duration-300">
              <Globe className="w-7 h-7 text-zinc-300" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Global Mindset</h3>
            <p className="text-zinc-400 text-base leading-relaxed">We embrace diversity and think globally, connecting talent across borders with cultural sensitivity.</p>
            
            {/* Adding a hover indicator */}
            <div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mt-6 group-hover:bg-gradient-to-r group-hover:from-zinc-600 group-hover:to-zinc-400 transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center py-20 sm:py-28">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-zinc-800/30 to-zinc-900/30 backdrop-blur-lg -z-10 mx-4 sm:mx-6 shadow-xl shadow-black/30"></div>
        <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to Work With Us?</h2>
        <p className="mb-10 text-center text-zinc-300 max-w-2xl text-lg leading-relaxed">
          Contact our team today to discover how Blue Bridge can help you achieve your international career or recruitment goals.
        </p>
        <Link href="/contact">
          <StarBorderButton 
            className="px-10 py-5 text-lg font-medium glow-effect shadow-xl shadow-black/40"
            shimmerColor="#a1a1aa"
            shimmerBlur={90}
            shimmerThickness={0.6}
            background="rgba(39, 39, 42, 0.8)"
          >
            Contact Us <ChevronRight className="ml-2 w-5 h-5" />
          </StarBorderButton>
        </Link>
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