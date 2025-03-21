"use client"

import React from "react"
import Link from "next/link"
import { BarChart3, Users, Briefcase, Search, ChevronRight } from "lucide-react"
import { SectionHeading } from "../ui/section-heading"

interface AccordionItemProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

function AccordionItem({ title, content, icon }: AccordionItemProps) {
  return (
    <div className="border-b border-zinc-800 py-8 hover:border-zinc-700 transition-colors group px-4 hover:bg-zinc-900/30 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
        <span className="mr-4 text-zinc-400 group-hover:text-zinc-300 transition-colors">{icon}</span>
        {title}
      </h3>
      <p className="text-zinc-400 ml-10 text-base leading-relaxed">{content}</p>
    </div>
  )
}

export function EmployersSection() {
  return (
    <section id="employers" className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center py-16 sm:py-24">
      <SectionHeading title="For Employers" />
      
      <div className="w-full max-w-5xl mt-10">
        <AccordionItem 
          title="Comprehensive Workforce Overview" 
          content="Get a bird's eye view of your entire workforce. Track essential metrics including employee satisfaction, NPS scores, and performance indicators all in one place."
          icon={<BarChart3 className="w-6 h-6 text-zinc-300" />}
        />
        <AccordionItem 
          title="Detailed Worker Profiles" 
          content="Access comprehensive worker profiles with all the information you need in one place. Monitor individual performance, track evaluations, and stay on top of important documents."
          icon={<Users className="w-6 h-6 text-zinc-300" />}
        />
        <AccordionItem 
          title="Recruitment Pipeline Management" 
          content="Keep track of all candidates in your selection process. Monitor their progress and manage communications all in one streamlined interface."
          icon={<Briefcase className="w-6 h-6 text-zinc-300" />}
        />
        <AccordionItem 
          title="AI-Powered Candidate Matching" 
          content="Access our extensive database of pre-vetted candidates. Our AI matching system helps you find the perfect fit for your requirements."
          icon={<Search className="w-6 h-6 text-zinc-300" />}
        />
      </div>
      
      <Link href="/employers" className="mt-10 text-zinc-400 hover:text-white flex items-center font-medium group">
        Watch how Blue Bridge works for employers
        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Video Player Placeholder */}
      <div className="mt-12 w-full aspect-video max-w-4xl bg-zinc-900/70 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden group hover:border-zinc-700 transition-colors">
        <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition-all group-hover:scale-110 transform">
          <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-1.5"></div>
        </div>
      </div>
    </section>
  )
} 