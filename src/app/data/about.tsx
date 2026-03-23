const profile = {
  name: 'it（イット）',
  position: 'Data Engineer',
  description: (
    <>
      フロントエンドエンジニアとして Web サービスの設計・開発に携わっています。React / Next.js を中心に、パフォーマンスとユーザー体験を意識した実装を得意としています。<br />
      個人ではヘッドレス CMS を活用したブログ・ポートフォリオの構築やオープンソースへの貢献も行っています。新しい技術のキャッチアップが好きで、学習した内容をブログで発信しています。
    </>
  )
}

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





export { profile, skills, career }

import { client } from '@/lib/microcms'
import { AboutType } from '@/types/microcms'

export const getProfileData = async () => {
    const data = await client.get<AboutType>({
        endpoint: 'profile',
        queries: {
            orders: 'publishedAt',
            limit: 1,
        }
    })
    return data
}