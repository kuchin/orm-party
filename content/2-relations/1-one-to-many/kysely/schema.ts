import { Generated } from 'kysely'

export interface UserTable {
  id: Generated<number>
  name: string
}

export interface PostTable {
  id: Generated<number>
  title: string
  author_id: number
}

export interface DB {
  users: UserTable
  posts: PostTable
}
