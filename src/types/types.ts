export type Board = {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export type CartItem = Board &{
  quantity: number
}

