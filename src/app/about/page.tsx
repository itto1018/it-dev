const skills = [
  { name: 'TypeScript', level: 90 },
  { name: 'React / Next.js', level: 88 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'microCMS', level: 75 },
  { name: 'Git / GitHub', level: 85 },
]

const career = [
  {
    year: '2024 〜',
    role: 'フリーランス フロントエンドエンジニア',
    desc: 'Next.js / React を中心とした Web アプリ・LP・CMS 連携案件に従事。',
  },
  {
    year: '2022 〜 2024',
    role: 'Web 開発会社 フロントエンドエンジニア',
    desc: 'SPA / SSR の設計・実装、デザインシステムの導入を担当。',
  },
  {
    year: '2020 〜 2022',
    role: 'IT 企業 Web エンジニア（新卒入社）',
    desc: 'HTML / CSS / JavaScript によるコーポレートサイト構築・保守。',
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Page title */}
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          About <span className="text-[#a3e635]">Me</span>
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
      </div>

      {/* Self intro */}
      <section className="mb-14 flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-shrink-0">
          <div className="w-28 h-28 rounded-full bg-[#a3e635]/20 flex items-center justify-center text-5xl select-none">
            👤
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">自己紹介</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            フロントエンドエンジニアとして Web サービスの設計・開発に携わっています。
            React / Next.js を中心に、パフォーマンスとユーザー体験を意識した実装を得意としています。
          </p>
          <p className="text-gray-600 leading-relaxed">
            個人ではヘッドレス CMS を活用したブログ・ポートフォリオの構築や
            オープンソースへの貢献も行っています。新しい技術のキャッチアップが好きで、
            学習した内容をブログで発信しています。
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-6">スキルセット</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-[#a3e635] h-2 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'microCMS',
            'Supabase',
            'Vercel',
            'GitHub Actions',
            'Figma',
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-[#a3e635]/15 text-[#65a30d] border border-[#a3e635]/30 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Career */}
      <section>
        <h2 className="text-xl font-bold mb-6">経歴</h2>
        <div className="relative border-l-2 border-[#a3e635]/40 pl-6 space-y-8">
          {career.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#a3e635] border-2 border-white shadow" />
              <p className="text-xs font-semibold text-[#84cc16] mb-1">
                {item.year}
              </p>
              <p className="font-bold mb-1">{item.role}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
