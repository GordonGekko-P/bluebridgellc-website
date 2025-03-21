"use client"

import React from "react"
import { SectionHeading } from "../ui/section-heading"

interface ImageCardProps {
  imageUrl: string;
  altText: string;
}

function ImageCard({ imageUrl, altText }: ImageCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/20 h-56 md:h-72 flex items-center justify-center hover:border-zinc-700 transition-all duration-300 group shadow-lg shadow-black/20 relative">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
      <div className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors relative z-10">{altText}</div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center py-16 sm:py-24">
      <SectionHeading 
        title="Our Services" 
        description="Comprehensive migration solutions" 
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        <ImageCard imageUrl="/img/worker1.jpg" altText="Worker installing electrical equipment" />
        <ImageCard imageUrl="/img/worker2.jpg" altText="Construction worker in yellow helmet" />
        <ImageCard imageUrl="/img/worker3.jpg" altText="Worker in construction site" />
        <ImageCard imageUrl="/img/worker4.jpg" altText="Worker with technical equipment" />
      </div>
    </section>
  )
} 