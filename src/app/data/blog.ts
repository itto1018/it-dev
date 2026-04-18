import { client } from '@/lib/microcms'
import { BlogType } from '@/types/microcms'

export const getBlogList = async () => {
  const data = await client.getList<BlogType>({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt',
    },
  })
  return data
}

export const getBlogData = async (id: string) => {
  const data = await client.getListDetail<BlogType>({
    endpoint: 'blog',
    contentId: id,
  })
  return data
}
