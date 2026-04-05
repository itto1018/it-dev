import { getBlogList } from '@/app/data/blog'
import BlogSearch from '@/app/components/BlogSearch'

export default async function BlogPage() {
  const { contents } = await getBlogList()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Blog <span className="text-[#a3e635]">/</span> 記事一覧
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">技術メモや学習内容を発信しています</p>
      </div>
      <BlogSearch initialPosts={contents} />
    </div>
  )
}
