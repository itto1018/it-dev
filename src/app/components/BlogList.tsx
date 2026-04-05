import { getBlogList } from '@/app/data/blog'
import Link from 'next/link';

export default async function BlogList() {
  const { contents } = await getBlogList()
  const latestPosts = contents.slice(0, 2)

  const toDate = (isoString: string): string => {
    return isoString.slice(0, 10).replace('-', '/').replace('-', '/');
  };

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article
                  key={post.id}
                  className="bg-white h-fit md:h-40 rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-[#a3e635]/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-fit text-xs font-medium bg-[#a3e635]/20 text-[#65a30d] px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-400" dateTime={post.publishedAt}>{toDate(post.publishedAt)}</time>
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="hidden md:block text-gray-500 text-xs line-clamp-3 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
        </div>
  )
}
