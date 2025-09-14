import { FaPizzaSlice } from 'react-icons/fa6'
import { TbAdjustmentsHorizontal, TbUser } from 'react-icons/tb'
import { Button } from '@/components/ui/button.tsx'

const TopBar = () => {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4 justify-between">
        <Button variant={'ghost'} size={'icon'} className={'h-8 w-8'}>
          <TbUser className={'size-8'} />
        </Button>
        <FaPizzaSlice size={'2em'} color={'darkred'} />
        <Button variant={'ghost'} size={'icon'} className={'h-8 w-8'}>
          <TbAdjustmentsHorizontal className={'size-8'} />
        </Button>
      </div>
    </header>
  )
}

export default TopBar
