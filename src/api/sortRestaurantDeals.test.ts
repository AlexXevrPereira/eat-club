import { describe, expect, it } from 'vitest'
import sortRestaurantDeals from '@/api/sortRestaurantDeals.ts'
import type { RestaurantType } from '@/api/types.ts'

describe('sortRestaurantDeals.test.js', () => {
  const restaurants = [
    {
      name: 'Restaurant A',
      deals: [
        { discount: '20', objectId: 'a' },
        { discount: '30', objectId: 'b' },
      ],
    },
    {
      name: 'Restaurant B',
      deals: [{ discount: '40', objectId: 'c' }],
    },
    {
      name: 'Restaurant C',
      deals: [],
    },
  ] as RestaurantType[]
  it('should sort restaurants by best deals', () => {
    expect(sortRestaurantDeals(restaurants)).toEqual([
      {
        name: 'Restaurant B',
        deals: [{ discount: '40', objectId: 'c' }],
      },
      {
        name: 'Restaurant A',
        deals: [
          { discount: '30', objectId: 'b' },
          { discount: '20', objectId: 'a' },
        ],
      },
      {
        name: 'Restaurant C',
        deals: [],
      },
    ])
  })
})
