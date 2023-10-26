export interface Product {
    position: Position
    _id: string
    name: string
    description: string
    location: string
    image: string
    food: Food[]
}

export interface Position {
    type: string
    coordinates: number[]
  }
  
export interface Food {
    name: string
    description: string
    price: number
    image: string
    addOn: string[]
  }