"use client";

import React, { CSSProperties } from "react";
import { cn } from "../../lib/utils";

export interface StarBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  hideIcon?: boolean;
  borderColor?: string;
  shimmerWidth?: number;
  shimmerThickness?: number;
  shimmerBlur?: number;
  showTopLeftShimmer?: boolean;
  showBottomRightShimmer?: boolean;
}

export function StarBorderButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.15)",
  background = "rgba(0, 0, 0, 0.1)",
  borderColor = "rgba(255, 255, 255, 0.1)",
  shimmerWidth = 10,
  shimmerThickness = 0.4,
  shimmerBlur = 60,
  showTopLeftShimmer = true,
  showBottomRightShimmer = true,
  icon,
  hideIcon = true,
  ...props
}: StarBorderButtonProps) {
  return (
    <button
      className={cn(
        "group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-opacity-20 bg-opacity-90 text-sm font-medium text-white transition-all duration-200",
        "hover:bg-opacity-75 hover:bg-gradient-to-br hover:from-blue-800/80 hover:to-blue-600/80 hover:border-blue-400/50 hover:text-white",
        "active:scale-[0.98] active:brightness-90",
        "disabled:pointer-events-none disabled:opacity-50",
        "titanium-gradient",
        className
      )}
      style={{
        background,
        borderColor,
      }}
      {...props}
    >
      {/* Gradient overlay for titanium effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-70 pointer-events-none" />
      
      {/* Top left shimmer */}
      {showTopLeftShimmer && (
        <div
          className="animate-pulse absolute -top-[20%] -left-[20%] h-[50%] w-[50%] translate-x-[10%] translate-y-[10%] skew-y-12 blur-md"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            width: `${shimmerWidth}rem`,
            opacity: shimmerThickness,
            filter: `blur(${shimmerBlur}px)`,
          }}
        />
      )}

      {/* Bottom right shimmer */}
      {showBottomRightShimmer && (
        <div
          className="animate-pulse absolute -bottom-[20%] -right-[20%] h-[50%] w-[50%] -translate-x-[10%] -translate-y-[10%] skew-y-12 blur-md"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            width: `${shimmerWidth}rem`,
            opacity: shimmerThickness,
            filter: `blur(${shimmerBlur}px)`,
          }}
        />
      )}

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center gap-1.5 px-4 py-2">
        {/* Show icon only if hideIcon is false and an icon is not provided */}
        {!hideIcon && !icon && (
          <div className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors duration-200"></div>
        )}
        {/* Show custom icon if provided */}
        {icon && <div className="group-hover:text-blue-200 transition-colors duration-200">{icon}</div>}
        {children}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/10 to-blue-400/30 blur-xl pointer-events-none"></div>
    </button>
  );
}

export const Shimmer = ({ children, className, color = "rgba(255, 255, 255, 0.1)" }: { 
  children: React.ReactNode; 
  className?: string;
  color?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <div
          className="h-full w-[200%] absolute top-0 -left-full animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent 50%)`,
            opacity: 0.2,
          }}
        />
      </div>
    </div>
  );
}; 