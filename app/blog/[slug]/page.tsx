"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { BLOGS } from '@/constants'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/types'

const Page = () => {
    const [blog, setBlog] = useState<BlogPost | null>(null)
    const { slug } = useParams()

    useEffect(() => {
        if (slug) {
            // the blog that matches the ID from the URL (slug)
            const foundBlog = BLOGS.find((b) => b.id === slug)
            console.log(foundBlog)
            setBlog(foundBlog || null)
        }
    }, [slug])

    if (!blog) {
        return (
            // Loading state or 404 UI
            <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-primary">
                <div className="space-y-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-brandWhite transition-colors text-sm uppercase tracking-widest font-bold mb-4">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
                <div className="max-w-7xl m-auto text-5xl md:text-8xl font-bold tracking-tighter text-brandWhite">
                    Loading or<br className="hidden md:block" /> Blog not found...
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-primary">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <div className="space-y-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-brandWhite transition-colors text-sm uppercase tracking-widest font-bold mb-4">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-bold text-brandWhite tracking-tighter">
                        {blog.title}
                    </h1>
                    <img src={blog.image} alt={blog.title} className="w-full aspect-4/3 overflow-hidden object-cover rounded-4xl bg-white/5" />
                    <p className="text-secondary text-lg md:text-xl  leading-relaxed whitespace-pre-wrap">
                        {blog.content}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Page