import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0"></div>

      {/* World map image */}
      <div className="absolute right-0 top-1/4 transform translate-x-1/4 -translate-y-1/4 opacity-80 z-0">
        <Image
          src="https://ext.same-assets.com/1325032747/1248550479.svg"
          alt="World Map"
          width={800}
          height={600}
          className="w-auto h-auto"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary block">Connecting worlds</span>
            <span className="text-gray-700 block">with</span>
            <span className="text-primary block mt-2">
              <span className="opacity-40">Professional</span>talent
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            We combine trusted expertise and powerful technology to connect global talent with opportunities while ensuring employers have the workforce they need.
          </p>
          <Button asChild className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light transition-all duration-300 transform hover:-translate-y-1">
            <Link href="/contact" className="inline-flex items-center">
              Get Started
              <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
