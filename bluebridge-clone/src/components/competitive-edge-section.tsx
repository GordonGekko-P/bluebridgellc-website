"use client";

import Image from 'next/image';
import { useState } from 'react';

const features = [
  "Real-time employee satisfaction metrics",
  "Monthly retention overview",
  "Net Promoter Score tracking",
  "Workforce Overview Dashboard",
  "Worker Details Interface"
];

export default function CompetitiveEdgeSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Competitive Edge</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed for modern workforce management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-6">Comprehensive Workforce Overview</h3>
            <p className="text-gray-600 mb-8">
              Get a bird's eye view of your entire workforce. Track essential metrics including employee satisfaction, NPS scores, and performance indicators all in one place.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex items-center ${
                    activeFeature === index ? 'text-primary font-medium' : 'text-gray-600'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    activeFeature === index ? 'bg-primary' : 'bg-gray-300'
                  }`}></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="https://ext.same-assets.com/1325032747/4051472352.png"
                alt="Comprehensive Workforce Overview"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="hidden lg:flex justify-center mt-4">
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((dot) => (
                  <button
                    key={dot}
                    className={`w-2 h-2 rounded-full ${
                      activeFeature === dot ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveFeature(dot)}
                    aria-label={`Show slide ${dot + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center mt-6 space-x-4">
              <button
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
                onClick={() => setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1))}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="#1618FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
                onClick={() => setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="#1618FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
