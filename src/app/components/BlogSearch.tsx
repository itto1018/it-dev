'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { BlogType } from '@/types/microcms'

type Props = {
  initialPosts: BlogType[]
}

export default function BlogClient({ initialPosts }: Props) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = useMemo(
    () => [...new Set(initialPosts.map((p) => p.category))],
    [initialPosts]
  )

  const toDate = (isoString: string): string => {
    return isoString.slice(0, 10).replace('-', '/').replace('-', '/')
  }

  const filtered = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory ? post.category === activeCategory : true
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory, initialPosts])

  return (
    <>
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
        {categories.map((ctg) => (
          <button
            key={ctg}
            onClick={() => setActiveCategory(activeCategory === ctg ? null : ctg)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              activeCategory === ctg
                ? 'bg-[#a3e635] border-[#a3e635] text-gray-900'
                : 'border-gray-200 text-gray-600 hover:border-[#a3e635] hover:text-[#84cc16]'
            }`}
          >
            {ctg}
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
        <div className="">
          {filtered.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="my-5 bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#a3e635]/40 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-fit text-xs font-medium bg-[#a3e635]/20 text-[#65a30d] px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <time className="text-xs text-gray-400" dateTime={post.publishedAt}>
                    {toDate(post.publishedAt)}
                  </time>
                  <time className="hidden sm:block text-xs text-gray-400" dateTime={post.updatedAt}>
                    （最終更新: {toDate(post.updatedAt)}）
                  </time>
                </div>
                <h2 className="font-bold text-base mb-2">{post.title}</h2>
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
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
