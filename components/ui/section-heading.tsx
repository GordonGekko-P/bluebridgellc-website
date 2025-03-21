"use client"

import React from "react"

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <h2 className="mb-4 text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full mb-6"></div>
      {description && (
        <p className="mb-16 text-center text-zinc-300 max-w-3xl text-lg">
          {description}
        </p>
      )}
    </div>
  )
} 