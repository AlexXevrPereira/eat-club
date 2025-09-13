import type { Restaurant } from '@/api/types.ts'
import defaultImage from '@/assets/food.jpg'
import {
  TypographyH3,
  TypographyLarge,
  TypographySmall,
} from '@/components/ui/typography.tsx'
import { useNavigate } from 'react-router'

const RestaurantComponent = ({
  cuisines,
  name,
  suburb,
  imageLink,
  objectId,
  deals,
}: Restaurant) => {
  const navigate = useNavigate()

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
      <TypographyLarge>Dine In • Takeaway • Order Online</TypographyLarge>
    </div>
  )
}

export default RestaurantComponent
