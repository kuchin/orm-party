import { Generated } from 'kysely'

export interface UserTable {
  id: Generated<number>
  name: string
  email: string
  created_at: Date
}

export interface DB {
  users: UserTable
}
