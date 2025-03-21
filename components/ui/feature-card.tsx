"use client"

import React from "react"

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className = "" }: FeatureCardProps) {
  return (
    <div className={`rounded-xl border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur-lg hover:border-zinc-700 transition-all duration-300 shadow-lg shadow-black/20 transform hover:translate-y-[-5px] ${className}`}>
      <div className="bg-zinc-800 p-4 rounded-xl inline-block mb-5 shadow-md shadow-black/30">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 text-base leading-relaxed">{description}</p>
    </div>
  )
} 