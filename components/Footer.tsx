
'use client';

import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-brandWhite">
              Connect<br />Today.
            </h2>
            <div className="flex gap-6">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border rounded-full flex items-center justify-center transition-all border-white/10 hover:bg-brandWhite hover:text-primary">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right gap-12">
            <div className="space-y-4">
              <p className="text-secondary uppercase tracking-widest text-xs font-bold">Contact Details</p>
              <a href="mailto:dibyendu.karak9@gmail.com" className="text-3xl md:text-5xl font-bold tracking-tighter hover:text-secondary transition-colors underline decoration-1 underline-offset-8 text-brandWhite">
                dibyendu.karak9@gmail.com
              </a>
              <p className="text-xl text-secondary">West Bengal, India</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Nav</p>
                <div className="flex flex-col gap-2 font-semibold text-brandWhite">
                  <a href="#" className="hover:opacity-60">Home</a>
                  <a href="#portfolio" className="hover:opacity-60">Works</a>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Social</p>
                <div className="flex flex-col gap-2 font-semibold text-brandWhite">
                  <a href="#" className="hover:opacity-60">Twitter</a>
                  <a href="#" className="hover:opacity-60">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 border-white/5">
          <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
            © {year} Crafted with Clarity
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-secondary/60">
            <a href="#" className="transition-colors hover:text-brandWhite">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brandWhite">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
