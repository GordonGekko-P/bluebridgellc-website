"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface NetworkTrafficProps {
  className?: string;
}

// Simulated network traffic data
const generateRandomTraffic = () => {
  return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
};

export function NetworkTraffic({ className }: NetworkTrafficProps) {
  const [trafficData, setTrafficData] = useState(generateRandomTraffic());
  const [isAnimating, setIsAnimating] = useState(false);
  const [clientValues, setClientValues] = useState({
    transferRate: "0.00",
    packetLoss: "0.0000",
    latency: "0"
  });
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle client-side rendering
  useEffect(() => {
    setIsMounted(true);
    setClientValues({
      transferRate: (Math.random() * 10).toFixed(2),
      packetLoss: (Math.random() * 0.1).toFixed(4),
      latency: String(Math.floor(Math.random() * 15) + 5)
    });
  }, []);
  
  // Update traffic data every 3 seconds
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setTrafficData(prev => {
        const newData = [...prev];
        newData.shift();
        newData.push(Math.floor(Math.random() * 100));
        return newData;
      });
      // Trigger pulse animation
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
      
      // Update values
      setClientValues({
        transferRate: (Math.random() * 10).toFixed(2),
        packetLoss: (Math.random() * 0.1).toFixed(4),
        latency: String(Math.floor(Math.random() * 15) + 5)
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMounted]);
  
  // Find max value for scaling
  const maxValue = Math.max(...trafficData);
  
  return (
    <div className={cn("w-full p-4 rounded-lg border border-cyan-900/50 bg-zinc-900/30 backdrop-blur-sm glow-box", className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-white glow-text">Global Network Traffic</h3>
        <div className="flex items-center">
          <motion.div 
            className="w-2 h-2 rounded-full bg-cyan-500 mr-2" 
            animate={{ scale: isAnimating ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-xs text-zinc-400">Live</span>
        </div>
      </div>
      
      <div className="w-full h-[120px] flex items-end justify-between">
        {trafficData.map((value, index) => {
          const height = (value / maxValue) * 100;
          
          return (
            <motion.div
              key={index}
              className="w-[2.5%] rounded-t-sm bg-gradient-to-t from-cyan-900 to-cyan-500"
              style={{ height: `${height}%` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="h-[2px] w-full bg-cyan-400 rounded-full opacity-30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Time labels */}
      <div className="w-full flex justify-between mt-2">
        <span className="text-[10px] text-zinc-500">24h ago</span>
        <span className="text-[10px] text-zinc-500">12h ago</span>
        <span className="text-[10px] text-zinc-500">Now</span>
      </div>
      
      {/* Status info */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="p-2 rounded bg-black/20 text-center">
          <div className="text-xs text-zinc-400">Transfer Rate</div>
          <div className="text-sm font-mono text-cyan-400">
            {isMounted ? clientValues.transferRate : "0.00"} Gb/s
          </div>
        </div>
        <div className="p-2 rounded bg-black/20 text-center">
          <div className="text-xs text-zinc-400">Packet Loss</div>
          <div className="text-sm font-mono text-cyan-400">
            {isMounted ? clientValues.packetLoss : "0.0000"}%
          </div>
        </div>
        <div className="p-2 rounded bg-black/20 text-center">
          <div className="text-xs text-zinc-400">Latency</div>
          <div className="text-sm font-mono text-cyan-400">
            {isMounted ? clientValues.latency : "0"} ms
          </div>
        </div>
      </div>
    </div>
  );
} 