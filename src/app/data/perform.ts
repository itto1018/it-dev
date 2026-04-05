import { client } from "@/lib/microcms"
import { PerformType } from "@/types/microcms"


export const getPerformData = async () => {
  const data = await client.getList<PerformType>({
    endpoint: 'perform',
    queries: {
      orders: '-date'
    }
  })
  return data
}
