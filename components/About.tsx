
import React from 'react';
import { Plus, Globe, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 transition-colors bg-primary/50 animate-blur-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-bold text-brandWhite">About Me</h2>
            <p className="text-xl text-secondary leading-relaxed">
              I specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic thinking to deliver web app that not only look great but work seamlessly. Ready to start your next project?
            </p>

            <div className="pt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-secondary/20 flex items-center justify-center animate-spin-slow">
                <Compass className="text-secondary" />
              </div>
              <p className="text-secondary italic">Based in West Bengal, India.</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] space-y-4 shadow-sm bg-primary/95">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/20">
                <Globe size={24} className="text-brandWhite" />
              </div>
              <h3 className="text-5xl font-bold tracking-tighter text-brandWhite">Open for Opportunities</h3>
              <p className="text-secondary text-sm">I am currently seeking new opportunities to leverage my skills and contribute to innovative projects. If you have a role that aligns with my expertise, I would love to discuss it further.</p>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden grayscale aspect-square relative">
              <img src="https://picsum.photos/seed/about2/600/600" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Work" />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-brandWhite rounded-full flex items-center justify-center text-primary">
                  <Plus size={24} />
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden grayscale aspect-video md:col-span-1">
              <img src="https://picsum.photos/seed/about1/600/400" className="w-full h-full object-cover" alt="Profile Detail" />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-brandWhite">
                  <Plus size={14} className="text-primary" />
                </div>
                <p className="text-secondary text-sm leading-relaxed">With 1.5+ years of hands-on experience, I specialize in creating intuitive, user-focused web app that solve real-world problems and deliver seamless digital experiences.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-brandWhite">
                  <Plus size={14} className="text-primary" />
                </div>
                <p className="text-secondary text-sm leading-relaxed">I thrive on working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
