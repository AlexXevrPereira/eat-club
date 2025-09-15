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
import brokenImage from '@/assets/broken-image.png'
import { Button } from '@/components/ui/button.tsx'
import { TbChevronLeft } from 'react-icons/tb'
import { useNavigate } from 'react-router'

type DetailsProps = {
  restaurant: RestaurantType
}

const Details = ({ restaurant }: DetailsProps) => {
  const {
    objectId,
    cuisines,
    close,
    address1,
    name,
    suburb,
    open,
    deals,
    imageLink,
  } = restaurant
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <div className={'max-w-3xl mx-auto p-4'}>
      <Button
        variant={'link'}
        className={'cursor-pointer'}
        onClick={handleClickBack}
      >
        <TbChevronLeft />
        Back
      </Button>
      <div
        className={
          'py-4 flex justify-center h-[300px] sm:h-[520px] min-w-[380px]'
        }
      >
        <img
          id={`image-${objectId}`}
          src={imageLink}
          alt={name}
          className={'rounded-md'}
          onError={() => {
            const image = document.getElementById(
              `image-${objectId}`
            ) as HTMLImageElement
            image.src = brokenImage
          }}
        />
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
    </div>
  )
}

export default Details
