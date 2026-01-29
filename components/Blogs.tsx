
import React from 'react';
import { BLOGS } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Blogs: React.FC = () => {
  return (
    <section id="insights" className="py-24 px-6 transition-colors bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-brandWhite">Latest Writings</h2>
          </div>
          <a href="#" className="group flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-brandWhite/20 pb-1 text-brandWhite transition-colors hover:text-brandWhite/70">
            View All Posts
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="space-y-8">
          {BLOGS.map((post, idx) => (
            <a key={idx} href="#" className="flex flex-col md:flex-row gap-8 group py-8 border-b border-white/10 animate-blur-in">
              <div className="w-full md:w-1/3 aspect-video rounded-3xl overflow-hidden bg-white/5">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform grayscale group-hover:grayscale-0 duration-700 group-hover:scale-105" />
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-secondary">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-secondary"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold leading-tight group-hover:underline decoration-1 underline-offset-4 text-brandWhite">{post.title}</h3>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brandWhite">
                  Read Article <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
