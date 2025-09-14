import { FaPizzaSlice } from 'react-icons/fa6'
import { TbAdjustmentsHorizontal, TbUser } from 'react-icons/tb'
import { Button } from '@/components/ui/button.tsx'

const TopBar = () => {
  return (
    <div
      className={
        'flex flex-1 flex-row items-center justify-between px-2 sticky top-0 z-20 bg-white'
      }
    >
      <Button variant={'ghost'} size={'icon'} className={'size-15'}>
        <TbUser className={'size-9'} />
      </Button>
      <FaPizzaSlice size={'2em'} color={'darkred'} />
      <Button variant={'ghost'} size={'icon'} className={'size-15'}>
        <TbAdjustmentsHorizontal className={'size-9'} />
      </Button>
    </div>
  )
}

export default TopBar
