import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Linear interpolation between two values
 */
export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}

/**
 * Calculates the shortest distance between two angles (in radians)
 */
export function shortestAngleDistance(current: number, target: number): number {
  const PI2 = Math.PI * 2;
  
  // Normalize angles to [0, 2π]
  const normalizedCurrent = ((current % PI2) + PI2) % PI2;
  const normalizedTarget = ((target % PI2) + PI2) % PI2;
  
  // Find the shortest distance
  let diff = normalizedTarget - normalizedCurrent;
  
  // Adjust for shortest path
  if (diff > Math.PI) {
    diff -= PI2;
  } else if (diff < -Math.PI) {
    diff += PI2;
  }
  
  return diff;
}

/**
 * Maps a lat/lng coordinate to a 3D position on a sphere
 */
export function latLngToVector3(lat: number, lng: number, radius: number = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return { x, y, z };
}

/**
 * Calculates the rotation parameters needed to view a specific lat/lng point
 */
export function calculateRotationToPoint(lat: number, lng: number) {
  // Convert to radians
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = ((lng + 180) % 360) * (Math.PI / 180);

  // Calculate x and z rotation
  // This will be the values needed to rotate the globe to see this point
  return {
    x: phi - Math.PI/2,  // Adjust the x rotation (vertical tilt)
    y: 0,                // No change in y axis
    z: -theta            // Adjust the z rotation (horizontal spin)
  };
} 