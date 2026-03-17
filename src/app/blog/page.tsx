'use client'

import { useState, useMemo } from 'react'
import { blogPosts, categories } from '../data/blog-posts'

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(search.toLowerCase()),
        )
      const matchesCategory = activeCategory
        ? post.category === activeCategory
        : true
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Blog <span className="text-[#a3e635]">/</span> 記事一覧
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">
          技術メモや学習内容を発信しています
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="記事を検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50 focus:border-[#a3e635]"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
            activeCategory === null
              ? 'bg-[#a3e635] border-[#a3e635] text-gray-900'
              : 'border-gray-200 text-gray-600 hover:border-[#a3e635] hover:text-[#84cc16]'
          }`}
        >
          すべて
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setActiveCategory(activeCategory === cat ? null : cat)
            }
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-[#a3e635] border-[#a3e635] text-gray-900'
                : 'border-gray-200 text-gray-600 hover:border-[#a3e635] hover:text-[#84cc16]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 mb-6">{filtered.length} 件の記事</p>

      {/* Post list */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">📭</p>
          <p>該当する記事が見つかりませんでした</p>
        </div>
      ) : (
        <div className="space-y-5">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#a3e635]/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium bg-[#a3e635]/20 text-[#65a30d] px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <time className="text-xs text-gray-400">{post.publishedAt}</time>
                <span className="text-xs text-gray-400 ml-auto">
                  {post.readTime} min read
                </span>
              </div>
              <h2 className="font-bold text-base mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-gray-200 text-gray-500 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
