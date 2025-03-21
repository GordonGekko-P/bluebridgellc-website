import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CandidatesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-32 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Unlock Your <span className="text-primary">Global Career</span> Potential
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our talent pool and connect with international employers seeking professionals with your skills and experience.
            </p>
            <Button asChild className="px-8 py-6 bg-primary text-white rounded-md hover:bg-primary-light transition-all duration-300">
              <Link href="/contact">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8">For Candidates</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our candidates page is currently being enhanced with additional information and features.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              If you're a professional looking for international career opportunities, please contact our team to learn about how Blue Bridge can help you connect with top employers globally.
            </p>
            <div className="mt-10">
              <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Contact Our Recruitment Team
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
