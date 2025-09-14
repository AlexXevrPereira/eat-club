import { useRestaurants } from '@/api/restaurants.ts'
import ErrorMessage from '@/components/ErrorMessage'
import RestaurantListLoading from './RestaurantListLoading.tsx'
import Restaurant from './Restaurant.tsx'

const RestaurantList = () => {
  const { data: restaurants, status, error, isFetching } = useRestaurants()

  return (
    <div className={'flex flex-col gap-4'}>
      {status === 'pending' ? (
        <RestaurantListLoading />
      ) : status === 'error' ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <div
            className={'flex flex-1 flex-col gap-4 justify-center items-center'}
          >
            {restaurants.map((data) => {
              return <Restaurant key={data.objectId} {...data} />
            })}
          </div>
          <div>{isFetching && <RestaurantListLoading />}</div>
        </>
      )}
    </div>
  )
}

export default RestaurantList
