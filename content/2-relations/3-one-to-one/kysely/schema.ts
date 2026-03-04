import { Generated } from 'kysely'

export interface UserTable {
  id: Generated<number>
  name: string
}

export interface ProfileTable {
  id: Generated<number>
  bio: string
  user_id: number // unique in DB schema
}

export interface DB {
  users: UserTable
  profiles: ProfileTable
}
