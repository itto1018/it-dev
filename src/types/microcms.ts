import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

// microCMS の共通フィールド
export type MicroCMSBase = MicroCMSDate & {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

// about
export type ProfileType = MicroCMSBase & {
  name: string
  position: string
  image?: MicroCMSImage
  description: string
}

export type SkillType = MicroCMSBase & {
  title: string
  level: string[]
  discription: string
  category?: string[]
  categoryColor?: string
  url?: string
}