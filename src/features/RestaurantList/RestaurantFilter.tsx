import { Input } from '@/components/ui/input.tsx'
import { TbSearch } from 'react-icons/tb'
import React from 'react'

type RestaurantFilterProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const RestaurantFilter = ({ onChange, value }: RestaurantFilterProps) => {
  return (
    <div
      className={
        'w-full bg-background sticky z-20 top-[var(--header-height)] py-2'
      }
    >
      <Input
        onChange={onChange}
        value={value}
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
