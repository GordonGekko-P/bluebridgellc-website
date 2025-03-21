"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

interface TestimonialSliderProps {
  testimonials: {
    quote: string;
    author: string;
    title: string;
  }[];
  className?: string;
}

export function TestimonialSlider({ testimonials, className }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  
  // Auto rotation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [currentIndex, testimonials.length]);
  
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 250 : -250,
      opacity: 0
    })
  };

  return (
    <div className={cn("relative w-full overflow-hidden rounded-lg border border-blue-900/50 bg-zinc-900/30 backdrop-blur-sm p-10", className)}>
      <div className="absolute top-6 right-6 text-blue-400 opacity-30">
        <Quote size={48} />
      </div>
      
      <div className="relative h-[200px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute w-full"
          >
            <blockquote className="mb-6 text-lg text-zinc-300 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="text-white font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-zinc-400 text-sm">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-8 flex justify-between">
        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex 
                  ? "bg-blue-500" 
                  : "bg-zinc-600 hover:bg-zinc-500"
              } transition-colors duration-200`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="flex space-x-4">
          <button
            onClick={goToPrevious}
            className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={goToNext}
            className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
} 