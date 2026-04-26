import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogData, getBlogList } from '@/app/data/blog'
import Link from 'next/link'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const { contents } = await getBlogList()
  return contents.map((post) => ({ id: post.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = await getBlogData(id).catch(() => null)
  if (!post) return {}
  return {
    title: `${post.title} | it_dev`,
    description: post.description,
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params
  const post = await getBlogData(id).catch(() => null)
  if (!post) notFound()

  const toDate = (isoString: string) => isoString.slice(0, 10).replace('-', '/').replace('-', '/')

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#a3e635] transition-colors mb-10"
      >
        ← 記事一覧に戻る
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium bg-[#a3e635]/20 text-[#65a30d] px-2 py-0.5 rounded">
            {post.category}
          </span>
          <time className="text-xs text-gray-400" dateTime={post.publishedAt}>
            {toDate(post.publishedAt)}
          </time>
          <time className="text-xs text-gray-400" dateTime={post.updatedAt}>
            （最終更新日: {toDate(post.updatedAt)}）
          </time>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
        {post.tech && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {post.tech.split(',').map((tech) => (
              <span
                key={tech.trim()}
                className="text-xs border border-gray-200 text-gray-500 px-2 py-0.5 rounded"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Content */}
      <div
        className="prose prose-sm max-w-none prose-headings:font-bold prose-a:text-[#65a30d] prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
