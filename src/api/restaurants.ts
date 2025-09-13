import type { Restaurant } from '@/api/types.ts'
import { useQuery } from '@tanstack/react-query'

const url =
  'https://corsproxy.io/?url=https://eccdn.com.au/misc/challengedata.json'

const fetchRestaurants = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data?.restaurants as Restaurant[]
  } catch (e) {
    console.error('Fetch error:', e)
    throw e
  }
}

const useRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: async (): Promise<Restaurant[]> => fetchRestaurants(),
  })
}

export { useRestaurants }
