import {
  FaBook,
  FaClock,
  FaLocationDot,
  FaMapLocationDot,
  FaPhoneVolume,
  FaRegHeart,
} from 'react-icons/fa6'
import { Label } from '@/components/ui/label.tsx'
import {
  TypographyH2,
  TypographyLarge,
  TypographySmall,
} from '@/components/ui/typography.tsx'
import { SEPERATOR } from '@/constants.ts'
import Deal from '@/features/RestaurantDetails/Deal.tsx'
import type { RestaurantType } from '@/api/types.ts'

type DetailsProps = {
  restaurant: RestaurantType
}

const Details = ({ restaurant }: DetailsProps) => {
  const { cuisines, close, address1, imageLink, name, suburb, open, deals } =
    restaurant
  return (
    <>
      <div className={'flex flex-1 justify-center items-center py-4'}>
        <img src={imageLink} alt={name} className={'rounded-md'} />
      </div>
      <div className={'flex flex-1 flex-row justify-between py-4 border-b-1'}>
        <div
          className={'flex flex-1 justify-center items-center flex-col gap-1'}
        >
          <FaBook id={'menu'} size={'2em'} />
          <Label htmlFor={'menu'}>Menu</Label>
        </div>
        <div
          className={'flex flex-1 justify-center items-center flex-col gap-1'}
        >
          <FaPhoneVolume id={'contact-us'} size={'2em'} />
          <Label htmlFor={'contact-us'}>Contact Us</Label>
        </div>

        <div
          className={'flex flex-1 justify-center items-center flex-col gap-1'}
        >
          <FaMapLocationDot id={'location'} size={'2em'} />
          <Label htmlFor={'location'}>Location</Label>
        </div>
        <div
          className={'flex flex-1 justify-center items-center flex-col gap-1'}
        >
          <FaRegHeart id={'favourite'} size={'2em'} />
          <Label htmlFor={'favourite'}>Favourite</Label>
        </div>
      </div>
      <div
        className={
          'flex flex-1 justify-center flex-col items-center py-4 border-b-1'
        }
      >
        <TypographyH2>{name}</TypographyH2>
        <TypographyLarge>{cuisines.join(` ${SEPERATOR} `)}</TypographyLarge>
      </div>
      <div className={'flex flex-1 flex-col gap-1 py-4 border-b-1'}>
        <TypographySmall className={'flex flex1 flex-row'}>
          <FaClock className={'mr-2'} />
          Hours: {open} - {close}
        </TypographySmall>
        <TypographySmall className={'flex flex-1 flex-row'}>
          <FaLocationDot className={'mr-2'} /> {address1}, {suburb} {SEPERATOR}{' '}
          1.0km Away
        </TypographySmall>
      </div>
      {deals.map((data) => (
        <Deal key={data.objectId} {...data} />
      ))}
    </>
  )
}

export default Details
