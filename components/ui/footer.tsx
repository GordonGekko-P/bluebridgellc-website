"use client"

import React from "react"
import Link from "next/link"
import { Mail, Twitter, Github, Linkedin, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
  name?: string
  socials?: {
    twitter?: string
    github?: string
    linkedin?: string
    email?: string
  }
  links?: Array<{
    title: string
    href: string
    external?: boolean
  }>
}

export function Footer({
  className,
  name = "Global Network",
  socials = {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
  },
  links = [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ],
}: FooterProps) {
  return (
    <footer className={cn("w-full bg-black/30 border-t border-zinc-800 backdrop-blur-lg py-8 px-4", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Branding */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Connected across continents with titanium-grade infrastructure.
            </p>
            
            {/* Social links */}
            <div className="mt-4 flex space-x-4">
              {socials.twitter && (
                <Link 
                  href={socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
              
              {socials.github && (
                <Link 
                  href={socials.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
              
              {socials.linkedin && (
                <Link 
                  href={socials.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}
              
              {socials.email && (
                <Link 
                  href={socials.email}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </Link>
              )}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col sm:items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center"
                  >
                    {link.title}
                    {link.external && <ExternalLink className="ml-1" size={14} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-zinc-400">
              <p>1234 Technology Ave</p>
              <p>Suite 500</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2">
                <Link href="tel:+11234567890" className="hover:text-white transition-colors">
                  +1 (123) 456-7890
                </Link>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-0">
            <p className="text-xs text-zinc-600">Designed with precision and elegance</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 