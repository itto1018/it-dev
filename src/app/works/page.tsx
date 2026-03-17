const works = [
  {
    id: 1,
    title: 'ポートフォリオサイト',
    description:
      'Next.js + microCMS + Tailwind CSS で構築した個人ポートフォリオ。ブログ機能・問い合わせフォームを実装。',
    tech: ['Next.js', 'TypeScript', 'microCMS', 'Tailwind CSS'],
    category: 'Web サイト',
    year: '2026',
    url: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'タスク管理アプリ',
    description:
      'Supabase をバックエンドに使ったリアルタイムタスク管理アプリ。認証・チーム機能・ドラッグ&ドロップを実装。',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    category: 'Web アプリ',
    year: '2025',
    url: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'コーポレートサイトリニューアル',
    description:
      'クライアント企業の旧サイトを Next.js に移行。Core Web Vitals のスコアを大幅改善。',
    tech: ['Next.js', 'TypeScript', 'microCMS', 'Vercel'],
    category: 'Web サイト',
    year: '2025',
    url: '#',
    github: null,
  },
  {
    id: 4,
    title: 'ECサイト LP',
    description:
      '商品ランディングページ。アニメーションとスクロールイベントを活用したインタラクティブな UI。',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'LP',
    year: '2024',
    url: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'OSS ライブラリ貢献',
    description:
      'オープンソースの React コンポーネントライブラリにアクセシビリティ改善の PR を複数マージ。',
    tech: ['React', 'TypeScript', 'ARIA'],
    category: 'OSS',
    year: '2025',
    url: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Zenn CLI ダッシュボード',
    description:
      'Zenn の記事を CLI から管理するための個人製ツール。markdown プレビュー・テンプレート生成機能付き。',
    tech: ['Node.js', 'TypeScript', 'Commander.js'],
    category: 'CLI ツール',
    year: '2024',
    url: null,
    github: '#',
  },
]

const categoryColors: Record<string, string> = {
  'Web サイト': 'bg-blue-100 text-blue-700',
  'Web アプリ': 'bg-purple-100 text-purple-700',
  LP: 'bg-pink-100 text-pink-700',
  OSS: 'bg-[#a3e635]/20 text-[#65a30d]',
  'CLI ツール': 'bg-orange-100 text-orange-700',
}

export default function WorksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Works <span className="text-[#a3e635]">/</span> 実績
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">
          これまでに携わったプロジェクトの一部をご紹介します
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <article
            key={work.id}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#a3e635]/40 transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded ${categoryColors[work.category] ?? 'bg-gray-100 text-gray-600'}`}
              >
                {work.category}
              </span>
              <span className="text-xs text-gray-400">{work.year}</span>
            </div>
            <h2 className="font-bold text-base mb-2">{work.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {work.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-700 hover:text-[#84cc16] transition-colors"
                >
                  🔗 デモ
                </a>
              )}
              {work.github && (
                <a
                  href={work.github}
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
