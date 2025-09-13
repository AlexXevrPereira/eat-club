import { useRestaurants } from '@/api/restaurants.ts'
import ErrorMessage from '@/components/errorMessage/ErrorMessage.tsx'
import RestaurantLoading from './RestaurantLoading.tsx'
import Restaurant from './Restaurant.tsx'

const RestaurantList = () => {
  const { data: restaurants, status, error, isFetching } = useRestaurants()
  return (
    <div className={'flex flex-col gap-4'}>
      {status === 'pending' ? (
        <RestaurantLoading />
      ) : status === 'error' ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <div>
            {restaurants.map((data) => {
              return <Restaurant {...data} />
            })}
          </div>
          <div>{isFetching && <RestaurantLoading />}</div>
        </>
      )}
    </div>
  )
}

export default RestaurantList
