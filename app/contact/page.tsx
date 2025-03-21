"use client"

import React, { useState } from "react"
import { NavBar } from "../../components/ui/tubelight-navbar"
import { SparklesBackground } from "../../components/ui/sparkles-background"
import { Footer } from "../../components/ui/footer"
import { Building2, Briefcase, Users, Phone, Mail, MapPin, Globe, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  // Navigation items
  const navItems = [
    { name: 'Home', url: '/', icon: Globe },
    { name: 'Employers', url: '/employers', icon: Briefcase },
    { name: 'Candidates', url: '/candidates', icon: Users },
    { name: 'About Us', url: '/about', icon: Building2 },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-black">
      {/* Sparkles background */}
      <SparklesBackground 
        background="black"
        particleColor="#FFFFFF"
        particleDensity={150}
        minSize={0.5}
        maxSize={1.2}
        speed={0.8}
        className="fixed inset-0 z-0 h-full w-full"
      />
      
      {/* Navigation Bar - with titanium aesthetic */}
      <header className="w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 flex justify-center items-center z-50 py-5 px-6">
        <div className="container max-w-7xl flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold tracking-tight">
              <Link href="/">
                <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">blue</span><span className="text-white">bridge</span>
              </Link>
            </h1>
          </div>
          <NavBar items={navItems} position="top" className="z-50 w-auto" />
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 text-xs font-medium text-white border border-zinc-700 rounded-md bg-zinc-800/50 hover:bg-zinc-800 transition">EN</button>
            <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">ES</button>
            <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">DE</button>
            <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition">PT</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center mt-24 sm:mt-32 mb-16 sm:mb-24 text-center">
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter max-w-4xl">
          <span className="text-white">Get in </span>
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="my-8 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed">
          Have a question or interested in our services? Reach out to us and our team will get back to you shortly.
        </p>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">info@bluebridgellc.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Office</p>
                    <p className="text-white font-medium">Berlin, Germany</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">+49 30 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Business Hours</p>
                    <p className="text-white font-medium">Mon-Fri: 9AM - 6PM (CET)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 backdrop-blur-lg hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Germany (HQ)</h3>
                  <p className="text-zinc-400 text-sm">Berlin</p>
                </div>
                
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 backdrop-blur-lg hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Colombia</h3>
                  <p className="text-zinc-400 text-sm">Bogotá</p>
                </div>
                
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 backdrop-blur-lg hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Brazil</h3>
                  <p className="text-zinc-400 text-sm">São Paulo</p>
                </div>
                
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 backdrop-blur-lg hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Coming Soon</h3>
                  <p className="text-zinc-400 text-sm">Madrid, Spain</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="+1 234 567 8900"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="Employment opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-white placeholder-zinc-500 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-16 sm:py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">How long does the recruitment process take?</h3>
            <p className="text-zinc-400">Our standard recruitment process typically takes 4-6 weeks from initial contact to placement, depending on the position and specific requirements.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Do you handle work visas and permits?</h3>
            <p className="text-zinc-400">Yes, we provide comprehensive visa and work permit assistance for both employers and candidates as part of our migration services.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">What industries do you specialize in?</h3>
            <p className="text-zinc-400">We specialize in technology, engineering, healthcare, and finance, but our services extend to various industries requiring skilled professionals.</p>
          </div>
          
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-lg hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">How do you ensure candidate quality?</h3>
            <p className="text-zinc-400">We implement a rigorous screening process including skills assessment, background verification, and multiple interview rounds to ensure high-quality matches.</p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto py-8 mb-16">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 h-[400px] flex items-center justify-center overflow-hidden backdrop-blur-lg">
          <div className="text-zinc-500 text-lg">Interactive Map Coming Soon</div>
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