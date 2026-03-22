import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

// microCMS の共通フィールド
export type MicroCMSBase = MicroCMSDate & {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

// about
export type AboutType = MicroCMSBase & {
  name: string
  position: string
  image?: MicroCMSImage
  description: string
}
