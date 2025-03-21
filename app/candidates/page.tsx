"use client"

import React from "react"
import { StarBorderButton } from "../../components/ui/star-border-button"
import { NavBar } from "../../components/ui/tubelight-navbar"
import { SparklesBackground } from "../../components/ui/sparkles-background"
import { Footer } from "../../components/ui/footer"
import { Building2, Briefcase, Users, Phone, ChevronRight, Globe, GraduationCap, Plane, Award, Star } from "lucide-react"
import Link from "next/link"

export default function CandidatesPage() {
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
      {/* Sparkles background - enhanced with more particles */}
      <SparklesBackground 
        background="black"
        particleColor="#FFFFFF"
        particleDensity={180}
        minSize={0.4}
        maxSize={1.5}
        speed={0.7}
        className="fixed inset-0 z-0 h-full w-full"
      />
      
      {/* Navigation Bar - enhanced with better styling */}
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

      {/* Hero Section - enhanced with better typography and shadows */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto flex flex-col items-center justify-center mt-24 sm:mt-32 mb-16 sm:mb-24 text-center">
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter max-w-4xl text-balance">
          <span className="text-white">Begin Your Journey to </span>
          <span className="block mt-2 bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 bg-clip-text text-transparent drop-shadow-sm">International Opportunities</span>
        </h1>
        <p className="my-8 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          Unlock your potential with BlueBridge's personalized migration and career services designed for skilled professionals seeking international opportunities.
        </p>
        <Link href="/contact">
          <StarBorderButton 
            className="px-8 py-4 text-base font-medium glow-effect shadow-xl shadow-zinc-900/50"
            shimmerColor="#a1a1aa"
            shimmerThickness={0.5}
            shimmerBlur={70}
            background="rgba(24, 24, 27, 0.8)"
          >
            Start Your Journey <ChevronRight className="ml-2 w-5 h-5" />
          </StarBorderButton>
        </Link>
      </section>

      {/* Services Section - enhanced with better cards and shadows */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-10 backdrop-blur-lg shadow-xl shadow-black/30">
          <h2 className="text-3xl font-bold text-white mb-8">Services for Candidates</h2>
          <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
            At Blue Bridge, we offer comprehensive support to help you achieve your international career goals:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6 inline-block shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                <Globe className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Opportunities</h3>
              <p className="text-zinc-400">Access to high-quality job opportunities across Europe and North America, matched to your skills and career goals.</p>
            </div>
            
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6 inline-block shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                <GraduationCap className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Skills Development</h3>
              <p className="text-zinc-400">Personalized training programs and resources to enhance your professional skills and increase your employability.</p>
            </div>
            
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6 inline-block shadow-md shadow-black/30 group-hover:bg-zinc-700 transition-colors">
                <Plane className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Migration Support</h3>
              <p className="text-zinc-400">Expert guidance through the visa process, relocation assistance, and cultural integration support for a smooth transition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - enhanced with better styling and animations */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          <span className="relative">
            How It Works
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px] relative group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors">1</div>
            <h3 className="text-xl font-semibold text-white mb-4 mt-4">Profile Submission</h3>
            <p className="text-zinc-400">Create your profile with your professional experience, skills, and career preferences.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px] relative group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors">2</div>
            <h3 className="text-xl font-semibold text-white mb-4 mt-4">Skills Assessment</h3>
            <p className="text-zinc-400">Our team evaluates your profile and conducts assessments to identify your strengths and areas for improvement.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px] relative group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors">3</div>
            <h3 className="text-xl font-semibold text-white mb-4 mt-4">Employer Matching</h3>
            <p className="text-zinc-400">We match you with employers looking for your specific skills and experience in your desired locations.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px] relative group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold shadow-lg shadow-black/30 group-hover:bg-zinc-700 transition-colors">4</div>
            <h3 className="text-xl font-semibold text-white mb-4 mt-4">Migration Assistance</h3>
            <p className="text-zinc-400">Once you secure a position, we help you navigate the visa process and support your relocation needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section - enhanced with better cards and quotes styling */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          <span className="relative">
            Success Stories
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-lg relative shadow-xl shadow-black/30 hover:border-zinc-700 transition-all duration-300 group">
            <div className="absolute top-4 left-4 text-zinc-500 text-5xl opacity-20">"</div>
            <div className="absolute bottom-4 right-4 text-zinc-500 text-5xl opacity-20 transform rotate-180">"</div>
            <blockquote className="text-zinc-300 mb-6 pt-6 pl-2 italic">
              BlueBridge transformed my career journey. Within three months, I secured a position with a leading tech company in Berlin. The visa process was smooth, and their relocation support made the transition seamless.
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center shadow-md shadow-black/30">
                <Users className="w-6 h-6 text-zinc-300" />
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">Maria S.</p>
                <div className="flex items-center text-zinc-400 text-sm">
                  <span>Software Engineer from Colombia</span>
                  <div className="flex ml-2">
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-lg relative shadow-xl shadow-black/30 hover:border-zinc-700 transition-all duration-300 group">
            <div className="absolute top-4 left-4 text-zinc-500 text-5xl opacity-20">"</div>
            <div className="absolute bottom-4 right-4 text-zinc-500 text-5xl opacity-20 transform rotate-180">"</div>
            <blockquote className="text-zinc-300 mb-6 pt-6 pl-2 italic">
              The skills training provided by BlueBridge significantly enhanced my profile. I'm now working in Hamburg with a competitive salary and benefits package. Their ongoing support even after placement has been invaluable.
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center shadow-md shadow-black/30">
                <Users className="w-6 h-6 text-zinc-300" />
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">Carlos R.</p>
                <div className="flex items-center text-zinc-400 text-sm">
                  <span>Data Scientist from Brazil</span>
                  <div className="flex ml-2">
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                    <Star className="w-3 h-3 text-zinc-500 fill-zinc-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - enhanced with better accordion styling */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto py-16">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          <span className="relative">
            Frequently Asked Questions
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="space-y-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:bg-zinc-900/40">
            <h3 className="text-xl font-semibold text-white mb-3">What qualifications do I need to apply?</h3>
            <p className="text-zinc-400 leading-relaxed">We typically work with professionals who have a bachelor's degree or higher and at least 2 years of relevant work experience, though requirements vary by industry and position.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:bg-zinc-900/40">
            <h3 className="text-xl font-semibold text-white mb-3">How long does the process take?</h3>
            <p className="text-zinc-400 leading-relaxed">From profile submission to job placement typically takes 2-4 months, with the visa process requiring an additional 1-3 months depending on the destination country.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 hover:bg-zinc-900/40">
            <h3 className="text-xl font-semibold text-white mb-3">Are there any fees for candidates?</h3>
            <p className="text-zinc-400 leading-relaxed">Our basic services are free for candidates. Employers pay our placement fees. We do offer premium services for candidates at competitive rates if additional support is needed.</p>
          </div>
        </div>
      </section>

      {/* CTA Section - enhanced with gradient background and better button */}
      <section className="relative z-10 w-full max-w-7xl px-6 sm:px-8 mx-auto flex flex-col items-center justify-center py-16 sm:py-24 mb-16">
        <div className="w-full rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 p-12 backdrop-blur-lg shadow-xl shadow-black/30 text-center">
          <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to Take the Next Step?</h2>
          <p className="mb-10 text-center text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Contact us today to begin your journey toward international career opportunities with our expert guidance and support.
          </p>
          <Link href="/contact">
            <StarBorderButton 
              className="px-10 py-5 text-lg font-medium glow-effect shadow-xl shadow-zinc-900/50"
              shimmerColor="#a1a1aa"
              shimmerThickness={0.5}
              shimmerBlur={70}
              background="rgba(39, 39, 42, 0.7)"
            >
              Contact Us <ChevronRight className="ml-2 w-5 h-5" />
            </StarBorderButton>
          </Link>
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