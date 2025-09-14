import type { RestaurantType } from '@/api/types.ts'

const filterByNameAndCuisine = (
  filter: string,
  restaurants: RestaurantType[]
): RestaurantType[] =>
  restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().startsWith(filter.toLowerCase()) ||
      restaurant.cuisines
        .map((cuisine) => cuisine.toLowerCase())
        .includes(filter.toLowerCase())
  )

export default filterByNameAndCuisine
