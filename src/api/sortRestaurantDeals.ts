import type { RestaurantType } from '@/api/types.ts'

const sortRestaurantDeals = (
  restaurants: RestaurantType[]
): RestaurantType[] => {
  return restaurants
    .map(({ deals, ...rest }) => ({
      ...rest,
      deals: [...deals].sort((a, b) => Number(b.discount) - Number(a.discount)),
    }))
    .sort(
      (a, b) =>
        Number(b.deals?.[0]?.discount ?? 0) -
        Number(a.deals?.[0]?.discount ?? 0)
    )
}

export default sortRestaurantDeals
