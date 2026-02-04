
'use client';

import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

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
              {[{ icon: Github, href: "https://github.com/D-Karak" }, { icon: Twitter, href: "#" }, { icon: Linkedin, href: "https://www.linkedin.com/in/dibyendu-karak" }, { icon: Instagram, href: "#" }].map((Icon, i) => (
                <Link key={i} href={Icon.href} target='_blank' className="w-12 h-12 border rounded-full flex items-center justify-center transition-all border-white/10 hover:bg-brandWhite hover:text-primary">
                  <Icon.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right gap-12">
            <div className="space-y-4">
              <p className="text-secondary uppercase tracking-widest text-xs font-bold">Contact Details</p>
              <Link href="mailto:dibyendu.karak05@gmail.com" className="text-3xl md:text-5xl font-bold tracking-tighter hover:text-secondary transition-colors underline decoration-1 underline-offset-8 text-brandWhite">
                dibyendu.karak05@gmail.com
              </Link>
              <p className="text-xl text-secondary">West Bengal, India</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Nav</p>
                <div className="flex flex-col gap-2 font-semibold text-brandWhite">
                  <Link href="/" className="hover:opacity-60">Home</Link>
                  <Link href="#portfolio" className="hover:opacity-60">Works</Link>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Social</p>
                <div className="flex flex-col gap-2 font-semibold text-brandWhite">
                  <Link href="#" className="hover:opacity-60">Twitter</Link>
                  <Link href="https://www.linkedin.com/in/dibyendu-karak" className="hover:opacity-60">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 border-white/5">
          <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
            © {year} Crafted by Dibyendu Karak
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-secondary/60">
            <Link href="#" className="transition-colors hover:text-brandWhite">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-brandWhite">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
