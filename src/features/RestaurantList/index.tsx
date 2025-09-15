import { useRestaurants } from '@/api/restaurants.ts'
import ErrorMessage from '@/components/ErrorMessage'
import RestaurantListLoading from './RestaurantListLoading.tsx'
import Restaurant from './Restaurant.tsx'
import RestaurantFilter from '@/features/RestaurantList/RestaurantFilter.tsx'
import React from 'react'
import { useDebouncedValue } from '@/hooks/useDebouncedValue.ts'
import filterByNameAndCuisine from '@/features/RestaurantList/filterByNameAndCuisine.ts'

const RestaurantList = () => {
  const [searchRestaurant, setSearchRestaurant] = React.useState('')
  const [debouncedSearchRestaurant] = useDebouncedValue(searchRestaurant, 500)

  const { data: restaurants, status, error, isFetching } = useRestaurants()

  const handleSearchRestaurant = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchRestaurant(event.target.value)
  }

  return (
    <>
      <div className={'flex flex-col gap-4 mb-4'}>
        {status === 'pending' ? (
          <RestaurantListLoading />
        ) : status === 'error' ? (
          <ErrorMessage message={error.message} />
        ) : (
          <div className={'flex flex-1 flex-col items-center'}>
            <RestaurantFilter
              value={searchRestaurant}
              onChange={handleSearchRestaurant}
            />
            <div>
              <div
                className={
                  'grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4'
                }
              >
                {filterByNameAndCuisine(
                  debouncedSearchRestaurant,
                  restaurants
                ).map((data) => {
                  return <Restaurant key={data.objectId} {...data} />
                })}
              </div>
              <div>{isFetching && <RestaurantListLoading />}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default RestaurantList
