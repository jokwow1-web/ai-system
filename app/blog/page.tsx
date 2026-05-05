import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Panduan SBU Konstruksi, regulasi terbaru, dan insight dari Nicx — founder PT Atrahdis sejak 2016.",
  alternates: {
    canonical: "https://atrahdis.id/blog",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#C9A961] font-semibold text-sm uppercase tracking-wider mb-4">
            Blog
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
            Panduan & Insight SBU Konstruksi
          </h1>
          <p className="text-lg text-[#4A5568]">
            Update regulasi, tips praktis, dan case study langsung dari lapangan — ditulis oleh Nicx, founder PT Atrahdis.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {posts.length === 0 && (
            <p className="text-[#4A5568] text-center py-12">
              Artikel sedang dalam persiapan. Kembali lagi nanti.
            </p>
          )}

          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-[#E2E8F0] rounded-xl p-6 hover:border-[#C9A961]/40 hover:shadow-md transition-all"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl font-bold text-[#0B2545] group-hover:text-[#C9A961] transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-[#4A5568] mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#4A5568]">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.product && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0B2545]/5 text-[#0B2545]">
                      {post.product}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
