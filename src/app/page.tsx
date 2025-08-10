import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Ecosystem from '@/components/sections/Ecosystem';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/sections/FAQ';
import UseCases from '@/components/sections/UseCases';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Dynamic Particle Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-background"></div>
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`
              }}
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-5"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <TrustedBy/>
        <Stats />
        <Features />
        <UseCases/>
        <HowItWorks />
        <Ecosystem />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}