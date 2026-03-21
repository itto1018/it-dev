import React from 'react'
import { blogPosts } from '../data/blog-posts'

const BlogList = () => {
  const latestPosts = blogPosts.slice(0, 3)
  return (
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
  )
}

export default BlogList