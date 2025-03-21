"use client"

import React from "react"
import { BarChart3, ChevronRight } from "lucide-react"
import { SectionHeading } from "../ui/section-heading"

interface FeatureListItemProps {
  text: string;
}

function FeatureListItem({ text }: FeatureListItemProps) {
  return (
    <li className="flex items-start space-x-3">
      <span className="mt-1 text-zinc-400">
        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white shadow-sm shadow-black/20">•</div>
      </span>
      <span className="text-zinc-300 text-base">{text}</span>
    </li>
  )
}

export function CompetitiveEdgeSection() {
  return (
    <section id="competitive-edge" className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center py-16 sm:py-24">
      <SectionHeading 
        title="Our Competitive Edge" 
        description="A comprehensive platform designed for modern workforce management" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="flex flex-col space-y-8">
          <h3 className="text-2xl font-semibold text-white flex items-center">
            <BarChart3 className="mr-3 w-6 h-6 text-zinc-400" />
            Comprehensive Workforce Overview
          </h3>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Get a bird's eye view of your entire workforce. Track essential metrics including employee satisfaction, NPS scores, and performance indicators all in one place.
          </p>
          <ul className="space-y-4">
            <FeatureListItem text="Real-time employee satisfaction metrics" />
            <FeatureListItem text="Monthly retention overview" />
            <FeatureListItem text="Net Promoter Score tracking" />
            <FeatureListItem text="Workforce Overview Dashboard" />
            <FeatureListItem text="Worker Details Interface" />
          </ul>
        </div>
        <div className="relative">
          <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/30 backdrop-blur-lg">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zinc-700/10 to-transparent z-0 pointer-events-none"></div>
            <div className="w-full h-72 md:h-96 flex items-center justify-center bg-zinc-900">
              <div className="text-zinc-500 text-lg">Workforce Overview Dashboard</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex space-x-3 mt-12">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
      </div>

      {/* Navigation arrows */}
      <div className="flex space-x-5 mt-8">
        <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
          <ChevronRight className="w-5 h-5 text-white transform rotate-180" />
        </button>
        <button className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-zinc-600 transition-colors">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  )
} 