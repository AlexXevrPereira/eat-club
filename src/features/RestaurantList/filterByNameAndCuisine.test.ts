import { describe, it, expect } from 'vitest'
import filterByNameAndCuisine from '@/features/RestaurantList/filterByNameAndCuisine.ts'
import type { RestaurantType } from '@/api/types.ts'

describe('filterByNameAndCuisine', () => {
  const restaurants = [
    { name: 'Sushi Place', cuisines: ['Japanese', 'Asian'] },
    { name: 'Pizza House', cuisines: ['Italian'] },
  ] as RestaurantType[]

  it('should return all the restaurants by name', () => {
    expect(filterByNameAndCuisine('Sushi Place', restaurants)).toEqual([
      { name: 'Sushi Place', cuisines: ['Japanese', 'Asian'] },
    ])
  })

  it('should return an empty array if no restaurants match the name', () => {
    expect(filterByNameAndCuisine('Burger Joint', restaurants)).toEqual([])
  })

  it('should return partial match of the restaurants by name', () => {
    expect(filterByNameAndCuisine('Sushi', restaurants)).toEqual([
      {
        name: 'Sushi Place',
        cuisines: ['Japanese', 'Asian'],
      },
    ])
  })
  it('should be case insensitive when filtering by name', () => {
    expect(filterByNameAndCuisine('sushi', restaurants)).toEqual([
      { name: 'Sushi Place', cuisines: ['Japanese', 'Asian'] },
    ])
  })
})
