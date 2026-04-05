import type { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

// microCMS の共通フィールド
export type MicroCMSBase = MicroCMSContentId & MicroCMSDate & {
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
  category: string
  categoryColor?: string
  display_flg: boolean
}

export type CareerType = MicroCMSBase & {
  company: string
  role: string
  discription: string
  startDate: string
  endDate?: string
}

// perform
export type PerformType = MicroCMSBase & {
  category: string
  date: string
  title: string
  description: string
  tech?: string
  pageLink?: string
  github?: string
}

// blog
export type BlogType = MicroCMSBase & {
  category: string
  title: string
  description: string
  content: string
  tech?: string
}
