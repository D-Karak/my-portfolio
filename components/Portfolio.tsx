
'use client';

import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="space-y-4">
            <p className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px]">Case Studies</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-primary dark:text-brandWhite">Selected Works</h2>
            <p className="text-secondary max-w-sm text-lg font-medium">
              A curated selection of digital products where design meets high-performance engineering.
            </p>
          </div>
          <Link href="/projects" className="group flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-brandWhite/20 pb-1 text-brandWhite transition-colors hover:text-brandWhite/70">
            View All Creation
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.id}
              href={project.link}
              target='_blank'
              className={`group block space-y-6 ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-4/3 border transition-all duration-700 group-hover:rounded-4xl bg-accent border-black/5 dark:bg-white/5 dark:border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl bg-brandWhite text-primary dark:bg-primary dark:text-brandWhite">
                  <ArrowUpRight size={24} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-black/80 to-transparent flex items-end">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold tracking-tighter text-primary dark:text-brandWhite">{project.title}</h3>
                <p className="text-secondary font-medium italic">— {project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
