import type { Metadata } from 'next'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import { getPerformData } from '@/app/data/perform'

export const metadata: Metadata = {
  title: 'Perform | it_dev',
  description: 'It（イット）の実績紹介ページ',
}

export default async function performPage() {
  const { contents: perform_data } = await getPerformData()

  const toDate = (isoString: string): string => {
    return isoString.slice(0, 10).replace('-', '/').replace('-', '/')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Perform <span className="text-[#a3e635]">/</span> 実績
        </h1>
        <div className="w-59 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">業務やプライベートでの実績やプロジェクトを紹介します</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perform_data.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#a3e635]/40 transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span
                key={item.category}
                className="text-xs font-medium bg-[#a3e635]/20 text-[#65a30d] px-2 py-0.5 rounded"
              >
                {item.category}
              </span>
              <span className="text-xs text-gray-400">{toDate(item.date)}</span>
            </div>
            <h2 className="font-bold text-base mb-2">{item.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tech
                  ?.split(',')
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
              </div>
              <div className="flex gap-3">
                {item.pageLink && (
                  <a
                    href={item.pageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#84cc16] transition-colors"
                  >
                    <FiExternalLink /> リンク
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#84cc16] transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
