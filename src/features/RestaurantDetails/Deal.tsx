import { TypographyH4, TypographySmall } from '@/components/ui/typography.tsx'
import { FaBolt } from 'react-icons/fa6'
import type { DealType } from '@/api/types.ts'
import { Button } from '@/components/ui/button.tsx'

const Deal = ({
  objectId,
  qtyLeft,
  discount,
  open,
  close,
  lightning,
}: DealType) => {
  return (
    <div
      key={objectId}
      className={'flex flex-1 flex-row items-center border-b-2'}
    >
      <div className={'flex flex-1 flex-col py-4'}>
        <TypographyH4
          className={'flex flex-1 flex-row items-center text-red-700'}
        >
          {lightning ? <FaBolt className={'text-yellow-500 mr-1'} /> : ''}
          {discount}% Off
        </TypographyH4>
        {open && close && (
          <TypographySmall>
            Between {open} - {close}
          </TypographySmall>
        )}
        <TypographySmall>{qtyLeft} Deals left</TypographySmall>
      </div>
      <Button
        variant={'outline'}
        className={'border-red-700 text-red-700 rounded-2xl'}
      >
        Redeem
      </Button>
    </div>
  )
}

export default Deal
