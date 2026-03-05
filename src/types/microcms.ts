import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

// microCMS の共通フィールド
export type MicroCMSBase = MicroCMSDate & {
  id: string
}

// 画像フィールドの再エクスポート
export type { MicroCMSImage }

// コンテンツ型の例（APIに合わせて修正してください）
export type Article = MicroCMSBase & {
  title: string
  body: string
  thumbnail?: MicroCMSImage
}
