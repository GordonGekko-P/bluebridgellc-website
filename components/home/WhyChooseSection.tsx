"use client"

import React from "react"
import Link from "next/link"
import { BarChart3, GraduationCap, Globe } from "lucide-react"
import { StarBorderButton } from "../ui/star-border-button"
import { SectionHeading } from "../ui/section-heading"
import { FeatureCard } from "../ui/feature-card"

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center py-16 sm:py-24 bg-zinc-900/30 backdrop-blur-lg rounded-xl border border-zinc-800">
      <SectionHeading 
        title="Why Choose Blue Bridge" 
        description="We bridge the gap between exceptional talent and outstanding opportunities" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        <FeatureCard 
          title="All-in-One Platform" 
          description="Streamline your hiring process with our unified talent management dashboard"
          icon={<BarChart3 className="w-7 h-7 text-zinc-300" />}
        />
        <FeatureCard 
          title="Skills Development" 
          description="Enhance your team's capabilities with our training and development programs"
          icon={<GraduationCap className="w-7 h-7 text-zinc-300" />}
        />
        <FeatureCard 
          title="Global Network" 
          description="Connect with verified international professionals ready to join your team"
          icon={<Globe className="w-7 h-7 text-zinc-300" />}
        />
      </div>
      
      <div className="mt-16 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/employers">
          <StarBorderButton 
            className="px-8 py-4 text-base font-medium glow-effect"
            shimmerColor="#a1a1aa"
            background="rgba(39, 39, 42, 0.7)"
          >
            For Employers
          </StarBorderButton>
        </Link>
        <Link href="/candidates">
          <StarBorderButton 
            className="px-8 py-4 text-base font-medium glow-effect"
            shimmerColor="#a1a1aa"
            background="rgba(24, 24, 27, 0.8)"
          >
            For Candidates
          </StarBorderButton>
        </Link>
      </div>
    </section>
  )
} 