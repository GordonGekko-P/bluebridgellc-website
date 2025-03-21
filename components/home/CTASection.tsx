"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { StarBorderButton } from "../ui/star-border-button"

export function CTASection() {
  return (
    <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center py-20 sm:py-32">
      <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to Bridge Your Talent Gap?</h2>
      <p className="mb-10 text-center text-zinc-300 max-w-2xl text-lg leading-relaxed">
        Contact us today to discover how Blue Bridge can transform your recruitment strategy.
      </p>
      <Link href="/contact">
        <StarBorderButton 
          className="px-10 py-5 text-lg font-medium glow-effect"
          shimmerColor="#a1a1aa"
          background="rgba(39, 39, 42, 0.7)"
        >
          Contact Us <ChevronRight className="ml-2 w-5 h-5" />
        </StarBorderButton>
      </Link>
    </section>
  )
} 