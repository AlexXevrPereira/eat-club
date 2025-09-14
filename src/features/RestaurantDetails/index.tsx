import { useRestaurantsById } from '@/api/restaurants.ts'
import { useParams } from 'react-router'
import ErrorMessage from '@/components/ErrorMessage'
import RestaurantDetailsLoading from './RestaurantDetailsLoading.tsx'
import Details from './Details.tsx'

const RestaurantDetails = () => {
  const { restaurantId } = useParams()

  if (!restaurantId) {
    return <ErrorMessage message="No restaurant ID provided" />
  }
  const {
    data: restaurant,
    status,
    error,
    isFetching,
  } = useRestaurantsById(restaurantId)

  return (
    <div>
      {status === 'pending' ? (
        <RestaurantDetailsLoading />
      ) : status === 'error' ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <Details restaurant={restaurant} />
          <div>{isFetching && <RestaurantDetailsLoading />}</div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetails
