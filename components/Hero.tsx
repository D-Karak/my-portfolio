
'use client';

import React from 'react';
import { ArrowDown, FileUserIcon } from 'lucide-react';
import Link from 'next/link';
const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        <div className="lg:col-span-6 space-y-12 animate-blur-in">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-secondary/30"></span>
              <p className="text-secondary font-semibold uppercase tracking-[0.3em] text-xs">
                Software Development Engineer
              </p>
            </div>
            <h1 className="text-[15vw] lg:text-[10rem] font-bold tracking-[-0.06em] leading-[0.85] italic text-brandWhite">
              Clarity.
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-lg leading-snug mt-[34px]">
              Specializing in <span className="font-bold text-brandWhite">minimal interfaces</span> that convert complexity into seamless user journeys.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link href="#portfolio" className="group flex items-center gap-4 font-bold uppercase tracking-widest text-xs transition-opacity hover:opacity-70 text-brandWhite">
              <span className="w-10 h-10 border rounded-full flex items-center justify-center transition-all border-white/20 group-hover:bg-brandWhite group-hover:text-primary">
                <ArrowDown size={14} />
              </span>
              View Portfolio
            </Link>
            <a href="files/Dibyendu_CV.pdf" download className="group flex items-center gap-4 font-bold uppercase tracking-widest text-xs transition-opacity hover:opacity-70 text-brandWhite">
              <span className="w-10 h-10 border rounded-full flex items-center justify-center transition-all border-white/20 group-hover:bg-brandWhite group-hover:text-primary">
                <FileUserIcon size={14} />
              </span>
              Download Resume
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative animate-blur-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[1/1.1] shadow-2xl bg-white/5">
            <img
              src="/images/hero.webp"
              alt="Developer"
              className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 scale-105 hover:scale-100"
            />
          </div>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-[3rem] p-8 flex-col justify-end hidden md:flex rotate-6 group hover:rotate-0 transition-transform shadow-xl bg-brandWhite">
          </div>
        </div>
      </div>

      {/* Dynamic Background Noise/Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[60vw] h-[60vw] rounded-full blur-[150px] animate-pulse bg-white/5"></div>
    </section>
  );
};

export default Hero;
