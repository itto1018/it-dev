import { getPerformData, perform } from "@/app/data/perform"
import { get } from "http"

const categoryColors: Record<string, string> = {
  'Web サイト': 'bg-blue-100 text-blue-700',
  'Web アプリ': 'bg-purple-100 text-purple-700',
  LP: 'bg-pink-100 text-pink-700',
  OSS: 'bg-[#a3e635]/20 text-[#65a30d]',
  'CLI ツール': 'bg-orange-100 text-orange-700',
}

export default async function performPage() {
  const {contents: perform_data} = await getPerformData()
  console.log(perform_data)

  const toDate = (isoString: string): string => {
    return isoString.slice(0, 10).replace('-', '/').replace('-', '/');
  };
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Perform <span className="text-[#a3e635]">/</span> 実績
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">
          業務やプライベートでの実績やプロジェクトを紹介します
        </p>
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
                className={`text-xs font-medium px-2 py-0.5 rounded border ${!item.categoryColor ? 'bg-gray-100 text-gray-600': ''}`}
                style={item.categoryColor ? {
                  backgroundColor: `color-mix(in srgb, ${item.categoryColor} 20%, #f3f4f6)`,
                  color: item.categoryColor,
                  borderColor: `color-mix(in srgb, ${item.categoryColor} 30%, #e5e7eb)`,
                } : undefined}
              >
                {item.category}
              </span>
              <span className="text-xs text-gray-400">{toDate(item.date)}</span>
            </div>
            <h2 className="font-bold text-base mb-2">{item.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tech?.split(',').map((t) => t.trim()).filter(Boolean).map((t) => (
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
                  className="text-xs font-medium text-gray-700 hover:text-[#84cc16] transition-colors"
                >
                  🔗 デモ
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-700 hover:text-[#84cc16] transition-colors"
                >
                  💻 GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
