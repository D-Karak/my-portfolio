'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Journey', href: '#journey' },
    { name: 'Writing', href: '#insights' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-brandWhite/70 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:rotate-12 ${isScrolled ? 'bg-primary' : 'bg-brandWhite'}`}>
            <div className={`w-4 h-4 rounded-sm rotate-45 transition-colors ${isScrolled ? 'bg-brandWhite' : 'bg-primary'}`}></div>
          </div>
          <span className={`font-bold text-2xl transition-colors tracking-tighter ${isScrolled ? 'text-primary' : 'text-brandWhite'}`}> Dibyendu Karak</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href === '/blog' ? '/blog' : `/${link.href}`}
              className="text-secondary hover:text-brandWhite transition-colors font-semibold text-sm tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-bold transition-all hover:shadow-lg active:scale-95 ${isScrolled ? 'bg-primary text-brandWhite' : 'bg-brandWhite text-primary'}`}
          >
            Contact
            <ArrowUpRight size={16} />
          </a>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center p-2 text-primary bg-brandWhite rounded-xl transition-discrete"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brandWhite border-black/5 border-t p-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-bold tracking-tighter text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 px-6 py-4 transition-colors rounded-2xl font-bold bg-primary text-brandWhite"
          onClick={() => setIsMenuOpen(false)}
        >
          Let's Connect
          <ArrowUpRight size={16} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
