import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-beige-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-secondary">
            Ready to Bridge Your Talent Gap?
          </h2>
          <p className="text-secondary-dark text-lg">
            Contact us today to discover how Blue Bridge can transform your recruitment strategy.
          </p>
          <Button asChild className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-light transition-colors duration-300">
            <Link href="/contact">
              Contact Us
              <svg
                className="ml-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>
        </div>
        <div className="mt-16 text-center text-secondary-dark">
          <p>© {new Date().getFullYear()} BlueBridge. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
