import { client } from "@/lib/microcms"
import { BlogType } from "@/types/microcms"


export const getBlogData = async () => {
  const data = await client.getList<BlogType>({
    endpoint: 'blog',
    queries: {
      orders: '-publishedAt'
    }
  })
  return data
}
