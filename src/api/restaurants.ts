import type { RestaurantType } from '@/api/types.ts'
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
    return data?.restaurants as RestaurantType[]
  } catch (e) {
    console.error('Fetch error:', e)
    throw e
  }
}

const useRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: async (): Promise<RestaurantType[]> => fetchRestaurants(),
  })
}

const useRestaurantsById = (restaurantId: string) => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: async (): Promise<RestaurantType[]> => fetchRestaurants(),
    select: (restaurants) => {
      const restaurantsIndexedById: Record<string, RestaurantType> = {}
      restaurants.forEach((restaurant) => {
        restaurantsIndexedById[restaurant.objectId] = restaurant
      })
      return restaurantsIndexedById[restaurantId]
    },
  })
}

export { useRestaurants, useRestaurantsById }
