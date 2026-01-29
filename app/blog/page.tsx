
import React from 'react';
import { BLOGS } from '@/constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights & Writings | Dibyendu Karak',
    description: 'Thoughts on design systems, web development, and digital experiences.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-primary">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <div className="space-y-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-brandWhite transition-colors text-sm uppercase tracking-widest font-bold mb-4">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-bold text-brandWhite tracking-tighter">
                        Insights & <br className="hidden md:block" /> Writings
                    </h1>
                    <p className="text-secondary text-lg md:text-xl max-w-2xl">
                        Thoughts on design systems, web development, and the future of digital product experiences.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {BLOGS.map((post) => (
                        <Link
                            href={`/blog/${post.id}`}
                            key={post.id}
                            className="group flex flex-col space-y-6"
                        >
                            <div className="w-full aspect-4/3 overflow-hidden rounded-4xl bg-white/5 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 bg-brandWhite/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <span className="text-xs font-bold uppercase tracking-widest text-brandWhite">{post.category}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-secondary text-xs font-bold uppercase tracking-widest">
                                    <span>{post.readTime}</span>
                                    <span>{new Date().toLocaleDateString()}</span>
                                </div>

                                <h2 className="text-2xl md:text-4xl font-bold text-brandWhite leading-tight group-hover:underline decoration-1 underline-offset-4 transition-all">
                                    {post.title}
                                </h2>

                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brandWhite pt-2">
                                    Read Article
                                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
