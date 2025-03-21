"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';

type EmployerFeatureProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

function EmployerFeature({ title, description, isOpen, onClick }: EmployerFeatureProps) {
  return (
    <div className="mb-4">
      <button
        className="flex items-start w-full text-left py-2 focus:outline-none group"
        onClick={onClick}
      >
        <div className="text-primary mr-3 pt-1 transform transition-transform duration-200">
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <h3 className="font-semibold text-primary text-lg group-hover:underline">{title}</h3>
      </button>

      <div className={`pl-8 pr-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
}

export default function EmployersSection() {
  const [openFeature, setOpenFeature] = useState<number | null>(0);

  const features = [
    {
      title: "Comprehensive Workforce Overview",
      description: "Get a bird's eye view of your entire workforce. Track essential metrics including employee satisfaction, NPS scores, and performance indicators all in one place."
    },
    {
      title: "Detailed Worker Profiles",
      description: "Access comprehensive worker profiles with all the information you need in one place. Monitor individual performance, track evaluations, and stay on top of important documents."
    },
    {
      title: "Recruitment Pipeline Management",
      description: "Keep track of all candidates in your selection process. Monitor their progress and manage communications all in one streamlined interface."
    },
    {
      title: "AI-Powered Candidate Matching",
      description: "Access our extensive database of pre-vetted candidates. Our AI matching system helps you find the perfect fit for your requirements."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">For Employers</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <EmployerFeature
                key={index}
                title={feature.title}
                description={feature.description}
                isOpen={openFeature === index}
                onClick={() => setOpenFeature(openFeature === index ? null : index)}
              />
            ))}

            <div className="mt-8">
              <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                <Link href="/employers">
                  Watch how Blue Bridge works for employers
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-20 flex items-center justify-center">
              <Button className="rounded-full bg-white text-primary hover:bg-white/90 w-16 h-16 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
