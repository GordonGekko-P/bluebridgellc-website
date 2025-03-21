import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Team Section */}
      <section className="py-20 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <div className="h-[350px] md:h-[450px] w-full relative overflow-hidden transform perspective-1000 hover:rotate-y-2 transition-transform duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 10px 30px -5px, rgba(0, 0, 0, 0.15) 0px 20px 60px -10px, rgba(0, 0, 0, 0.05) 0px 1px 3px' }}>
                <Image
                  src="https://ext.same-assets.com/1325032747/1191990426.jpeg"
                  alt="Blue Bridge Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-black/10 z-10"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-center md:text-left">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">OUR TEAM</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 leading-tight">
                Passionate Experts in Global Recruitment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">
                Our dedicated team combines years of experience in international recruitment with innovative technology to bridge global talent gaps and create lasting connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-primary text-center mb-10 tracking-wide uppercase">
            BUILT BY EXPERTS FROM
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4 h-24 flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1325032747/947969124.png"
                alt="Bain & Company"
                width={160}
                height={64}
                className="max-h-16 object-contain"
              />
            </div>
            <div className="p-4 h-24 flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1325032747/2658366841.png"
                alt="Enpal"
                width={160}
                height={64}
                className="max-h-16 object-contain"
              />
            </div>
            <div className="p-4 h-24 flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1325032747/3842731631.png"
                alt="JPMorgan"
                width={160}
                height={64}
                className="max-h-16 object-contain"
              />
            </div>
            <div className="p-4 h-24 flex items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1325032747/3591970237.png"
                alt="Globant"
                width={160}
                height={64}
                className="max-h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center relative px-2 md:px-8">
            <div className="text-primary text-6xl opacity-10 absolute top-[-30px] left-0 md:left-10">"</div>
            <blockquote className="text-xl md:text-2xl font-medium text-secondary mb-8 leading-relaxed italic">
              "We are extremely happy with the BlueBridge system. Our new colleagues have integrated rapidly and are outperforming our expectations."
            </blockquote>
            <div className="mt-4">
              <p className="text-primary font-semibold mb-1">Cofounder & C-level executive</p>
              <p className="text-primary font-semibold">from a solar energy unicorn in Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">Our Mission</span>
            <h2 className="text-xl md:text-2xl font-semibold text-secondary max-w-[900px] mx-auto leading-relaxed">
              To provide exceptional migration services with integrity and professionalism, ensuring a smooth and successful transition for our clients.
            </h2>
          </div>

          <div className="text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">Our Vision</span>
            <h2 className="text-xl md:text-2xl font-semibold text-secondary max-w-[900px] mx-auto leading-relaxed">
              To be the leading migration consulting firm, recognized for our expertise, reliability, and commitment to client success.
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
