import { client } from "@/lib/microcms"
import { PerformType } from "@/types/microcms"


export const getPerformData = async () => {
  const data = await client.getList<PerformType>({
    endpoint: 'perform',
    queries: {
      orders: '-date'
    }
  })
  return data
}


export const perform = [
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