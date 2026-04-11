import { FaDatabase, FaChartLine, FaCode } from 'react-icons/fa'

// heroでHTMLタグを使用するため、jsx.Element型で定義
const hero = {
  position: 'Data Engineer(Data Architect / Data Analyst)',
  title: (
    <>
      こんにちは、<span className="text-[#a3e635]">it</span> です。
    </>
  ),
  discription: '普段はデータアーキテクトとして働きつつ、Webアプリケーション開発やデータアナリスト領域に興味のある It（イット） です。'
}

const specialties = {
  title: '専門領域',
  discription: '得意とする技術・領域をご紹介します'
}

const specialties_card = [
  {
    icon: <FaDatabase />,
    title: 'データエンジニアリング',
    description:
      'dbt/Snowflake を中心としたデータ基盤の運用やプロジェクトマネジメントの経験があります。SQLを用いたテーブル開発やPythonを用いたデータツールの開発も行っています。',
  },
  {
    icon: <FaChartLine />,
    title: 'データ解析・可視化',
    description:
      'Pythonを用いたデータ解析や、Tableauを用いたダッシュボードの作成経験があります。データからインサイトを引き出し、ビジネスの意思決定を支援します。',
  },
  {
    icon: <FaCode />,
    title: 'Webアプリケーション開発',
    description:
      'React / Next.js を中心としたフロントエンド開発に興味があります。「あったらいいな」と思うアプリをバイブコーディングしています。',
  },
]

const blog = {
  title: '最新のブログ',
  discription: '技術記事やメモを発信しています'
}

export { hero, specialties, specialties_card, blog }