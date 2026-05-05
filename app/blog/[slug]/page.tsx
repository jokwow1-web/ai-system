import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { getPostBySlug, getAllSlugs } from "@/lib/blog"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://atrahdis.id/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "id_ID",
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-16 lg:py-24 max-w-3xl">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-[#4A5568] mb-6">
            <Link
              href="/blog"
              className="text-[#C9A961] hover:underline font-medium"
            >
              ← Blog
            </Link>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.product && (
              <>
                <span>•</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0B2545]/5 text-[#0B2545]">
                  {post.product}
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[#4A5568]">
            {post.description}
          </p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-[#0B2545] prose-a:text-[#C9A961] hover:prose-a:underline prose-strong:text-[#0B2545]">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-[#E2E8F0]">
          <div className="bg-[#F8FAFC] rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">
              Butuh bantuan SBU?
            </h3>
            <p className="text-[#4A5568] mb-4">
              Nicx audit gratis setiap case sebelum Anda bayar. Konsultasi via WhatsApp, respons dalam 15 menit.
            </p>
            <Link
              href="/sbu"
              className="inline-flex items-center px-6 py-3 bg-[#C9A961] text-[#0B2545] font-semibold rounded-lg hover:bg-[#A88B45] transition-colors"
            >
              Konsultasi Gratis →
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
