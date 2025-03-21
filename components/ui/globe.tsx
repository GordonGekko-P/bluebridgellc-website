"use client"

import React, { useEffect, useRef, useState, useMemo } from "react"
import createGlobe, { type Marker } from "cobe"
import { useSpring } from "framer-motion"
import { cn, lerp, shortestAngleDistance, calculateRotationToPoint } from "../../lib/utils"

// Extend COBEOptions type to include our custom properties
interface ExtendedCOBEOptions {
  showAtmosphere?: boolean;
  atmosphereColor?: [number, number, number];
  atmosphereAltitude?: number;
  arcs?: {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: [number, number, number];
  }[];
  polygons?: {
    coordinates: number[][];
    color: [number, number, number, number];
  }[];
  width?: number;
  height?: number;
  onRender?: (state: any) => void;
  devicePixelRatio?: number;
  phi?: number;
  theta?: number;
  dark?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
  scale?: number;
  offset?: [number, number];
  opacity?: number;
  mapBaseBrightness?: number;
  markers?: Marker[];
  rotationSpeed?: number;
}

// Country data with coordinates for major countries
export const COUNTRIES = [
  { id: "US", name: "United States", lat: 37.0902, lng: -95.7129 },
  { id: "GB", name: "United Kingdom", lat: 55.3781, lng: -3.4360 },
  { id: "CN", name: "China", lat: 35.8617, lng: 104.1954 },
  { id: "RU", name: "Russia", lat: 61.5240, lng: 105.3188 },
  { id: "DE", name: "Germany", lat: 51.1657, lng: 10.4515 },
  { id: "FR", name: "France", lat: 46.2276, lng: 2.2137 },
  { id: "JP", name: "Japan", lat: 36.2048, lng: 138.2529 },
  { id: "IN", name: "India", lat: 20.5937, lng: 78.9629 },
  { id: "BR", name: "Brazil", lat: -14.2350, lng: -51.9253 },
  { id: "AU", name: "Australia", lat: -25.2744, lng: 133.7751 },
  { id: "CA", name: "Canada", lat: 56.1304, lng: -106.3468 },
  { id: "IT", name: "Italy", lat: 41.8719, lng: 12.5674 },
  { id: "ES", name: "Spain", lat: 40.4637, lng: -3.7492 },
  { id: "KR", name: "South Korea", lat: 35.9078, lng: 127.7669 },
  { id: "SA", name: "Saudi Arabia", lat: 23.8859, lng: 45.0792 },
  { id: "MX", name: "Mexico", lat: 23.6345, lng: -102.5528 },
  { id: "SG", name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { id: "AE", name: "United Arab Emirates", lat: 23.4241, lng: 53.8478 },
  { id: "ZA", name: "South Africa", lat: -30.5595, lng: 22.9375 },
  { id: "CO", name: "Colombia", lat: 4.5709, lng: -74.2973 },
]

// Sample connection arcs between countries inspired by the provided code
export const COUNTRY_ARCS = [
  {
    startCountry: "US",
    endCountry: "JP",
    arcAlt: 0.3,
    color: [0.5, 0.5, 0.5] as [number, number, number], // Lighter titanium-like color
  },
  {
    startCountry: "GB",
    endCountry: "SG",
    arcAlt: 0.3,
    color: [0.55, 0.55, 0.55] as [number, number, number],
  },
  {
    startCountry: "DE",
    endCountry: "CN",
    arcAlt: 0.3,
    color: [0.6, 0.6, 0.6] as [number, number, number],
  },
  {
    startCountry: "BR",
    endCountry: "ZA",
    arcAlt: 0.5,
    color: [0.65, 0.65, 0.65] as [number, number, number],
  },
  {
    startCountry: "AU",
    endCountry: "SG",
    arcAlt: 0.2,
    color: [0.7, 0.7, 0.7] as [number, number, number],
  },
  {
    startCountry: "CA",
    endCountry: "FR",
    arcAlt: 0.2,
    color: [0.75, 0.75, 0.75] as [number, number, number],
  },
  {
    startCountry: "IN",
    endCountry: "AE",
    arcAlt: 0.1,
    color: [0.8, 0.8, 0.8] as [number, number, number],
  },
  {
    startCountry: "MX",
    endCountry: "BR",
    arcAlt: 0.2,
    color: [0.85, 0.85, 0.85] as [number, number, number],
  },
]

const GLOBE_CONFIG: ExtendedCOBEOptions = {
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.5,
  mapSamples: 35000,
  mapBrightness: 1.5,
  baseColor: [0.2, 0.2, 0.2],
  markerColor: [0.9, 0.9, 0.9],
  glowColor: [0.3, 0.3, 0.3],
  showAtmosphere: true,
  atmosphereColor: [0.35, 0.35, 0.35],
  atmosphereAltitude: 0.15,
  markers: COUNTRIES.map(country => ({
    location: [country.lat, country.lng] as [number, number],
    size: 0.07,
  })),
  // Convert arcs to format Cobe expects - using a safer approach with optional chaining
  arcs: COUNTRY_ARCS.map(arc => {
    const startCountry = COUNTRIES.find(c => c.id === arc.startCountry);
    const endCountry = COUNTRIES.find(c => c.id === arc.endCountry);
    
    // Only create arc if both countries exist
    if (startCountry && endCountry) {
      return {
        startLat: startCountry.lat,
        startLng: startCountry.lng,
        endLat: endCountry.lat,
        endLng: endCountry.lng,
        arcAlt: arc.arcAlt,
        color: arc.color,
      };
    }
    // Fallback default to avoid undefined errors
    return {
      startLat: 0,
      startLng: 0,
      endLat: 0,
      endLng: 0,
      arcAlt: 0.1,
      color: [0.5, 0.5, 0.5] as [number, number, number]
    };
  }).filter(arc => arc.startLat !== 0 || arc.startLng !== 0), // Filter out fallback arcs
  polygons: [ // Adding polygons for major continents/countries for the titanium borders
    {
      coordinates: [
        // North America rough outline
        [60, -130], [50, -125], [45, -125], [40, -120], [35, -120], [30, -115],
        [25, -110], [20, -105], [15, -95], [10, -85], [10, -80], [15, -75],
        [20, -70], [25, -65], [30, -60], [40, -70], [50, -80], [60, -90],
        [70, -100], [80, -110], [80, -130], [70, -140], [60, -130]
      ],
      color: [0.6, 0.6, 0.6, 0.4] as [number, number, number, number], // Lighter, more visible titanium
    },
    {
      coordinates: [
        // Europe rough outline
        [35, -10], [40, -5], [45, 0], [50, 5], [55, 10], [60, 15],
        [65, 20], [70, 30], [65, 40], [60, 35], [55, 30], [50, 25],
        [45, 20], [40, 15], [35, 10], [30, 5], [35, -10]
      ],
      color: [0.6, 0.6, 0.6, 0.4] as [number, number, number, number],
    },
    {
      coordinates: [
        // Asia rough outline
        [70, 30], [65, 40], [60, 50], [55, 60], [50, 70], [45, 80],
        [40, 90], [35, 100], [30, 110], [25, 120], [20, 130], [15, 140],
        [20, 150], [25, 160], [30, 170], [40, 180], [50, 170], [60, 160],
        [70, 150], [80, 140], [80, 130], [70, 120], [60, 110], [50, 100],
        [60, 90], [70, 80], [80, 70], [80, 50], [70, 30]
      ],
      color: [0.6, 0.6, 0.6, 0.4] as [number, number, number, number],
    },
    {
      coordinates: [
        // Africa rough outline
        [35, -10], [30, 0], [25, 10], [20, 20], [15, 30], [10, 40],
        [5, 50], [0, 40], [-5, 30], [-10, 20], [-15, 10], [-20, 0],
        [-25, 10], [-30, 20], [-35, 30], [-30, 40], [-25, 35], [-20, 30],
        [-15, 35], [-10, 40], [-5, 45], [0, 50], [5, 45], [10, 40],
        [15, 35], [20, 30], [25, 25], [30, 20], [35, 10], [40, 0], [35, -10]
      ],
      color: [0.6, 0.6, 0.6, 0.4] as [number, number, number, number],
    },
    {
      coordinates: [
        // South America rough outline
        [10, -80], [5, -75], [0, -70], [-5, -65], [-10, -60], [-15, -55],
        [-20, -50], [-25, -45], [-30, -40], [-35, -35], [-40, -30], [-45, -25],
        [-50, -20], [-55, -25], [-50, -30], [-45, -35], [-40, -40], [-35, -45],
        [-30, -50], [-25, -55], [-20, -60], [-15, -65], [-10, -70], [-5, -75],
        [0, -80], [5, -85], [10, -80]
      ],
      color: [0.6, 0.6, 0.6, 0.4] as [number, number, number, number],
    },
    {
      coordinates: [
        // Australia rough outline
        [-10, 110], [-15, 120], [-20, 130], [-25, 140], [-30, 150],
        [-35, 145], [-40, 140], [-35, 135], [-30, 130], [-25, 125],
        [-20, 120], [-15, 115], [-10, 110]
      ],
      color: [0.6, 0.6, 0.6, 0.4] as [number, number, number, number],
    }
  ],
  scale: 1.1,
}

type GlobeProps = {
  className?: string
  config?: ExtendedCOBEOptions
  highlightedCountry?: string | null
  specialCountries?: string[]
}

export function Globe({ 
  className = "", 
  config = GLOBE_CONFIG, 
  highlightedCountry = null,
  specialCountries = []
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rotationRef = useRef({ x: 0, y: 0, z: 0 })
  const globeRef = useRef<any>(null)
  const pointerInteracting = useRef<number | null>(null)
  const [isInitialRender, setIsInitialRender] = useState(true)
  const isManuallyInteracting = useRef(false)
  const rotationAnimationRef = useRef<number | null>(null)
  const [isRotatingToCountry, setIsRotatingToCountry] = useState(false)
  
  // Create pointer interaction spring at the top level, not inside useEffect
  const pointerSpring = useSpring(0, {
    mass: 1,
    stiffness: 280,
    damping: 60,
  })
  
  const BASE_ROTATION_SPEED = config.rotationSpeed || 0.0015
  const ANIMATION_DURATION = 2000 // 2 seconds
  
  // Process markers based on highlighted country
  const globeMarkers = useMemo(() => {
    return COUNTRIES.map(country => {
      // Highlight the selected country with a larger and brighter marker
      if (country.id === highlightedCountry) {
        return {
          location: [country.lat, country.lng] as [number, number],
          size: 0.15, // Larger size for highlighted country
          color: [0.95, 0.95, 0.95] as [number, number, number], // Brighter color
        };
      }
      // Special countries get medium emphasis
      else if (specialCountries.includes(country.id)) {
        return {
          location: [country.lat, country.lng] as [number, number],
          size: 0.12, // Medium size for special countries
          color: [0.85, 0.85, 0.85] as [number, number, number], // Slightly brighter color
        };
      }
      // Default marker style
      return {
        location: [country.lat, country.lng] as [number, number],
        size: 0.07, // Default size
        color: [0.7, 0.7, 0.7] as [number, number, number], // Default color
      };
    });
  }, [highlightedCountry, specialCountries]);
  
  // Effect to rotate to highlighted country
  useEffect(() => {
    if (highlightedCountry && globeRef.current) {
      // Find the country to rotate to
      const country = COUNTRIES.find(c => c.id === highlightedCountry);
      
      if (country) {
        setIsRotatingToCountry(true);
        
        // Calculate target rotation to show the country
        const targetRotation = calculateRotationToPoint(country.lat, country.lng);
        // Get current rotation values from the globe instance
        const currentPhi = globeRef.current.phi || 0;
        const currentTheta = globeRef.current.theta || 0;
        
        // Duration of animation in milliseconds
        const duration = 1500;
        const startTime = Date.now();
        
        // Clear any existing rotation animation
        if (rotationAnimationRef.current) {
          cancelAnimationFrame(rotationAnimationRef.current);
        }
        
        // Animation function
        const animateRotation = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = easeInOutCubic(progress);
          
          if (globeRef.current) {
            // Interpolate between current and target rotation
            globeRef.current.phi = lerp(
              currentPhi,
              targetRotation.x,
              easeProgress
            );
            
            globeRef.current.theta = lerp(
              currentTheta,
              targetRotation.z,
              easeProgress
            );
          }
          
          if (progress < 1) {
            rotationAnimationRef.current = requestAnimationFrame(animateRotation);
          } else {
            setIsRotatingToCountry(false);
          }
        };
        
        // Start the animation
        rotationAnimationRef.current = requestAnimationFrame(animateRotation);
      }
    }
    
    return () => {
      if (rotationAnimationRef.current) {
        cancelAnimationFrame(rotationAnimationRef.current);
      }
    };
  }, [highlightedCountry]);

  // Ease function for smoother animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  // Create the globe
  useEffect(() => {
    let width = 0
    
    // Use the spring defined above, not create a new one here
    
    if (canvasRef.current && !globeRef.current) {
      // Get the actual canvas size for responsive setup
      const canvasBounds = canvasRef.current.getBoundingClientRect()
      const size = Math.min(canvasBounds.width, canvasBounds.height)
      
      const renderer = createGlobe(canvasRef.current, {
        devicePixelRatio: window.devicePixelRatio || 1,
        width: size,
        height: size,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 4,
        mapBaseBrightness: 0.1,
        baseColor: [0.2, 0.2, 0.2],
        markerColor: [0.8, 0.8, 0.8],
        glowColor: [0.3, 0.3, 0.3],
        offset: [0, 0],
        scale: 1,
        opacity: 0.95,
        markers: globeMarkers,
        onRender: (state) => {
          // This is called on each animation frame
          if (!isManuallyInteracting.current && !isRotatingToCountry) {
            // Auto-rotation when not manually interacting or animating to a country
            rotationRef.current.z += BASE_ROTATION_SPEED
          }

          // Set the rotation from our stored ref
          state.phi = rotationRef.current.x
          state.theta = rotationRef.current.z
          
          // Update globe size if canvas size changes
          const canvasWidth = canvasRef.current?.offsetWidth || 0
          const canvasHeight = canvasRef.current?.offsetHeight || 0
          const newSize = Math.min(canvasWidth, canvasHeight)
          
          if (newSize !== width) {
            width = newSize
            state.width = width
            state.height = width
          }
        },
      })
      
      globeRef.current = renderer
      
      // Handle window resize to update globe dimensions
      const handleResize = () => {
        if (canvasRef.current && globeRef.current) {
          const bounds = canvasRef.current.getBoundingClientRect()
          const size = Math.min(bounds.width, bounds.height)
          width = size
        }
      }
      
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
        renderer.destroy()
        globeRef.current = null
      }
    }
    
    if (globeRef.current && highlightedCountry) {
      // Update markers when the highlighted country changes
      globeRef.current.updateMarkers(globeMarkers)
    } else if (globeRef.current) {
      globeRef.current.updateMarkers([])
    }
  }, [globeMarkers, isRotatingToCountry])
  
  // Track if we've done our initial render
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false)
    }
  }, [isInitialRender])
  
  const onPointerDown = (e: React.PointerEvent) => {
    isManuallyInteracting.current = true
    const canvasRect = canvasRef.current?.getBoundingClientRect()
    if (canvasRect) {
      pointerInteracting.current = e.clientX - canvasRect.left
    }
  }
  
  const onPointerMove = (e: React.PointerEvent) => {
    if (pointerInteracting.current !== null && canvasRef.current) {
      const canvasRect = canvasRef.current.getBoundingClientRect()
      const x = e.clientX - canvasRect.left
      const dx = x - pointerInteracting.current
      
      pointerInteracting.current = x
      
      // Adjust rotation based on mouse movement when manually interacting
      rotationRef.current.z += dx * 0.005
    }
  }
  
  const onPointerUp = () => {
    isManuallyInteracting.current = false
    pointerInteracting.current = null
  }
  
  return (
    <div className={cn("relative aspect-square h-full w-full overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerUp}
        className="h-full w-full"
      />
    </div>
  )
} 