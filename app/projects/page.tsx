
import React from 'react';
import { PROJECTS } from '@/constants';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Dibyendu Karak',
    description: 'Thoughts on design systems, web development, and digital experiences.',
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-primary">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <div className="space-y-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-brandWhite transition-colors text-sm uppercase tracking-widest font-bold mb-4">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-bold text-brandWhite tracking-tighter">
                        Projects
                    </h1>
                    <p className="text-secondary text-lg md:text-xl max-w-2xl">
                        A curated selection of digital products where design meets high-performance engineering.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {PROJECTS.map((project, idx) => (
                        <Link
                            key={project.id}
                            href={project.link}
                            target='_blank'
                            className={`group block space-y-6`}
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
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-bold tracking-tighter text-primary dark:text-brandWhite">{project.title}</h3>
                                    <p className="text-secondary font-medium italic">— {project.subtitle}</p>
                                </div>
                                <Link href={project.githubLink} target='_blank' className="w-12 h-12 border rounded-full flex items-center justify-center transition-all border-white/10 hover:bg-brandWhite hover:text-primary">
                                    <Github size={18} />
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
