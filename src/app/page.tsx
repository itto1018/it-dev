import Link from 'next/link'
import { blogPosts } from './data/blog-posts'

const specialties = [
  {
    icon: '⚡',
    title: 'フロントエンド開発',
    description:
      'React / Next.js を中心に、ユーザー体験を重視した UI を設計・実装します。',
  },
  {
    icon: '🎨',
    title: 'UI / UX デザイン',
    description:
      'Tailwind CSS や Figma を活用し、デザインシステムの構築から実装まで対応します。',
  },
  {
    icon: '🔧',
    title: 'バックエンド連携',
    description:
      'microCMS・Supabase・REST API との連携を含む、フルスタックな開発が可能です。',
  },
]

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#a3e635]/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#a3e635]/10 blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <p className="text-[#84cc16] font-semibold mb-3 tracking-widest text-sm uppercase">
            Frontend Engineer
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            こんにちは、
            <br />
            <span className="text-[#a3e635]">it_dev</span> です。
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            React / Next.js を中心としたフロントエンド開発を得意としています。
            クリーンで保守しやすいコードと、使いやすい UI を追求しています。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 bg-[#a3e635] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-[#84cc16] transition-colors"
            >
              Works を見る →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-[#a3e635] hover:text-[#84cc16] transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            専門領域
          </h2>
          <p className="text-gray-500 text-center mb-12">
            得意とする技術・領域をご紹介します
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#a3e635]/50 transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                最新のブログ
              </h2>
              <p className="text-gray-500 text-sm">技術記事やメモを発信しています</p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#84cc16] hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-[#a3e635]/50 transition-all"
              >
                <span className="inline-block text-xs font-medium bg-[#a3e635]/20 text-[#65a30d] px-2 py-0.5 rounded mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-base mb-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <time>{post.publishedAt}</time>
                  <span>{post.readTime} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
