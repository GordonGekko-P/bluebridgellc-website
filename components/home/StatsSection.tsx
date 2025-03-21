"use client"

import React from "react"

interface StatCardProps {
  number: string;
  text: string;
}

function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-10 text-center backdrop-blur-lg hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px]">
      <div className="text-4xl sm:text-5xl font-bold text-white mb-3 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">{number}</div>
      <div className="text-base text-zinc-400 font-medium">{text}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative z-10 py-16 w-full max-w-7xl px-4 sm:px-6 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10 w-full">
        <StatCard number="95%" text="Retention Rate" />
        <StatCard number="200+" text="Professionals Placed" />
        <StatCard number="88" text="NPS" />
      </div>
    </section>
  )
} 