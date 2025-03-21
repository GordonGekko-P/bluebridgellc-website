"use client";

import React from "react";
import { MetallicButton } from "./metallic-button";

export default function ButtonShowcase() {
  return (
    <div className="p-8 rounded-2xl bg-zinc-900/50 max-w-4xl mx-auto grid gap-8">
      <h2 className="text-2xl font-bold text-center mb-6">Metallic Button Variants</h2>
      
      <div className="grid gap-6">
        <section>
          <h3 className="text-lg font-medium text-zinc-300 mb-4">Standard Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetallicButton variant="default">Default Button</MetallicButton>
            <MetallicButton variant="outline">Outline Button</MetallicButton>
            <MetallicButton variant="ghost">Ghost Button</MetallicButton>
            <MetallicButton variant="dark">Dark Button</MetallicButton>
            <MetallicButton variant="light">Light Button</MetallicButton>
            <MetallicButton variant="metallic">Metallic Button</MetallicButton>
          </div>
        </section>
        
        <section>
          <h3 className="text-lg font-medium text-zinc-300 mb-4">Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetallicButton size="sm" variant="metallic">Small Button</MetallicButton>
            <MetallicButton size="default" variant="metallic">Default Size</MetallicButton>
            <MetallicButton size="lg" variant="metallic">Large Button</MetallicButton>
            <MetallicButton size="xl" variant="metallic">Extra Large</MetallicButton>
            <MetallicButton size="icon" variant="metallic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MetallicButton>
          </div>
        </section>
        
        <section>
          <h3 className="text-lg font-medium text-zinc-300 mb-4">Glow Effects</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <MetallicButton variant="metallic" glowIntensity="none">No Glow</MetallicButton>
            <MetallicButton variant="metallic" glowIntensity="subtle">Subtle Glow</MetallicButton>
            <MetallicButton variant="metallic" glowIntensity="default">Default Glow</MetallicButton>
            <MetallicButton variant="metallic" glowIntensity="strong">Strong Glow</MetallicButton>
          </div>
        </section>
        
        <section>
          <h3 className="text-lg font-medium text-zinc-300 mb-4">Special Effects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetallicButton variant="metallic" shimmer={true}>Shimmer Effect</MetallicButton>
            <MetallicButton variant="metallic" loading={true}>Loading State</MetallicButton>
            <MetallicButton 
              variant="metallic" 
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              Icon Left
            </MetallicButton>
            <MetallicButton 
              variant="metallic" 
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              iconPosition="right"
            >
              Icon Right
            </MetallicButton>
          </div>
        </section>
      </div>
    </div>
  );
} 