export type BlogPost = {
  id: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 15 の新機能まとめ',
    excerpt:
      'Next.js 15 がリリースされました。React 19 との統合、Turbopack の安定版、新しいキャッシュ戦略など主要な変更点を解説します。',
    category: 'フロントエンド',
    tags: ['Next.js', 'React', 'TypeScript'],
    publishedAt: '2026-03-10',
    readTime: 8,
  },
  {
    id: '2',
    title: 'Tailwind CSS v4 移行ガイド',
    excerpt:
      'Tailwind CSS v4 では CSS ファーストの設定に大きく変わりました。v3 からの移行手順と注意点をまとめます。',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'フロントエンド'],
    publishedAt: '2026-03-05',
    readTime: 6,
  },
  {
    id: '3',
    title: 'microCMS と Next.js で作るヘッドレス CMS',
    excerpt:
      'microCMS の API を Next.js の App Router と組み合わせて、高速な静的サイトを構築する方法を紹介します。',
    category: 'バックエンド',
    tags: ['microCMS', 'Next.js', 'CMS'],
    publishedAt: '2026-02-28',
    readTime: 10,
  },
  {
    id: '4',
    title: 'TypeScript 5.9 の型推論改善',
    excerpt:
      'TypeScript 5.9 では条件型や infer の動作が改善されました。実際のコード例を使いながら新機能を確認します。',
    category: 'TypeScript',
    tags: ['TypeScript', '型安全'],
    publishedAt: '2026-02-20',
    readTime: 7,
  },
  {
    id: '5',
    title: 'React Server Components 実践入門',
    excerpt:
      'React Server Components を使うことで何が変わるのか、クライアントコンポーネントとの使い分けを実例を交えて解説します。',
    category: 'フロントエンド',
    tags: ['React', 'RSC', 'Next.js'],
    publishedAt: '2026-02-15',
    readTime: 12,
  },
  {
    id: '6',
    title: 'Web パフォーマンス最適化の基本',
    excerpt:
      'Core Web Vitals の改善に向けて、画像最適化・コード分割・フォント読み込み最適化のベストプラクティスをまとめます。',
    category: 'パフォーマンス',
    tags: ['Web パフォーマンス', 'Core Web Vitals'],
    publishedAt: '2026-02-08',
    readTime: 9,
  },
]

export const categories = [...new Set(blogPosts.map((p) => p.category))]
