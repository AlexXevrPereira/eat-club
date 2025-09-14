export type DealType = {
  objectId: string
  discount: string
  dineIn: 'true' | 'false'
  lightning: 'true' | 'false'
  qtyLeft: string
  open?: string
  close?: string
}

export type RestaurantType = {
  objectId: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageLink: string
  open: string
  close: string
  deals: DealType[]
}
