"use client"

import React, { useState, useEffect } from "react"
import { Globe, COUNTRIES } from "../components/ui/globe"
import { SearchBar } from "../components/ui/search-bar"
import { SparklesBackground } from "../components/ui/sparkles-background"
import { StarBorderButton } from "../components/ui/star-border-button"
import { Globe as GlobeIcon, Map, MapPin, Info, Settings, User } from "lucide-react"
import { PinContainer } from "../components/ui/3d-pin"
import { NavBar } from "../components/ui/tubelight-navbar"
import { Footer } from "../components/ui/footer"
import { NetworkTraffic } from "../components/ui/network-traffic"

export function WorldMapDemo() {
  const [highlightedCountry, setHighlightedCountry] = useState<string | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [showPin, setShowPin] = useState(false)

  // Navigation items
  const navItems = [
    { name: 'Dashboard', url: '#', icon: GlobeIcon },
    { name: 'Explore', url: '#', icon: Map },
    { name: 'Locations', url: '#', icon: MapPin },
    { name: 'About', url: '#', icon: Info },
    { name: 'Account', url: '#', icon: User }
  ]
  
  // Function to select country - used for both button clicks and search
  const selectCountry = (countryId: string | null) => {
    setHighlightedCountry(countryId)
    // Show the pin after a delay to allow the globe to rotate
    if (countryId) {
      setShowPin(false)
      setTimeout(() => {
        setShowPin(true)
      }, 2200) // Slightly longer than the rotation animation time
    } else {
      setShowPin(false)
    }
  }
  
  // Handle hover effects
  const handleMouseEnter = (countryId: string) => {
    setHoveredCountry(countryId)
  }
  
  const handleMouseLeave = () => {
    setHoveredCountry(null)
  }
  
  // Determine which country to display on the globe (highlighted has priority over hovered)
  const displayedCountry = highlightedCountry || hoveredCountry
  
  // Get the currently displayed country object
  const currentCountry = displayedCountry 
    ? COUNTRIES.find(c => c.id === displayedCountry) 
    : null
  
  // Reset the displayed country
  const resetView = () => {
    setHighlightedCountry(null)
    setHoveredCountry(null)
    setShowPin(false)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-black">
      {/* Sparkles background - making it fixed and ensuring it covers whole viewport */}
      <SparklesBackground 
        background="black"
        particleColor="#FFFFFF"
        particleDensity={150}
        minSize={0.5}
        maxSize={1.2}
        speed={0.8}
        className="fixed inset-0 z-0 h-full w-full"
      />
      
      {/* Navigation Bar - centered at the top */}
      <div className="w-full flex justify-center z-50">
        <NavBar items={navItems} position="top" className="z-50 w-auto" />
      </div>
      
      {/* Main Content - improving padding and spacing for better mobile view */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mx-auto flex flex-col items-center justify-center mt-16 sm:mt-24 mb-12 sm:mb-20">
        {/* Title and description */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="mb-2 bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-3xl sm:text-4xl md:text-6xl font-bold text-transparent">
            GLOBAL NETWORK
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-300 md:text-lg px-4">
            Connected across continents with our titanium-grade infrastructure, providing seamless worldwide operations.
          </p>
        </div>

        {/* Search Bar - making it properly sized for mobile */}
        <div className="relative z-20 mb-4 sm:mb-6 w-full max-w-md px-4">
          <SearchBar onSelectCountry={selectCountry} />
          {displayedCountry && (
            <div className="mt-2 text-center">
              <span className="text-sm text-zinc-300">
                Viewing: <span className="text-white font-semibold">{currentCountry?.name}</span>
                {highlightedCountry && (
                  <StarBorderButton 
                    onClick={resetView}
                    className="ml-2 px-2 py-1 text-xs glow-effect"
                    shimmerColor="#a3e635"
                    background="rgba(20, 20, 20, 0.7)"
                  >
                    Reset View
                  </StarBorderButton>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Globe container - making it larger */}
        <div className="relative z-10 w-full aspect-square max-w-[100vw] xs:max-w-[550px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] mb-8 sm:mb-12">
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-xl pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse pointer-events-none"></div>
          <Globe 
            className="h-full w-full" 
            highlightedCountry={displayedCountry}
          />
          
          {/* 3D Pin for highlighted country - adjusting positioning for mobile */}
          {showPin && highlightedCountry && currentCountry && (
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[100px] sm:-translate-y-[150px]">
                <PinContainer
                  title={currentCountry.name}
                  href="#"
                  containerClassName="z-50"
                >
                  <div className="flex items-center justify-center w-[150px] sm:w-[180px] h-[70px] sm:h-[80px] rounded-lg p-4">
                    <div className="text-center">
                      <h3 className="text-zinc-100 font-medium">{currentCountry.name}</h3>
                      <div className="text-zinc-400 text-xs mt-1 flex flex-col gap-1">
                        <p>Lat: {currentCountry.lat.toFixed(2)}</p>
                        <p>Lng: {currentCountry.lng.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          )}
          
          {/* Enhanced glow overlay */}
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),rgba(0,0,0,0))]" />
        </div>

        {/* Country List - improving grid layout for mobile */}
        <div className="relative z-10 w-full max-w-4xl overflow-hidden mb-8 sm:mb-12 px-4">
          <h2 className="mb-4 text-center text-xl font-semibold text-zinc-200">Explore Countries</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {COUNTRIES.map(country => (
              <StarBorderButton
                key={country.id}
                onClick={() => selectCountry(country.id === highlightedCountry ? null : country.id)}
                onMouseEnter={() => !highlightedCountry && handleMouseEnter(country.id)}
                onMouseLeave={() => !highlightedCountry && handleMouseLeave()}
                className={`py-2 px-2 sm:px-3 text-center text-xs sm:text-sm transition-all duration-200 glow-effect ${
                  displayedCountry === country.id
                    ? "bg-zinc-800 border-zinc-400" 
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white"
                }`}
                shimmerColor={displayedCountry === country.id ? "#ffffff" : "#a3e635"}
                icon={displayedCountry === country.id ? <GlobeIcon className="w-3 h-3" /> : null}
                background={displayedCountry === country.id ? "rgba(30, 30, 40, 0.8)" : "rgba(10, 10, 15, 0.6)"}
              >
                {country.name}
              </StarBorderButton>
            ))}
          </div>
        </div>

        {/* Stats section - with glow effect */}
        <div className="relative z-10 mb-12 sm:mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 w-full max-w-4xl px-4">
          <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 text-center backdrop-blur-sm glow-box">
            <div className="text-2xl sm:text-3xl font-bold text-white glow-text">256+</div>
            <div className="text-xs sm:text-sm text-zinc-400">Global Data Centers</div>
          </div>
          <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 text-center backdrop-blur-sm glow-box">
            <div className="text-2xl sm:text-3xl font-bold text-white glow-text">99.99%</div>
            <div className="text-xs sm:text-sm text-zinc-400">Uptime Guarantee</div>
          </div>
          <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 text-center backdrop-blur-sm glow-box">
            <div className="text-2xl sm:text-3xl font-bold text-white glow-text">24/7/365</div>
            <div className="text-xs sm:text-sm text-zinc-400">Technical Support</div>
          </div>
        </div>
        
        {/* Power Console - Creative addition */}
        <div className="relative z-10 w-full max-w-4xl overflow-hidden mb-12 px-4">
          <h2 className="mb-4 text-center text-xl font-semibold text-zinc-200 glow-text">Power Console</h2>
          <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/20 backdrop-blur-sm p-6 glow-box">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="bg-black/40 rounded-lg p-4 border border-cyan-900/30 w-full md:w-1/2">
                <div className="text-xs text-cyan-500 mb-1">Network Status</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="text-white">All Systems Operational</div>
                </div>
                <div className="mt-3 h-2 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[92%] animate-pulse"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-zinc-500">
                  <span>Current Load</span>
                  <span>92%</span>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 border border-cyan-900/30 w-full md:w-1/2">
                <div className="text-xs text-cyan-500 mb-1">Power Distribution</div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {['USA', 'EU', 'ASIA'].map(region => (
                    <StarBorderButton 
                      key={region}
                      className="py-1 text-xs glow-effect"
                      shimmerColor="#38bdf8"
                      background="rgba(10, 10, 15, 0.8)"
                    >
                      {region}
                    </StarBorderButton>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3 text-xs">
                  <span className="text-zinc-400">Global Ping:</span>
                  <span className="text-cyan-400 font-mono">{Math.floor(Math.random() * 20) + 15} ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Traffic Visualization - new creative feature */}
        <div className="relative z-10 w-full max-w-4xl overflow-hidden mb-12 px-4">
          <NetworkTraffic />
        </div>

        {/* Page Data Sections */}
        <div className="relative z-10 w-full max-w-4xl mb-12 px-4">
          <h2 className="mb-4 text-center text-xl font-semibold text-zinc-200 glow-text">Page Data</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dashboard Page Data */}
            <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 backdrop-blur-sm glow-box">
              <h3 className="text-base font-medium text-white mb-2">Dashboard</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Page Views</span>
                  <span className="text-sm font-medium text-white">24,356</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Avg. Time on Page</span>
                  <span className="text-sm font-medium text-white">2m 45s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Bounce Rate</span>
                  <span className="text-sm font-medium text-white">18.2%</span>
                </div>
                <div className="h-1 bg-black/40 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[82%]"></div>
                </div>
              </div>
            </div>
            
            {/* Explore Page Data */}
            <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 backdrop-blur-sm glow-box">
              <h3 className="text-base font-medium text-white mb-2">Explore</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Page Views</span>
                  <span className="text-sm font-medium text-white">18,972</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Avg. Time on Page</span>
                  <span className="text-sm font-medium text-white">3m 12s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Bounce Rate</span>
                  <span className="text-sm font-medium text-white">21.5%</span>
                </div>
                <div className="h-1 bg-black/40 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[78%]"></div>
                </div>
              </div>
            </div>
            
            {/* Locations Page Data */}
            <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 backdrop-blur-sm glow-box">
              <h3 className="text-base font-medium text-white mb-2">Locations</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Page Views</span>
                  <span className="text-sm font-medium text-white">31,408</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Avg. Time on Page</span>
                  <span className="text-sm font-medium text-white">4m 27s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Bounce Rate</span>
                  <span className="text-sm font-medium text-white">15.8%</span>
                </div>
                <div className="h-1 bg-black/40 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[86%]"></div>
                </div>
              </div>
            </div>
            
            {/* About Page Data */}
            <div className="rounded-lg border border-cyan-900/50 bg-zinc-900/30 p-4 backdrop-blur-sm glow-box">
              <h3 className="text-base font-medium text-white mb-2">About</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Page Views</span>
                  <span className="text-sm font-medium text-white">12,733</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Avg. Time on Page</span>
                  <span className="text-sm font-medium text-white">1m 55s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Bounce Rate</span>
                  <span className="text-sm font-medium text-white">24.3%</span>
                </div>
                <div className="h-1 bg-black/40 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[72%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - ensuring it sticks to bottom */}
      <Footer className="mt-auto w-full" />
    </div>
  )
} 