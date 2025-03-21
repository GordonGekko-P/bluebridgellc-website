"use client"

import React from "react"
import { StarBorderButton } from "../ui/star-border-button"
import { motion } from "framer-motion"
import { Globe } from "../ui/globe"

// Define the countries to highlight specifically
const specificHighlightedCountries = ["DE", "CO", "BR"]

function HeroSection({ highlightedCountry, highlightedCountries }: { 
  highlightedCountry: string | null, 
  highlightedCountries: string[] 
}) {
  return (
    <section className="relative z-10 mx-auto min-h-[90vh] w-full max-w-7xl pt-20 lg:min-h-[80vh] lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column Content */}
        <div className="mx-auto max-w-3xl px-4 md:px-8 lg:mx-0 lg:max-w-none lg:px-0 lg:pl-8">
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-center text-4xl font-bold text-white lg:text-left lg:text-6xl">
              Welcome to <span className="text-blue-500">BlueBridge</span>
            </h1>
            <p className="text-center text-lg text-zinc-400 lg:text-left lg:text-xl">
              Connecting top talent across borders for international careers with Germany's leading companies.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
              <StarBorderButton hideIcon={true}>Get Started</StarBorderButton>
              <StarBorderButton hideIcon={true} className="border border-zinc-700 bg-transparent hover:bg-zinc-800">Learn More</StarBorderButton>
            </div>
          </motion.div>
        </div>
        {/* Right Column with 3D Globe */}
        <div className="relative mx-auto h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px] lg:mx-0 lg:h-[600px] lg:w-[600px] xl:h-[750px] xl:w-[750px]">
          {/* 3D Globe Visualization - Now bigger and with precise 10 seconds rotation */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Globe
              className="h-full w-full"
              highlightedCountry={highlightedCountry}
              specialCountries={specificHighlightedCountries}
              config={{
                rotationSpeed: 0.1, // Slower rotation (approx. 10 seconds per rotation)
                mapBrightness: 1.4, // Lighter continent outlines
                scale: 1.25 // Bigger globe size
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 