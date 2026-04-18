import { client } from '@/lib/microcms'
import { ProfileType, SkillType, CareerType } from '@/types/microcms'

export const getProfileData = async () => {
  const data = await client.get<ProfileType>({
    endpoint: 'profile',
    queries: {
      limit: 1,
    },
  })
  return data
}

export const getSkillsData = async (displayOnly = false) => {
  const data = await client.getList<SkillType>({
    endpoint: 'skills',
    queries: {
      orders: displayOnly ? 'system:default' : 'category',
      ...(displayOnly && { filters: 'displayFlg[equals]true' }),
    },
  })
  return data
}

export const getCareerData = async () => {
  const data = await client.getList<CareerType>({
    endpoint: 'career',
    queries: {
      orders: '-startDate',
    },
  })
  return data
}
