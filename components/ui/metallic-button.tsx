"use client";

import React from "react";
import { cn } from "../../lib/utils";

export interface MetallicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "dark" | "light" | "metallic";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  glowIntensity?: "none" | "subtle" | "default" | "strong";
  shimmer?: boolean;
  shimmerColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

export function MetallicButton({
  className,
  variant = "default",
  size = "default",
  glowIntensity = "default",
  shimmer = false,
  shimmerColor = "rgba(255, 255, 255, 0.3)",
  children,
  icon,
  iconPosition = "left",
  loading = false,
  ...props
}: MetallicButtonProps) {
  
  // Variant classes
  const variantStyles = {
    default: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 border border-blue-700",
    outline: "border border-blue-600 bg-transparent text-blue-500 hover:text-white hover:bg-blue-900/20",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-900/10 border-none",
    dark: "bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:from-blue-800 hover:to-blue-700 border border-blue-950",
    light: "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white border border-blue-200",
    metallic: "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 border border-blue-900/50",
  };
  
  // Size classes
  const sizeStyles = {
    default: "h-11 px-4 py-2 text-sm",
    sm: "h-9 px-3 py-1.5 text-xs",
    lg: "h-12 px-6 py-3 text-base",
    xl: "h-14 px-8 py-4 text-lg",
    icon: "h-10 w-10 p-0",
  };
  
  // Glow intensity classes
  const glowStyles = {
    none: "",
    subtle: "hover:shadow-md hover:shadow-blue-500/10",
    default: "hover:shadow-lg hover:shadow-blue-500/20",
    strong: "hover:shadow-xl hover:shadow-blue-500/30",
  };
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98]",
        variantStyles[variant],
        sizeStyles[size],
        glowStyles[glowIntensity],
        className
      )}
      {...props}
    >
      {/* Inner highlight effect */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </span>
      
      {/* Shimmer animation */}
      {shimmer && (
        <span className="absolute inset-0 overflow-hidden">
          <span
            className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-slide"
            style={{
              background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            }}
          ></span>
        </span>
      )}
      
      {/* Content */}
      <span className="flex items-center justify-center gap-2 z-10">
        {loading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <>
            {icon && iconPosition === "left" && <span>{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span>{icon}</span>}
          </>
        )}
      </span>
    </button>
  );
} 