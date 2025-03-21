"use client";

import React, { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../../lib/utils";
import { motion, useAnimation } from "framer-motion";

type SparklesBackgroundProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  children?: React.ReactNode;
};

export const SparklesBackground = (props: SparklesBackgroundProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    speed = 1,
    particleColor = "#FFFFFF",
    particleDensity = 100,
    children,
  } = props;
  
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  const controls = useAnimation();

  const particlesLoaded = async (container?: any) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();
  
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <motion.div 
        animate={controls} 
        className="absolute inset-0 opacity-0 w-full h-full"
        style={{ position: 'fixed' }}
      >
        {init && (
          <Particles
            id={id || generatedId}
            className="h-full w-full"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: background,
                },
              },
              fullScreen: {
                enable: false,
                zIndex: 1,
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true as any,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: particleColor,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: false,
                  speed: {
                    min: 0.1,
                    max: speed,
                  },
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    width: 400,
                    height: 400,
                  },
                  value: Math.min(particleDensity, 150),
                },
                opacity: {
                  value: {
                    min: 0.1,
                    max: 1,
                  },
                  animation: {
                    enable: true,
                    speed: speed * 4,
                    decay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                  },
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: {
                    min: minSize,
                    max: maxSize,
                  },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </motion.div>
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}; 