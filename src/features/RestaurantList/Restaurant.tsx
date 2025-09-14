import type { RestaurantType } from '@/api/types.ts'
import defaultImage from '@/assets/food.jpg'
import {
  TypographyH3,
  TypographyLarge,
  TypographySmall,
} from '@/components/ui/typography.tsx'
import { useNavigate } from 'react-router'
import { SEPERATOR } from '@/constants.ts'

const Restaurant = ({
  cuisines,
  name,
  suburb,
  // TODO add back image link
  // imageLink,
  objectId,
  deals,
}: RestaurantType) => {
  const navigate = useNavigate()

  // TODO display the best deal
  const { dineIn, discount } = deals[0]

  const handleClick = () => {
    navigate(`/restaurants/restaurant/${objectId}`)
  }

  return (
    <div key={objectId} onClick={handleClick}>
      <div className={'relative'}>
        <img src={defaultImage} alt={name} className={'rounded-sm my-4'} />
        <div
          className={
            'rounded-sm bg-orange-700 p-2 absolute top-2 left-2 text-white flex flex-col gap-2'
          }
        >
          <TypographySmall>
            {discount}% off {dineIn === 'true' ? '- Dine In' : ''}
          </TypographySmall>
          <TypographySmall>Anytime today</TypographySmall>
        </div>
      </div>
      <TypographyH3>{name}</TypographyH3>
      <TypographyLarge>0.5km Away, {suburb}</TypographyLarge>
      <TypographySmall>{cuisines.join(', ')}</TypographySmall>
      <TypographyLarge>
        Dine In {SEPERATOR} Takeaway {SEPERATOR} Order Online
      </TypographyLarge>
    </div>
  )
}

export default Restaurant
