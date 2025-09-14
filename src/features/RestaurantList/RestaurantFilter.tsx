import { Input } from '@/components/ui/input.tsx'
import { TbSearch } from 'react-icons/tb'

const RestaurantFilter = () => {
  return (
    <div
      className={
        'w-full bg-background sticky z-20 top-[var(--header-height)] py-2'
      }
    >
      <Input
        id={'search'}
        type="text"
        placeholder="Search"
        className="w-full rounded-md border py-[9px] pl-10 text-sm"
      />
      <TbSearch className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
    </div>
  )
}

export default RestaurantFilter
