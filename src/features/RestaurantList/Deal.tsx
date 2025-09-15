import { TypographySmall } from '@/components/ui/typography.tsx'
import type { DealType } from '@/api/types.ts'
import { FaBolt } from 'react-icons/fa6'

const Deal = ({ discount, dineIn, lightning, open, close }: DealType) => {
  return (
    <div
      className={'rounded-sm bg-orange-700 p-2 text-white flex flex-col gap-2'}
    >
      <TypographySmall className={'flex flex-1 flex-row'}>
        {lightning ? <FaBolt className={'text-yellow-500 mr-1'} /> : ''}
        {discount}% off {dineIn === 'true' ? '- Dine In' : ''}
      </TypographySmall>
      <TypographySmall>{`${open && close ? `Arrive between ${open} - ${close}` : 'Anytime today'}`}</TypographySmall>
    </div>
  )
}

export default Deal
