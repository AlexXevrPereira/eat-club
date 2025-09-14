import type { RestaurantType } from '@/api/types.ts'

const filterByNameAndCuisine = (
  filter: string,
  restaurants: RestaurantType[]
): RestaurantType[] => {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().startsWith(filter.toLowerCase())
  )
}

export default filterByNameAndCuisine
