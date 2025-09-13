import { restaurants } from './data.json'
import {
  TypographyH3,
  TypographyLarge,
  TypographySmall,
} from '@/components/ui/typography.tsx'
import defaultImage from '@/assets/food.jpg'

const RestaurantList = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      {restaurants.map(
        ({
          objectId,
          // TODO: replace defaultImage with imageLink when available
          imageLink,
          name,
          cuisines,
          deals,
          suburb,
        }) => {
          const { dineIn, discount } = deals[0]
          return (
            <div key={objectId} onClick={() => console.log('Clicked', name)}>
              <div className={'relative'}>
                <img
                  src={defaultImage}
                  alt={name}
                  className={'rounded-sm my-4'}
                />
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
                Dine In • Takeaway • Order Online
              </TypographyLarge>
            </div>
          )
        }
      )}
    </div>
  )
}

export default RestaurantList
