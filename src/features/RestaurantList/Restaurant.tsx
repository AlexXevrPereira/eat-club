import type { RestaurantType } from '@/api/types.ts'
import brokenImage from '@/assets/broken-image.png'
import {
  TypographyH3,
  TypographyLarge,
  TypographySmall,
} from '@/components/ui/typography.tsx'
import { useNavigate } from 'react-router'
import { SEPERATOR } from '@/constants.ts'
import { TbHeart } from 'react-icons/tb'
import Deal from './Deal.tsx'

const Restaurant = ({
  cuisines,
  name,
  suburb,
  imageLink,
  objectId,
  deals,
}: RestaurantType) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/restaurants/restaurant/${objectId}`)
  }

  return (
    <div
      key={objectId}
      onClick={handleClick}
      className={
        'cursor-pointer 2xl:max-w-[500px] lg:max-w-[700px] md:max-w-[500px] max-w-[500px] min-w-[380px]'
      }
    >
      <div
        className={
          'relative flex h-[300px] overflow-hidden rounded-xl border-2'
        }
      >
        <div className={'flex flex-1 items-center rounder-xl'}>
          <img
            id={`image-${objectId}`}
            src={imageLink}
            alt={name}
            onError={() => {
              const image = document.getElementById(
                `image-${objectId}`
              ) as HTMLImageElement
              image.src = brokenImage
            }}
          />
        </div>
        <div className={'flex flex-1 flex-col absolute top-2 left-2 gap-2'}>
          {deals.map((deal) => {
            return <Deal key={deal.objectId} {...deal} />
          })}
        </div>
      </div>
      <TypographyH3 className={'flex flex-1 justify-between items-center'}>
        {name}
        <TbHeart />
      </TypographyH3>
      <TypographyLarge>0.5km Away, {suburb}</TypographyLarge>
      <TypographySmall>{cuisines.join(', ')}</TypographySmall>
      <TypographyLarge>
        Dine In {SEPERATOR} Takeaway {SEPERATOR} Order Online
      </TypographyLarge>
    </div>
  )
}

export default Restaurant
