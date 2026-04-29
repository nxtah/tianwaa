"use client";

import React, { use, useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { ArrowRight } from "lucide-react";
import { readContent } from "@/lib/content-client";
import type { BlogPost } from "@/lib/content-types";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    readContent()
      .then((content) => {
        const currentPost = content.blog.find((p) => p.slug === slug);
        setPost(currentPost ?? null);

        if (currentPost) {
          const related = content.blog
            .filter(
              (p) => p.category === currentPost.category && p.id !== currentPost.id
            )
            .slice(0, 3);
          setRelatedPosts(related);
        }
      })
      .catch((error) => console.error("Error loading post:", error))
      .finally(() => setIsLoading(false));
  }, [slug]);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <Navbar />
        <section className="py-24 bg-bg text-center">
          <h1 className="text-3xl font-display font-bold text-text mb-4">
            Artikel tidak ditemukan
          </h1>
          <a href="/blog" className="btn btn-primary">
            Kembali ke Blog
          </a>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero/Cover Image */}
      <section className="relative h-96 md:h-[500px] bg-surface-alt overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8">
            <span className="inline-block px-4 py-2 bg-primary/90 text-white rounded-lg text-xs font-bold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta Info */}
      <section className="bg-surface border-b border-primary-light/20 py-6 md:py-8">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-4">
            <span>Oleh {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <span>{Math.ceil(post.content.length / 1000)} menit baca</span>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-bg">
        <div className="container max-w-3xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-dark prose-strong:text-text prose-em:text-text-muted"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary/10 border border-primary/30 rounded-xl">
            <h3 className="text-xl font-display font-bold text-text mb-2">
              Tertarik Belajar Mandarin?
            </h3>
            <p className="text-text-muted mb-4">
              Daftar sekarang dan dapatkan konsultasi gratis dengan tim Tianwaa!
            </p>
            <a href="/daftar" className="btn btn-primary inline-flex items-center gap-2">
              Daftar Sekarang
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-alt">
          <div className="container">
            <h2 className="text-3xl font-display font-bold text-text mb-12">
              Artikel Terkait
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-surface rounded-xl overflow-hidden border border-primary-light/20 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="h-40 overflow-hidden bg-surface-alt">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="p-4">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-display font-bold text-text mt-2 mb-1 line-clamp-2 text-sm">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs text-text-muted mb-3">
                      {formatDate(relatedPost.date)}
                    </p>
                    <a
                      href={`/blog/${relatedPost.slug}`}
                      className="text-primary text-xs font-semibold hover:text-primary-dark"
                    >
                      Baca Selengkapnya →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
