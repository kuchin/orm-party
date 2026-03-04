import { Generated } from 'kysely'

export interface ProductTable {
  id: Generated<number>
  name: string
  description: string
  price: number
  quantity: number
  in_stock: boolean
  release_date: Date
  tags: Record<string, unknown>
}

export interface DB {
  products: ProductTable
}
