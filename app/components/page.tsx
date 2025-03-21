import ButtonShowcase from "@/components/ui/button-showcase";
import { TiltCard } from "@/components/ui/3d-tilt-card";
import { MetallicButton } from "@/components/ui/metallic-button";

export default function ComponentsPage() {
  return (
    <main className="min-h-screen py-20 px-4 pt-32">
      <div className="max-w-7xl mx-auto space-y-20">
        <section>
          <h1 className="text-4xl font-bold mb-12 text-center">BlueBridge UI Components</h1>
          <p className="text-xl text-center text-zinc-400 max-w-2xl mx-auto mb-16">
            A showcase of custom UI components designed for the BlueBridge website, featuring
            metallic finishes, 3D effects, and modern design patterns.
          </p>
        </section>
        
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Button Components</h2>
          <ButtonShowcase />
        </section>
        
        <section className="space-y-8 py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">3D Tilt Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TiltCard className="p-8 h-64" glowColor="rgba(59, 130, 246, 0.5)" borderColor="rgba(59, 130, 246, 0.3)">
              <div className="flex flex-col h-full justify-between">
                <h3 className="text-2xl font-bold">3D Tilt Card</h3>
                <p className="text-zinc-400">This card tilts based on mouse position, creating an interactive 3D effect.</p>
                <p className="text-blue-400 font-medium">Hover and move your mouse to see the effect</p>
              </div>
            </TiltCard>
            
            <TiltCard className="p-8 h-64 bg-gradient-to-br from-blue-900/50 to-purple-900/50" glowColor="rgba(124, 58, 237, 0.5)" borderColor="rgba(124, 58, 237, 0.3)">
              <div className="flex flex-col h-full justify-between">
                <h3 className="text-2xl font-bold">Gradient Background</h3>
                <p className="text-zinc-300">Custom backgrounds can be applied while maintaining the 3D tilt effect.</p>
                <p className="text-purple-400 font-medium">Try hovering from different angles</p>
              </div>
            </TiltCard>
          </div>
        </section>
        
        <section className="space-y-8 py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Navigation</h2>
          <div className="max-w-4xl mx-auto bg-zinc-900/50 p-8 rounded-2xl">
            <p className="text-zinc-400 mb-6 text-center">
              The navbar is fixed at the top of this page with a transparent background that changes on scroll
            </p>
            <div className="flex justify-center">
              <MetallicButton variant="outline" size="lg">
                <a href="#top" className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scroll to Top
                </a>
              </MetallicButton>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 