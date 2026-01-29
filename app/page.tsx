import Hero from '../components/Hero';
import About from '../components/About';
import SkillsMarquee from '../components/SkillsMarquee';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Blogs from '../components/Blogs';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <SkillsMarquee />
      {/* <Experience /> */}

      {/* Featured CTA / Deal Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto bg-primary dark:bg-accent/5 border-transparent dark:border-white/5 rounded-[3rem] animate-blur-in p-12 md:p-24 text-center space-y-8 relative overflow-hidden group border transition-all hover:border-white/10">
          <div className="relative z-10 space-y-6">
            <span className="text-secondary/60 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
              (Exclusive Collaboration Offer)
            </span>
            <h2 className="text-4xl md:text-7xl font-bold text-brandWhite tracking-tighter max-w-4xl mx-auto leading-[0.9]">
              Let’s design the future of your product together.
            </h2>
            <p className="text-secondary max-w-xl mx-auto text-lg">
              Book a free 30-minute strategic consultation. Limited slots available for Q1 2025.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brandWhite text-primary rounded-full font-bold hover:scale-105 transition-transform">
              Claim Your Session <ArrowUpRight size={20} />
            </a>
          </div>

          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full"></div>
          </div>
        </div>
      </section>

      <Portfolio />
      <Blogs />
    </main>
  );
}
