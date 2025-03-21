"use client"

import React from "react"
import Link from "next/link"
import { NavBar } from "../ui/tubelight-navbar"
import { Building2, Briefcase, Users, Phone, Globe } from "lucide-react"

export function HeaderSection() {
  // Navigation items
  const navItems = [
    { name: 'Home', url: '/', icon: Globe },
    { name: 'Employers', url: '/employers', icon: Briefcase },
    { name: 'Candidates', url: '/candidates', icon: Users },
    { name: 'About Us', url: '/about', icon: Building2 },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]

  return (
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
  )
} 