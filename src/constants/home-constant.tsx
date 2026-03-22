import { title } from "process"

const hero = {
  position: 'Data Engineer',
  title: (
    <>
      こんにちは、<span className="text-[#a3e635]">it</span> です。
    </>
  ),
  discription: '普段はデータエンジニアとして働きつつ、Webアプリケーション開発やデータアナリスト領域に興味のある It（イット） です。'
}

const specialties = {
  title: '専門領域',
  discription: '得意とする技術・領域をご紹介します'
}

const specialties_card = [
  {
    icon: '🔧',
    title: 'データエンジニアリング',
    description:
      'dbt/Snowflake を中心としたデータ基盤の運用経験やマネジメント経験があります。SQLを用いたテーブル開発やPythonを用いたデータツールの開発も行っています。',
  },
  {
    icon: '📈',
    title: 'データ解析・可視化',
    description:
      'Pythonを用いたデータ解析や、Tableauを用いたダッシュボードの作成経験があります。データからインサイトを引き出し、ビジネスの意思決定を支援します。',
  },
  {
    icon: '💻',
    title: 'Webアプリケーション開発',
    description:
      '個人でReact / Next.js を中心としたフロントエンド開発や、最近はGoを用いたバックエンド開発に挑戦中です。',
  },
]

const blog = {
  title: '最新のブログ',
  discription: '技術記事やメモを発信しています'
}

export { hero, specialties, specialties_card, blog }