"use client"

import React, { useState, useRef, useEffect } from "react"
import { COUNTRIES } from "./globe"

interface SearchBarProps {
  onSelectCountry: (countryId: string | null) => void
}

export function SearchBar({ onSelectCountry }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<typeof COUNTRIES>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter countries based on search query
  useEffect(() => {
    if (searchQuery.length === 0) {
      setResults([])
      return
    }

    const filteredResults = COUNTRIES.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setResults(filteredResults)
  }, [searchQuery])

  // Handle clicks outside of search bar to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowResults(true)
  }

  const handleSelectCountry = (countryId: string) => {
    onSelectCountry(countryId)
    const country = COUNTRIES.find(c => c.id === countryId)
    if (country) {
      setSearchQuery(country.name)
    }
    setShowResults(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    onSelectCountry(null)
  }

  return (
    <div 
      ref={searchRef}
      className="relative w-full max-w-md"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setShowResults(true)}
          className="w-full h-10 pl-10 pr-10 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all backdrop-blur-sm"
        />
        <div className="absolute left-3 top-2.5 text-zinc-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute mt-1 w-full bg-zinc-900/95 border border-zinc-700 rounded-lg shadow-xl backdrop-blur-sm max-h-60 overflow-auto z-20">
          <ul>
            {results.map(country => (
              <li
                key={country.id}
                onClick={() => handleSelectCountry(country.id)}
                className="px-4 py-2 hover:bg-zinc-800/50 cursor-pointer text-zinc-300 hover:text-white transition-colors"
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* No Results Message */}
      {showResults && searchQuery && results.length === 0 && (
        <div className="absolute mt-1 w-full bg-zinc-900/95 border border-zinc-700 rounded-lg shadow-xl backdrop-blur-sm p-4 text-zinc-400 text-center">
          No countries found matching "{searchQuery}"
        </div>
      )}
    </div>
  )
} 