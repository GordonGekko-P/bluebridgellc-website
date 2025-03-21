"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  rotationFactor?: number;
  glowColor?: string;
  borderColor?: string;
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export function TiltCard({
  children,
  className,
  rotationFactor = 10,
  glowColor = "rgba(59, 130, 246, 0.5)",
  borderColor = "from-blue-400 via-cyan-400 to-blue-600",
  springOptions = {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  },
}: TiltCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [rotationFactor, -rotationFactor]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-rotationFactor, rotationFactor]);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <motion.div
        className={cn(
          "relative z-10 overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/80 backdrop-blur-sm transition-colors duration-300",
          isHovered && "shadow-lg shadow-blue-glow",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient border effect */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: `linear-gradient(to right, var(--border-color-start), var(--border-color-mid), var(--border-color-end))`,
            backgroundSize: "200% 200%",
            animation: isHovered ? "borderGradient 3s linear infinite" : "none",
            zIndex: -1,
            margin: "-2px",
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 30px ${glowColor}`,
            opacity: isHovered ? 0.6 : 0,
            zIndex: -2,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
      
      <style jsx global>{`
        @keyframes borderGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        :root {
          --border-color-start: rgb(96, 165, 250);
          --border-color-mid: rgb(34, 211, 238);
          --border-color-end: rgb(37, 99, 235);
        }
      `}</style>
    </div>
  );
} 